"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface Post {
    id: number;
    title: { rendered: string };
    slug: string;
    date: string;
    excerpt: { rendered: string };
    featured_image_url?: string;
}

function highlightText(text: string, keyword: string) {
    if (!keyword.trim()) return text;
    const regex = new RegExp(`(${keyword})`, "gi");
    return text.replace(regex, `<span class="bg-yellow-300">${keyword}</span>`);
}

function Search() {
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState<Post[]>([]);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const inputRef = useRef<HTMLInputElement>(null);

    // Gọi API tìm kiếm
    useEffect(() => {
        if (!searchTerm.trim()) {
            setResults([]);
            return;
        }

        const fetchSearchResults = async () => {
            setLoading(true);
            try {
                const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/search?search=${encodeURIComponent(searchTerm)}&_fields=id`;
                const response = await fetch(apiUrl, { next: { revalidate: 3600 } });

                if (!response.ok) {
                    throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
                }

                const ids = await response.json();

                const postDetails = await Promise.all(
                    ids.map(async ({ id }: { id: number }) => {
                        const postUrl = `${process.env.NEXT_PUBLIC_API_URL}/posts/${id}?_fields=id,title,slug,date,excerpt,featured_media,featured_image_url`;
                        const postResponse = await fetch(postUrl);
                        return postResponse.ok ? postResponse.json() : null;
                    })
                );

                setResults(postDetails.filter(Boolean));
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        const timeoutId = setTimeout(fetchSearchResults, 500);
        return () => clearTimeout(timeoutId);
    }, [searchTerm]);

    // Xóa nội dung ô tìm kiếm
    const clearSearch = () => {
        setSearchTerm("");
        setResults([]);
        inputRef.current?.focus();
    };

    // Xử lý nhấn phím Esc
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Escape") {
            clearSearch();
        }
    };

    return (
        <div className="relative">
            <form className="mt-4 lg:mt-72 lg:mx-auto mx-6 max-w-xl py-2 rounded-2xl bg-gray-50 border flex items-center focus-within:border-gray-300 px-6">
                <input
                    type="text"
                    placeholder="Tìm gì cũng được ..."
                    className="bg-transparent w-full focus:outline-none pr-4 border-0 focus:ring-0 px-0 py-0"
                    name="search"
                    ref={inputRef}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                {searchTerm && (
                    <button
                        type="button"
                        className="text-gray-500 hover:text-gray-700 ml-2"
                        onClick={clearSearch}
                    >
                        ✕
                    </button>
                )}
            </form>

            {searchTerm && (
                <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-xl mt-2 max-h-60 overflow-y-auto z-50 p-4">
                    {loading ? (
                        <p className="text-center text-gray-500">Đang tìm kiếm...</p>
                    ) : results.length > 0 ? (
                        results.map((post) => (
                            <div key={post.id} className="flex gap-2 p-2 border-b cursor-pointer items-center justify-start hover:bg-gray-100" onClick={() => router.push(`/${post.slug}`)}>
                                <Image
                                    className="w-auto h-20 object-cover rounded-xl"
                                    src={post.featured_image_url || "https://placehold.co/560x292/png"}
                                    width={560}
                                    height={292}
                                    alt={post.title.rendered}
                                />
                                <div className="" >
                                    <h3
                                        className="font-semibold line-clamp-1"
                                        dangerouslySetInnerHTML={{
                                            __html: highlightText(post.title.rendered, searchTerm),
                                        }}
                                    ></h3>
                                    <p
                                        className="text-sm text-gray-500 line-clamp-2"
                                        dangerouslySetInnerHTML={{
                                            __html: highlightText(post.excerpt.rendered, searchTerm),
                                        }}
                                    ></p>
                                </div>
                            </div>

                        ))
                    ) : (
                        <p className="text-center text-gray-500">Không tìm thấy kết quả</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default Search;

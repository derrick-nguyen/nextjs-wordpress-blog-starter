"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Pagination from "@mui/material/Pagination";
import Link from "next/link";
import { BlogProps } from "@/interfaces/post";
import { Skeleton } from "@mui/material";
import NoData from "@/components/NoData";
import Category from "./Category";

function Blog({ posts, totalPages, currentPage }: BlogProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const category = searchParams.get("category") || "";
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", page.toString());
        router.push(`?${params.toString()}`);
    };

    return (
        <section className="mt-4 lg:mt-7">
            <Category cate={category} />
            {!posts.length ? (
                <NoData />
            ) : (
                <>
                    <div className="flex flex-col">
                        {posts.map((post) => (
                            <Link key={post.id} href={`/${post.slug}`}>
                                <div className="flex gap-3 items-center p-5 hover:bg-gray-100 dark:hover:bg-[#22262b]">
                                    <Image
                                        className="w-5/12 lg:w-3/12 h-28 object-cover rounded-xl"
                                        src={post.featured_image_url || "https://placehold.co/560x292/png"}
                                        width={560}
                                        height={292}
                                        alt={post.title.rendered}
                                    />
                                    <div className="w-7/12 lg:w-9/12 flex flex-col">
                                        <div className="flex items-center gap-2">
                                            <div className="w-5 h-[1.5px] bg-[#f7a717]" />
                                            <span className="uppercase text-gray-400">
                                                {new Date(post.date).toLocaleDateString("vi-VN", {
                                                    day: "2-digit",
                                                    month: "2-digit",
                                                    year: "numeric",
                                                })}
                                            </span>
                                        </div>
                                        <h4 className="line-clamp-1 font-bold text-lg dark:text-white">{post.title.rendered}</h4>

                                        {/* Chỉ hiển thị nội dung excerpt sau khi hydration thành công */}
                                        {isClient ? (
                                            <p
                                                className="line-clamp-2 text-sm text-gray-400"
                                                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                                            />
                                        ) : (
                                            <div className="flex mx-auto"><Skeleton variant="rounded" animation="wave" width={500} height={40} /></div>
                                        )}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="flex justify-center my-5">
                        <div className="dark:bg-white p-3 rounded-xl">
                            <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} />
                        </div>
                    </div>
                </>
            )}
        </section>
    );
}

export default Blog;

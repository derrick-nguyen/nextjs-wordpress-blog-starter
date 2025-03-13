import Error404 from "@/components/404";
import Category from "@/components/Category";
import SchemaMarkup from "@/components/SchemaMarkup";
import { BlogDetailProps, Post } from "@/interfaces/post";
import { truncateText } from "@/lib/truncate";
import Image from "next/image";

export async function generateMetadata({ params }: BlogDetailProps) {
    const data = await fetchPostData((await params).id);
    if (!data) return {};

    const post = data[0];
    const postUrl = `${process.env.NEXT_PUBLIC_SITE_URL || "https://thanhtuan.name.vn"}/${post.slug}`;

    return {
        title: post.title.rendered,
        description: post.excerpt.rendered.replace(/<[^>]*>/g, ""),
        openGraph: {
            title: truncateText(post.title.rendered, 160),
            description: truncateText(post.excerpt.rendered.replace(/<[^>]*>/g, ""), 300),
            images: [{ url: post.featured_image_url }],
        },
        alternates: {
            canonical: postUrl,
        },
    };
}

export default async function Blog({ params }: BlogDetailProps) {
    const data = await fetchPostData((await params).id);
    if (!data) return <Error404 />;

    const post = data[0];
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thanhtuan.name.vn";
    const postUrl = `${siteUrl}/${post.slug}`;
    const authorName = "Nguyễn Thanh Tuấn";

    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": postUrl
        },
        "headline": truncateText(post.title.rendered, 160),
        "description": truncateText(post.excerpt.rendered.replace(/<[^>]*>/g, ""), 200),
        "image": post.featured_image_url,
        "author": {
            "@type": "Person",
            "name": authorName
        },
        "publisher": {
            "@type": "Organization",
            "name": "Thanh Tuấn Blog",
            "logo": {
                "@type": "ImageObject",
                "url": `${siteUrl}/img/logo/thanhtuan-logo-color-300px.png`
            }
        },
        "datePublished": post.date,
        "dateModified": post.date
    };

    return (
        <>
            <SchemaMarkup schema={schema} />
            <Image
                className="w-full h-auto object-cover"
                src={post.featured_image_url || "https://placehold.co/1280x628/png"}
                width={1280}
                height={628}
                alt="Thumbnail"
            />
            <section className="p-4">
                <h1 className="text-center text-dark-brand text-3xl font-bold">{post.title.rendered}</h1>
                <div
                    className="document text-justify mt-4"
                    dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />
                <div className="mt-5">
                    <Category cate={post.categories[1] ? post.categories[1].toString() : ""} />
                </div>
            </section>
        </>
    );
}

async function fetchPostData(slug: string): Promise<Post[] | null> {
    const paramsAPI = new URLSearchParams({
        _fields: "id,title,slug,date,categories,content,featured_media,featured_image_url,excerpt",
        slug,
    });
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/posts?${paramsAPI.toString()}`;

    try {
        const response = await fetch(apiUrl, { next: { revalidate: 3600 } });
        if (!response.ok) throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
        const data: Post[] = await response.json();
        return data.length > 0 ? data : null;
    } catch (error) {
        console.error("Fetch Error:", error);
        return null;
    }
}

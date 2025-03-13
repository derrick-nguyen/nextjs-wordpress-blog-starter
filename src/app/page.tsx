import HeroImg from "@/components/HeroImg";
import Search from "@/components/Search";
import Blog from "@/components/Blog";
import { HomeProps, Post } from "@/interfaces/post";
import Error404 from "@/components/404";
import Introduce from "@/components/Introduce";
import SchemaMarkup from "@/components/SchemaMarkup";

export default async function Home({ searchParams }: HomeProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Thanh Tuấn Blog",
    "url": "https://thanhtuan.name.vn",
  };

  const params = await searchParams
  const limit = 5
  const currentPage = +(params?.page ?? 1)
  const category = +(params?.category ?? 1)

  const paramsAPI = new URLSearchParams({
    _fields: "id,title,slug,date,excerpt,featured_media,featured_image_url",
    categories: category.toString(),
    per_page: limit.toString(),
    page: currentPage.toString(),
  });

  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/posts?${paramsAPI.toString()}`;
  try {
    const response = await fetch(apiUrl, { next: { revalidate: 3600 } });


    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
    }

    const data: Post[] = await response.json();
    const totalPages = Number(response.headers.get("X-Wp-Totalpages")) || 0;

    return (
      <>
        <SchemaMarkup schema={schema} />
        <HeroImg />
        <Search />
        <Blog posts={data} totalPages={totalPages} currentPage={currentPage} />
        <Introduce />
      </>
    );
  } catch (error) {
    console.error("Error:", error);
    return <Error404 />;
  }
}

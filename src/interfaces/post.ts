export interface Post {
    id: number;
    date: string;
    slug: string;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    },
    excerpt: {
        rendered: string;
        protected: boolean;
    };
    categories: number[];
    featured_media: number | null;
    featured_image_url: string | null;
}

export interface BlogProps {
    posts: Post[];
    totalPages: number;
    currentPage: number;
}

export interface HomeProps {
    searchParams?: Promise<{
        page?: string;
        category?: string;
    }>;
}

export interface SearchProps {
    searchParams?: {
        q?: string;
        page?: string;
    };
}

export interface BlogDetailProps {
    params: Promise<{ id: string }>;
}

export interface CategoryProps {
    cate: string;
}
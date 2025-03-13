import axios, { AxiosResponse } from "axios";

interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  totalPages: number;
  currentPage: number;
}

const fetchApi = async <T>(endpoint: string, params: Record<string, unknown> = {}): Promise<ApiResponse<T>> => {
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "https://cms.thanhtuan.name.vn/wp-json/wp/v2",
    headers: {
      "Content-Type": "application/json",
    },
  });

  try {
    // Gọi API tới WordPress CMS
    const response: AxiosResponse<T> = await api.get(endpoint, { params });

    // Lấy totalPages từ header 'X-WP-TotalPages'
    const totalPages = +(response.headers["x-wp-totalpages"] ?? 0);

    // Lấy currentPage từ params hoặc mặc định là 1
    const currentPage = params.page ? Number(params.page) : 1;

    return {
      data: response.data ?? ([] as unknown as T),
      error: null,
      totalPages,
      currentPage,
    };
  } catch (error: unknown) {
    let errorMessage: string;

    if (axios.isAxiosError(error)) {
      errorMessage = typeof error.response?.data === "string" ? error.response.data : error.message;
    } else {
      errorMessage = error instanceof Error ? error.message : "Unknown error";
    }

    return {
      data: [] as unknown as T,
      error: errorMessage,
      totalPages: 0,
      currentPage: 1
    };
  }
};

export default fetchApi;

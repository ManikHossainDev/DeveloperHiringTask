import { baseApi } from "@/redux/api/baseApi";

const product = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    GetProduct: builder.query({
      query: () => ({
        url: "/products/",
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    getCategories: builder.query({
      query: () => ({
        url: "/categories/",
        method: "GET",
      }),
      providesTags: ["categories"],
    }),
  }),
});

export const {
  useGetProductQuery,
  useGetCategoriesQuery
} = product;
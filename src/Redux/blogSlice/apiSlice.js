import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://61791a83aa7f3400174047a6.mockapi.io/v1/' }),
    endpoints: (builder) => ({
        getAllBlog: builder.query({
            query: () => 'GetBLogs'
        }),

        getSingleBlog: builder.query({
            query: (blog) => `GetBLogs/${blog}`
        })
    })
})

export const { useGetAllBlogQuery, useGetSingleBlogQuery } = apiSlice;

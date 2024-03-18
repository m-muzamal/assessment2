import { configureStore } from '@reduxjs/toolkit'
import blogSlice from './blogSlice/blogSlice'
import { apiSlice } from './blogSlice/apiSlice'
import { setupListeners } from '@reduxjs/toolkit/query/react'

export const store = configureStore({
    reducer: {
        blog: blogSlice,
        [apiSlice.reducerPath]: apiSlice.reducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
})
setupListeners(store.dispatch)
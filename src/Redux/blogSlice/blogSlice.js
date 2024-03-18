import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    blogs: [],
};

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        setBlogs(state, action) {
            state.blogs = action.payload.map(blog => ({ ...blog, viewCount: 0 }));
        },
        incrementViewCount(state, action) {
            const id = action.payload;
            const blog = state.blogs.find(blog => blog.id === id);
            console.log("Incrementing view count:", id);
            if (blog) {
                blog.viewCount += 1;
            }
        },
    },
});

export const { setBlogs, incrementViewCount } = blogSlice.actions;
export default blogSlice.reducer;

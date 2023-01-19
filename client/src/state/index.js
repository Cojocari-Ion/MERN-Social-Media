import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mode: "light",
    user: null,
    token: null,
    posts: [],
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },

        logIn: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },

        logOut: (state) => {
            state.user = null;
            state.token = null;
        },

        setFriends: (state) => {
            if(state.user) {
                state.user.friends = action.payload.friends;
            } else {
                console.error("Can not load friends")
            }
        },

        setPosts: (state, action) => {
            state.posts = action.payload.posts;
        },


    }
});

export const { setMode, logIn, logOut, setFriends, setPosts } = authSlice.actions;
export default authSlice.reducer
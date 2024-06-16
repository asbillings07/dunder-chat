// store.js
import { writable } from 'svelte/store';
import { requestApi } from './requestApi'

const initialState = {
    users: [],
    user: null,
    posts: [],
    post: null,
    success: false,
    error: false,
    errorMessage: null,
    loading: true
}

// Create writable store
export const state = writable(initialState);

export const actions = {
    getAllUsers: async () => {
        actions.clearError();
        actions.updateloading(true);
        try {
            const { data } = await requestApi('users')
            console.log('USER DATA', data.users)
            state.update(currentState => ({ ...currentState, loading: false, users: data.users}));
        } catch(error) {
            actions.setError(error.message);
        }
    },
    getUser: async (userId) => {
        actions.clearError();
        actions.updateloading(true);
        try {
            const { data } = await requestApi(`users/${userId}`)
            console.log('USER DATA', data)
            // state.update(currentState => ({ ...currentState, user: data.user, loading: false }));
        } catch (error) {
            actions.setError(error.message);
        }

    },
    getAllPosts: async () => {
        actions.clearError();
        actions.updateloading(true);
        try {
            const { data } = await requestApi('posts')
            console.log('POST DATA', data.posts)
            state.update(currentState => ({ ...currentState, posts: data.posts, loading: false}));
        } catch (error) {
            actions.setError(error.message);
        }
    },
    getPost: async (postId) => {
        actions.clearError();
        actions.updateloading(true);
        try {
            const { data } = await requestApi(`posts/${postId}`)
            state.update(currentState => ({ ...currentState, post: data.post, loading: false}));
        } catch (error) {
            actions.setError(error.message);
        }
    },
    createPost: async (post) => {
        actions.clearError();
        actions.updateloading(true);
        try {
            const { data } = await requestApi(`posts/add`, 'POST', post)
            state.update(currentState => ({ ...currentState, loading: false, success: true, posts: [...currentState.posts, data.post]}));
        } catch (error) {
            actions.setError(error.message);
        }
    },
    deletePost: async (postId) => {
        actions.updateloading(true);
        actions.clearError();
        try {
            const { data } = await requestApi(`posts/${postId}`, 'DELETE')
            state.update(currentState => ({ ...currentState, loading: false, success: true, posts: currentState.posts.filter(post => post.id !== data.post.id)}));
        } catch (error) {
            actions.setError(error.message);
        }
    },
    editPost: async (postId, post) => {
        actions.clearError();
        actions.updateloading(true);
        try {
            const { data } = await requestApi(`posts/${postId}`, 'PUT', post)
            state.update(currentState => ({ ...currentState, loading: false, success: true, posts: [...currentState.posts, data] }));
        } catch (error) {
            actions.setError(error.message);
        }
    },
    setError: (errorMessage) => {
        state.update(currentState => ({
            ...currentState,
            error: true,
            errorMessage
        }));
    },
    clearError: () => {
        state.update(currentState => ({
            ...currentState,
            error: false,
            errorMessage: ''
        }));
    },
    clearSuccess: () => {
        state.update(currentState => ({
            ...currentState,
            success: false
        }));
    },
    updateloading: (loading) => {
        state.update(currentState => ({
            ...currentState,
            loading
        }));
    }
};
import axios from "axios";

export const postModule = {
    state: () => ({
        posts: [],
        isPostLoading: false,
        selectedSort: "",
        searchQuery: "",
        page: 1,
        limit: 10,
        totalPage: 0,
        sortOptions: [
            {value: "title", name: "По названию"},
            {value: "body", name: "По содержанию"},
        ]
    }),
    getters: {
        sortedPosts(state) {
            return [...state.posts].sort((post1, post2) => {
                return post1[state.selectedSort]?.localeCompare(post2[state.selectedSort])
            })
        },
        sortedAndSearchedPosts(state, getters) {
            return getters.sortedPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
        }
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        },
        setLoading(state, bool) {
            state.isPostLoading = bool
        },
        setSelectedSort(state, sort) {
            state.selectedSort = sort
        },
        setPage(state, page) {
            state.page = page
        },
        setSearchQuery(state, search) {
            state.searchQuery = search
        },
        setTotalPage(state, total) {
            state.totalPage = total
        },
        createPost(state, post) {
            state.posts.push(post)
        },
        removePost(state, post) {
            state.posts = state.posts.filter(p => p.id !== post.id);
        }
    },
    actions: {
        async fetchPosts({state, commit}) {
            try {
                commit('setLoading', true)
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
                    params: {
                        _page: state.page,
                        _limit: state.limit,
                    }
                });
                commit('setTotalPage', Math.ceil(response.headers['x-total-count'] / state.limit));
                commit('setPosts', response.data)
            } catch (e) {
                console.log(e)
            } finally {
                commit('setLoading', false)
            }
        },
        async loadMorePosts({state, commit}) {
            try {
                commit('setPage', state.page + 1)
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
                    params: {
                        _page: state.page,
                        _limit: state.limit,
                    }
                });
                commit('setTotalPage', Math.ceil(response.headers['x-total-count'] / state.limit))
                commit('setPosts', [...state.posts, ...response.data])
            } catch (e) {
                console.log(e)
            }
        }
    },
    namespaced: true,
}
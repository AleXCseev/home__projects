<template>
  <div>
    <h1>Страница с постами</h1> 
    <my-input v-model="searchQuery" placeholder="Поиск поста" v-focus/>
    <div class="app__btns">
        <my-button @click="showDialog">Создать пост</my-button>
        <my-select v-model="selectedSort" :options="sortOptions"></my-select>
    </div>
    
    <my-dialog v-model:show="dialogVisible">
        <post-form @create="createPost"/>
    </my-dialog>
    <post-list :posts="sortedAndSearchedPosts" @remove="removePost" v-if="!isPostLoading"/>
    <div v-else>Идет загрузка...</div>
    <!-- <div class="page__wrapper">
        <div 
            class="page" 
            :class="{
                'current-page': page === pageNumber
            }" 
            v-for="pageNumber in totalPage" :key="pageNumber"
            @click="changePage(pageNumber)"
        >
            {{ pageNumber }}
        </div>
    </div> -->
    <div v-intersection="loadMorePosts" class="observer"></div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import axios from "axios";

export default {
    components: {
        PostForm, PostList
    },
    data() {
        return {
            posts: [],
            dialogVisible: false,
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
        }
    },
    methods: {
        createPost(post) {
            this.posts.push(post);
            this.dialogVisible = false;
        },
        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id);
        },
        showDialog() {
            this.dialogVisible = true;
        },
        // changePage(pageNumber) {
        //     this.page = pageNumber;
        // },
        async fetchPosts() {
            try {
                this.isPostLoading = true
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
                    params: {
                        _page: this.page,
                        _limit: this.limit,
                    }
                });
                this.totalPage = Math.ceil(response.headers['x-total-count'] / this.limit)
                this.posts = response.data
            } catch (e) {
                alert("Ошибка!")
            } finally {
                this.isPostLoading = false
            }
        },
        async loadMorePosts() {
            try {
                this.page += 1;
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
                    params: {
                        _page: this.page,
                        _limit: this.limit,
                    }
                });
                this.totalPage = Math.ceil(response.headers['x-total-count'] / this.limit)
                this.posts = [...this.posts, ...response.data]
            } catch (e) {
                alert("Ошибка!")
            }
        }
    },
    mounted() {
        this.fetchPosts()
        
    },
    computed: {
        sortedPosts() {
            return [...this.posts].sort((post1, post2) => {
                return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
            })
        },
        sortedAndSearchedPosts() {
            return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
        }
    },
    watch: {
        // page() {
        //     this.fetchPosts()
        // }
    }
}
</script>

<style>
    .app__btns {
        margin: 15px 0;
        display: flex;
        justify-content: space-between;
    }
    .page__wrapper {
        display: flex;
        margin-top: 15px;
    }
    .page {
        border: 1px solid black;
        padding: 10px;
    }
    .current-page {
        border: 2px solid green;
    }
    .observer {
        height: 30px;
        background: green;
    }
</style>

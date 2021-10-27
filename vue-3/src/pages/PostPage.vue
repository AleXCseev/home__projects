<template>
  <div>
    <h1>Страница с постами</h1> 
    <my-input :model-value="searchQuery" @update:model-value="setSearchQuery" placeholder="Поиск поста" v-focus/>
    <div class="app__btns">
        <my-button @click="showDialog">Создать пост</my-button>
        <my-select :model-value="selectedSort" @update:model-value="setSelectedSort" :options="sortOptions"></my-select>
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
import {mapState, mapGetters, mapMutations, mapActions} from "vuex"

export default {
    components: {
        PostForm, PostList
    },
    data() {
        return {
            dialogVisible: false,
        }
    },
    methods: {
        ...mapMutations({
            setPage: 'post/setPage',
            setSearchQuery: 'post/setSearchQuery',
            setSelectedSort: 'post/setSelectedSort',
            create: 'post/createPost',
            remove: 'post/removePost'
        }),
        ...mapActions ({
            loadMorePosts: 'post/loadMorePosts',
            fetchPosts: 'post/fetchPosts'
        }),
        createPost(post) {
            this.create(post);
            this.dialogVisible = false;
        },
        removePost(post) {
            this.remove(post);
        },
        showDialog() {
            this.dialogVisible = true;
        },
        // changePage(pageNumber) {
        //     this.page = pageNumber;
        // },
       
        
    },
    mounted() {
        this.fetchPosts()
        
    },
    computed: {
        ...mapState({
            posts: state => state.post.posts,
            isPostLoading: state => state.post.isPostLoading,
            selectedSort: state => state.post.selectedSort,
            searchQuery: state => state.post.searchQuery,
            page: state => state.post.page,
            limit: state => state.post.limit,
            totalPage: state => state.post.totalPage,
            sortOptions: state => state.post.sortOptions
        }),
        ...mapGetters({
            sortedPost: 'post/sortedPost',
            sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
        })
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

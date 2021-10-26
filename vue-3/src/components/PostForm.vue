<template>
    <div>
        <form @submit.prevent>
            <h2>Создание поста</h2>
            <my-input v-model="post.title" v-focus placeholder="Название поста"/>
            <my-input v-model="post.body" placeholder="Описание поста"/>
            <my-button type="submit" @click="createPost" style="align-self: flex-end; margin-top: 15px;">Создать</my-button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            post: {
                title: "",
                body: "",
            }
        }
    },
    methods: {
       createPost() {
          this.post.id = Date.now();
          this.$emit("create", this.post)
          this.post = {
            title: "",
            body: "",
          }
      },
    }
}
</script>

<style>
    form {
        display: flex;
        flex-direction: column;

    }
</style>
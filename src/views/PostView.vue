<!-- src/views/PostView.vue -->
<template>
  <div>
    <h2>{{ post.title }}</h2>
    <p>{{ post.desc }}</p>
    <router-link to="/user/posts">Back to Posts</router-link>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      post: null,
    };
  },
  created() {
    const allPosts = [
      { id: 1, title: "Post 1", desc: "Hello, this is the post of post 1" },
      { id: 2, title: "Post 2", desc: "This my second post as John" },
      { id: 3, title: "Post 3", desc: "Hi, my name is John" },
      { id: 4, title: "Post 4", desc: "Created by Yap Zhe Wei" },
    ];

    this.post = allPosts.find((post) => post.id == this.id);
  },
};
</script>
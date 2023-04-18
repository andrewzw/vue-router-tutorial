<!-- src/views/UserPosts.vue -->
<template>
    <div>
        <h2>User Posts</h2>
        <ul>
            <li v-for="post in posts" :key="post.id">
                <router-link :to="`/user/posts/${post.id}`">
                    {{ post.title }}
                </router-link>
            </li>
        </ul>

        <button>
            <router-link to="/user/">Back</router-link>
        </button>

    </div>
</template>
  
<script>
export default {
    data() {
        return {
            posts: [
                { id: 1, title: "Post 1"},
                { id: 2, title: "Post 2"},
                { id: 3, title: "Post 3"},
                { id: 4, title: "Post 4"},
            ],
        };
    },
};
</script>
  
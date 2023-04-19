<template>

    <div>
      <h1>This is the homepage</h1>
      <p>This is a tutorial template by Andrew Yap Zhe Wei (103508895)</p>

      <section>
        <h2>Topics Covered in this tutorial</h2>
        <div class="card-container">
          <div class="card" v-for="(topic, index) in topics" :key="index">
            <h3>{{ topic.title }}</h3>
            <p>{{ topic.description }}</p>
          </div>
        </div>
      </section>

      <div>
        <h3>Go to user profile</h3>
        <router-link to="/user">User Profile</router-link>
      </div>
    </div>

</template>

<script>
export default {
  data() {
    return {
      topics: [
        { title: "Vue.js 3 Set up", description: "Learn how to set up Vue.js 3 in your project." },
        { title: "Creating routes", description: "Create routes for your application using Vue Router." },
        { title: "Nested Routes", description: "Explore nested routes for better organization of your app's routes." },
        { title: "Dynamic Route Parameters", description: "Learn how to use dynamic route parameters to make your routes more flexible." },
        { title: "Transition animations", description: "Add smooth transitions and animations to your route changes for a better user experience." },
      ],
    }
  }
}
</script>

<style>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 40px;
}

.card {
  background-color: #6cb983;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 30%;
  margin-bottom: 20px;
  text-align: center;
}

.card h3 {
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.card p {
  font-size: 0.9rem;
  color: #111111;
}
</style>

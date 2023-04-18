<!-- src/views/UserView.vue -->
<template>
  <div class="user-profile">
    <h1>User Profile</h1>
    <div class="user-info">
      <div class="info-row">
        <strong>Name:</strong> John Doe
      </div>
      <div class="info-row">
        <strong>Email:</strong> john.doe@example.com
      </div>
    </div>

    <router-link to="/user/posts">View Posts</router-link>
    <router-view/>
    
  </div>
</template>

<script>
export default {
  name: "UserView",
};
</script>

<style scoped>
.user-profile {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.user-profile h1 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.user-info {
  display: grid;
  gap: 1rem;
}

.info-row {
  display: flex;
  align-items: center;
}

.info-row strong {
  min-width: 80px;
  display: inline-block;
  font-weight: 600;
}
</style>

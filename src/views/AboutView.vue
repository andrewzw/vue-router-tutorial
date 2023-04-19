<template>
  <div>
    <h1>About</h1>
    <div class="card-container">
      <div class="card">
        <h2>About this Vue project</h2>
        <p>
          This is a tutorial template done by Andrew Yap Zhe Wei (103508895),
          this tutorial demonstates the key feattures of Vue router,
          including dynamic routes parameters, nested routes, and transition animations.
        </p>
      </div>
      <div class="card">
        <h2>About the creator</h2>
        <p>
          Andrew , is an experienced web developer, passionate about creating engaging and interactive web applications.
        </p>
      </div>

      <div class="card">
        <h2>Contact</h2>
        <p>
          To learn more about Andrew or to get in touch, visit his website at <a href="https://andrewyzw.netlify.app/" target="_blank">Andrew's Portfolio</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
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

.card h2 {
  color: #ffffff;
  font-size: 20px;
  margin-bottom: 10px;
}

.card p {
  font-size: 14px;
  color: #313131;
}
</style>
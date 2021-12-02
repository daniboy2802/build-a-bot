<template>
  <div class="home">
    <div >
      <img class="robot" src="../assets/robot-home.png" alt="robot home" aria-hidden="true">
    </div>
    <div class="get-started">
      <router-link to="/build">Get started</router-link> building your first robot!
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String,
  },
};
</script>

<!-- Add scoped atrribbute -->
<style scoped>
.home {
  text-align: center;
}
.robot {
  height: 300px;
}
</style>

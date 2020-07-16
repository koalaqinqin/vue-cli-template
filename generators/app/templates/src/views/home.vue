<template>
  <div class="hello">
    <hello-world msg="welcome to Vue.js"></hello-world>
    <p>go to <router-link to="/about">about</router-link></p>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
      HelloWorld
  }
}
</script>

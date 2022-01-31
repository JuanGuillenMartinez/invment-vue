<template>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Categories />
    <!-- <Form/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Categories from "./components/Categories.vue";
// import Form from './components/Form.vue'

export default {
    name: "App",
    components: {
        // HelloWorld
        Categories,
        // Form
    },
};
</script>

<style scoped>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>

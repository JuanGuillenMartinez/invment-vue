<template>
    <Categories />
</template>

<script>
import Categories from "./components/Categories.vue";

export default {
    name: "App",
    components: {
        Categories,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
    /* margin-top: 60px; */
}
div#app {
    padding: 24px;
}
.container-cat {
    margin: 12px;
}
</style>

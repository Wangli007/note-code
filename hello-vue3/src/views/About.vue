<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input v-model="message">
  </div>
</template>

<script>
/**
 * example  双向绑定的变量为vuex里面的变量时  可以使用这种方式
 */
export default {
  data() {
    return {};
  },
  computed: {
    message: {
      get() {
        return this.$store.state.message;
      },
      set(value) {
        this.$store.commit("updateMessage", value);
      }
    }
  },
  mounted(){
    console.log(this.$store.state.message);
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

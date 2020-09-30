<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/example">example</router-link>|
      <router-link to="/compose">compose</router-link>|
      <router-link to="/example">example</router-link>|
      <!-- <div>{{ name }}</div>
      <button @click="handleClick">改变name</button> -->
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";
// import withPromise from "./components/vue-hoc/with-promise";
const Index = {
  data: () => {
    return {
      // name: "liwang"
    };
  },
  //...mapState(["name"]) //将store

  // computed: mapState({  ...mapState(["name"])写法之后会变成这样  就是一个语法糖
  //   name: (state) => state.name,
  //   name1: (state) => state.name1,
  //   name2: (state) => state.name2,
  // }),

  computed: {
    ...mapState(["name"])
  },

  mounted() {
    // eslint-disable-next-line no-undef
    // console.log(mapState);
    // console.log(this.$store.state);
    console.log(this.name);
  },
  methods: {
    handleClick() {
      this.$store.dispatch({ type: "increment", name: "lwl" });
      console.log(this.name, this.name1, this.name2);
      console.log(mapState(["name", "name1", "name2"]));
    }
  }
};
export default Index;
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

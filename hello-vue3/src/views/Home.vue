<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <ViewSon />
  </div>
</template>

<script>
// @ is an alias to / src
import HelloWorld from "@/components/HelloWorld.vue";
import ViewSon from "@/components/vue-hoc/view";
const Index = {
  name: "Home",
  components: {
    HelloWorld,
    ViewSon
  }
};

export default Index;
</script>

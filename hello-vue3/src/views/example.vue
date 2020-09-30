<template>
  <div>枚举</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {};
  },
  mounted() {
    console.log(111111111111);
    enum Car {
      bnw,
      honda,
      jeep = 3,
      toyota
    }
    const j: Car = Car.jeep;
    console.log(j);

    class Person {
      name: string;
      constructor(name: string) {
        this.name = name;
      }
    }

    class Bm extends Person {
      constructor() {
        //初始化父类构造函数
        super("1231");
      }
    }
  }
});
</script>

<style scoped>
div {
  color: pink;
}
</style>

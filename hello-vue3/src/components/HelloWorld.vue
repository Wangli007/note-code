<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <project>插槽演示</project>
  </div>
</template>

<script lang="ts">
/**
 * vue-property-decorator 使用默认的类型作为name
 */
import { Component, Prop, Vue } from "vue-property-decorator";
import Project from "@/components/Project.vue";
@Component({
  components: {
    Project
  }
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
/**
 * 等价于
 * <script>
      export default {
      name: 'HelloWorld'
      }
    /script>
 */
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

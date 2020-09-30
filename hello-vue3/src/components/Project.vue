<template>
  <div>
    子组件
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class HelloWorld extends Vue {}
</script>

<style scoped></style>

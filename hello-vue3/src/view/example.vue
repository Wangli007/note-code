<template>
	<div>
		<div v-if="loading">Loading.....</div>
		<div v-show="loaded">
			<img :src="result && result.message" />
			<button @click="onHandleRandom">点击更换</button>
		</div>
	</div>
</template>

<script lang="ts">
import { reactive } from "vue";
export default {
	setup() {
		console.log(process.env.NODE_ENV);
	}
};
</script>

<style></style>

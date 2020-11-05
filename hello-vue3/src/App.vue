<template>
	<div>
		<router-view></router-view>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs } from "vue";
import useURLAxios from "./hooks/useURLAxios";
import Api from "./api/api";
import example from '@/components/example/example'
import "./help.ts";
export default defineComponent({
	name: "App",
	components: {},
	// setup() {
	// 	const { result, loading, loaded } = useURLAxios(
	// 		"https://dog.ceo/api/breeds/image/random"
	// 	);
	// 	const onHandleRandom = async () => {
	// 		loaded.value = false;
	// 		loading.value = true;
	// 		const dataResult = await Api("https://dog.ceo/api/breeds/image/random");
	// 		result.value = dataResult;
	// 		loading.value = false;
	// 		loaded.value = true;
	// 	};

	// 	return { result, loading, loaded, onHandleRandom, status };
	// }
});
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>

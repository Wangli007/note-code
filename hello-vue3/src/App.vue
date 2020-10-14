<template>
	<img alt="Vue logo" src="./assets/logo.png" />
	<div>
		<h2>欢迎光临红浪漫洗浴中心</h2>
		<div>请选择一位美女为你服务</div>
	</div>
	<button
		v-for="(item, index) in girls"
		v-bind:key="index"
		@click="selectGirlFun(index)"
	>
		{{ index }} : {{ item }}
	</button>
	<div>你选择了【{{ selectGirl }}】为你服务</div>
	<div><button @click="overAction">点餐完毕</button></div>
	<div>{{ overText }}</div>
</template>

<script lang="ts">
import {
	defineComponent,
	ref,
	reactive,
	toRefs,
	onRenderTracked,
	onRenderTriggered,
	watch
} from "vue";
import HelloWorld from "./components/HelloWorld.vue";

interface DataProps {
	girls: string[];
	selectGirl: string;
	selectGirlFun: (index: number) => void;
}

export default defineComponent({
	name: "App",
	components: {},
	setup() {
		console.log(process.env.NODE_ENV);
		
		// const girls = ref(["大脚", "刘英", "晓红"]);
		// const selectGirl = ref("");
		// const selectGirlFun = (index: number) => {
		// 	selectGirl.value = girls.value[index];
		// };

		const data: DataProps = reactive({
			girls: ["大脚", "刘英", "晓红"],
			selectGirl: "",
			selectGirlFun: (index: number) => {
				data.selectGirl = data.girls[index];
			}
		});

		/**
		 * 状态跟踪钩子函数
		 * 每一个生命周期都跟踪
		 */
		// onRenderTracked((event)=>{
		//   console.log(event,"变化");

		// })
		/**
		 * 单个跟踪
		 */
		// onRenderTriggered((event)=>{
		//   console.log(event);

		// })
		const refDate = toRefs(data);

		const overText = ref("红浪漫");
		const overAction = () => {
			overText.value = "点餐完成！";
			// document.title = overText.value;
		};
		watch([overText, refDate.selectGirl], (newValue, oldValue) => {
      console.log(newValue, oldValue);
      document.title = newValue[0];
		});

		return {
			...refDate,
			overText,
			overAction
		};
	}
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

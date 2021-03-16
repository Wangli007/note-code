<template>
	<form class="validate-form-container">
		<slot name="default"></slot>
		<!-- prevent 阻止默认行为 -->
		<div class="submit-area" @click.prevent="submitForm">
			<slot name="submit">
				<!-- 如果这个插槽他没有定义 就用组件内部定义好的 -->
				<button type="submit" class="btn btn-primary">提交</button>
			</slot>
		</div>
	</form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from "vue";
import mitt from "mitt";
export const emitter = mitt();
type validateFunc = () => boolean;
export default defineComponent({
	// 定义要触发的自定义事件
	emits: ["form-submit"],
	setup(props, context) {
		let funcArr: validateFunc[] = [];
		const submitForm = () => {
            const result = funcArr.map(func => func()).every(result => result);//这样的方式就是能把所有的错误信息都能展示  看自己个人喜好吧
            // const result = funcArr.every((func)=>{
            //     return func()
            // })
			context.emit("form-submit", result);
		};
		const callback = (func) => {
			funcArr.push(func);
		};
		emitter.on("form-item-create", callback);
		onUnmounted(() => {
			emitter.off("form-item-create", callback);
			funcArr = [];
		});
		return {
			submitForm
		};
	}
});
</script>

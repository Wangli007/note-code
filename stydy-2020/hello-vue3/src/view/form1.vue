<template>
	表单页面
	<input type="text" />
	<input v-model="formData.name" />
	<p>{{ validator.ErrMsg.telNumber }}</p>
	<input v-model="formData.age" />
	<p>{{ validator.ErrMsg.telNumber }}</p>
	<button @click="submit">submit</button>
</template>

<script>
import { onRenderTriggered } from "vue";
import ValidatorUtils from "@/lib/validator";
export default {
	data() {
		return {
			// 验证对象
			validator: undefined,
			// 表单数据源
			formData: {
				// 车牌号
				name: "李四",
				// 手机号
				age: "20"
			},
			errMsg: {
				name: "名字必填",
				age: "年龄必填"
			},
			// 校验
			rules: {
				// 校验规则
				name: {
					// 一条校验规则
					required: true,
					message: "名字是必须的"
				},
				age: [
					// 多条校验规则
					{
						required: true,
						message: ""
					},
					{
						// rule  规则 value 获取的值  失败成功回调
						validator(rule, value, callback) {
							value < 18
								? callback(new Error("未成年人不符合条件"))
								: callback();
						}
					}
				]
			}
		};
	},
	setup() {
		// console.log(this)
		// onRenderTriggered((e)=>{
		//     console.log(e);
		//     console.log();
		// })
	},
	created() {
		this.validator = new ValidatorUtils({
			rules: this.rules,
			data: this.formData,
			errMsg: this.errMsg
		});
		this.formData = this.validator.Data;
	},
	mounted() {
		console.log(this, "111111");
	}
};
</script>

<style></style>

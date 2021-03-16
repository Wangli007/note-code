<template>
	<!--  async-validator 的基本使用  https://segmentfault.com/a/1190000022797390 -->
	<div>
		表单页面
		<input type="text" />
		<input v-model="formData.form.name" />
		<p>{{ formData.message.name }}</p>
		<input v-model="formData.form.age" />
		<p>{{ formData.message.age }}</p>
		<button @click="submit">submit</button>
	</div>
</template>

<script>
import { ref, watch, toRefs, reactive } from "vue";
import useVaildator from "../hooks/useVaildator";
import Schema from "async-validator";

export default {
	setup() {
		// 表单对象
		const dataInit = {
			form: {
				name: "李四",
				age: "99"
			},
			// 错误提示
			message: {
				name: "",
				age: ""
			},
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
		// const myRules = {
		// 	name: {
		// 		required: true,
		// 		message: "名字是必须的"
		// 	}
		// };
		const { submit, formData, validator } = useVaildator(dataInit);
		// const validatorMy = new Schema(myRules);
		watch(formData.form, (newValue, oldValue) => {
			console.log(newValue);
			const { name, age } = newValue;
			validator.validate({ name, age }, (errors, fields) => {
				if (errors) {
					// field 就是对象的 attr  对应的message
					for (const { field, message } of errors) {
						formData.message[field] = message;
					}
					return new Error(errors, fields);
				}
				//通过验证  应该把对应的message给去掉
			});
			// validatorMy.validate({name})
		});
		return {
			formData,
			submit
		};
	}
};
</script>

<style></style>

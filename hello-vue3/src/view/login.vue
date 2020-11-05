<template>
	<validate-form @form-submit="onFormSubmit">
		<div class="mb-3">
			<label class="form-label">邮箱地址</label>
			<validate-input
				v-model="val"
				:rules="emailRules"
				placeholder="请输入电子邮箱"
			></validate-input>
		</div>
		<div class="mb-3">
			<label class="form-label">密码</label>
			<validate-input
				v-model="pwd"
				:rules="pwdRules"
				placeholder="请输入密码"
				type="password"
			></validate-input>
		</div>
		<template #submit>
			<button type="submit" class="btn btn-danger">提交</button>
		</template>
	</validate-form>
    <pre>{{user}}</pre>
</template>

<script lang="ts">
import "bootstrap/dist/css/bootstrap.min.css";

import { computed, defineComponent, Ref, ref } from "vue";
import ValidateInput from "@/components/ValidateInput";
import ValidateForm from "@/components/ValidateForm";
import store, { RuleProps } from "../store";
const emailRules: RuleProps[] = [
	{ type: "required", message: "电子邮箱地址不能为空" },
	{ type: "email", message: "请输入正确的电子邮箱格式" }
];
const pwdRules: RuleProps[] = [
	{ type: "required", message: "电子邮箱地址不能为空" },
	{ type: "password", message: "密码长度必须在6位数以上" }
];
export default defineComponent({
	name: "form-test",
	components: {
		ValidateInput,
		ValidateForm
	},
	setup(props, connect) {
		const val: Ref = ref("test@qq.com");
		const pwd = ref("1234567");
		const updateHandle = value => {
			val.value = value;
		};
		const onFormSubmit = result => {
			if (result) {
				alert("登录成功")
				store.commit("login");
			} else {
				alert("登录失败");
			}
		};
        const user = computed(()=>store.state.user)
		return {
			emailRules,
			val,
			updateHandle,
			onFormSubmit,
			pwdRules,
            pwd,
            user
		};
	}
});
</script>

<style></style>

<template>
	<div class="validate-input-container pb-3">
		<input
			type="text"
			class="form-control"
			:class="{ 'is-invalid': inputRef.error }"
			:value="inputRef.val"
			@input="updateValue"
			@blur="validateInput"
			v-bind="$attrs"
		/>
		<span v-if="inputRef.error" class="invalid-feedback">{{
			inputRef.message
		}}</span>
	</div>
</template>

<script lang="ts">
/**
 * 1.实现接收一个rules 组件能根据rule的规则去验证
 * 2.实现组件外部可以使用v-modal
 * 3.组件外部可以使用默认的属性attrs 比如placeholder
 */
import { defineComponent, reactive, PropType, onMounted } from "vue";
import { emitter } from "./ValidateForm";
import { RuleProps } from "../store";
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export type RulesProp = RuleProps[];
export default defineComponent({
	props: {
		rules: Array as PropType<RulesProp>,
		modelValue: String
	},
	inheritAttrs: false,
	setup(props, context) {
		const inputRef = reactive({
			val: props.modelValue || "",
			error: false,
			message: ""
		});
		const validateInput: () => boolean = () => {
			if (props.rules) {
				const allPassed = props.rules.every(rule => {
					let passed = true;
					inputRef.message = rule.message;
					switch (rule.type) {
						case "required":
							passed = inputRef.val.trim() !== "";
							break;
						case "email":
							passed = emailReg.test(inputRef.val);
							break;
						case "password":
							passed = inputRef.val.trim().length > 6;
							break;
						default:
							break;
					}
					return passed;
				});
				inputRef.error = !allPassed;
				return allPassed;
			}
			return true;
		};

		const updateValue = (e: KeyboardEvent) => {
			const targetValue = (e.target as HTMLInputElement).value;
			inputRef.val = targetValue;
			context.emit("update:modelValue", targetValue);
		};
		onMounted(() => {
			emitter.emit("form-item-create", validateInput);
		});

		return {
			inputRef,
			validateInput,
			updateValue
		};
	}
});
</script>

/* eslint-disable @typescript-eslint/camelcase */
// interface FormData {
// 	form: object;
// 	message: object;
// 	rules: object;
// }

import { reactive } from "vue";
import Schema from "async-validator";


function vaildator(formData_init: any) {
	const formData = reactive(formData_init);
	const validator: any = new Schema(formData_init.rules);
	//  内部有些内置常用的英语校验提示
	validator.messages({
		required: "%s 必填"
	});

	// 清空校验错误提示
	function clearMessage() {
		for (const key in formData.message) formData.message[key] = "";
	}
	function submit() {
		clearMessage();
		validator
			.validate(formData, {
				firstFields: true
			})
			.then(() => {
				// 校验通过
				alert("ok");
			})
			.catch(({ errors }) => {
				// 校验未通过
				// 显示错误信息
				for (const { field, message } of errors)
					formData.message[field] = message;
			});
	}

	return { submit, formData ,validator };
}


export default vaildator;

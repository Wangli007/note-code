import ValidatorUtils from "./validator";

export default {
	data() {
		return {};
	},
	methods: {
		initValidator() {
			//   console.log(this.rules,'addpay')
			this.validator = new ValidatorUtils({
				rules: this.rules,
				data: this.formData,
				automatic: false
			});
			this.formData = this.validator.Data;
		}
	}
};

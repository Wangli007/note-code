/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable prefer-const */
import AsyncValidator from "async-validator";
import _ from "lodash";

/**
 * 校验辅助类
 *
 * @export
 * @class ValidatorUtils
 */
export default class ValidatorUtils {
	/**
	 * Creates an instance of ValidatorUtils.
	 * @param {Object} rules
	 * @param {Object} data
	 * @param {Object} errMsg 错误信息文本key 同data
	 * @param {Boolean} automatic 自动校验
	 *
	 * @memberOf ValidatorUtils
	 */
	constructor({ rules, data, errMsg = {}, automatic = true }) {
		this.setRules(rules);
		this.data = data;
		this.errMsg = errMsg;
		automatic && this.setProxyValidate();
	}
	// #region 属性
	get Rules() {
		return this.rules;
	}
	set Data(value) {
		this.data = value;
	}
	get Data() {
		return this.data;
	}
	get Validators() {
		return this.validators;
	}
	set Validators(value) {
		this.validators = value;
	}
	set ErrMsg(value) {
		this.errMsg = this.value;
	}
	get ErrMsg() {
		return this.errMsg;
	}
	// #endregion

	/**
	 * 自动校验代理设置
	 *
	 * @returns
	 *
	 * @memberOf ValidatorUtils
	 */
	setProxyValidate() {
		let that = this;
		let p = {
			set(target, key, value, receiver) {
                target[key] = value;
				that
					.validate(key)
					.then(result => {})
					.catch(() => {});
				return true;
			}
		};
		this.data = new Proxy(this.data, p);
	}

	/**
	 * 设定规则
	 * @param rules rules object async-validator rules
	 * @param cover 是否替换旧规则
	 */
	setRules(rules, cover = true) {
        !cover || (this.Validators = {});
        console.log(rules,"rules");
        console.log(		_(rules)
        .mapKeys(
            (value, key) =>
                (this.Validators[key] = new AsyncValidator({ [key]: value }))
        )
        .value());
	}

	/**
	 * 执行验证
	 *
	 * @param {String,Array} tempData 可选 传空将验证构造data 支持key，list<key>
	 * @returns Promise
	 *
	 * @memberOf ValidatorUtils
	 */
	validate(tempData) {
		// 错误数组
		const err = [];
		let tempdata = _(this.Validators)
			.keys()
			.filter(
				p =>
					!tempData ||
					(tempData &&
						((_.isString(tempData) && tempData === p) ||
							(_.isArray(tempData) && tempData.indexOf(p) > -1)))
			)
			.value();
		tempdata.forEach(p =>
			this.Validators[p].validate({ [p]: this.Data[p] }, error => {
				error && err.push(error[0]);
				this.setErrMsg(p, error);
			})
        );
		if (err.length > 0) return Promise.reject(err);
		else return Promise.resolve(tempData);
	}
	/**
	 *
	 * 设置error消息
	 * @param {any} error
	 *
	 * @memberOf ValidatorUtils
	 */
	setErrMsg(key, error) {
		this.errMsg[key] = error ? error[0].message : undefined;
	}
}

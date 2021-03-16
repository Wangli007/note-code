import { ColumnProps, testData } from "./testData";

export interface UserProps {
	isLogin: boolean;
	name?: string;
	id?: number;
}

// 一个Input可以有多个验证规则
export interface RuleProps {
	type: "required" | "email" | "custom" | "password";
	message: string;
	validator?: () => boolean;
}

import { createStore } from "vuex";

export interface GlobalDataProps {
	user: UserProps;
	columns: ColumnProps[];
}

const store = createStore<GlobalDataProps>({
	state: {
		user: { isLogin: false },
		columns: testData
	},
	mutations: {
		login(state) {
			state.user = { ...state.user, isLogin: true, name: "viking" };
		}
	},
	getters: {
		getColumnById: state => (id: number) => {
			return state.columns.find(item => item.id === id);
        }
	}
});

export default store;

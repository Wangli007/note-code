interface TestProps {
	_id: string;
	name: string;
}
//原本类型
const testData: TestProps[] = [
	{ _id: "1", name: "a" },
	{ _id: "2", name: "b" }
];

function arrToObj<T extends { _id?: string }>(arr: Array<T>) {
	return arr.reduce((prev, current) => {
		if (current._id) {
			prev[current._id] = current;
		}
		return prev;
	}, {} as { [key: string]: T });
}
const result = arrToObj(testData);
console.log(result);

function objToArr(obj: { [key: string]: TestProps }) {
	return Object.keys(obj).map(key => obj[key]);
}
const result1 = objToArr(result);
console.log(result1);

//转换过去的类型
const testData2: { [key: string]: TestProps } = {
	1: { _id: "1", name: "a" },
	2: { _id: "2", name: "b" }
};

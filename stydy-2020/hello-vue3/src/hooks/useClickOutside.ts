/**
 * 逻辑的抽离
 * 1.点击外面的元素 自动的把Dropdown给关闭
 * 2.给全局添加click事件  组件销毁的时候删除
 * 点击的元素是否包含 传过来的元素
 */

import { onMounted, onUnmounted, Ref, ref } from "vue";
const useClickOutside = (elementRef: Ref<null | HTMLElement>) => {
	const isClickOutside = ref(false);//是否在外部
	const handler = (e: MouseEvent) => {
		if (elementRef.value) {
			if (elementRef.value.contains(e.target as HTMLElement)) {
				isClickOutside.value = false;
			} else {
				isClickOutside.value = true;
			}
		}
	};
	onMounted(() => {
		document.addEventListener("click", handler);
	});
	onUnmounted(() => {
		document.removeEventListener("click", handler);
	});
	return isClickOutside;
};

export default useClickOutside;

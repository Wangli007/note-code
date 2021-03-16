<template>
	<div class="row">
		<div v-for="column in columnList" :key="column.id" class="col-4 mb-4">
			<div class="card h-100 shadow-sm">
				<div class="card-body text-center">
					<img
						:src="column.avatar"
						:alt="column.title"
						class="rounded-circle border border-light w-25 my-3"
					/>
					<h5 class="card-title">{{ column.title }}</h5>
					<p class="card-text text-left">{{ column.description }}</p>
					<a href="#" class="btn btn-outline-primary">进入专栏</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import {
	defineComponent,
	PropType,
	computed
} from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import { ColumnProps } from "../../store";

export default defineComponent({
	name: "ColumnList",
	props: {
		list: {
			type: Array as PropType<ColumnProps[]>,
			required: true
		}
	},
	setup(props) {
		// 这里加了计算属性的话 里面的依赖变化他会随着改变
		const columnList = computed(() => {
			return props.list.map(item => {
				if (!item.avatar) {
					item.avatar = require("@/assets/column.jpg");
				}
				return item;
			});
		});
		return {
			columnList
		};
	}
});

/**
 * 使用
 * 		const testData: ColumnProps[] = [
			{
				id: 1,
				title: "test1的专栏",
				description: "这是的test1专栏，有一段非常有意思的简介，可以更新一下欧",
				avatar:
					"http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100"
			},
			{
				id: 2,
				title: "test2的专栏",
				description: "这是的test2专栏，有一段非常有意思的简介，可以更新一下欧"
			}
        ];
        
        
 */
</script>

<style></style>

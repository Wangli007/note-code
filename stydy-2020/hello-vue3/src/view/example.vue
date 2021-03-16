<template>
	<div>
		<pre>123123</pre>
		<pre>123123</pre>
		<DataPanel />
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, Ref, ref } from "vue";
import store, { RuleProps } from "../store";
import { useRoute } from "vue-router";
import DataPanel from "@/components/DataPanel";

export default defineComponent({
	name: "form-test",
	components: { DataPanel },
	setup(props, connect) {
		const route = useRoute();
		const columnId: number = +route.params.id;
		const user = computed(() => store.state.user);
		const columns = computed(() => store.getters.getColumnById(columnId));
		return {
			user,
			columns
		};
	}
});
</script>

<style></style>

<template>
	<div>
		<pre>{{ user }}</pre>
		<pre>{{ columns }}</pre>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, Ref, ref } from "vue";
import store, { RuleProps } from "../store";
import { useRoute } from "vue-router";

export default defineComponent({
	name: "form-test",
	components: {},
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

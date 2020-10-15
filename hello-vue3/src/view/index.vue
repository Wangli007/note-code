<template>
	<div>
		首页!!!
	</div>
</template>

<script>
import { reactive } from "vue";
import api from "@/api/axios/service";
export default {
	components: {},
	mounted() {
		api.user.getUser().then(res => {
			console.log(res);
		});
	}
};
</script>

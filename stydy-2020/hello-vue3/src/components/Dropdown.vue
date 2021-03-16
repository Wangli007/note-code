<template>
	<div class="dropdown" ref="dropdownRef">
		<a href="#" class="btn my-2 dropdown-toggle" @click.prevent="toggleOpen">
			{{ title }}
		</a>
		<ul class="dropdown-menu" :style="{ display: 'block' }" v-if="isOpen">
			<DropdownItem><a href="#">新建文章</a></DropdownItem>
			<DropdownItem><a href="#">编辑资料</a></DropdownItem>
		</ul>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import DropdownItem from "@/components/DropdownItem";
import useClickOutside from "@/hooks/useClickOutside";
export default defineComponent({
	name: "Dropdown",
	components: {
		DropdownItem
	},
	props: {
		title: {
			type: String,
			required: true
		}
	},
	setup() {
		const isOpen = ref(false);
		const dropdownRef = ref(null);
        const isClickOutside = useClickOutside(dropdownRef);
		watch(isClickOutside, () => {
			if (isOpen.value && isClickOutside.value ) {
				isOpen.value = false;
			}
		});
		const toggleOpen = () => {
			isOpen.value = !isOpen.value;
		};
		return {
			isOpen,
			toggleOpen,
			dropdownRef
		};
	}
});
</script>
<style scoped>
.dropdown {
	width: 200px;
	margin: 0 auto;
	background-color: aqua;
}</style
>>

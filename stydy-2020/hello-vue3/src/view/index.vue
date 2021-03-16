<template>
	<div>
		首页!!!
		<Dropdown title="欢迎! 用户名字" />
		<Suspense>
			<template #default>
				<div>
					<dog-show />
				</div>
			</template>
			<template #fallback>
				<h1>Loading !...</h1>
			</template>
		</Suspense>
		<Modal :isOpen="modalIsOpen" @close-modal="onModalClose" />
		<button @click="onModalOpen">打开弹窗</button>
		<Loader v-if="loading" />
		<Message message="content" type="success" />
		<button @click="onCreateMessage">点击弹出消息</button>
		<router-link to="/example">跳转到example</router-link>
	</div>
</template>

<script lang="ts">
import vue, {
	reactive,
	defineComponent,
	ref,
	onMounted,
	getCurrentInstance
} from "vue";
import api from "@/api/axios/service";
import useURLAxios from "@/hooks/useURLAxios";
import Api from "../api/api";
import DogShow from "@/components/example/DogShow";
import Modal from "@/components/example/Modal";
import Dropdown from "@/components/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "../components/Loader";
import Message from "../components/Message";
import createMessage from "@/components/createMessage";
export default defineComponent({
	name: "App",
	components: {
		DogShow,
		Modal,
		Dropdown,
		Loader,
		Message
	},
	mounted() {
		const vue: any = getCurrentInstance();
		vue.ctx.myFun();
	},
	setup(props, ctx) {
		const loading = ref(false);
		const emailRef = reactive({
			val: "",
			error: false,
			message: ""
		});
		const modalIsOpen = ref(false);
		const onModalClose = () => {
			modalIsOpen.value = false;
		};
		const onModalOpen = () => {
			modalIsOpen.value = true;
		};

		onMounted(() => {
			loading.value = true;
			setTimeout(() => {
				loading.value = false;
			}, 4000);
		});

		const onCreateMessage = () => {
			createMessage("弹出!!", "success");
		};

		return {
			onModalClose,
			modalIsOpen,
			onModalOpen,
			emailRef,
			loading,
			onCreateMessage
		};
	}
});
</script>

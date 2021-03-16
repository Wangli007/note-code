import { ref } from "vue";
import api from "../api/api";

function useUrlAxios(url: string) {
	const result = ref(null);
	const loading = ref(true);
	const loaded = ref(false);
	const error = ref(null);

	api(url)
		.then((res: any) => {
			loading.value = false;
			loaded.value = true;
            result.value = res;
            console.log(res,"res");
            
		})
		.catch((e: any) => {
			error.value = e;
			loading.value = false;
		});
	return {
		result,
		loading,
		loaded,
		error
	};
}

export default useUrlAxios;

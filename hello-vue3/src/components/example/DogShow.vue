<template>
	<div>
        <img :src="dogData&&dogData.message" alt="">
	</div>
</template>
<script lang="ts">
import api from '../../api/axios/service'
import { defineComponent, toRefs,reactive, ref } from "vue";
export default defineComponent({
    async setup(){
        const dogData = await api.test.getDog()
        return {
            dogData
        }
    }
});
</script>

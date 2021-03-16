import { ref } from 'vue'
import axios from 'axios'

function useURLLoader<T>(url: string) {
  const result = ref<T | null>(null) //结果
  const loading = ref(true) //loading状态
  const loaded = ref(false) //是否加载完成
  const error = ref(null) //错误信息

  axios.get(url).then((rawData) => {
    loading.value = false
    loaded.value = true
    result.value = rawData.data
  }).catch(e => {
    error.value = e
    loading.value = false
  })

  return {
    result,
    loading,
    error,
    loaded
  }
}

export default useURLLoader
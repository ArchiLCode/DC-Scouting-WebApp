import axios from 'axios'
import { ref } from 'vue'

export function useGet (url) {
  const data = ref(null)
  const error = ref(null)

  axios
    .get(url)
    .then((res) => res.json())
    .then((json) => (data.value = json))
    .catch((err) => (error.value = err))
  return { data, error }
}

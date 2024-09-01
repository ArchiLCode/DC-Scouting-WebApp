import axios from 'axios'
import { ref } from 'vue'

export function usePost (url, data) {
  const error = ref(null)
  axios
    .post(url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => res.json())
    .then((json) => (data.value = json))
    .catch((err) => (error.value = err))
  return { data, error }
}

<template>
  <div class="wrapper">
    <form>
      <input
        v-model="firstName"
        type="text"
        id="first-name"
        placeholder="Имя"
      />
      <input
        v-model="lastName"
        type="text"
        id="last-name"
        placeholder="Фамилия"
      />
    </form>
    <button @click="signIn" class="submit-btn">Отправить</button>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { usePost } from '@/composables/usePost'

const firstName = ref('')
const lastName = ref('')
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const tgId = ref(urlParams.get('tg_id'))
const tgHash = ref(urlParams.get('tg_hash'))
const formData = reactive({
  tgId: tgId,
  tgHash: tgHash,
  firstName: firstName,
  lastName: lastName
})
const data = JSON.stringify(formData)
function signIn () {
  const resp = usePost('https://scouting-site.onrender.com/user/register', data)
  console.log(resp)
}
</script>

<style lang="scss" scoped></style>

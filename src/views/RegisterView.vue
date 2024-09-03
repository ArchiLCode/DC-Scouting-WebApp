<template>
  <div class="wrapper">
    <h2>Регистрация</h2>
    <form>
      <div>
        <input v-model="firstName" type="text" id="first-name" placeholder="" />
        <label for="first-name">
          <span class="name">Имя</span>
        </label>
      </div>
      <div>
        <input v-model="lastName" type="text" id="last-name" placeholder="" />
        <label for="last-name">
          <span class="name">Фамилия</span>
        </label>
      </div>
    </form>
    <ButtonDefault @click="signIn" :btnText="'Отправить'" />
    <div v-if="error" class="err">
      Ошибка регистрации, данный пользователь уже существует!
    </div>
    <div class="link-to-login">
      <p>Уже зарегестрированы?</p>
      <button @click="redirectToLogin" class="redirect">Вход</button>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import ButtonDefault from '@/components/ButtonDefault.vue'
import router from '@/router'
import axios from 'axios'

const firstName = ref('')
const lastName = ref('')
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const tgId = ref(urlParams.get('tg_id'))
const error = ref(false)

const checkResponse = (res) => {
  console.log(res.status)
  res.status >= 200 <= 300 ? router.push('/home') : (error.value = true)
}

const signIn = () => {
  error.value = false
  const formData = reactive({
    tg_id: tgId,
    first_name: firstName.value,
    last_name: lastName.value
  })
  const data = JSON.stringify(formData)
  axios
    .post('https://scouting-site.onrender.com/user/register', data)
    .then((res) => checkResponse(res))
    .catch((err) => {
      error.value = true
      console.log(err.status)
    })
}

const redirectToLogin = () => {
  router.push('/login' + queryString)
}
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 20px 0;
  width: 100%;

  & div {
    width: 100%;
  }
}
.wrapper {
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & h2 {
    font-family: inherit;
    font-size: 28px;
    text-align: left;
    font-weight: 500;
    margin-top: 80px;
    margin-bottom: 60px;
    width: 100%;
  }
}
input {
  position: relative;
  width: 100%;
  border: none;
  padding: 0;
  margin: 20px 0;
  font-family: inherit;
  font-size: 20px;
  font-weight: 500;
  background-color: transparent;
  outline: none;
  border-bottom: 2px solid #41bd856e;
  transition: 0.2s;
  &:focus {
    outline: none;
    padding: 20px 0;
    border-color: #41bd85cd;
  }
  &:not(:placeholder-shown) {
    padding: 20px 0;
    border-color: #41bd85cd;
  }
}
label {
  position: absolute;
  width: 100%;
  z-index: 1;
  left: 12%;

  & span {
    position: absolute;
    z-index: 2;
    left: 0;
    transition: 0.2s;
    font-size: 18px;
  }
}
.redirect {
  color: #41bd85cd;
  font-family: inherit;
  background-color: transparent;
  border: none;
  padding: 5px 20px;
  font-weight: 600;
  font-size: 18px;
}
p {
  margin: 80px auto 5px;
}
.err {
  color: #d82525;
  margin-top: 20px;
}
</style>

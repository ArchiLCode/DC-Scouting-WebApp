<template>
  <div class="wrapper">
    <h2 v-if="!error">Авторизация..</h2>
    <div v-if="!error" class="loader"></div>
    <div class="err" v-if="error">
      <h3>Ошибка авторизации!</h3>
      <ButtonDefault @click="signin" :btnText="'Регистрация'" />
    </div>
  </div>
</template>

<script setup>
import ButtonDefault from '@/components/ButtonDefault.vue'
import router from '@/router'
import axios from 'axios'
import { onMounted, ref } from 'vue'
const error = ref(false)
const queryString = window.location.search

const checkResponse = (res) => {
  res.status >= 200 <= 300 ? router.push('/') : (error.value = true)
}

const signin = () => {
  router.push('/register' + queryString)
}

onMounted(() => {
  axios
    .get('https://scouting-site.onrender.com/user/login' + queryString)
    .then((res) => checkResponse(res))
    .catch((err) => {
      error.value = true
      console.log(err.status)
    })
})
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
  min-height: calc(100dvh - 80px);
}

h2 {
  font-size: 30px;
  margin-top: -80px;
  padding-bottom: 30px;
}

.loader {
  color: #41bd85cd;
  font-size: 10px;
  margin: 0 auto;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  animation: mulShdSpin 1.3s infinite linear;
  transform: translateZ(0);
}

@keyframes mulShdSpin {
  0%,
  100% {
    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
  }
  12.5% {
    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }
  25% {
    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0,
      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }
  37.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em,
      0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  50% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em,
      0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  62.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
      0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
  }
  75% {
    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
  }
  87.5% {
    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
  }
}
</style>

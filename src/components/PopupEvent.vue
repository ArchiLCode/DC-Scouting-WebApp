<template>
  <div class="popup-wrapper">
    <div class="popup-window">
      <h2 class="title">{{ props.event.title }}</h2>
      <p class="format">{{ props.event.event_format }}</p>
      <p class="time">{{ timeConvert(props.event.time) }}</p>
      <p class="description">{{ props.event.description }}</p>
      <ButtonDefault
        :linking="true"
        :link="props.event.link"
        :btnText="'Перейти'"
        style="margin-top: 15px"
      />
      <button @click="closePopup" class="close">
        <img src="https://www.svgrepo.com/show/505858/cross.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<script setup>
import ButtonDefault from './ButtonDefault.vue'

const props = defineProps({
  event: Object
})
const closePopup = (e) => {
  e.target.closest('.popup-wrapper').remove()
}
const timeConvert = (time) => {
  const newTime = new Date(time)
  return `${
    newTime.getDate().toString().length < 2
      ? '0' + newTime.getDate()
      : newTime.getDate()
  }.${
    newTime.getMonth().toString().length < 2
      ? '0' + newTime.getMonth()
      : newTime.getMonth()
  }.${newTime.getFullYear()} в ${
    newTime.getHours().toString().length < 2
      ? '0' + newTime.getHours()
      : newTime.getHours()
  }:${
    newTime.getMinutes().toString().length < 2
      ? '0' + newTime.getMinutes()
      : newTime.getMinutes()
  }`
}
</script>

<style lang="scss" scoped>
.popup-wrapper {
  position: absolute;
  backdrop-filter: blur(1px);
  inset: 0 0;
  width: 100vw;
  height: calc(100vh - 80px);
  background-color: #516b8536;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.popup-window {
  padding: 25px;
  border-radius: 10px;
  margin-top: -80px;
  position: absolute;
  width: 45%;
  background-color: #fff;
}
p {
  font-size: 16px;
  margin: 7px auto;
  text-align: left;
  font-weight: 500;
  letter-spacing: 0.6px;
}
.close {
  position: absolute;
  width: 36px;
  height: 36px;
  border: none;
  background-color: transparent;
  outline: none;
  right: 5px;
  top: 5px;
  padding: 5px;
  cursor: pointer;

  img {
    width: 100%;
  }
}
</style>

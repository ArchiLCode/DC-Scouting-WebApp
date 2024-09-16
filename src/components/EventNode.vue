<template>
  <div class="event-node">
    <h2>{{ props.event.title }}</h2>
    <p>{{ props.event.event_format }}</p>
    <ButtonDefault :linking="false" :btnText="'Открыть'" @click="openPopup" />
    <PopupEvent v-if="opened" :event="props.event" />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import ButtonDefault from './ButtonDefault.vue'
import PopupEvent from './PopupEvent.vue'
const opened = ref(false)

const openPopup = () => {
  if (!document.querySelector('.popup-wrapper')) {
    opened.value = true
  } else opened.value = false
}

console.log(opened.value, Boolean(document.querySelector('.popup-wrapper')))

watch(opened, () => {
  console.log(opened.value, Boolean(document.querySelector('.popup-wrapper')))
})

const props = defineProps({
  event: Object
})
</script>

<style lang="scss" scoped></style>

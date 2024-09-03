<template>
  <div>
    <button @click="goLink(link)" class="button">{{ props.btnText }}</button>
  </div>
</template>

<script setup>
const props = defineProps({
  btnText: String,
  link: String
})
const goLink = (link) => {
  window.open(link, '_blank')
}
</script>

<style lang="scss" scoped>
.button {
  width: 100%;
  padding: 15px 30px;
  margin: 0 auto;
  background-color: #41bd85cc;
  transition: 0.07s;
  border: none;
  letter-spacing: 0.5px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 600;
  font-family: inherit;
  box-shadow: 0px 0px 2px #41bd85cc;
  color: #f9f9f9;
  cursor: pointer;

  &:active {
    background-color: #3bd690d6;
    box-shadow: 0px 0px 5px #349469c2;
  }
}
</style>

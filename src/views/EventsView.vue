<template>
  <div class="events">
    <PopupEvent :event="eventObj" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PopupEvent from '@/components/PopupEvent.vue'

const eventObj = ref({
  event_id: '39ef836a-1286-4fe0-9dea-acea86fcc22f',
  author_tg_hash:
    '6a3a30a0123164dadb63c801b229f7afc06a230ef44ed2d5a55df0c29a2e5c11',
  title: 'string',
  time: '2024-08-28T17:01:00',
  link: 'string',
  event_format: 'Online',
  description: 'string',
  is_deleted_by_user: false
})
</script>

<style lang="scss" scoped>
.events {
  position: relative;
  height: calc(100vh - 80px);
}
</style>

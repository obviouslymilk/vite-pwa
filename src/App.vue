<script setup>
import { requestNotificationPermission } from './utils/notifications';




</script>

<template>
  <button @click="requestNotificationPermission">
    Subscribe to notifications
  </button>
</template>

<style scoped>

</style>

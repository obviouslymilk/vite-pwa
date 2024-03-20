<script setup>
import { askForNotificationPermission, displayTestNotification } from './utils/notifications';


</script>

<template>
  <button @click="askForNotificationPermission">
    Subscribe to notifications
  </button>

  <button @click="displayTestNotification">
    Send test notification
  </button>
</template>

<style scoped>
  button {
    display: block;
    margin: 0 auto 12px;
  }
</style>

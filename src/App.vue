<script setup>
import { requestNotificationPermission, sendTestNotification } from './utils/notifications';

</script>

<template>
  <button @click="requestNotificationPermission">
    Subscribe to notifications
  </button>

  <button @click="sendTestNotification">
    Send notification
  </button>
</template>

<style scoped>
  button {
    display: block;
    margin: 0 auto 12px;
  }
</style>

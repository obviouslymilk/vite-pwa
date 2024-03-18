import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore('counter', () => {
    const pushSubscription = ref({})

    function setPushSubscription(result) {
        pushSubscription.value = result
    }

    return { pushSubscription, setPushSubscription }
})
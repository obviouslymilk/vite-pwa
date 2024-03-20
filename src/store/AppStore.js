import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore('appStore', () => {
    const vapidKeys = {
        public:"BG-OinxjxvmYtxIPIwFCve5ePN0pyln_E3w8kUIGrbO145gl8fNOq1GpkiLNXxj9YlUli2MOPE50aYrxHAN7N6E",
        private:"lB2iKN0Nsn-nBAfC7Pz93JKJmiFq2Z2kayxC_T0ndRw"}

    return { vapidKeys }
})
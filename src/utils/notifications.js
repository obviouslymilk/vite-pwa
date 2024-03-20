import { useAppStore } from "../store/AppStore";

export function requestNotificationPermission() {
    new Promise(resolve => {
      Notification.requestPermission(resolve)?.then(resolve);
    }).then(permission => {
      if (permission === "granted") {
        subcribeUserToPush()
      }
    })
}

export function sendTestNotification() {
    const appStore = useAppStore()
}

function subcribeUserToPush() {
  const appStore = useAppStore()

  return navigator.serviceWorker
    .register('/dev-sw.js?dev-sw')
    .then(registration => {
      const subscribeOtpions = {
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(
          "BB3ANHlZoBdoeSqh36VHqOIwYu82G3OTv-fugCh5GGFh-vwqxAl6amb1gU3d_-ubSzdTd-h_r3RXPDgFY6vBwSM"
        ),
      }

      return registration.pushManager.subscribe(subscribeOtpions)
    }).then(pushSubscription => {
      appStore.setPushSubscription(pushSubscription)
    })
}

// Web-Push
// Public base64 to Uint
function urlBase64ToUint8Array(base64String) {
  var padding = '='.repeat((4 - base64String.length % 4) % 4);
  var base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');

  var rawData = window.atob(base64);
  var outputArray = new Uint8Array(rawData.length);

  for (var i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
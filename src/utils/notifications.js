export function requestNotificationPermission() {
    new Promise(resolve => {
      Notification.requestPermission(resolve)?.then(resolve);
    }).then(permission => {
      if (permission === "granted") {
        subcribeUserToPush()
      }
    })
}

function sendTestNotification() {
    const options = {
        body: 'This is test notification!',
        icon: 'favicon.svg'
    }

    new Notification('Test Notification', options)
}

function subcribeUserToPush() {
  return navigator.serviceWorker
    .register('/dev-sw.js?dev-sw' || '/sw.js')
    .then(registration => {
      const subscribeOtpions = {
        userVisibleOnly: true,
        applicationServerKey: null
      }

      return registration.pushManager.subscribe(subscribeOtpions)
    })
}
export function requestNotificationPermission() {
    new Promise(resolve => {
      Notification.requestPermission(resolve)?.then(resolve);
    }).then(permission => {
      if (permission === "granted") {
        sendTestNotification()
      }
    })
}

export function sendTestNotification() {
    const options = {
        body: 'This is test notification!',
        icon: 'favicon.svg'
    }

    new Notification('Test Notification', options)
}
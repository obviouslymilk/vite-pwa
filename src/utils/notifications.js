export function requestNotificationPermission() {
    Notification.requestPermission().then(result => {
      if (result === "granted") {
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
export function askForNotificationPermission() {
    Notification.requestPermission(result => {
        if (result === 'granted') {
            console.log('Notifications permissions was granted.');
        }
    })
}

export function displayTestNotification() {
    if ('serviceWorker' in navigator) {
        const options = {
            body: 'This is Test Notification',
            icon: 'favicon.svg',
            image: 'https://i.pinimg.com/564x/ea/59/60/ea59609880d2b16dc3379d7b96badfd7.jpg',
            badge: 'favicon.svg',
            tag: 'test'
        }

        navigator.serviceWorker.ready.then(
            sw => sw.showNotification('Test Notification', options)
        )
    }
}
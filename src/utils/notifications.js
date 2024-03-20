export function askForNotificationPermission() {
    Notification.requestPermission(result => {
        if (result === 'granted') {
            configurePushSubscription()
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

export function configurePushSubscription() {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
        let serviceWorkerRegistration

        navigator.serviceWorker.ready
            .then(registration => {
                serviceWorkerRegistration = registration
                return registration.pushManager.getSubscription();
            })
            .then(subscription => {
                if (subscription === null) {
                    return serviceWorkerRegistration.pushManager.subscribe({
                        userVisibleOnly: true,
                        applicationServerKey: urlBase64ToUint8Array('BG-OinxjxvmYtxIPIwFCve5ePN0pyln_E3w8kUIGrbO145gl8fNOq1GpkiLNXxj9YlUli2MOPE50aYrxHAN7N6E')
                    })
                }
            })
            .then(pushSubscription => {
                console.log(pushSubscription)
            })
    }
}

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
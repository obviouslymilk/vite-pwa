self.addEventListener('message', msg => {
    console.log(message);
})

self.addEventListener('push', event => {
    const message = event.data.text()
    const options = {
        body: message,
        icon: 'favicon.svg',
        badge: 'favicon.svg'
    }

    event.waitUntil(self.registration.showNotification(message, options))
})

self.addEventListener('periodicsync', event => {
    if (event.tag === 'get-test') {
        event.waitUntil(
            self.registration.showNotification('Новое уведомление', {
                body: 'Hello, sir!'
            }) 
        )    
    }
})
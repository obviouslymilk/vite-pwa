import { register } from "register-service-worker";

register('./sw.js', {
  registrationOptions: { scope: './' },
  async ready (registration) {
    console.log('Service worker is active.')
  },
  registered (registration) {
    console.log('Service worker has been registered.')
    navigator.permissions.query({
      name: 'periodic-background-sync'
    })
    .then(permissionStatus => {
      if (permissionStatus.state === 'granted') {
        registration.periodicSync.register('get-test', {
          minInterval: 1000 * 60 * 20
        }).then(() => {
          console.log('Periodic sync registered');
        }).catch(error => {
          console.log('Periodic Sync: ', error)
        })

      }
    })
  },
  cached (registration) {
    console.log('Content has been cached for offline use.')
  },
  updatefound (registration) {
    console.log('New content is downloading.')
  },
  updated (registration) {
    console.log('New content is available; please refresh.')
  },
  offline () {
    console.log('No internet connection found. App is running in offline mode.')
  },
  error (error) {
    console.error('Error during service worker registration:', error)
  }
})
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue' // Assuming a root App.vue component exists

// Initialize Pinia for global state management
const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')

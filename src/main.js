import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';
import './assets/styles/global.css';

// Create the Vue app
const app = createApp(App);

app.config.productionTip = false;

// Add plugins like router and store
app.use(router);
app.use(store);
app.use(i18n);


// Mount the app to the DOM
app.mount('#app');

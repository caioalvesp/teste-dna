import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createGtm } from '@gtm-support/vue-gtm';

import './assets/main.css';

const app = createApp(App);

app.use(router);

app.use(
  createGtm({
    id: 'GTM-PM4DK6XN',
    vueRouter: router
  })
);

app.mount('#app');

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';

import { createGtm } from '@gtm-support/vue-gtm';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
//import {  } from '@fortawesome/free-regular-svg-icons';
library.add(faHeart, fasHeart);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router);

app.use(
  createGtm({
    id: 'GTM-PM4DK6XN',
    vueRouter: router
  })
);

app.mount('#app');

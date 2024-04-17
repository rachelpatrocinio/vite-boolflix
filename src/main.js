import { createApp } from 'vue';
import './style/general.scss';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faStar, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';


library.add(faStar, faStarRegular, faMagnifyingGlass);

const app = createApp(App);

// registriamo il componente globalmente
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');


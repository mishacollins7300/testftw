import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import './style/theme.scss';
import './style/colors.scss';

createApp(App).use(createPinia()).use(router).mount('#app');

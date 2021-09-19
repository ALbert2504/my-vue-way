import { createApp } from 'vue';

import App from './App.vue';
import IncDecButton from './components/UI/IncDecButton.vue';

const app = createApp(App);

app.mount('#app');
app.component('inc-dec-button', IncDecButton);
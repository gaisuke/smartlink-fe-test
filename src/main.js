import Vue
// { createApp }
from 'vue'
import App from './App.vue'
import store from "./store"

// createApp(App)
// .use(store)
// .mount('#app')

new Vue({
    store,
    render: (h) => h(App),
}).$mount("#app");
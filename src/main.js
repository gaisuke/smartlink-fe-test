import Vue
// { createApp }
from 'vue'
import App from './App.vue'
import store from "./store/index"

// createApp(App)
// .use(store)
// .mount('#app')

new Vue({
    render: (h) => h(App),
    store,
}).$mount("#app");
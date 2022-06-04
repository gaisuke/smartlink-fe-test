import Vue
// { createApp }
from 'vue'
// import App from './App.vue'
import router from './routes'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
// import store from './store'

const app = Vue.createApp({
    router,
    BootstrapVue,
    IconsPlugin
})
app.mount('#app') // Vue Instance - Root component

// createApp(App)
// .use(router)
// .use(BootstrapVue)
// .use(IconsPlugin)
// .mount('#app')

// Vue.use(BootstrapVue) 
// Vue.use(IconsPlugin) 
// Vue.config.productionTip = false 

// new Vue({
//     router,
//     store,
//     render: (h) => h(App),
// }).$mount("#app");
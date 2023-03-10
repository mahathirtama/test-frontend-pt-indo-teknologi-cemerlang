import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(vuetify).mount('#app')
createApp(App).use(VueAwesomePaginate).mount('#app')
createApp(App).use(router).mount('#app')

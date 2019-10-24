// Vendors
import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'

// Router
import routes from './routes';
// Styles
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'animate.css'
// Fonts
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faCoffee, faSpinner, faEdit, faCircle, faCheck,
  faPlus, faEquals, faArrowRight, faPencilAlt, faComment
} from '@fortawesome/free-solid-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'
Vue.config.productionTip = false

library.add(
  faCoffee, faSpinner, faEdit, faCircle, faCheck,
  faPlus, faEquals, faArrowRight, faPencilAlt, faComment, fas);

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BootstrapVue);
Vue.use(VueRouter)

const router = new VueRouter({routes})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

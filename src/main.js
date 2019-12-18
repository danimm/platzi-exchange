import Vue from 'vue'
import App from './App.vue'
// Framework CSS
import '@/assets/css/tailwind.css'
// Gráficos
import Chart from 'chart.js'
import Chartkick from 'vue-chartkick'
// Loader / Spinner
import { VueSpinners } from '@saeris/vue-spinners'

import router from '@/router'
// Filters
import { dollarFilter, percentFilter } from '@/filters'

Vue.use(Chartkick.use(Chart))
Vue.use(VueSpinners)

Vue.filter('dollar', dollarFilter)
Vue.filter('percent', percentFilter)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

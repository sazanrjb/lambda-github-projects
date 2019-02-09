import Vue from 'vue'
import App from './App.vue'
import 'bulma'
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons';

Vue.config.productionTip = false

Vue.component('v-icon', Icon)

new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
// import VuelidateErrorExtractor, { templates } from "vuelidate-error-extractor";
Vue.use(Vuelidate)
// Vue.use(VuelidateErrorExtractor, {
//   messages: {
//     required: "Поле {attribute} обязательно!",
//   }
// });
// Vue.component("form-group", templates.singleErrorExtractor.foundation6);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import store from './store'
import hotelCard from '../src/components/hotelCard'
import hotelDetails from '../src/components/hotelDetails'
import pagination from '../src/components/pagination'
import hotelsListingDetails from '../src/views/hotelsListingDetails'

// components 

Vue.component('hotel-card',hotelCard);
Vue.component('hotel-details',hotelDetails);
Vue.component('pagination',pagination);
Vue.component('hotels-Listing-Details',hotelsListingDetails);


Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

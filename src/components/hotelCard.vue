<template>
  <div v-if="listings.length">
    <div v-for="(listing, key) in listings"
         :key="key"
         @click="getCardDetails(listing.id)"
         class="card flex-column">
        <div class="card-title">
          <h4>{{ listing.name }}</h4>
        </div>
        <div class="card-content flex-row">
          <img :src="listing.photo"/>
          <div class="card-text flex-column">
            <p>price per night: ${{ listing.pricePerNight }}</p>
            <p>total score: {{ listing.totalScore }}</p>
            <p>total review: {{ listing.totalReviews }}</p>
          </div>
        </div>    
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import axios from "axios";
  import { mapActions } from "vuex";

  Vue.use(axios);

  export default {
    data() {
      return {
        listings: []
      };
    },

    methods: {
      ...mapActions({
        getCardDetails: "Hotels/getCardDetails"
      }),

      getHotelListing() {
        return axios.get("http://my-json-server.typicode.com/fly365com/code-challenge/hotels")
          .then((result) => {
            this.listings = result.data;
          });
      }
    },

    created() {
      this.getHotelListing();
    }
  };
</script>

<style lang="less" scoped>
  /* I didn't do any desgin I'm just using 
  a very basic and generic less styling for this component 
  */ 
  div {
    display: flex;
    justify-content: space-between;
    margin: 9px;
    .card {
    width: 50%;
    flex-wrap: wrap;
    .card-content {
      img {
        width: 50%;
      }
    } 
    }
  }
</style>

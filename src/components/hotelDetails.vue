<template>
  <div v-if="hotel">
    <div class="card flex-column">
      <h2>{{ hotel.name }}</h2>
      <div class="card-content">
        <form>
          <p>
            For
            <input class="input-style" type="number" name="points" min="1" step="1"/>
            Nights
          </p>
        </form>
        <!--CARSOUL-->
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div v-for="(picture, key) in hotel.pictures" :key="key"
               class="carousel-item"
              :class="{'active': key === 0 }">
              <img :src="picture.photo" class="d-block w-100"/>
            </div>
          </div>
          <!--next-prev-->
          <a class="carousel-control-prev"
             href="#carouselExampleCaptions"
             role="button"
             data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next"
             href="#carouselExampleCaptions"
             role="button"
             data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <!--reviews-->
        <h2>Reviews</h2>
        <div class="card reviews">
          <!--pagination-->
           <pagination :total-pages="5"
                       :total="11"
                       :per-page="3"
                       :current-page="currentPage"
                       @pagechanged="onPageChange">
           </pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";

  export default {
    data() {
      return {
        currentPage: 1,
        picture: [],
        review: []
      };
    },
    computed: {
      ...mapGetters({
        hotel: "Hotels/hotel"
      }),
    },
    methods: {
      onPageChange(page) {
        this.currentPage = page;
      },
    
    }
  };
</script>

<style lang="less" scoped>

  /* I've used this small static less code as the page
    is not responsive and there is no mobile first desgin for it
  */
  .card {
    margin: 10px;
    h2 {
      margin: 10px;
    }
    .card-content {
      p {
        margin: 10px;
      }
      .carousel {
        width: 50%;
        margin: auto;
      }
      .input-style {
        width: 40px;
      }
    }
  }
</style>

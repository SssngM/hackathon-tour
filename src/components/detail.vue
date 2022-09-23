<template>

 <div class="detail">
    <div>
    <p>   <img :src="book.imgSrc" />  </p>
    </div>
    <div class="detail-contentWrapper">
  <h3 class="detail-title">  {{book.title}} </h3>
  <p class="detail-author">   {{book.authors}} </p>
  <p class="detail-des">   {{book.description}}</p>
    </div>
</div>
  
  <!-- {{getTheBook.title}} -->
  <!-- {{gebyId}} -->
</template>

<script>
// @ is an alias to /src

import { getVNodeBlockHelper } from '@vue/compiler-core';
import axios from 'axios'
import { fetchBookById } from "../BookApi";


export default {
  name: "DetailView",
  data: () => {
    return {
      book: {},
      loading: true,
      error: null,
    };
  },
  mounted() {
    this.fetchBookById()

    // axios
    //   .get(fetchBookById())
    //   .then(response => (this.book = response.items.id))
    //     console.log(response.items.id)
    
  },
  methods: {
    async fetchBookById() {
        const volumeId = this.$route.params.id
        const response = await fetchBookById(volumeId)
        console.log(response)
        this.book = response.volumeInfo;
    },
//   computed:{
//         getbyId() {
//             return parseInt(this.book.itmes.id)
//         },
//         getTheBook() {
//             return fetchBookById.Id.find( getTheBook =>getTheBook.id === getbyId )
//         }
//     }
    // get the id from the route url
    // i would call the book api with the id as a parameter
    // after the api call is done, set the book data
  }
};


</script>

<style lang="scss" scoped>


.detail {
    display:block;
    text-align: center;
    align-items: center;
    
}



</style>

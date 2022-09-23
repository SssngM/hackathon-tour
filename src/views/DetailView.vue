<template>
  <div class="detail">
    <div>
      <img :src="book_image.thumbnail" alt="book_image" />
    </div>
    <div class="detail-contentWrapper">
      <h3 class="detail-title">{{ this.book_info.title }}</h3>
      <p class="detail-author">
        Written By: {{ this.book_info.authors?.join(", ") }}
      </p>
      <div v-html="book_info.description"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { fetchBookById } from "../api/book";

export default {
  name: "DetailView",
  data: () => {
    return {
      book_image: {},
      book_info: {},
      price_info: {},
      loading: true,
      error: null,
    };
  },
  mounted() {
    this.getBook();
  },
  methods: {
    async getBook() {
      const volumeId = this.$route.params.id;
      try {
        const response = await fetchBookById(volumeId);
        console.log(response);
        const volumeInfo = response.volumeInfo;
        const saleInfo = response.saleInfo;
        this.book_info = volumeInfo;
        this.price_info = saleInfo;
        this.book_image = volumeInfo.imageLinks;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.detail {
  display: block;
  text-align: center;
  align-items: center;
}
</style>

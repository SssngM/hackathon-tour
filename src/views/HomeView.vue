<template>
  <div class="home">
    <homeBanner></homeBanner>
    <div class="home__container">
      <Card
        v-for="book in this.books"
        :title="book.volumeInfo.title"
        :author="book.volumeInfo.authors ? 'unknown' : book.volumeInfo.authors"
        :description="book.volumeInfo.description" 
        :imgSrc="book.volumeInfo.imageLinks.thumbnail"
        :linkToDetail="`/${book.id}/detail`"
      ></Card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import homeBanner from "@/components/banner.vue";
import Card from "../components/card.vue";
import { fetchBooksByQuery } from "../BookApi";

export default {
  name: "HomeView",
  data: () => ({
    books: [],
    loading: true,
    error: null,
  }),
  components: {
    homeBanner,
    Card,
  },
  created() {
    this.getPopularBooks();
  },
  methods: {
    async getPopularBooks() {
      try {
        const response = await fetchBooksByQuery("''", "&orderBy=newest");
        this.books = response.items;
        console.log(response.items);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  &__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>

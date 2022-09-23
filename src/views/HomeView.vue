<template>
  <div class="home">
    <homeBanner></homeBanner>
    <h2>Recently Released</h2>
    <div class="home__container">
      <Card
        v-for="book in this.books"
        :title="book.volumeInfo.title"
        :author="book.volumeInfo.authors.join(', ')"
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
import { fetchBooksByQuery } from "../api/book";

export default {
  name: "HomeView",
  data: () => ({
    books: [],
    loading: true,
    error: null,
  }),
  components: {
    Card,
    homeBanner,
  },
  created() {
    this.getPopularBooks();
  },
  methods: {
    async getPopularBooks() {
      try {
        const response = await fetchBooksByQuery("''", "&orderBy=newest");
        this.books = response.items;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  text-align: center;
  h2 {
    margin: 1rem 0 1rem 0;
  }

  &__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: 975px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 647px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>

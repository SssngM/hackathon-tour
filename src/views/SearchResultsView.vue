<template>
  <div class="search">
    <!-- get route params -->
    <homeBanner></homeBanner>
    <h1>Search Results for: {{ this.$route.query.keyword }}</h1>
    <div class="search__container">
      <Card
        v-for="book in this.books"
        :title="book.volumeInfo.title"
        :author="book.volumeInfo.authors.join(', ')"
        :description="book.volumeInfo.description"
        :imgSrc="book.volumeInfo.imageLinks.thumbnail"
        :linkToDetail="`/${book.id}/detail`"
      ></Card>
    </div>
    <div>
      <p v-if="loading !== true && books.length === 0">No Results found</p>
    </div>
  </div>
</template>

<script>
import homeBanner from "@/components/banner.vue";
import Card from "../components/card.vue";
import { fetchBooksByQuery } from "../api/book";

export default {
  name: "SearchResultsView",
  data: () => {
    return {
      books: [],
      loading: true,
      error: null,
    };
  },
  components: {
    Card,
    homeBanner
  },
  created() {
    this.getSearchResults();
  },
  methods: {
    async getSearchResults(keyword) {
      try {
        const response = await fetchBooksByQuery(keyword, "&orderBy=newest");
        if (response.items) {
          this.books = response.items;
        }
        this.loading = false;
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    const keyword = this.$route.query.keyword;
    this.getSearchResults(keyword);
  },
};
</script>

<style lang="scss" scoped>
.search {
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


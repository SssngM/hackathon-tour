<template>
  <div>
    <!-- get route params -->
    <h1>Search Results for: {{ this.$route.query.keyword }}</h1>
    <div>
      <p v-if="loading !== true && books.length === 0">No Results found</p>
    </div>
  </div>
</template>

<script>
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
  methods: {
    async getSearchResults(keyword) {
      try {
        const response = await fetchBooksByQuery(keyword);
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

<style lang="scss" scoped></style>

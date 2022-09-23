<template>
  <div class="searchbar">
    <input
      v-model="keyword"
      type="text"
      name="bookTitleKeyword"
      class="searchbar__textInput"
    />
    <router-link
      :class="{ 'searchbar__btn--disabled': keyword.length === 0 }"
      class="searchbar__btn"
      :to="`/search?keyword=${keyword}`"
      >search</router-link
    >
  </div>
</template>

<script>
export default {
  name: "appSearchBar",
  data: () => {
    return {
      keyword: "",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables";

.searchbar {
  background-color: white;
  display: flex;
  min-width: 50%;

  &__textInput {
    outline: none;
    background: none;
    border: none;
    flex: 1;
    margin: 0 0.5rem 0 0.5rem;
  }

  &__btn {
    outline: none;
    cursor: pointer;
    background: none;
    border: none;
    background-color: $color-primary;
    color: white;
    padding: 0.5rem;
    text-decoration: none;
    font-weight: 400;

    &--disabled {
      pointer-events: none;
      background-color: gray;
    }
  }
}
</style>

<template>
  <div class="searchbar">
    <input type="text" name="bookTitleKeyword" class="searchbar__textInput" />
    <button class="searchbar__btn" type="submit">search</button>
  </div>
</template>

<script>
export default {
  name: "appSearchBar",
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
  }

  &__btn {
    outline: none;
    cursor: pointer;
    background: none;
    border: none;
    background-color: $color-primary;
    color: white;
    padding: 0.5rem;
  }
}
</style>

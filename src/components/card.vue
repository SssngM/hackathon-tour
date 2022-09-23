<template>
  <div class="card">
    <div class="card__image">
      <img :src="imgSrc" alt="card-image" />
    </div>
    <div class="card__contentWrapper">
      <div class="card__content">
        <h3 class="card__title">{{ title }}</h3>
        <p class="card__author">{{ author }}</p>
        <p class="card__description">
          {{ truncateText(description) }}
        </p>
        <div class="card__btns">
          <router-link :to="linkToDetail">Read More</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bookCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imgSrc: {
      type: String,
      required: true,
    },
    linkToDetail: {
      type: String,
      required: false,
    },
  },
  methods: {
    truncateText(text) {
      return text.length > 100 ? text.substring(0, 100) + "..." : text;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  margin-left: 2rem;
  margin-top: 2rem;
  &__image {
    max-width: 150px;
    max-height: 300px;
    position: absolute;
    // bottom: 10%;
    left: 5%;
    img {
      border-radius: 0.5rem;
      width: 100%;
      height: 100%;
    }
  }

  &__contentWrapper {
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    margin-top: 1rem;
    max-width: 370px;
    text-align: right;
    padding-left: 9rem;
  }

  &__content {
    padding: 1rem;
  }

  &__title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  &__author {
    font-size: 0.8rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
  }

  &__description {
    font-size: 0.8rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
  }
}
</style>

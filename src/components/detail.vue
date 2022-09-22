<template>
    <div class ="card">
 <Card 
    imgSrc="https://images-na.ssl-images-amazon.com/images/I/91ocU8970hL.jpg"
    title="The Alchemist"
    author="Paulo Coelho"
    description="The Alchemist is a novel by Brazilian author Paulo Coelho that was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller. An allegorical novel, The Alchemist follows a young Andalusian shepherd in his journey to the pyramids of Egypt, after having a recurring dream of finding a treasure there. Influenced by mysticism, mythology, and eastern philosophy, the story features a treasure hunt, reincarnation, and philosophical allegories. The Alchemist has been translated into 80 languages and sold more than 65 million copies worldwide, and has been on The New York Times Best Seller list for more than 250 weeks."
></Card>

<div class= "card"> 
    <img :src="imgSrc" alt="card-image" />
    <h1> {{ title }}</h1>
    <p> {{ author }}</p>
    <p> {{ description }}</p>
    <!-- <Card :title="title"></Card> -->
</div>
</div>

<!-- <div>
    <div>
        <img :src="detail.imgSrc" alt="detail-image" />
    </div>
    <div>
        <h3> {{ detail.title }}</h3>
        <h4> {{ detail.author}}</h4>
        <h5> {{ detail.description}}</h5>
    </div>

</div>  -->
</template>


<script>
import Card from "../components/card.vue";
import detailData from "../assets/detaildata.js"
import { bookdata } from "../BookApi";

export default {
    name:"DetailView",
    detail : detailData,

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
  },

    components:{
        Card,
    }
};


</script>

<sytle lang="scss" scoped>


.card{

  &__image {
    max-width: 400px;
    max-height: 300px;
    // position: absolute;
    // bottom: 10%;
    // left: -25px;
    img {
      border-radius: 0.5rem;
      width: 100%;
      height: 100%;
    }
  }
}
</sytle>
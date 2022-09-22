<template>
  <div>mapdata</div>
</template>
<script>
import axios from "axios";
export default {
  name: "MapdataAPI",
  mounted() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=meow&key=AIzaSyCxlArId4GuF6iiD52Mu1II4zYJWmOXAX8&lang=en&type=tourist_attraction"
      )
      .then((response) => {
        console.log(response);
      });
  },
};
</script>

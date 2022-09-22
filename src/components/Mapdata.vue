<template>
    <div>

    mapdata

    </div>
</template>
<script>
//import Vue from 'vue'
import axios from 'axios'
//import VueAxios from 'vue-axios'
//Vue.use(VueAxios.axios)
export default {
    name: "MapdataAPI",
    mounted () {
        axios
          .get('https://maps.googleapis.com/maps/api/place/textsearch/json?query=most%20popular&key=AIzaSyCxlArId4GuF6iiD52Mu1II4zYJWmOXAX8&lang=en&location=40.7831,-73.9712&type=tourist_attraction', {headers:{'Access-Control-Allow-Origin': true}})
          .then(response => (console.warn(response)/*this.info = response)*/))
      }
};
</script>

<template>
  <div id="app">
    <h1> Take you to HIT place</h1>
    <Mapdata />
  </div>
</template>



<script>

import Mapdata from './components/Mapdata';

export default {
  name: 'App',
  components: {
    Mapdata
  }
};
</script>




<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
   <maintab></maintab>
    <router-view></router-view>
  </div>
</template>
<script>
import maintab from './components/content/maintabbar.vue'
export default {
  name:'App',
  components:{
    maintab
  }
}
</script>

<style>
@import "./assets/css/body.css";
</style>

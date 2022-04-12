<template>
    <div>
    <navbar class="homebar"><div slot="center">购物中心</div></navbar>
   <home-swiper :banner="banners"></home-swiper>
   <recommend :recommend="recommends"/>
    </div>
</template>
<script>
import HomeSwiper from './homeSwiper.vue'
import navbar from '../../components/nav-bar/Nav-Bar.vue'
import {gethome} from '../../network/home.js'
import recommend from './recommend.vue'
export default {
   name:'homebar',
   components:{
       navbar,
       recommend,
    HomeSwiper
  },
  data(){
      return {
       banners:[],
       recommends:[]
      }
  },
  created(){
  gethome().then(res=>{
   this.banners = res.data.banner.list
   this.recommends = res.data.recommend.list
   console.log(this.recommends);
   
  })
  },
}
</script>
<style>
.homebar{
    background-color: rgb(245 189 245);
    color: rgb(16, 17, 17);
    font-size:18px;
}   
     
</style>

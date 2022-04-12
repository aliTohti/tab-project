<template>
  <swiper>
            <div class="swiper-container">
    <div class="swiper-wrapper">
        
        <!-- <div class="swiper-slide" v-for="(item,index) in banner" :key="index">
            <a :href="item.link"><img :src="item.image" alt=""></a>
        </div> -->
        <div class="swiper-slide"><a :href="banner[0].link"><img :src="banner[0].image" alt=""></a></div>
        <div class="swiper-slide"><a :href="banner[1].link"><img :src="banner[1].image" alt=""></a></div>
        <div class="swiper-slide"><a :href="banner[2].link"><img :src="banner[2].image" alt=""></a></div>
        <div class="swiper-slide"><a :href="banner[3].link"><img :src="banner[3].image" alt=""></a></div>
      
        </div>
     <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        
        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
</div>
  </swiper>
</template>

<script>
import Swiper from '../../components/swiper/Swiper.vue'
export default {
    name:'homeSwiper',
 components:{
     Swiper
 },
 props:{
     banner:Array
 }
}
</script>

<style>

</style>
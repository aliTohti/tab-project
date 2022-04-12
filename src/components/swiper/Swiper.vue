<template>
<div>
  <slot></slot>
</div>
</template>

<script>
import Swiper from 'swiper'; // 注意引入的是Swiper
import 'swiper/css/swiper.min.css' // 注意这里的引入

export default {
  name: 'HelloWorld',
  mounted() {
    const mySwiper = new Swiper('.swiper-container', {
      // config...
      loop: true,   //是否循环
      speed: 500,  //切图所用的时间
      pagination: {
        el: '.swiper-pagination',   //地下小圆点
        //小圆点点击切换
        clickable :true,
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next', // 右按钮
        prevEl: '.swiper-button-prev', // 左按钮
      },
      effect: 'coverflow',
// simulateTouch : false,//禁止鼠标模拟,允许手机端
      autoplay: {
        delay: 2500,
      },
      //  on: {
    // touchStart: function(swiper,event){
    //   this.autoplay.stop();
    //   console.log('stop');
      
    // },
    // touchEnd: function(swiper,event){
    //   this.autoplay.start();
    //   console.log(11);
      
    // }
  // },
    })
//鼠标置于swiper时暂停自动切换，鼠标离开时恢复自动切换
  mySwiper.el.onmouseover = function(){
  mySwiper.autoplay.stop();
}
mySwiper.el.onmouseout = function(){
  mySwiper.autoplay.start();
}
  }
 
 
}
//鼠标覆盖停止自动切换
//   mySwiper.autoplay.stop();

//鼠标离开开始自动切换

//   mySwiper.autoplay.start();

</script>

<style>
.swiper-container {
    width: 100%;
    height: 150px;
    --swiper-pagination-color:rgba(19, 1, 8, 0.418);
}
.swiper-slide {
    text-align: center;
    line-height: 150px;
    color: #b0b0b0;
}
.swiper-slide1 {
    background: red;
}

.swiper-slide2 {
    background: blue;
}

.swiper-slide3 {
    background: yellow;
}
.swiper-wrapper img{
  width: 100%;
  height: 100%;
}
</style>

<template>
     <tab>
       <tabitem path="/home" itemcolor="pink">
         <img slot="img" src="../../assets/img/home.svg" alt="">
         <img slot="img1" src="../../assets/img/home1.svg" alt="">
         <div slot="text">首页</div>
       </tabitem>
       <tabitem path="/class" itemcolor="pink">
          <img slot="img" src="../../assets/img/class.svg" alt="">
          <img slot="img1" src="../../assets/img/class1.svg" alt="">
         <div slot="text">分类</div>
       </tabitem>
       <tabitem path="/cart" itemcolor="pink">
          <img slot="img" src="../../assets/img/cart.svg" alt="">
          <img slot="img1" src="../../assets/img/cart1.svg" alt="">
         <div slot="text">购物车</div>
       </tabitem>
       <tabitem path="/user" itemcolor="pink">
          <img slot="img" src="../../assets/img/user.svg" alt="">
          <img slot="img1" src="../../assets/img/user1.svg" alt="">
         <div slot="text">我的</div>
       </tabitem>

    </tab>
</template>
<script>
import tab from '../common/tab.vue'
import tabitem from '../common/tab-item.vue'

export default {
   name:'maintabbar',
   components:{
       tab,
    tabitem
   }
}
</script>

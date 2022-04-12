<template>
    <div class="recommend">
        <div v-for="(item,index) in recommend" :key="index" class="recommend-item">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>
<script>


export default {
   name:'recommend',
   props:{
       recommend:{
           type:Array,
           default(){
               return []
           },
       }
   }
}
</script>
<style>
 .recommend{
     display: flex;
     text-align: center;
 }
 .recommend-item{
     flex: 1;
     text-decoration: none;
 }
 .recommend-item a{
 text-decoration: none;
 color: #000;
 font-size: 14px;
 }
 .recommend-item img{
     width: 60px;
     height: 60px;
 }
</style>
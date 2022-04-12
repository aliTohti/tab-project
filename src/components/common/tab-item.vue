<template>
    <div class="tabitem" @click="itemclick" >
          <div v-if="!Active"><slot  name="img"></slot></div>
          <div v-else><slot  name="img1"></slot></div>
          <div  :style="sty"><slot name="text"></slot></div>
          <!-- :class="{active:Active}" -->
          </div>
</template>
<script>
export default {
    name:'tab-item',
    props:{
      path:String,
      itemcolor:{
        type:String,
        default:'#2c2c2c'
      }
    },
  methods:{
    itemclick(){
      this.$router.replace(this.path)
    }
  },
  computed:{
      Active(){
        return this.$route.path.indexOf(this.path)!==-1
      },
      sty(){
        return this.Active?{fontWeight:600,color:this.itemcolor}:''
      }
  }
}
</script>
<style>
  .tabitem{
          flex:1;
          text-align: center;
           height: 49px;
           font-size: 10px;
        }
        .tabitem img{
          width: 22px;
          height: 22px;
          color:red;
        }
        .active{
          color: #2c2c2c;
          font-weight: 600;
        }
</style>

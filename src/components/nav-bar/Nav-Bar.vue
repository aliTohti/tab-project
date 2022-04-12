<template>
    <div class="nav">
     <div class="nav-left"><slot name="left"></slot></div>
     <div class="nav-center"><slot name="center"></slot></div>
     <div class="nav-right"><slot name="right"></slot></div>
    </div>
</template>
<script>
export default {
  name:'nav-bar'
}
</script>

<style>
.nav{
    display: flex;
    height: 44px;
    text-align:center;
    line-height: 44px;
}
.nav-left,.nav-right{
    width: 60px;
}
.nav-center{
    flex:1;
}
</style>

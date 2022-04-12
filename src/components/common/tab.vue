<template>
    <div class="bar">
         <slot></slot> 
        </div>
     
</template>
<script>
export default {
   name:'tab',
}
</script>
<style>
 .bar{
          display: flex;
          position: fixed;
          right: 0;
          bottom: 0;
          left: 0;
          background-color: #f6f6f6;
          box-shadow: 0 -3px 11px rgba(19, 4, 4,.08);
          padding-top:9px;
          
        }
      
</style>
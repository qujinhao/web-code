<template>
  <div id="header" :style="{'position':customFixed ? 'fixed':'absolute'}">
    <slot name="left"></slot>
    {{customTitle}}
    <slot name="right"></slot>
  </div>
</template>

<script>
    export default {
      name: 'my-header',
      props:{
        'customTitle':{
          type:String,
          default: '标题'
        },
        'customFixed':{
          type: Boolean,
          default: false
        }
      }
    }
</script>

<style>
    #header{
      width: 100%;
      height: 40px;
      background: #666;
      color:white;
      text-align: center;
      line-height: 40px;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
    }
    #header button{
      height: 100%;
      padding: 0 5px;
    }
    #header button:nth-of-type(1){
      float:left;
    }
    #header button:nth-of-type(2){
      float: right;
    }
</style>

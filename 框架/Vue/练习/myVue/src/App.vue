<template>
  <div id="app">
    <my-header custom-title="通讯录" custom-fixed>
      <button slot="left" @touchstart="backBtn">返回</button>
      <button slot="right" @touchstart="homeBtn">主页</button>
    </my-header>
    <my-list :user-data="userData"></my-list>
  </div>
</template>

<script>
    var userData = [
      {'index':'A','users':[
          {'name':'a1','tel':'133333222'},
          {'name':'a2','tel':'133333221'},
          {'name':'a3','tel':'133333223'},
        ]},
      {'index':'B','users':[
          {'name':'b1','tel':'133333222'},
          {'name':'b2','tel':'133333221'},
          {'name':'b3','tel':'133333223'},
        ]},
      {'index':'C','users':[
          {'name':'c1','tel':'133333222'},
          {'name':'c2','tel':'133333221'},
          {'name':'c3','tel':'133333223'},
        ]},
      {'index':'D','users':[
          {'name':'d1','tel':'133333222'},
          {'name':'d2','tel':'133333221'},
          {'name':'d3','tel':'133333223'},
        ]},
      {'index':'E','users':[
          {'name':'e1','tel':'133333222'},
          {'name':'e2','tel':'133333221'},
          {'name':'e3','tel':'133333223'},
        ]},
      {'index':'F','users':[
          {'name':'f1','tel':'133333222'},
          {'name':'f2','tel':'133333221'},
          {'name':'f3','tel':'133333223'},
        ]},
    ];


export default {
  name: 'app',
  data () {
    return {
    userData: userData
    }
  },
  methods:{
    backBtn:function (){
      alert(123)
    },
    homeBtn:function (){
      alert(456)
    }
  }
}
</script>

<style>
    *{
      margin: 0;
      padding: 0;
    }
    li{
      list-style: none;
    }
</style>

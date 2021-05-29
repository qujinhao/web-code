<template>
  <div id="app">
      <mt-header title="初三参赛擦拭vsdvsvavqwv" fixed>
          <mt-button icon="back" slot="left">返回</mt-button>
          <mt-button icon="more" slot="right"></mt-button>
      </mt-header>

  <mt-index-list >
    <mt-index-section index="A" v-for="item in userData" :index="item.index">
        <mt-cell :title="user.name" v-for="user in item.users" @click.native="telAlert(user.tel)"></mt-cell>
    </mt-index-section>
  </mt-index-list>
  </div>
</template>

<script>
import {MessageBox} from 'mint-ui'
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
    telAlert:function (tel){
      MessageBox({
        title:'提示',
        message:'确定执行此操作',
        showCancelButton: true
      }).then(function (){
        alert(111)
      });
    }
  }
}
</script>

<style>
  *{
    margin: 0;
    padding:0;
  }

</style>

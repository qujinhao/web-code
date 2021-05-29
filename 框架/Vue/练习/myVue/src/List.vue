<template>
  <div id="list">
    <ul class="list_user" ref="listUser" @touchmove="bMove=true">
      <li v-for="item in userData">
        <p>{{item.index}}</p>
        <ul>
          <li v-for="user in item.users" @touchend="showTel(user.tel)">{{user.name}}</li>
        </ul>
      </li>
    </ul>
    <ul class="list_index" ref="listIndex">
      <li @touchstart = 'setScroll' v-for="item in userIndex">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import myAlert from "./Alert.js";

export default {
  name: 'my-list',
  props:{
    'user-data':{
      type:Array,
      default:function (){
        return []
      }
    }
  },
  data:function (){
    return {
      bMove:false
    }
  },
  computed:{
    userIndex:function (){
      return this.filterIndex(this.userData)
    }
  },
  methods:{
    filterIndex:function (data){
      var result = [];
      for(var i = 0; i< data.length; i++){
        if(data[i].index){
          result.push(data[i].index);
        }
      }
      return result
    },
    setListIndexPos: function (){
      var iH = this.$refs.listIndex.offsetHeight;
      this.$refs.listIndex.style.marginTop = -iH / 2 + 'px'
    },
    setScroll: function (ev){
      // console.log(11)
      var aP = this.$refs.listUser.getElementsByTagName('p');
      for(var i=0;i < aP.length;i++){
        if(aP[i].innerHTML == ev.target.innerHTML){
          // console.log(11)
          document.documentElement.scrollTop = aP[i].offsetTop;
          console.log( document.body.scrollTop )
        }
      }
    },
    showTel:function (tel){
      if(!this.bMove){
        myAlert({
          title:'呼叫',
          body: tel,
          confirm: function (){
            alert(1)
          },
          cancel:function (){
            alert(2);
            document.body.removeChild(document.getElementById('alert'))
          }
        })
      }
      else{
        this.bMove=false
      }
    }
  },
  mounted:function () {
    this.setListIndexPos();
  }
}
</script>

<style scoped>
  #list{
    position: relative;
    top: 40px;
    overflow: hidden;
  }
  #list .list_user li p{
    background: #ccc;
    padding-left: 10px;
  }
  #list .list_user ul li {
    height: 50px;
    line-height: 50px;
    border-bottom:1px #ccc solid ;
    padding-left: 10px;
  }
  #list .list_index{
    position: fixed;
    right: 10px;
    top:50%;
    font-size: 20px;
  }
  #list .list_index li {
    margin: 5px 0;
  }
</style>

<template>
  <div class="me-top">
    <div class="user">
      <img class="icon-user-tie" src="" alt="">
      <p>{{userinfo.phone | phoneFormat}}</p>
      <i class="icon-info"></i>
    </div>
    <div class="my-older">
      <div class="older-top">
        <h3>我的订单</h3>
        <span>查看全部</span>
      </div>
      <div class="older-bottom">
        <div class="bottom-item">
          <i class="icon-menu"></i>
          <span>待付款</span>
        </div>
        <div class="bottom-item">
          <i class="icon-distance"></i>
          <span>待分享</span>
        </div>
        <div class="bottom-item">
          <i class="icon-info"></i>
          <span>待发货</span>
        </div>
        <div class="bottom-item">
          <i class="icon-setting"></i>
          <span>待收货</span>
        </div>
        <div class="bottom-item">
          <i class="icon-shopping"></i>
          <span>待评价</span>
        </div>
      </div>
    </div>
    <div class="setting">
      <div class="setting-item">
        <i class="icon-menu"></i>
        <span>新人红包</span>
      </div>
      <div class="setting-item">
        <i class="icon-distance"></i>
        <span>多多果园</span>
      </div>
      <div class="setting-item">
        <i class="icon-tipsmoney"></i>
        <span>砍价免费拿</span>
      </div>
      <div class="setting-item">
        <i class="icon-setting"></i>
        <span>边逛边赚</span>
      </div>
      <div class="setting-item">
        <i class="icon-shopping"></i>
        <span>天天领红包</span>
      </div>
      <div class="setting-item">
        <i class="icon-tipsmoney"></i>
        <span>收货地址</span>
      </div>
      <div class="setting-item">
        <i class="icon-menu"></i>
        <span>我的评价</span>
      </div>
      <div class="setting-item">
        <i class="icon-user-tie"></i>
        <span>官方客服</span>
      </div>
      <router-link tag="div" to="/setting" class="setting-item">
        <i class="icon-setting"></i>
        <span>设置</span>
      </router-link>
    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex"
  export default {
    name: "MeTop",
    computed:{
      ...mapState(["userinfo"])
    },
    filters:{
      phoneFormat(phone) {
        let phoneArr = [...phone]
        let str = ""
        phoneArr.forEach((item,index) =>{
          if(index >= 3 && index <= 6){
            str += "*"
          }else {
            str += item
          }
        })
        return str
      }
    }

  }
</script>

<style scoped>
  .me-top{
    font-size: 14px;
  }
  .user{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding:20px;
    background-color: #ffffff;
    margin-bottom: 10px;
  }
  .user p{
    margin: 0 10px;
  }
  .user img{
    font-size: 35px;
    color: lightblue;
  }
  .user i{
    font-size: 25px;
  }
  .my-older{
    background-color: #ffffff;
  }
  .older-top{
    display: flex;
    flex-direction: row;
    padding: 0 10px;
    justify-content: space-between;
    height: 44px;
    line-height: 44px;
  }
  .older-bottom{
    display: flex;
  }
  .bottom-item{
    flex: 1;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .bottom-item i{
    font-size: 30px;
    color: #E9232C;
    margin-bottom: 5px;
  }
  .setting{
    margin-top: 10px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .setting-item{
    width: 90px;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .setting-item i{
    font-size: 30px;
    color: orange;
    margin-bottom: 5px;
  }

</style>
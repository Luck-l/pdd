<template>
  <div class="me-setting">
    <div>
      <MecommonCell left-icon="icon-menu" left-title="绑定手机号" right-title="完善我的资料" right-title-color="backgroundColor:red;borderRadius:10px" :click-cell="dealClickCell"></MecommonCell>
      <MecommonCell left-icon="icon-menu" left-title="账号与安全"  :click-cell="dealClickCell"></MecommonCell>
    </div>

    <div style="margin-top: 5px">
      <MecommonCell left-icon="icon-menu" left-title="免密支付设置" right-title="安全有保障" right-title-color="backgroundColor:lightgreen;borderRadius:10px" :click-cell="dealClickCell"></MecommonCell>
      <MecommonCell left-icon="icon-menu" left-title="免单支付" right-title="还有5次免单机会" right-title-color="color:black;opacity:0.5" :click-cell="dealClickCell"></MecommonCell>
      <MecommonCell left-icon="icon-menu" left-title="拼小圈设置" :click-cell="dealClickCell"></MecommonCell>
    </div>

    <div style="margin-top: 5px">
      <MecommonCell left-icon="icon-menu" left-title="常见问题" :click-cell="dealClickCell"></MecommonCell>
      <MecommonCell left-icon="icon-menu" left-title="意见反馈" :click-cell="dealClickCell"></MecommonCell>
    </div>

    <div style="margin-top: 5px">
      <MecommonCell left-icon="icon-menu" left-title="商家免费入驻" :click-cell="dealClickCell"></MecommonCell>
    </div>

    <div class="exit" @click="dealLogout()">
      <span>退出登陆</span>
    </div>
  </div>
</template>

<script>
  import MecommonCell from "./MecommonCell"
  import {Toast,MessageBox} from "mint-ui";
  import {mapActions} from "vuex"
  export default {
    name: "MeSetting",
    components:{
      MecommonCell
    },
    methods:{
      ...mapActions(["logout"]),
      dealClickCell(props){
        Toast({
          message: '点击了' + props,
          position: 'center',
          duration: 1000,
          className: 'toastName'
        })
      },
      dealLogout(){
        MessageBox.confirm("您确定退出码？").then(action =>{
          if("confirm" === action){
            this.logout({})
            this.$router.replace("/home")
          }
        })
      }
    }
  }
</script>

<style scoped>
  .me-setting{
    width: 100%;
    height: 100%;
    background-color: #ececec;
  }
  .toastName{
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: red !important;
  }
  .exit span{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    line-height: 40px;
    background-color: #ffffff;
    margin-top: 5px;
  }
</style>
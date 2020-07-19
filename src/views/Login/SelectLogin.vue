<template>
  <div class="select-login">
    <button class="back" @click.prevent="back()">&lt;&nbsp;返回</button>
    <div class="bottom">
      <img src="" alt="">
    </div>
    <h4>请选择登陆方式</h4>
     <router-link tag="button" to="/login">手机登陆</router-link>
  </div>
</template>

<script>
  export default {
    name: "SelectLogin",
    methods:{
      back(){
        this.$router.replace("/home")
      }
    }
  }
</script>

<style scoped>
  .select-login{
    background-color: #f5f5f5;
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .select-login button:last-child{
    width: 80%;
    height: 38px;
    background-color: purple;
    border:none;
    border-radius: 5px;
    font-size: 20px;
    color: #ffffff;
    margin-top: 30px;
  }
  .back{
    position: fixed;
    top: 10px;
    left: 10px;
    font-size: 18px;
    background-color: transparent;
    border: none;
    outline: none;
  }
  .bottom{
    position: fixed;
    top: 130px;
    left: 50%;
    margin-left: -100px;
  }
</style>
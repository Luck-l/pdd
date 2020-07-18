<template>
  <div class="select-login">
    <div class="bottom">
      <img src="" alt="">
    </div>
    <h4>请选择登陆方式</h4>
    <router-link tag="button" to="/login">手机登陆</router-link>
  </div>
</template>

<script>
  export default {
    name: "SelectLogin"
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
  .select-login button{
    width: 80%;
    height: 38px;
    background-color: purple;
    border:none;
    border-radius: 5px;
    font-size: 20px;
    color: #ffffff;
    margin-top: 30px;
  }
  .bottom{
    position: fixed;
    top: 130px;
    left: 50%;
    margin-left: -100px;
  }
</style>
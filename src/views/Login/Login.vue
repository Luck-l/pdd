<template>
  <div class="login-container">
    <div class="login-inner">
      <div class="login-header">
        <div class="login-logo">
          <img src="" alt="" width="250">
        </div>
        <div class="login-header-title">
          <a href="javascript:;" :class="{current:loginMode}" @click="dealLoginMode(true)">短信登陆</a>
          <a href="javascript:;" :class="{current:!loginMode}" @click="dealLoginMode(false)">密码登陆</a>
        </div>
      </div>
      <div class="login-content">
        <form>
<!--          短信登陆-->
          <div :class="{current:loginMode}">
            <section class="login-message">
              <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
              <button v-if="!time" class="get-verification" :class="{phone_right:phoneRight}" @click.prevent="getverifycode()">获取验证码</button>
              <button v-else disabled="disabled" class="get-verification" >已发送({{time}}s)</button>
            </section>
            <section class="login-verification">
              <input type="tel" maxlength="8" placeholder="验证码">
            </section>
            <section class="login-hint">
              温馨提示：未注册pdd账号的手机号，登陆时将自动注册，且代表已同意
              <a href="javascript:;">服务协议与隐私政策</a>
            </section>
          </div>

<!--          密码登陆-->
          <div :class="{current:!loginMode}">
            <section>
              <section class="login-message">
                <input type="tel" maxlength="11" placeholder="用户名/手机/邮箱">
              </section>
              <section class="login-verification">
                <input type="text" maxlength="8" placeholder="密码" v-if="!pwdMode">
                <input type="password" maxlength="" placeholder="密码" v-else>
                <div class="switch-show">
                  <button :class="{on:!pwdMode}" class="icon-eye"  @click.prevent="dealPwdMode(true)"></button>
                  <button :class="{on:pwdMode}" class="icon-eye-blocked" @click.prevent="dealPwdMode(false)"></button>
                </div>
              </section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="验证码">
                <img class="get_verification" src="http://localhost:3000/api/loginverify" alt="captcha">
              </section>
            </section>
          </div>
          <button class="login-submit">登陆</button>
        </form>
        <button class="login-back" @click="$router.back()">返回</button>
      </div>
    </div>
  </div>
</template>

<script>
  // import {mapState} from "vuex"

  export default {
    name: "Login",
    data(){
      return{
        loginMode:true, //true代表短信登陆
        phone:"", //手机号
        time:0, //验证码倒计时
        pwdMode:true, //true 代表密码暗文显示
        pwd:"",
      }
    },
    computed:{
      phoneRight(){
        return /^[1][3,4,5,6,7,8][0-9]{9}$/.test(this.phone)
      },

    // ...mapState(["loginverify"])
    },
    mounted() {
      // this.$store.dispatch("reqLoginVerify")
    },
    methods:{
      //登陆方式
      dealLoginMode(flag){
        this.loginMode = flag
      },
      //获取验证码
      getverifycode(){
        if(this.phoneRight){
          this.time = 60
          this.intervalId = setInterval(() =>{
            this.time --;
            if(this.time === 0){
              clearInterval(this.intervalId)
            }
          },1000)
        }
      },
      //密码显示方式
      dealPwdMode(flag){
        this.pwdMode = flag
      }
    }
  }
</script>

<style scoped>
  .login-container{
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #ffffff;
  }
  .login-inner{
    padding-top: 60px;
    width: 80%;
    margin:0 auto;
  }
  .login-logo{
    font-size: 40px;
    font-weight: bold;
    color: mediumpurple;
    text-align: center;
  }
  .login-header-title{
    padding-top: 40px;
    padding-bottom: 10px;
    text-align: center;
  }
  .login-header-title>a{
    color: #333333;
    font-size: 14px;
    padding-bottom: 4px;
  }
  .login-header-title>a:first-child{
    margin-right: 40px;
  }
  .login-header-title .current{
    color: mediumpurple;
    font-weight: 700;
    border-bottom: 2px solid mediumpurple;
  }
  .login-content>form>div{
    display: none;
  }
  .login-content>form .current{
    display: block;
  }
  .login-content>form>div input{
    width: 100%;
    height: 100%;
    padding-left: 8px;
    box-sizing: border-box;
    border: 1px solid #dddddd;
    border-radius: 4px;
    outline: 0;
    font: 400 14px Arial;
  }
  .login-content>form>div input:focus{
    border: 1px solid mediumpurple;
  }
  .login-message{
    position: relative;
    margin-top: 16px;
    height: 48px;
    font-size: 14px;
    background: #ffffff;
  }
  .get-verification{
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    border: 0;
    color: #cccccc;
    font-size: 14px;
    background: transparent;
  }
  .phone_right{
    color: mediumpurple;
  }
  .login_message{
    position: relative;
    margin-top: 16px;
    height: 48px;
    font-size: 14px;
    background: #ffffff;
  }

  .get_verification{
    position: absolute;
    top: 50%;
    right: -10px;
    transform: translateY(-50%);
    border: 0;
    color: #cccccc;
    font-size: 14px;
    background: transparent;
  }
  .login-verification{
    position: relative;
    margin-top: 16px;
    height: 48px;
    font-size: 14px;
    background: #ffffff;
  }
  .switch-show{
    position: absolute;
    right: 10px;
    top: 12px;
  }
  .switch-show button{
    border: none;
    display: none;
    outline: none;
  }
  .switch-show .on{
    display: block;
  }
  .login-hint{
    margin-top: 12px;
    color: #999999;
    font-size: 12px;
    line-height: 20px;
  }
  .login-hint a{
    color: mediumpurple;
  }
  .login-submit{
    display: block;
    width: 100%;
    height: 42px;
    margin-top: 30px;
    border-radius: 4px;
    background: mediumpurple;
    color: #ffffff;
    text-align: center;
    font-size: 16px;
    line-height: 42px;
    border: 0;
  }
  .login-back{
    display: block;
    width: 100%;
    height: 42px;
    margin-top: 15px;
    border-radius: 4px;
    background: transparent;
    border: 1px solid mediumpurple;
    color: mediumpurple;
    text-align: center;
    font-size: 16px;
    line-height: 42px;
  }
</style>
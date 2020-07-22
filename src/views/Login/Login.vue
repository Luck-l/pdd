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
              <input type="tel" maxlength="8" placeholder="验证码" v-model="code">
            </section>
            <section class="login-hint">
              温馨提示：未注册pdd账号的手机号，登陆时将自动注册，且代表已同意
              <a href="javascript:;">服务协议与隐私政策</a>
            </section>
          </div>

<!--          密码登陆-->
          <div :class="{current:!loginMode}">
            <section>
              <div class="login-message">
                <input type="tel" maxlength="11" placeholder="用户名/手机/邮箱" v-model="name">
              </div>
              <section class="login-verification">
                <input type="text" maxlength="8" placeholder="密码" v-if="!pwdMode" v-model="pwd">
                <input type="password" maxlength="" placeholder="密码" v-else v-model="pwd">
                <div class="switch-show">
                  <button :class="{on:!pwdMode}" class="icon-eye"  @click.prevent="dealPwdMode(true)"></button>
                  <button :class="{on:pwdMode}" class="icon-eye-blocked" @click.prevent="dealPwdMode(false)"></button>
                </div>
              </section>
              <section class="login_message">
                <input type="text" maxlength="6" placeholder="验证码" v-model="captcha">
                <img
                        class="get_verification"
                        src="http://localhost:3000/api/loginverify"
                        alt="captcha"
                        ref="verify"
                        @click.prevent = "getCaptcha()"
>
              </section>
            </section>
          </div>
          <button :class="{current:loginMode}" @click.prevent="login()" class="login-submit" >登陆</button>
<!--          <button :class="{current:!loginMode}" v-else @click.prevent="dealLoginMode(false)" class="login-submit">登陆</button>-->
        </form>
        <button class="login-back" @click.prevent="$router.back()">返回</button>
      </div>
    </div>
  </div>
</template>

<script>
  import {Toast} from "mint-ui"
  import {loginCode,pwdLogin} from "../../network";
  import {mapActions} from "vuex"

  export default {
    name: "Login",
    data(){
      return{
        loginMode:true, //true代表短信登陆
        phone:"", //手机号
        time:0, //验证码倒计时
        pwdMode:true, //true 代表密码暗文显示
        name:"",
        pwd:"",
        captcha:"",//验证码
        code:"", //验证码
        userInfo:{},//用户信息
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
      ...mapActions(["syncUserInfo"]),
      //登陆方式
      dealLoginMode(flag){
        this.loginMode = flag
      },
      //获取手机验证码
      getverifycode(){
        if(this.phoneRight){
          this.time = 60
          this.intervalId = setInterval(() =>{
            this.time --;
            if(this.time === 0){
              clearInterval(this.intervalId)
            }
          },1000)
          Toast({
            message:'不会发送验证码，请随意输入6位数字登陆',
            position:'bottom',
            duration:1500,
            className:'toast'
          });
        }
      },
      //刷新密码登陆验证码
      getCaptcha(){
        this.$refs.verify.src = "http://localhost:3000/api/loginverify?time" +new Date()
      },
      //密码显示方式
      dealPwdMode(flag){
        this.pwdMode = flag
      },
      //登陆
      async login(){
         if(this.loginMode) {//短信登陆
           if(!this.phone){
             Toast({
               message:'请输入手机号码',
               position:'bottom',
               duration:1500,
               className:'toast'
             });
             return;
           }else if(!this.phoneRight){
             Toast({
               message: '请输入正确的手机号码',
               position: 'bottom',
               duration: 1500,
               className: 'toast'
             })
             return;
           }
           const result = await loginCode(this.phone,this.code)
           if(result.success_code === 200){
             this.userInfo = result.message
           }else {
             this.userInfo = {
               message:"登陆失败，手机号或验证码错误!"
             }
           }
         }else { //验证码登陆
           if(!this.name){
             Toast({
               message: '请输入正确的用户名！',
               position: 'bottom',
               duration: 1500,
               className: 'toast'
             })
             return
           }else if(!this.pwd) {
             Toast({
               message: '请输入正确的密码！',
               position: 'bottom',
               duration: 1500,
               className: 'toast'
             })
             return
           }else if(!this.captcha) {
             Toast({
               message: '请输入正确的验证码！',
               position: 'bottom',
               duration: 1500,
               className: 'toast'
             })
             return
           }
           const result = await pwdLogin(this.name,this.pwd,this.captcha)
           if(result.success_code == 200){
             this.userInfo = result.message
           }else {
             this.userInfo = {
               message:"登陆失败，用户名或密码和验证码错误!"
             }
           }
         }

         if(!this.userInfo.id){ //失败
           Toast(this.userInfo.message)
         }else { //成功
           this.syncUserInfo(this.userInfo)
           this.$router.back()

         }

      }
    }
  }
</script>

<style>
  .login-container{
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #ffffff;
  }
  .toast{
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: red !important;
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
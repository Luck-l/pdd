<template>
  <div class="user-detail">
   <div class="user-detail-top">基本信息</div>
     <div class="user-detail-group">
       <div class="user-icon">
         <span>头像</span>
         <img class="icon-user-tie user" src="" alt="">
       </div>
       <div class="user-item">
         <span>手机</span>
         <span><input type="text" ></span>
       </div>
       <div class="user-item">
         <span>昵称</span>
         <span><input type="text" placeholder="未填写"></span>
       </div>
       <div class="user-item" @click="sheetVisible = true">
         <span>性别</span>
         <span>{{base_sex}}</span>
       </div>
       <div class="user-item">
         <span>常住地</span>
         <span><input type="text" placeholder="未填写"></span>
       </div>
       <div class="user-item" @click="$refs.picker.open()">
         <span>生日</span>
         <span>{{user_birthday}}</span>
       </div>
       <div class="user-item">
         <span>个性签名</span>
         <span><input type="text" placeholder="未填写"></span>
       </div>
     </div>
    <mt-actionsheet
      :actions="actions"
      v-model="sheetVisible">
    </mt-actionsheet>
    <mt-datetime-picker
            ref="picker"
            type="date"
            year-format="{value} 年"
            month-format="{value} 月"
            date-format="{value} 日"
            :start-date=startDate
            :end-date="endDate"
            @confirm="handleBirthday"
    >
    </mt-datetime-picker>
  </div>
</template>

<script>
  import { Actionsheet,DatetimePicker } from "mint-ui"
  import moment from "moment"
  import Vue from "vue"
  Vue.component(Actionsheet.name,Actionsheet)
  Vue.component(DatetimePicker.name,DatetimePicker)
  import "mint-ui/lib/style.css"
  export default {
    name: "User",
    data(){
      return{
        base_sex:"",
        user_birthday:"",
        actions:[
          {name:"男",method:this.selectSex},
          {name:"女",method:this.selectSex},
        ],
        sheetVisible:false,
        pickerVisible:false,
        startDate:new Date("1970-01-01"),
        endDate:new Date()
      }
    },
    methods:{
      selectSex(props){
        this.base_sex = props.name
      },
      handleBirthday(data){
        this.user_birthday = moment(data).format("YYYY/MM/DD")
      }
    }
  }
</script>

<style scoped>
  .user-detail{
    width: 100%;
    height: 100%;
  }
  .user-detail-top{
    width: 100%;
    height: 60px;
    line-height: 60px;
    padding-left: 10px;
    font-weight: bold;
  }
  .user-detail-group .user-icon{
    height: 60px;
    padding: 0 10px;
    background-color: #ffffff;
    border-bottom: 1px solid #e0e0e0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  /*.user-detail-group .user-icon  img{*/
  /*  width: 50px;*/
  /*  border-radius: 50%;*/
  /*}*/
  .user-detail-group .user-item{
    height: 40px;
    padding: 0 10px;
    background-color: #ffffff;
    border-bottom: 1px solid #e0e0e0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .user-detail-group .user-item input{
    border: none;
    outline: none;
    text-align: right;
  }
  .user-detail-group button{
    width: 90%;
    height: 40px;
    line-height: 40px;
    background-color: #E9232C;
    text-align: center;
    margin: 50px 5%;
    border: none;
    font-size: 16px;
    color: #ffffff;
    border-radius: 10px;
  }
  .right-title-color{
    color: #999999;
    font-size: 14px;
  }
  .user{
    font-size: 25px;
    color: lightblue;
  }
</style>
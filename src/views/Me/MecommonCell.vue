<template>
  <div class="cell" @click="clickCell(leftTitle)">
    <div class="cell-left"  :style="leftTitleColor">
      <i style="font-size: 25px" :class="leftIcon"></i>
      <span v-show="leftTitle">{{leftTitle}}</span>
    </div>
    <div class="cell-right" >
      <span :style="rightTitleColor" v-show="rightTitle" style="font-size: 14px">{{rightTitle}}</span>
      <i v-show="isShowRightArrow">&gt;</i>
    </div>
  </div>
</template>

<script>

  export default {
    name: "MecommonCell",
    props:{
      leftTitle:{type:String,default:""},
      leftIcon:{type:String,default:""},
      rightTitle:{type:String,default:""},
      leftTitleColor:{type:String,default:"#333333"},
      rightTitleColor:{type:String,default:"#666666"},
      isShowRightArrow:{type:Boolean,default:true},
      clickCell:{
        type:Function,
        default:()=>{}
      }
    },

  }
</script>

<style scoped>
  .cell{
    height: 44px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    border-bottom: 1px solid #eeeeee;
  }
  .cell-left,
  .cell-right{
    display: flex;
    align-items: center;
  }
  .cell-left,
  .cell-right i{
    margin-right: 5px;
  }
  .cell-right span{
    padding: 5px;
    color: #ffffff;
    opacity: 0.7;
    margin-right: 5px;
  }
</style>
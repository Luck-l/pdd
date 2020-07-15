<template>
  <div class="shop-container">
    <a href="#">
    <ul class="shop-list">
      <li class="shop-list-item">
        <div class="list-item-img">
          <img src="../../../../assets/img/hot-shop/shop01.jpg" alt="" width="45%" height="200px">
        </div>
       <div class="list-item-right">
         <span>
          <img src="../../../../assets/img/hot-shop/shop02.jpg" alt="" width="20%">
          <span class="list-item-title">网红同款小猪泡泡机照相机儿童少女心可充电全自动泡泡枪电动玩具</span>
        </span>
         <div class="list-item-right-bottom">
           <span class="list-item-title2">休闲玩具畅销前十</span>
           <span class="list-item-title2">立减1元</span>
           <div class="bottom">
             <span class="list-price">¥7.11</span>
             <span class="list-title">已拼10万+件</span>
             <span class="list-item-right-img">
              <img src="../../../../assets/img/hot-shop/shop03.jpg" alt="">
              <img src="../../../../assets/img/hot-shop/shop04.jpg" alt="">
            </span>
         </div>

          </div>

       </div>
      </li>
    </ul>
    </a>
  </div>
</template>

<script>
  export default {
    name: "HotShop"
  }
</script>

<style scoped>
  .shop-container{
    position: relative;
    background-color: #ffffff;
    height: 300px;
  }
  .list-item-img{
    padding:10px;
  }
  .list-item-right{
    height: 200px;
    float: right;
    position: absolute;
    top: 10px;
    right: 0;
    width: 50%;
  }
  .list-item-title{
    font-size: 16px;
    vertical-align: top;
  }
  .list-item-right-img img{
    border-radius: 50%;
    width: 35%;
  }
  .list-item-right-bottom{
    position: absolute;
    bottom: 0;
  }
  .list-item-title2{
    background-color: rgba(255,87,6,.6);
    font-size: 14px;
    margin-right: 5px;
  }
  .list-price{
    font-size: 20px;
    color: red;
    margin-right: 5px;
  }
  .list-title{
    color: #9c9c9c;
    font-weight: 400;
    font-size: 14px;
  }
  .bottom{
    display: flex;
    flex: 1;
  }
</style>
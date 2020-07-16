<template>
  <div>
    <div class="search-nav">
      <a href="" class="search-nav-icon">
        <img src="" class="icon-search" alt="">
        <span>请输入搜索内容</span>
      </a>
    </div>
  </div>
</template>



<script>

  export default {
    name: "SearchNav",

  }
</script>

<style scoped>
  .search-nav{
    height: 49px;
    width: 100%;
    background-color: #ffffff;
    border-bottom: 1px solid #cccccc;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;

  }
  .search-nav-icon{
    width: 90%;
    height: 70%;
    background-color: rgba(0,0,0,.08);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .search-nav-icon span{
    color: #aaaaaa;
    margin-left: 6px;
    font-size: 18px;
    font-weight: lighter;
  }
  .search-nav-icon img{
    color: rgba(0,0,0,.2);
  }

</style>
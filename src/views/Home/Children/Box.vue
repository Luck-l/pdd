<template>
  <div class="box">
    <p>我是box模块</p>
  </div>
</template>

<script>
  export default {
    name: "Box"
  }
</script>

<style scoped>
  .box{
    width: 100%;
    height: 100%;
    background-color: #ff8198;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
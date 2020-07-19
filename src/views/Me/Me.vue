<template>
  <div class="me">
    <div v-if="userinfo.id">
      主面板
    </div>
    <select-login v-else/>

  </div>
</template>

<script>
  import SelectLogin from "../Login/SelectLogin";
  import {mapState} from "vuex"

  export default {
    name: "Me",
    computed:{
      ...mapState(["userinfo"]),

    },
    mounted() {
    },
    methods:{
    },
    components:{
      SelectLogin
    }
  }
</script>

<style scoped>

</style>
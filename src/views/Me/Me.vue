<template>
  <div class="me">
    <div v-if="!userinfo.id">
      <select-login/>
    </div>
    <me-top  v-else></me-top>

  </div>
</template>

<script>
  import SelectLogin from "../Login/SelectLogin";
  import MeTop from "./MeTop";
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
      SelectLogin,
      MeTop
    }
  }
</script>

<style scoped>

</style>
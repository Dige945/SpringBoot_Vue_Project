<template>
  <el-container>
    <router-view></router-view>
    <!--Home style="padding-top: 10px;padding-left: 10px;padding-right: 30px"/-->
  </el-container>
</template>



<script>

export default {
  name: 'App',

  setup() {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
#Aside{
  width: 180px;
  margin-left: 0px;
}
</style>


<!-- 左边的导航栏 -->

<template>
  <el-menu
      style="width: 200px;min-height: calc(100vh - 60px)"
      router
      :default-active="$route.path"
      class="el-menu-vertical-demo">
<!--    <el-menu-item index="/user">-->
<!--      <el-icon><IconMenu /></el-icon>-->
<!--      <span>人员数据管理</span>-->
<!--    </el-menu-item>-->
    <el-sub-menu index="1">
      <template #title>系统管理</template>
      <el-menu-item index="/user">人员管理</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="/data">
      <el-icon><IconMenu /></el-icon>
      <span>数据管理</span>
    </el-menu-item>
    <el-menu-item index="/chat" >
      <el-icon><document /></el-icon>
      <span>AI聊天</span>
    </el-menu-item>
    <el-menu-item index="/405" >
      <el-icon><document /></el-icon>
      <span>不要点击我:p</span>
    </el-menu-item>
    <el-menu-item index="/404">
      <el-icon><setting /></el-icon>
      <span>未开发</span>
    </el-menu-item>
  </el-menu>
</template>
<script>
// import {Document, Location, Setting , Menu as IconMenu} from "@element-plus/icons-vue";
import {Document, Setting , Menu as IconMenu} from "@element-plus/icons-vue";

export default {
  name:"Aside",
  // components: {Setting, Document, Location,IconMenu}
  components: {Setting, Document, IconMenu}
}

</script>

<style>
#Aside{
  margin-left: 20px;
}
</style>
<template>
  <div>
    <!--    头部-->
    <el-header>
      <Header />
    </el-header>
    <el-container>

      <el-aside>
        <!--      主体-->
        <div style="display: flex">
          <Aside />
        </div>
      </el-aside>
      <!--      内容区域-->
      <router-view></router-view>
    </el-container>
  </div>
</template>

<script>

import Header from "@/components/Header.vue";
import Aside from "@/components/Aside.vue";

export default {
  name: "Layout",
  components: {
    Header,Aside,
  },
}
</script>

<style scoped>

</style>
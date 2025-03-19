<script>

import {User, Lock} from "@element-plus/icons-vue"
import request from "@/utils/request";
export default {
  name: "Login",
  components: {Lock},
  data(){
    return {
      form:{}
    }
  },
  methods:{
    login(){
      request.post("/user/login",this.form).then(res=>{
        if(res.code === '0'){
          this.$message({
            type: 'success',
            message: '登录成功'
          })
          this.$router.push('/')  //登录成功后跳转到主页
        }else{
          this.$message({
            type: 'error',
            message: res.msg
          });
        }
      })
    }
  }
}
</script>


<template>
  <div style="width: 100%; height:100vh;background-color: white;overflow: hidden">
    <div style="width: 400px;margin: 150px auto">
      <div style="color: #cccccc;font-size: 30px;text-align: center;padding: 30px 0">欢迎登录</div>
      <el-form ref="form" :model="form" size="normal" rules="rules">
        <el-form-item prop="用户名">
          <el-input prefix-icon=User v-model="form.username" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item prop="密  码">
          <el-input prefix-icon=Lock v-model="form.password"  show-password placeholder="请输入密码"/>
        </el-form-item>
        <el-form-item prop="用户名">
          <el-button type="primary" style="width: 100%" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>



<style scoped>

</style>
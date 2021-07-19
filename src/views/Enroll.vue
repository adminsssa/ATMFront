<template>
  <div id="enrollFrame">
    <el-form :model="registerForm" ref="registerForm">
      <el-row id="titlez">
        <h1 id="title_imz">欢迎注册中国银行</h1>
      </el-row>
      <el-row id="firstE">
        <el-input v-model="registerForm.name" style="width: 280px" placeholder="请输入姓名"></el-input>
      </el-row>
      <el-row id="secondE">
        <el-input v-model="registerForm.idCard" style="width:280px" placeholder="请输入身份证号码"></el-input>
      </el-row>
      <el-row id="thirdE">
        <el-input v-model="registerForm.telephone" style="width: 280px" placeholder="请输入联系电话"></el-input>
      </el-row>
      <el-row id="fourthE">
        <el-input v-model="registerForm.address" style="width: 280px" placeholder="请输入住址"></el-input>
      </el-row>
      <el-row id="fifthE">
        <el-input v-model="registerForm.cardNo" style="width: 280px" placeholder="请输入银行卡号"></el-input>
      </el-row>
      <el-row id="sixthE">
        <el-input v-model="registerForm.password" style="width: 280px" placeholder="请输入密码"></el-input>
      </el-row>
      <el-row id="seventhE">
        <el-button style="width: 280px" type="primary" @click="userRegister">注册</el-button>
      </el-row>
      <el-row id="eighthE">
        <el-button style="width: 280px" type="danger" @click="goLogin">取消注册</el-button>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";
import {userRegister} from "../api/UserInfo";

export default {
  name: "Enroll",
  data() {
    return {
      registerForm: {}
    }
  },
  methods: {
    userRegister() {
      userRegister(this.registerForm).then(res => {
        if (res.data.success) {
          this.$message({
            message: '注册成功',
            type: 'success'
          });
          this.$router.replace({path: '/'});
        } else {
          this.$message.error(res.data.msg);
        }
      })
    },

    goLogin() {
      this.$router.replace({path: '/'})
    }
  }
}

</script>

<style scoped>
@import "../css/enroll.css";
</style>

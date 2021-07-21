<template>
  <div id="enrollFrame">
    <el-form :model="registerForm" ref="registerForm" :rules="rules">
      <el-row id="titlez">
        <h1 id="title_imz">欢迎注册中国银行</h1>
      </el-row>
      <el-form-item prop="name">
        <el-input v-model="registerForm.name" style="width: 280px" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item prop="idCard">
        <el-input v-model="registerForm.idCard" style="width:280px" placeholder="请输入身份证号码"></el-input>
      </el-form-item>
      <el-form-item prop="telephone">
        <el-input v-model="registerForm.telephone" style="width: 280px" placeholder="请输入联系电话"></el-input>
      </el-form-item>
      <el-form-item prop="address">
        <el-input v-model="registerForm.address" style="width: 280px" placeholder="请输入住址"></el-input>
      </el-form-item>
      <el-form-item prop="cardNo">
        <el-input v-model="registerForm.cardNo" style="width: 280px" placeholder="请输入银行卡号"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="registerForm.passwordUser" style="width: 280px" placeholder="请输入密码"></el-input>
      </el-form-item>
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
import md5 from 'js-md5'
import {userRegister} from "../api/UserInfo";

export default {
  name: "Enroll",
  data() {
    return {
      registerForm: {
        name: null,
        idCard: null,
        telephone: null,
        address: null,
        cardNo: null,
        password: null,
        passwordUser: null
      },
      rules: {
        name: [{required: true, message: "请输入姓名", trigger: 'blur'}],
        idCard: [{required: true, message: "请输入身份证号", trigger: 'blur'}],
        telephone: [{required: true, message: "请输入联系电话", trigger: 'blur'}],
        address: [{required: true, message: "请输入住址", trigger: 'blur'}],
        cardNo: [{required: true, message: "请输入银行卡号", trigger: 'blur'}],
        passwordUser: [{required: true, message: "请输入密码", trigger: 'blur'}],
      }
    }
  },
  methods: {
    userRegister() {
      if (this.registerForm.name !== null) {
        if (this.registerForm.idCard !== null) {
          if (this.registerForm.telephone !== null) {
            if (this.registerForm.address !== null) {
              if (this.registerForm.cardNo !== null) {
                if (this.registerForm.passwordUser !== null) {
                  this.registerForm.password = md5(this.registerForm.passwordUser);
                  console.log(this.registerForm)
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
                } else {
                  this.$message.error("请输入密码");
                }
              } else {
                this.$message.error("请输入银行卡号");
              }
            } else {
              this.$message.error("请输入住址");
            }
          } else {
            this.$message.error("请输入联系电话");
          }
        } else {
          this.$message.error("请输入身份证号");
        }
      } else {
        this.$message.error("请输入姓名");
      }
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

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
      <el-form-item prop="passwordUser">
        <el-input v-model="registerForm.passwordUser" style="width: 280px" placeholder="请输入密码"
                  type="password"></el-input>
      </el-form-item>
      <el-row id="seventhE">
        <el-button style="width: 280px" type="primary" @click="userRegister('registerForm')">注册</el-button>
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
import {
  validateCardNo,
  validateIdNo,
  validateName,
  validatePassword,
  validatePhone
} from "../api/Validate";

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
        name: [{required: true, message: "请输入姓名", trigger: 'blur'}, {
          required: true,
          validator: validateName,
          trigger: 'blur'
        }],
        idCard: [{required: true, message: "请输入身份证号", trigger: 'blur'}, {
          required: true,
          validator: validateIdNo,
          trigger: 'blur'
        }],
        telephone: [{required: true, message: "请输入联系电话", trigger: 'blur'}, {
          required: true,
          validator: validatePhone,
          trigger: 'blur'
        }],
        address: [{required: true, message: "请输入住址", trigger: 'blur'}],
        cardNo: [{required: true, message: "请输入银行卡号", trigger: 'blur'}, {
          required: true,
          validator: validateCardNo,
          trigger: 'blur'
        }],
        passwordUser: [{required: true, message: "请输入密码", trigger: 'blur'}, {
          required: true,
          validator: validatePassword,
          trigger: 'blur'
        }],
      }
    }
  },
  methods: {
    userRegister(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          this.registerForm.password = md5(this.registerForm.passwordUser);
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

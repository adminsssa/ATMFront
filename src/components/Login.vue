<template>
  <div class="login-container">
    <el-form :model="user" :rules="rules2" status-icon ref="user" label-position="left" label-width="0px"
             class="demo-ruleForm login-page">
      <h3 class="title">Login</h3>
      <el-form-item prop="username">
        <el-input type="text" v-model="user.username" auto-complete="off" placeholder="银行卡号"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="user.password" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:90%;margin-left: 3%" @click="doLogin">登录</el-button>
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:90%;margin-left: 3%" @click="doenroll">注册</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
import {loginInfo} from "../api/LoginInfo";
import md5 from 'js-md5'

export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
        //为了登录方便，可以直接在这里写好用户名和密码的值
      },
      rules2: {
        username: [{required: true, message: '请输入您的账号', trigger: 'blur'}],
        password: [{required: true, message: '请输入您的密码', trigger: 'blur'}]
      },
    }
  },
  methods: {
    doLogin() {//一点击登录按钮，这个方法就会执行
      let username = this.user.username;
      let password = md5(this.user.password);
      console.log(password)
      if (username === "") {
        this.$message.error("请输入银行卡号！");
      } else {
        if (password === "") {
          this.$message.error("请输入密码！");
        } else {
          loginInfo(username, password).then(res => {
            console.log(res)
            if (res.data.success) {
              this.$message({
                message: '登录成功',
                type: 'success'
              });
              localStorage.setItem("cardId", username);
              localStorage.setItem("tokenValue", res.data.data.tokenValue);
              this.$router.replace({path: '/homepage'});
            } else {
              this.$message.error(res.data.msg);
            }
          })
        }
      }

    },
    doenroll() {
      this.$router.push("/Enroll")

    }
  },
  name: "Login"
}
</script>

<style scoped>
@import "../css/login.css";

/*#A{
background-image: url("../assets/bc.png");
}*/
</style>

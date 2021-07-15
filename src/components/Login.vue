<template>
  <el-mentfrom id="A"
               :model="user" :rules="rules2"
               status-icon
               ref="ruleForm2" >
    <div id="B">
      <div id="B1">Login</div>
        <table id="B2">
          <tr>
            <td id="username" style="width: 100px">用户名:</td>
            <td>
              <el-input id="usernameInput" v-model="user.username" placeholder="请输入用户名"></el-input>
            </td>
          </tr>
          <tr>
            <td id="password" style="width: 100px">密码:</td>
            <td>
              <el-input id="passwordInput" type="password" v-model="user.password" placeholder="请输入密码" @keydown.enter.native="doLogin"></el-input>
              <!-- @keydown.enter.native="doLogin"当按下enter键的时候也会执行doLogin方法-->
            </td>
          </tr>
          <tr>
            <!-- 占两行-->
            <td colspan="2">
              <!-- 点击事件的两种不同的写法v-on:click和 @click-->
              <!--<el-button style="width: 300px" type="primary" v-on:click="doLogin">登录</el-button>-->
              <el-button id="loginButton" style="width: 200px" type="primary" @click="doLogin">登录</el-button>
            </td>
          </tr>
        </table>
      </div>
  </el-mentfrom>

</template>

<script>
export default {
  data() {
    return {
      user:{
        username:'',
        password:'',
        //为了登录方便，可以直接在这里写好用户名和密码的值
      },
      rules2: {
        username: [{required: true, message: '请输入您的账号', trigger: 'blur'}],
        password: [{required: true, message: '请输入您的密码', trigger: 'blur'}]
      },
    }
  },
  methods:{
    doLogin(){//一点击登录按钮，这个方法就会执行
      /*alert(JSON.stringify(this.user))//可以直接把this.user对象传给后端进行校验用户名和密码*/
      this.$router.push("/homepage")
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
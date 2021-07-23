<template>
  <div id="takeFrame">
    <el-menu-form>
      <el-row id="takeLayout1">
        <h1 id="takePrompt">您的取款金额为</h1>
      </el-row>
      <el-row id="takeLayout2">
        <el-input id="takeInput" v-model="input" placeholder="金额应为100的倍数" style="width: 20vw"></el-input>
        <div id="yuan">元</div>
      </el-row>
      <el-row id="takeLayout3">
        <el-col id="takeBut1">
          <el-button type="success" icon="el-icon-success" style="width: 100%;height: 100%" v-on:click="withdraw">确定
          </el-button>
        </el-col>
        <el-col id="takeBut2">
          <el-button type="danger" icon="el-icon-circle-close" style="width: 100%;height: 100%" v-on:click="shutdown">
            取消
          </el-button>
        </el-col>
      </el-row>
    </el-menu-form>
  </div>
</template>

<script>
import axios from "axios";
import {isLogin} from "../api/LoginInfo";
import {withdraw} from "../api/DealInfo";
import {money} from "../api/Validate";

export default {
  name: "take",
  data() {
    return {
      input: ''
    }
  },
  methods: {

    withdraw() {
      if (money(this.input)) {
        isLogin(sessionStorage.getItem("cardId"), sessionStorage.getItem("tokenValue")).then(login => {
          if (login.data.success) {
            sessionStorage.setItem("tokenValue", login.data.data.tokenValue);
            withdraw(sessionStorage.getItem("cardId"), this.input, sessionStorage.getItem("tokenValue")).then(res => {
              if (res.data.success) {
                this.$alert('取款成功', '消息提示', {
                  confirmButtonText: '确定',
                  callback: action => {
                    this.$router.replace({path: '/homepage'})
                  }
                });
              } else {
                this.$message.error(res.data.msg);
              }
            })
          } else {
            this.$message.error("登录已过期，请重新登录");
            sessionStorage.setItem("cardId", null);
            sessionStorage.setItem("tokenValue", null);
            this.$router.replace({path: '/'})
          }
        })
      } else {
        this.$message.error("请输入正确金额");
      }
    },

    shutdown() {
      isLogin(sessionStorage.getItem("cardId"), sessionStorage.getItem("tokenValue")).then(login => {
        if (login.data.success) {
          sessionStorage.setItem("tokenValue", login.data.data.tokenValue);
          this.$router.replace({path: '/homepage'})//跳转页面
        } else {
          this.$message.error("登录已过期，请重新登录");
          sessionStorage.setItem("cardId", null);
          sessionStorage.setItem("tokenValue", null);
          this.$router.replace({path: '/'})
        }
      })
    }
  }
}
</script>

<style scoped>
@import "../css/take.css";
</style>

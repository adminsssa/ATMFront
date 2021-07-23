<template>
  <div id="SaveFrame">
    <el-menu-form>
      <el-row id="layout1">
        <h1 id="savePrompt">您的存款金额为</h1>
      </el-row>
      <el-row id="layout2">
        <el-input id="saveInput" v-model="input" placeholder="金额应为100的倍数" style="width: 20vw"></el-input>
        <div id="yuan">元</div>
      </el-row>
      <el-row id="layout3">
        <el-col id="saveBut1">
          <el-button type="success" icon="el-icon-success" style="width: 100%;height: 100%" v-on:click="deposit">确定
          </el-button>
        </el-col>
        <el-col id="saveBut2">
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
import {deposit} from "../api/DealInfo";
import {isLogin} from "../api/LoginInfo";
import {money} from "../api/Validate";

export default {
  name: "save",
  data() {
    return {
      input: ''
    }
  },
  methods: {

    deposit() {
      if (money(this.input)) {
        isLogin(sessionStorage.getItem("cardId"), sessionStorage.getItem("tokenValue")).then(login => {
          if (login.data.success) {
            sessionStorage.setItem("tokenValue", login.data.data.tokenValue);
            deposit(sessionStorage.getItem("cardId"), this.input, sessionStorage.getItem("tokenValue")).then(res => {
              if (res.data.success) {
                this.$alert('存款成功', '消息提示', {
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
            sessionStorage.setItem("cardId", null);
            sessionStorage.setItem("tokenValue", null);
            this.$message.error("登录已过期，请重新登录");
            this.$router.replace({path: '/'})
          }
        })
      } else {
        this.$message.error("请输入正确金额");
      }
    },
    shutdown() {
      /* document.onclick = function () {
         document.getElementById('index').style.display = 'none'
         } 关闭Div*/
      isLogin(sessionStorage.getItem("cardId"), sessionStorage.getItem("tokenValue")).then(login => {
        if (login.data.success) {
          sessionStorage.setItem("tokenValue", login.data.data.tokenValue);
          this.$router.replace({path: '/homepage'});//跳转页面
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
@import "../css/save.css";
</style>

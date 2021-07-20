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

export default {
  name: "save",
  data() {
    return {
      input: ''
    }
  },
  methods: {

    deposit() {
      if (this.input < 0) {
        this.$message.error("存款金额不能为负数");
      } else {
        isLogin(localStorage.getItem("tokenValue")).then(login => {
          if (login.data.success) {
            deposit(localStorage.getItem("cardId"), this.input, localStorage.getItem("tokenValue")).then(res => {
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
            this.$message.error("登录已过期，请重新登录");
            this.$router.replace({path: '/'})
          }
        })
      }
    },
    shutdown() {
      /* document.onclick = function () {
         document.getElementById('index').style.display = 'none'
         } 关闭Div*/
      this.$router.replace({path: '/homepage'})
    }
  }
}
</script>

<style scoped>
@import "../css/save.css";
</style>

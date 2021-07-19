<template>
  <div id="queryFrame">
    <el-menu-form>
      <el-row id="queryLayout1">
        <h1 id="queryPrompt">您的余额为</h1>
      </el-row>
      <el-row id="queryLayout2">
        <el-input id="queryInput" v-model="input" style="width: 20vw;" disabled></el-input>
        <div id="yuan">元</div>
      </el-row>
      <el-row id="queryLayout3">
        <el-col id="queryBut1">
          <el-button type="success" icon="el-icon-success" style="width: 150px;height: 50px" v-on:click="shutdown">确定
          </el-button>
        </el-col>
        <el-col id="queryBut2">
          <el-button type="danger" icon="el-icon-circle-close" style="width: 150px;height: 50px" v-on:click="shutdown">
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
import {query} from "../api/CardInfo";

export default {
  name: "Query",
  data() {
    return {
      input: ''
    }
  },
  mounted() {
    this.query()
  },
  methods: {
    query() {
      isLogin(localStorage.getItem("tokenValue")).then(login => {
        if (login.data.success) {
          query(localStorage.getItem("cardId"), localStorage.getItem("tokenValue")).then(res => {
            this.input = res.data.data.balance
          })
        } else {
          this.$message.error("登录已过期，请重新登录");
          this.$router.replace({path: '/'})
        }
      })
    },
    shutdown() {
      /* document.onclick = function () {
         document.getElementById('index').style.display = 'none'
         } 关闭Div*/
      this.$router.replace({path: '/homepage'})//跳转页面
    }
  }
}
</script>

<style scoped>
@import "../css/query.css";
</style>

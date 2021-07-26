<template>
  <div id="cancellationFrame">
    <el-menu-form>
      <el-row id="cancellationLayout1">
        <h1 id="cancellationPrompt">您确定注销吗？</h1>
      </el-row>
      <el-row id="cancellationLayout3">
        <el-col id="cancellationBut1">
          <el-button type="success" icon="el-icon-success" style="width: 100%;height: 100%" v-on:click="goLogin">确定
          </el-button>
        </el-col>
        <el-col id="cancellationBut2">
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
import {isLogin, userLogout} from "../api/LoginInfo";

export default {
  name: "Cancellation",
  data() {
    return {}
  },
  methods: {
    goLogin() {
      isLogin(sessionStorage.getItem("cardId"), sessionStorage.getItem("tokenValue")).then(login => {
        if (login.data.success) {
          sessionStorage.setItem("tokenValue",login.data.data.tokenValue);
          userLogout(sessionStorage.getItem("cardId"), sessionStorage.getItem("tokenValue")).then(res => {
            if (res.data.success) {
              sessionStorage.setItem("cardId", null);
              sessionStorage.setItem("tokenValue", null);
              this.$router.replace({path: '/'});
              this.$message({
                message: '注销成功',
                type: 'success'
              });
            } else {
              this.$message.error(res.data.msg);
            }
          })
        } else {
          this.$message.success("注销成功");
          this.$router.replace({path: '/'})
        }
      })
    },
    shutdown() {
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
@import "../css/cancellation.css";
</style>

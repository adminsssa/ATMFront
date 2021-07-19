<template>
  <div id="cancellationFrame">
    <el-menu-form>
      <el-row id="cancellationLayout1">
        <h1 id="cancellationPrompt">您确定注销吗？</h1>
      </el-row>
      <el-row id="cancellationLayout3">
        <el-col id="cancellationBut1">
          <el-button type="success" icon="el-icon-success" style="width: 150px;height: 50px" @click="goLogin">确定
          </el-button>
        </el-col>
        <el-col id="cancellationBut2">
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
import {isLogin, userLogout} from "../api/LoginInfo";

export default {
  name: "Cancellation",
  data() {
    return {}
  },
  methods: {
    goLogin() {
      let tokenValue = localStorage.getItem("tokenValue")
      isLogin(tokenValue).then(login => {
        if (login.data.success) {
          userLogout(localStorage.getItem("cardId"), tokenValue).then(res => {
            if (res.data.success) {
              localStorage.setItem("cardId", null);
              localStorage.setItem("tokenValue", null);
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
      this.$router.replace({path: '/homepage'});
    }
  }
}
</script>

<style scoped>
@import "../css/cancellation.css";
</style>

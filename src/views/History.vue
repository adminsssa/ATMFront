<template>
  <div id="historyFrame">
    <el-breadcrumb>
      <el-breadcrumb-item><i class="el-icon-date"></i>历史信息</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="container">
      <el-table style="width: 100%;" :data="dealList.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                class="table">
        <el-table-column type="index">
        </el-table-column>
        <el-table-column label="交易金额" prop="transMoney">
        </el-table-column>
        <el-table-column label="交易状态" prop="transType">
        </el-table-column>
        <el-table-column label="交易时间" prop="transDate">
        </el-table-column>
        <el-table-column label="是否成功" prop="isSuccess">
        </el-table-column>
      </el-table>
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[5,10,20,40]"
          :page-size="pageSize"
          layout="total,sizes,prev,pager,next,jumper"
          total="userList.length" class="page">
      </el-pagination>
      <el-button type="primary" @click="revert">返回</el-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {isLogin} from "../api/LoginInfo";
import {historicAll} from "../api/DealInfo";

export default {
  name: "History",
  methods: {
    handleSizeChange: function (size) {
      this.pageSize = size;
      console.log(this.pageSize)
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage;
      console.log(this.currentPage)
      console.log(this.pageSize)
    },
    handleDealList() {
      isLogin(sessionStorage.getItem("cardId"), sessionStorage.getItem("tokenValue")).then(login => {
        if (login.data.success) {
          sessionStorage.setItem("tokenValue", login.data.data.tokenValue);
          historicAll(sessionStorage.getItem("cardId"), sessionStorage.getItem("tokenValue")).then(res => {
            this.dealList = res.data.data
          })
        } else {
          sessionStorage.setItem("cardId", null);
          sessionStorage.setItem("tokenValue", null);
          this.$message.error("登录已过期，请重新登录");
          this.$router.replace({path: '/'})
        }
      })
    },
    revert(){
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
  },
  mounted() {
    this.handleDealList()
  },
  data() {
    return {
      currentPage: 1,
      pageSize: 5,
      dealList: []
    };
  }
}
</script>

<style scoped>
@import "../css/history.css";
</style>

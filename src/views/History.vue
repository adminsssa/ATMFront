<template>
  <div id="historyFrame">
    <el-breadcrumb>
      <el-breadcrumb-item><i class="el-icon-date"></i>历史信息</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="cantainer">
      <el-table style="width: 100%;" :data="dealList.slice((currentPage-1)*pageSize,currentPage*pageSize)">
        <el-table-column type="index" width="120">
        </el-table-column>
        <el-table-column label="交易金额" prop="transMoney" width="120">
        </el-table-column>
        <el-table-column label="交易状态" prop="transType" width="120">
        </el-table-column>
        <el-table-column label="交易时间" prop="transDate" width="120">
        </el-table-column>
        <el-table-column label="是否成功" prop="isSuccess" width="120">
        </el-table-column>
      </el-table>
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[5,10,20,40]"
          :page-size="pageSize"
          layout="total,sizes,prev,pager,next,jumper"
          total="userList.length">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import axios from "axios";

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
    },
    handleDealList() {
      axios({
        method: 'post',
        url: 'http://localhost:8081/dealInfo/HisoricalAll',
        params: {
          cardId: localStorage.getItem("cardId")
        },
        headers: {
          "satoken": localStorage.getItem("tokenValue")
        }
      }).then(res => {
        this.dealList = res.data.data
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

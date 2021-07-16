<template>
  <div id="historyFrame">
    <el-menu-from>
      <el-row id="history1">
        <h4>您的历史记录为</h4>
      </el-row>
      <el-row id="history2">
        <el-input id="input2" v-model="input1" disabled></el-input>
      </el-row>
      <el-row id="history3">
        <el-input id="input3" v-model="input2" disabled></el-input>
      </el-row>
      <el-row id="history4">
        <el-input id="input4" v-model="input3" disabled></el-input>
      </el-row>
      <el-row id="history5">
        <el-input id="input5" v-model="input4" disabled></el-input>
      </el-row>
      <el-row id="history6">
        <el-input id="input6" v-model="input5" disabled></el-input>
      </el-row>
      <el-row id="history7">
        <div class="block">
          <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :page-size="100"
              layout="prev, pager, next, jumper"
              :total="1000">
          </el-pagination>
        </div>
      </el-row>
    </el-menu-from>
  </div>
</template>

<script>
export default {
  name: "History",
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  data() {
    return {
      input1:"您于2021年7月17日,取款金额为500(-)",
      input2:"您于2021年5月27日,存款金额为5000(+)",
      input3:"您于2021年4月42日,取款金额为500(-)",
      input4:"您于2021年2月11日,取款金额为500(-)",
      input5:"您于2020年1月17日,取款金额为500(-)",

    };
  }
}
</script>

<style scoped>
@import "../css/history.css";
</style>
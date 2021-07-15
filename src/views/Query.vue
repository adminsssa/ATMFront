<template>
  <div id="queryFrame">
    <el-menu-form>
      <el-row id="queryLayout1">
        <h1 id="queryPrompt">您的余额为</h1>
      </el-row>
      <el-row id="queryLayout2">
        <el-input id="queryInput" v-model="input"  style="width: 20vw;"disabled></el-input><div id="yuan">元</div>
      </el-row>
      <el-row id="queryLayout3">
        <el-col id="queryBut1">
          <el-button type="success" icon="el-icon-success" style="width: 150px;height: 50px">确定</el-button>
        </el-col>
        <el-col id="queryBut2">
          <el-button type="danger" icon="el-icon-circle-close" style="width: 150px;height: 50px" v-on:click="shutdown" >取消</el-button>
        </el-col>
      </el-row>
    </el-menu-form>
  </div>
</template>

<script>
export default {
  name: "Query",
  data() {
    return {
      input: '200,000,000'
    }
  },
  methods:{
    shutdown(){
      /* document.onclick = function () {
         document.getElementById('index').style.display = 'none'
         } 关闭Div*/
      window.location.href = 'http://localhost:8080/homepage'//跳转页面
    }
  }
}
</script>

<style scoped>
@import "../css/query.css";
</style>
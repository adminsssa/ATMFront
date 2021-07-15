<template>
  <div id="takeFrame">
    <el-menu-form>
      <el-row id="takeLayout1">
        <h1 id="takePrompt">您的取款金额为</h1>
      </el-row>
      <el-row id="takeLayout2">
        <el-input id="takeInput" v-model="input" placeholder="金额应为100的倍数" style="width: 20vw"></el-input><div id="yuan">元</div>
      </el-row>
      <el-row id="takeLayout3">
        <el-col id="takeBut1">
          <el-button type="success" icon="el-icon-success" style="width: 150px;height: 50px">确定</el-button>
        </el-col>
        <el-col id="takeBut2">
          <el-button type="danger" icon="el-icon-circle-close" style="width: 150px;height: 50px" v-on:click="shutdown" >取消</el-button>
        </el-col>
      </el-row>
    </el-menu-form>
  </div>
</template>

<script>
export default {
  name: "take",
  data() {
    return {
      input: ''
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
@import "../css/take.css";
</style>
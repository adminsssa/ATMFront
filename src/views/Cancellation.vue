<template>
  <div id="cancellationFrame">
    <el-menu-form>
      <el-row id="cancellationLayout1">
        <h1 id="cancellationPrompt">您确定注销吗？</h1>
      </el-row>
      <el-row id="cancellationLayout3">
        <el-col id="cancellationBut1">
          <el-button type="success" icon="el-icon-success" style="width: 150px;height: 50px" @click="goLogin">确定</el-button>
        </el-col>
        <el-col id="cancellationBut2">
          <el-button type="danger" icon="el-icon-circle-close" style="width: 150px;height: 50px" v-on:click="shutdown" >取消</el-button>
        </el-col>
      </el-row>
    </el-menu-form>
  </div>
</template>

<script>
export default {
  name: "Cancellation",
  data() {
    return {
    }
  },
  methods:{
    goLogin(){
      /* document.onclick = function () {
         document.getElementById('index').style.display = 'none'
         } 关闭Div*/
      window.location.href = 'http://localhost:8080'//跳转页面
    },
    shutdown(){

      let routeData = this.$router.resolve({
        path: `homepage`,
      });
      window.open(routeData.href,  'http://localhost:8080/homepage');
    }
  }
}
</script>

<style scoped>
@import "../css/cancellation.css";
</style>
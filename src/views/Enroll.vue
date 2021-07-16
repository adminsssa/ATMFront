<template>
  <div id="enrollFrame">
    <el-menu-from>
      <el-row id="titlez">
        <h1 id="title_imz">欢迎注册中国银行</h1>
      </el-row>
      <el-row id="firstE">
        <el-input v-model="input" style="width: 280px" placeholder="请输入姓名"></el-input>
      </el-row>
      <el-row id="secondE">
        <el-input v-model="input" style="width:280px" placeholder="请输入身份证号码"></el-input>
      </el-row>
      <el-row id="thirdE"><el-input v-model="input" style="width: 280px" placeholder="请输入联系电话"></el-input></el-row>
      <el-row id="fourthE"><el-input v-model="input" style="width: 280px" placeholder="请输入住址"></el-input></el-row>
      <el-row id="fifthE"><el-input v-model="input" style="width: 280px" placeholder="请输入银行卡号"></el-input></el-row>
      <el-row id="sixthE"><el-input v-model="input" style="width: 280px" placeholder="请输入密码"></el-input></el-row>
      <el-row id="seventhE">  <el-button style="width: 280px" type="primary">注册</el-button></el-row>
      <el-row id="eighthE">  <el-button style="width: 280px" type="danger" @click="goLogin">取消注册</el-button></el-row>
    </el-menu-from>
  </div>
</template>

<script>
export default {
  name: "Enroll",
  data() {
    return {
    }
  },
  methods:{
    goLogin(){
      this.$router.replace({path:'/'})
    }
  }
}

</script>

<style scoped>
@import "../css/enroll.css";
</style>
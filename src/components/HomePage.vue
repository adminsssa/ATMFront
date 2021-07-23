<template>
  <div id="Frame">
    <el-menu-from>
      <el-row id="title">
        <h1 id="title_im">welcome useing bank of China!</h1>
      </el-row>
      <el-row id="first">
        <div id="index" style="position:absolute; z-index:2;">
          <router-view></router-view>
        </div>
        <el-col id="save">
          <el-button id="saveBut" type="success" style="width: 200px; height:60px" plain @click="goSave">存钱</el-button>
        </el-col>
        <el-col id="take">
          <el-button id="takeBut" type="success" style="width: 200px; height:60px" plain @click="goTake">取钱</el-button>
        </el-col>
      </el-row>
      <el-row id="second">
        <el-col id="history">
          <el-button id="historyBut" type="info" style="width: 200px; height:60px" plain @click="goHistory">历史记录
          </el-button>
        </el-col>
        <el-col id="query">
          <el-button id="queryBut" type="success" style="width: 200px; height:60px" plain @click="goQuery">查询余额
          </el-button>
        </el-col>
      </el-row>
      <el-row id="third">
        <el-col id="cancellation">
          <el-button id="cancellationBut" type="danger" style="width: 200px; height:60px" plain @click="goCancellation">
            注销
          </el-button>
        </el-col>
      </el-row>
      <el-row id="prompt">
        <span id="prompt_text">一、客户忘记银行卡密码，连续输入错误密码3次，ATM自动吞卡;二、ATM发生故障，或银行工作人员忘记向ATM内放置现金;三、银行卡已消磁，客户由于不知情而将银行卡插入ATM，银行卡被吐出，客户再次插入后ATM吞卡;四、客户取款后，忘记按取卡按钮，超时导致ATM自动吞卡;五、客户按下取卡按钮后，卡在取卡口没有被及时取出，超时导致ATM自动吞卡;六、银行卡内资金不足，客户强行操作造成吞卡。客户被吞卡后，各金融机构的保管期限和处理方式不尽相同。现行《银行卡业务管理办法》(1999年1月5日)没有对ATM吞卡后金融机构的处理方式作出明确规定。</span>
      </el-row>
    </el-menu-from>
  </div>
</template>

<script>
import {isLogin} from "../api/LoginInfo";

export default {
  name: "HomePage",
  methods: {
    goSave() {
      isLogin(sessionStorage.getItem("cardId"), sessionStorage.getItem("tokenValue")).then(login => {
        if (login.data.success) {
          //点击跳转至上次浏览页面
          // this.$router.go(-1)
          //指定跳转地址
          sessionStorage.setItem("tokenValue", login.data.data.tokenValue);
          this.$router.replace({path: '/Save'})
        } else {
          this.$message.error("登录已过期，请重新登录");
          sessionStorage.setItem("cardId", null);
          sessionStorage.setItem("tokenValue", null);
          this.$router.replace({path: '/'})
        }
      })
    },
    goTake() {
      isLogin(sessionStorage.getItem("cardId"), sessionStorage.getItem("tokenValue")).then(login => {
        if (login.data.success) {
          sessionStorage.setItem("tokenValue", login.data.data.tokenValue);
          this.$router.replace({path: '/Take'})//跳转页面
        } else {
          this.$message.error("登录已过期，请重新登录");
          sessionStorage.setItem("cardId", null);
          sessionStorage.setItem("tokenValue", null);
          this.$router.replace({path: '/'})
        }
      })
    },
    goQuery() {
      isLogin(sessionStorage.getItem("cardId"), sessionStorage.getItem("tokenValue")).then(login => {
        if (login.data.success) {
          sessionStorage.setItem("tokenValue", login.data.data.tokenValue);
          this.$router.replace({path: '/Query'})//跳转页面
        } else {
          this.$message.error("登录已过期，请重新登录");
          sessionStorage.setItem("cardId", null);
          sessionStorage.setItem("tokenValue", null);
          this.$router.replace({path: '/'})
        }
      })
    },
    goCancellation() {
      isLogin(sessionStorage.getItem("cardId"), sessionStorage.getItem("tokenValue")).then(login => {
        if (login.data.success) {
          sessionStorage.setItem("tokenValue", login.data.data.tokenValue);
          this.$router.replace({path: '/Cancellation'})//跳转页面
        } else {
          this.$message.error("登录已过期，请重新登录");
          sessionStorage.setItem("cardId", null);
          sessionStorage.setItem("tokenValue", null);
          this.$router.replace({path: '/'})
        }
      })
    },
    goHistory() {
      isLogin(sessionStorage.getItem("cardId"), sessionStorage.getItem("tokenValue")).then(login => {
        if (login.data.success) {
          sessionStorage.setItem("tokenValue", login.data.data.tokenValue);
          this.$router.replace({path: '/History'})//跳转页面
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
@import "../css/homePage.css";
</style>

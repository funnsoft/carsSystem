<template>
  <div id="findPwd">
    <div class="header clearfix">
      <a class="back" @click="history.go(-1)"></a><!--返回上一页-->
      <a class="right"></a><!--保存按钮-->
      <a class="title">忘记密码</a>
    </div>
    <ul class="infolist mt53">
        <li class="bor-bt clearfix">
            <label>手机号</label><input type="text" name="phoneNumber" v-model="phoneNumber" placeholder="请输入手机号" value="">
        </li>
        <li class="bor-bt clearfix">
            <label>验证码</label>
            <input type="text" name="phoneCode" v-model="phoneCode" placeholder="请输入验证码" value="">
            <a class="getCode" @click="getCode()">获取验证码</a>
        </li>
        <li class="bor-bt clearfix">
            <label>新密码</label><input type="text" name="newPwd" v-model="newPwd" placeholder="请输入密码" value="">
        </li>
        <li class="clearfix">
            <label>确认密码</label><input type="text" name="newPwd2" v-model="newPwd2" placeholder="请输入密码" value="">
        </li>
    </ul>
      <input type="button" class="savebtn" name="findPwd" @click="findPwd()"  value="确认">
  </div>
</template>
<script>
    import {sysConfig} from '../constants/sysConfig'
    export default {
        data() {
            return {
                phoneNumber: '',
                phoneCode: '',
                newPwd: '',
                newPwd2: '',
                msg: ''
            }
        },
        methods: {
            getCode(){

            },
            findPwd(){

            }
        },
        created(){

        },
        watch: {
        },
        components: {
        }
    }
</script>
<style lang="less" scoped>
  #findPwd{
      width: 100%;
      margin:0 auto;
      background: #ebebeb;
      margin-bottom: 1.83rem;
  }
  .header {
      padding: 0 .4rem;
      height: 1.46rem;
      line-height: 1.46rem;
      position: relative;
      background-color:#f6754b;
      border-bottom:1px solid #c7c7c7;
      .back {
        display: inline-block;
        float: left;
        width: .26rem;
        height: .48rem;
        margin-top: .49rem;
        background: url("../assets/images/btn-back.png") no-repeat top left;
        background-size: 100%;
      }
      .title{
        display: block;
        font-size: .61rem;
        line-height: 1.46rem;
        text-align: center;
        width: 100%;
        color: #fff;
      }
      .right {
        display: inline-block;
        float: right;
        width: .47rem;
        height:.48rem;
        margin-top: .49rem;

      }
  }
  .infolist {
      background-color:#fff;
      li{
          font-size:.43rem;
          color:#a2a2a2;
          border-bottom:1px solid #ebebeb;
          padding: 0 .4rem;
          height:1.3rem;
          line-height: 1.3rem;
          label{
              display: inline-block;
              width: 2rem;
          }
          input{
            width: 45%;
            text-align: left;
            font-size: .38rem;
            border:0;
            outline: none;
            display: inline-block;
          }
          .getCode{
              float: right;
              display: inline-block;
              border: 1px solid #f6754b;
              padding: 0 .3rem;
              color: #f6754b;
              font-size: .37rem;
              border-radius: .12rem;
              height: .8rem;
              line-height: .8rem;
              margin-top: .25rem;
          }
      }
      .formbox{
          label{
            display: inline-block;
            width: 2.6rem;
            color: #a2a2a2;
          }
          input{
            width: 60%;
            float: right;
          }
      }
  }
  .savebtn{
      height:1.3rem;
      background-color: #f6754b;
      color: #fff;
      text-align: center;
      line-height: 1.3rem;
      width: 100%;
      position: fixed;
      bottom: 0;
      border:none;
      font-size:.5rem;
  }
</style>

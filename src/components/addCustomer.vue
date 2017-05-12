<template>
  <div id="addCustomer">
      <div class="header clearfix">
          <router-link to="/home"><a class="back"></a></router-link><!--返回主页-->
          <a class="title">添加申请人</a>
          <a class="right"></a><!--登出-->
      </div>
      <ul class="formbox">
          <li class="mt53 bor-bt clearfix">
              <label>借款人姓名</label><input type="text" name="username" v-model="username" placeholder="请输入姓名" value="">
          </li>
          <li class="clearfix">
              <label>手机号码</label><input type="text" name="usertel" v-model="usertel" placeholder="请输入手机号码" value="">
          </li>
          <li class="mt53 bor-bt clearfix">
              <label>身份证号</label><input type="text" name="userid" v-model="userid" placeholder="请输入身份证号" value="">
          </li>
          <li class="bor-bt clearfix">
              <label>开户银行</label><input type="text" name="userbank" v-model="userbank" placeholder="请输入开户银行" value="">
          </li>
          <li class="clearfix">
              <label>银行卡号</label><input type="text" name="usercardnum" v-model="usercardnum" placeholder="请输入银行卡号" value="">
          </li>
      </ul>
      <input type="button" class="savebtn" name="customInfo" @click="checkform()"  value="保存">
  </div>
</template>
<script>
    import checkUid from '../common/checkUid'   //身份证号验证
    export default {
        data() {
            return {
                username: '',
                usertel: '',
                userid: '',
                userbank: '',
                usercardnum: ''
            }
        },
        methods: {
            checkform(){
                var myReg = /^[\u4e00-\u9fa5]+$/; //借款人姓名正则
                var myTel = /^1[3|4|5|8]\d{9}$/; //手机号正则
                var num = /^\d*$/;  //银行卡号全数字
                var strBin = "10,18,30,35,37,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,58,60,62,65,68,69,84,87,88,94,95,98,99";//银行卡号开头6位
                if (this.username == '' || this.username == null){
                    alert("借款人姓名不能为空！");
                    return false;
                };
                if( !myReg.test(this.username) || this.username.length < 2 || this.username.length >6 ){
                    alert("借款人姓名格式不正确！");
                    return false;
                };
                if(this.usertel == '' || this.usertel == null){
                    alert("手机号码不能为空！");
                    return false;
                };
                if( !myTel.test(this.usertel)){
                    alert("手机号码格式不正确！");
                    return false;
                };
                if(!checkUid(this.userid)){
                    return false;//判断身份证号格式
                };
                if(this.userbank == '' || this.userbank == null){
                    alert("开户银行不能为空！");
                    return false;
                };

                if(this.usercardnum == '' || this.usercardnum == null){
                    alert("银行卡号不能为空！");
                    return false;
                }
                if(!num.exec(this.usercardnum)) {
                    alert("银行卡号必须全为数字");
                    return false;
                }
                if(this.usercardnum.length < 16 || this.usercardnum.length > 19) {
                    alert("银行卡号长度必须在16到19之间");
                    return false;
                }
                if(strBin.indexOf(this.usercardnum.substring(0, 2)) == -1) {
                    alert("银行卡号开头6位不符合规范");
                    return false;
                }else{
                    this.$router.push({path:'/account'});
                }

            },


    }
}
</script>
<style lang="less" scoped>
    #addCustomer{
        width: 100%;
        margin:0 auto;
        background: #ebebeb;
    }
    .header {
        padding: 0 .4rem;
        height: 1.46rem;
        line-height: 1.46rem;
        position: relative;
        background-color:#f6754b;
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
            width: .26rem;
            height: .6rem;
            margin-top: .43rem;
        }
    }
    .formbox{
        li{
            width: 100%;
            background-color: #fff;
            padding:0 .4rem;
            height:1.35rem;
            line-height:1.35rem;
            box-sizing:border-box;
            label{
                display: inline-block;
                width: 2.6rem;
                font-size:.43rem;
                color: #a2a2a2;
            }
            input{
                width: 4.6rem;
                font-size: .37rem;
                border: none;
                outline: none;
                height:1.3rem;
                line-height:1.35rem;
                float: right;
                text-align: right;
                display: inline-block;
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

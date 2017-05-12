<template>
  <div id="custAccount">
      <div class="header clearfix">
          <a class="back" href="javascript:history.go(-1)"></a><!--返回上一页-->
          <a class="title">资料详情</a>
          <a class="right">未申请</a><!--状态 已撤销 申请中-->
      </div>
      <div class="custinfo">
        <p class="clearfix"><i class="lname">姓名：李李李</i><i class="ltel">联系方式：13588156789</i></p>
        <p>登记日期：2017-01-01</p>
        <!--<p class="num">申请单号：*************</p>-->
      </div>
      <div class="infolist">
        <ul>

            <li class="listcont">
                <router-link to="/borrowingInfo">
                <em class="icon"><img src="../assets/images/icon/icon-borrowing.png" width="100%"></em>
                <i>借款信息（0/15）</i>
                </router-link>
            </li>
            <li class="listcont">
                <router-link to="/customerInfo">
                <em class="icon"><img src="../assets/images/icon/icon-customer.png" width="100%"></em>
                <i>客户资料（0/11）</i>
                </router-link>
            </li>

            <li class="listcont">
                <router-link to="/carInfo">
                <em class="icon"><img src="../assets/images/icon/icon-car.png" width="100%"></em>
                <i>车辆信息（1/11）</i>
                </router-link>
            </li>
            <li class="listcont">
                <router-link to="/operatorInfo">
                <em class="icon"><img src="../assets/images/icon/icon-operator.png" width="100%"></em>
                <i>运营商验证</i>
                </router-link>
            </li>
            <!--以下三个未开通功能-->
            <li class="listcont">
                <em class="icon"><img src="../assets/images/icon/icon-learning.png" width="100%"></em>
                <i>学信网验证</i>
            </li>
            <li class="listcont">
                <em class="icon"><img src="../assets/images/icon/icon-fund.png" width="100%"></em>
                <i>公积金验证</i>
            </li>
            <li class="listcont">
                <em class="icon"><img src="../assets/images/icon/icon-security.png" width="100%"></em>
                <i>社保验证</i>
            </li>
        </ul>
      </div>







      <input type="button" class="savebtn" name="customApply" @click="checkform()"  value="提交申请">
  </div>
</template>
<script>

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
            //提交申请
            checkform(){

            }
        }
    }
</script>
<style lang="less" scoped>
    #custAccount{
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
            line-height: inherit;
            font-size: .48rem;
            color: #fff;
            margin-top: -1.46rem;
        }
    }
    .custinfo{
        padding:.54rem .4rem;
        background-color:#f6754b;
        font-size: .43rem;
        color: #fff;
        p{
            line-height: .55rem;
            margin-top:.32rem;
            .lname{
                float: left;
            }
            .ltel{
                float: right;
            }
        }
        p.num{
            font-size: .38rem;
        }
        p:first-child{
            margin-top:0;
        }

    }
    .infolist{
        background-color: #fff;
        .listcont{
            padding:.4rem;
            a{
                display: block;
            }
            .icon{
                display: inline-block;
                width: .48rem;
                height:.43rem;
                margin-right:.23rem;
            }
            i{
                font-size: .44rem;
                color: #a2a2a2;
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

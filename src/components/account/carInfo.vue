<template>
  <div class="carInfo">
      <div class="header clearfix">
          <a class="back" @click="history.go(-1)"></a><!--返回上一页-->
          <a class="right"></a><!--保存按钮-->
          <a class="title">借款信息</a>
      </div>
      <div class="infolist clearfix">
          <ul class="formbox clearfix">
              <li class="bor-bt clearfix">
                  <label>车辆所有人</label><input type="text" name="carname" v-model="carname" placeholder="请输入姓名" value="">
              </li>
              <li class="clearfix">
                  <label>车辆品牌型号</label><input type="text" name="cartype" v-model="cartype" placeholder="请输入品牌型号" value="">
              </li>
              <li class="bor-bt clearfix">
                  <label>车辆号码</label><input type="text" name="carid" v-model="carid" placeholder="请输入车牌号" value="">
              </li>
              <li class="select clearfix">
                  <label>用车属地</label>
                  <span class="select_box clearfix">
                      <a class="selectbtn" href="javascript:;" @click="show = true">{{result.province.name}} {{result.city.name}} {{result.area.name}}</a>
                      <vue-area :show="show" @select-submit="handleAreaSelect"></vue-area>
                  </span>
              </li>
              <li class="clearfix">
                  <label>评估价</label><input type="text" name="carPrice" v-model="carPrice" placeholder="请输入金额" value="" onkeyup="value=value.replace(/[^\d.]/g,'')">
              </li>
              <li class="select clearfix">
                  <label>购买时间（最近）</label>
                  <span class="select_box clearfix">
                      <!--<a class="selectbtn">-->

                      <!--</a>-->
                      <input type="date" name="buydate" v-model="buydate" value="">
                      <!--<date-picker :date="startTime" :option="option" :limit="limit"></date-picker>-->

                  </span>
              </li>
              <li class="select clearfix">
                  <label>交强险到期时间</label>
                  <span class="select_box clearfix">
                      <!--<a class="selectbtn"  @click="showFlagList"></a>-->
                      <input type="date" name="insuranceDate1" v-model="insuranceDate1" value="">
                  </span>
              </li>
              <li class="select clearfix">
                  <label>商业险到期时间</label>
                  <span class="select_box clearfix">
                      <!--<a class="selectbtn">{{flagCode}}</a>-->
                      <input type="date" name="insuranceDate2" v-model="insuranceDate2" value="">
                  </span>
              </li>
              <li class="select clearfix">
                  <label>年检到期时间</label>
                  <span class="select_box clearfix">
                      <!--<a class="selectbtn" v-model="flagCode"></a>-->
                      <input type="date" name="yearlyInspection" v-model="yearlyInspection" value="">
                  </span>
              </li>
              <li class="select mt53 clearfix">
                  <label>购买方式</label>
                  <span class="clearfix">
                    <input type="radio" name="buytype" value="0" class="radio" id="buytype1" checked="checked"/><label for="buytype1" class="radio">全款</label>
                    <input type="radio" name="buytype" value="1" class="radio" id="buytype2" style="margin-left:.55rem"/><label for="buytype2" class="radio">按揭</label>
                </span>
              </li>
              <li class="clearfix">
                  <label>按揭银行</label><input type="text" name="mortgageBank" v-model="mortgageBank" placeholder="请输入银行名称" value="" maxlength="8" minlength="4">
              </li>
              <li class="clearfix">
                  <label>按揭金额</label><input type="text" name="mortgageMoney" v-model="mortgageMoney" placeholder="请输入金额" value="" onkeyup="value=value.replace(/[^\d.]/g,'')">
              </li>
              <li class="clearfix">
                  <label>按揭期限</label><input type="text" name="mortgageTime" v-model="mortgageTime" placeholder="请输入期限" value="" onkeyup="value=value.replace(/[^\d.]/g,'')">
              </li>
              <li class="clearfix">
                  <label>剩余尾款</label><input type="text" name="mortgageBeleft" v-model="mortgageBeleft" placeholder="请输入金额" value="" onkeyup="value=value.replace(/[^\d.]/g,'')">
              </li>
              <li class="clearfix">
                  <label>月还款额</label><input type="text" name="monthlyRepay" v-model="monthlyRepay" placeholder="请输入金额" value="" onkeyup="value=value.replace(/[^\d.]/g,'')">
              </li>
              <li class="clearfix">
                  <label>垫资天数</label><input type="text" name="payforDay" v-model="payforDay" placeholder="请输入天数" value="" onkeyup="value=value.replace(/[^\d.]/g,'')">
              </li>
              <li class="clearfix">
                  <label>垫资金额</label><input type="text" name="payforMoney" v-model="payforMoney" placeholder="请输入金额" value="" onkeyup="value=value.replace(/[^\d.]/g,'')">
              </li>
              <li class="clearfix">
                  <label>垫资费用</label><input type="text" name="payforCost" v-model="payforCost" placeholder="请输入金额" value="" onkeyup="value=value.replace(/[^\d.]/g,'')">
              </li>
              <li class="clearfix">
                  <label>垫资费用合计</label><input type="text" name="payforTotal" v-model="payforTotal" placeholder="请输入金额" value="" onkeyup="value=value.replace(/[^\d.]/g,'')">
              </li>
          </ul>
      </div>
      <input type="button" class="savebtn" name="customApply" @click="checkform()"  value="保存">
  </div>
</template>
<script>
import vueArea from '../public/vue-area.vue'
export default {
    components: {
        vueArea
    },
    data() {
        return {
            carname: '',
            cartype: '',
            carid: '',
            carPrice: '',
            result: {
                province: '省',
                city: '市',
                area: '区'
            },
            show: false,
            flagList:[
                {number:"未婚"},
                {number:"已婚"},
                {number:"已婚已育"},
                {number:"离异"}

            ],
            flagDic:'',
            isShowFlagList: false,
            flagCode:'',
            isA: true,
            mortgageBank:'',
            mortgageMoney: '',
            mortgageTime: '',
            mortgageBeleft: '',
            monthlyRepay: '',
            payforDay:'',
            payforMoney:'',
            payforCost:'',
            payforTotal:'',
            buydate:'',
            insuranceDate1 :'',
            insuranceDate2 :'',
            yearlyInspection :'',
            insuranceDate4 :''
        }
    },
    methods: {
        showFlagList: function () {
            this.isShowFlagList = !this.isShowFlagList;
            this.isA = !this.isA;
        },
        getDataNumber: function (number) {
            this.isShowFlagList = !this.isShowFlagList;
            this.flagCode = number;

            console.log(this.isShowFlagList);
        },
        handleAreaSelect(result){
            console.log(result)
            this.show = false;
            this.result = result;
        },

        //提交申请
        checkform(){

        }
    }
}
</script>
<style lang="less" scoped>
    .carInfo{
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
            background: url("../../assets/images/btn-back.png") no-repeat top left;
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
            background: url("../../assets/images/btn-save.png") no-repeat top left;
            background-size: 100%;
            margin-top: .49rem;

        }
    }
    .infolist {
        .formbox{
            label{
                display: inline-block;
                width: auto;
                color: #a2a2a2;
            }
            input{
                width: 60%;
                float: right;
            }
        }
        ul{
            margin-top: .53rem;
            li{
                font-size:.43rem;
                color:#a2a2a2;
                border-bottom:1px solid #ebebeb;
                padding: .44rem .4rem;
                background-color:#fff;
                input{
                    text-align: right;
                    font-size: .38rem;
                    border:0;
                    outline: none;
                    display: inline-block;
                }
            }
            .select{
                position: relative;
                span{
                    float: right;
                    input[type='radio'].radio {
                        opacity: 0;
                        display: inline-block;
                        width: .85rem;
                        float: none;
                    }
                    label.radio {
                        /*width: .75rem;*/
                        /*min-height: .68rem;*/
                        display: inline-block;
                        background: url("../../assets/images/btn-check.png") no-repeat;
                        margin: 0;
                        margin-left: -.85rem;
                        padding-left: .8rem;
                    }
                    input[type='radio'].radio:checked + .radio {
                        /*width: .75rem;*/
                        background: url("../../assets/images/btn-checked.png") no-repeat;
                        display: inline-block;
                    }
                    input[type='text']{
                        width: 100%;
                    }
                }
                .select_box{
                    display: block;
                    width: 60%;
                    height: .45rem;
                    text-align: right;
                    input[type= 'date']{
                        width: 100%;
                        border: none;
                        color: #a2a2a2;
                        background: url("../../assets/images/btn-next.png") no-repeat center right;
                        box-sizing: border-box;
                        background-size: .19rem .35rem;
                    }
                    ::-webkit-calendar-picker-indicator{
                        border:none;
                        color: #fff;
                        background: #fff;
                    }
                    ::-webkit-inner-spin-button {
                        visibility: hidden;
                    }
                }
                .selectbtn{
                    display: block;
                    background: url("../../assets/images/btn-next.png") no-repeat center right;
                    background-size: .19rem .35rem;
                    padding-right: .8rem;
                    color: #a2a2a2;
                    width: 100%;
                    height: 100%;
                    box-sizing: border-box;
                }
                .selectbtns{
                    display: block;
                    background: url("../../assets/images/btn-next2.png") no-repeat center right;
                    background-size: .35rem .19rem;
                    padding-right: .8rem;
                    color: #a2a2a2;
                    width: 100%;
                    height: 100%;
                    box-sizing: border-box;
                }
                .select_ul{
                    position: absolute;
                    width: 100%;
                    left:0;
                    text-align: center;
                    z-index: 99;
                    box-shadow: 0px 5px 10px #bcb8b7;
                }

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

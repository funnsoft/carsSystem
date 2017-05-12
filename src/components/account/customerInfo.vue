<template>
  <div class="customerInfo">
      <div class="header clearfix">
          <a class="back" @click="history.go(-1)"></a><!--返回上一页-->
          <a class="right"></a><!--保存按钮-->
          <a class="title">借款信息</a>
      </div>
      <div class="infolist clearfix">
          <ul class="formbox clearfix">
              <li class="bor-bt clearfix">
                  <label>借款人姓名</label><input type="text" name="username" v-model="username" placeholder="请输入姓名" value="">
              </li>
              <li class="clearfix">
                  <label>手机号码</label><input type="text" name="usertel" v-model="usertel" placeholder="请输入手机号码" value="">
              </li>
              <li class="bor-bt clearfix">
                  <label>身份证号</label><input type="text" name="userid" v-model="userid" placeholder="请输入身份证号" value="">
              </li>
              <li class="bor-bt clearfix">
                  <label>开户银行</label><input type="text" name="userbank" v-model="userbank" placeholder="请输入开户银行" value="">
              </li>
              <li class="clearfix">
                  <label>银行卡号</label><input type="text" name="usercardnum" v-model="usercardnum" placeholder="请输入银行卡号" value="">
              </li>
          </ul>
          <ul class="addcustInfo clearfix">
              <li class="clearfix">
                  <label>性别</label>
                  <span class="clearfix">
                    <input type="radio" name="sex" value="0" class="radio" id="sex0" checked="checked"/><label for="sex0" class="radio">男</label>
                    <input type="radio" name="sex" value="1" class="radio" id="sex1" style="margin-left:.55rem"/><label for="sex1" class="radio">女</label>
                </span>
              </li>
              <li class="select clearfix">
                  <label>婚姻状态</label>
                  <span class="select_box clearfix">
                      <a class="selectbtn" v-model="flagCode" @click="showFlagList" :class="{ 'selectbtn' : isA, 'selectbtns': !isA}">{{flagCode}}</a>
                      <ul class="select_ul" v-show="isShowFlagList">
                          <li v-for="item in flagList" :data-number = "item.number" @click="getDataNumber(item.number)">
                             {{item.number}}
                          </li>
                      </ul>
                  </span>
              </li>
              <li class="clearfix">
                  <label>有子女</label>
                  <span class="clearfix">
                    <a class="current">
                        <div id="openbutton1" @click="havechild()" :class="{ 'open1' : ishavechild, 'close1': !ishavechild}">
                            <div id="openbutton2" :class="{ 'open2' : ishavechild, 'close2': !ishavechild}"></div>
                        </div>
                    </a>
                  </span>
              </li>
              <li class="select clearfix">
                  <label>户籍</label>
                  <span class="select_box clearfix">
                      <a class="selectbtn" href="javascript:;" @click="show = true">{{result.province.name}} {{result.city.name}} {{result.area.name}}</a>
                      <vue-area :show="show" @select-submit="handleAreaSelect"></vue-area>
                  </span>
              </li>
              <li class="select clearfix">
                  <label>详细地址</label>
                  <span class="select_box clearfix">
                      <input type="text" name="addDetail" placeholder="不需要填写省市区">
                  </span>
              </li>
              <li class="select clearfix">
                  <label>现住地</label>
                  <span class="select_box clearfix">
                      <a class="selectbtn" href="javascript:;" @click="show2 = true">{{result2.province.name}} {{result2.city.name}} {{result2.area.name}}</a>
                      <vue-area :show="show2" @select-submit="handleAreaSelect2"></vue-area>
                  </span>
              </li>
              <li class="select clearfix">
                  <label>详细地址</label>
                  <span class="select_box clearfix">
                      <input type="text" name="nowaddDetail" placeholder="不需要填写省市区">
                  </span>
              </li>
              <li class="select clearfix">
                  <label>学历</label>
                  <span class="select_box clearfix">
                      <a class="selectbtn" v-model="flagCode2" @click="showFlagList2" :class="{ 'selectbtn' : isAa, 'selectbtnUp': !isAa}">{{flagCode2}}</a>
                      <ul class="select_ul2" v-show="isShowFlagList2">
                          <li v-for="item in flagList2" :data-number = "item.number" @click="getDataNumber2(item.number)">
                             {{item.number}}
                          </li>
                      </ul>
                  </span>
              </li>
          </ul>
      </div>

      <input type="button" class="savebtn" name="customApply" @click="checkform()"  value="提交申请">
  </div>
</template>
<script>
import vueArea from '../public/vue-area.vue'
export default {
    components: {
        vueArea
    },
    data: function () {
        return{
            username: '',
            usertel: '',
            userid: '',
            userbank: '',
            usercardnum: '',
            selected:'',
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
            ishavechild:false,
            result: {
                province: '省',
                city: '市',
                area: '区'
            },
            show: false,
            result2: {
                province: '省',
                city: '市',
                area: '区'
            },
            show2: false,
            flagList2:[
                {number:"大专"},
                {number:"本科"},
                {number:"研究生"},
                {number:"硕士"},
                {number:"博士"}

            ],
            flagDic2:'',
            isShowFlagList2: false,
            flagCode2:'',
            isAa: true
        }
    },
    methods:{
        showFlagList: function () {
            this.isShowFlagList = !this.isShowFlagList;
            this.isA = !this.isA;
        },
        getDataNumber: function (number) {
            this.isShowFlagList = !this.isShowFlagList;
            this.flagCode = number;
            this.isA = !this.isA;
            console.log(this.isShowFlagList);
        },
        showFlagList2: function () {
            this.isShowFlagList2 = !this.isShowFlagList2;
            this.isAa = !this.isAa;
        },
        getDataNumber2: function (number) {
            this.isShowFlagList2 = !this.isShowFlagList2;
            this.flagCode2 = number;
            this.isAa = !this.isAa;
            console.log(this.isShowFlagList2);
        },
        havechild: function () {
            this.ishavechild = !this.ishavechild
        },
        handleAreaSelect(result){
            console.log(result)
            this.show = false;
            this.result = result;
        },
        handleAreaSelect2(result2){
            console.log(result2)
            this.show2 = false;
            this.result2 = result2;
        }
    },
    created:function () {
        this.flagDic = this.flaglist
    },

}
</script>
<style lang="less" scoped>
    .customerInfo{
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
        ul{
            margin-top: .53rem;
            background-color:#fff;
            li{
                font-size:.43rem;
                color:#a2a2a2;
                border-bottom:1px solid #ebebeb;
                padding: .44rem .4rem;
                input{
                    text-align: right;
                    font-size: .38rem;
                    border:0;
                    outline: none;
                    display: inline-block;
                }
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
        .addcustInfo{
            span{
                float: right;
                input[type='radio'].radio {
                    opacity: 0;
                    display: inline-block;
                    width: .85rem;
                }
                label.radio {
                    /*width: .75rem;*/
                    min-height: .68rem;
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
                width: 80%;
                height: .45rem;
                text-align: right;
            }
        }
        .select{
            position: relative;
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
            .selectbtnUp{
                display: block;
                background: url("../../assets/images/btn-next3.png") no-repeat center right;
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
            .select_ul2{
                position: absolute;
                width: 100%;
                left:0;
                text-align: center;
                z-index: 99;
                box-shadow: 0px -5px 10px #bcb8b7;
                bottom: 1.4rem;
            }

        }

    }
    #openbutton1 {
        width: 1.2rem;
        height: .66rem;
        border-radius: .33rem;
        position: relative;
        display: inline-block;
        float: right;
    }
    #openbutton2{
        width: .66rem;
        height:.66rem;
        border-radius: .33rem;
        position: absolute;
        background: #fff;
        box-shadow: 1px 0px 0px rgba(0,0,0,0.2);
    }
    .open1{
        background: rgba(0,184,0,0.8);
    }
    .open2{
        top: 0;
        right: 0;
    }
    .close1{
        background: #dfdfdf;
        border:1px solid #c7c7c7;
        border-left: transparent;
        box-sizing: border-box;
    }
    .close2{
        left: 1px;
        top: -1px;
        box-sizing: border-box;
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

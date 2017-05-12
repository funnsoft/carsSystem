<template>
    <div class="operatorInfo">
        <div class="header clearfix">
            <a class="back" ></a><!--返回上一页-->
            <a class="right"></a><!--保存按钮-->
            <a class="title">借款信息</a>
        </div>
        <div class="infolist clearfix">
            <ul class="formbox clearfix">
                <li class="select clearfix">
                    <label>运营商</label>
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
                    <label>手机号码</label><input type="text" name="usertel" v-model="usertel" placeholder="请输入手机号码" value="" onkeyup="this.value=this.value.replace(/\D/g,'')">
                </li>
                <li class="clearfix">
                    <label>服务密码</label><input type="text" name="cartype" v-model="userpwd" placeholder="请输入密码" value="">
                </li>
                <li class="bor-bt clearfix">
                    <label>身份证号</label><input type="text" name="userid" v-model="userid" placeholder="请输入身份证号" value="" onkeyup="this.value=this.value.replace(/\D/g,'')">
                </li>
                <li class="bor-bt clearfix">
                    <label>真实姓名</label><input type="text" name="username" v-model="username" placeholder="请输入姓名" value="">
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
                flagCode: '移动',
                usertel: '',
                userpwd: '',
                userid: '',
                username: '',
                flagList:[
                    {number:"移动"},
                    {number:"电信"},
                    {number:"联通"}
                ],
                flagDic:'',
                isShowFlagList: false,
                isA: true,
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
            //提交申请
            checkform(){

            }
        }
    }
</script>
<style lang="less" scoped>
    .operatorInfo{
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
            line-height: inherit;
            font-size: .48rem;
            color: #fff;
            margin-top: -1.46rem;
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

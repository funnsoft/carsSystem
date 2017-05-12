<template>
  <div class="borrowingInfo">
      <div class="header clearfix">
          <a class="back" @click="history.go(-1)"></a><!--返回上一页-->
          <a class="right"></a><!--保存按钮-->
          <a class="title"></a>
      </div>
      <div class="infolist">
        <ul>
            <li class="clearfix">
                <label>抵押方式</label>
                <span class="clearfix">
                    <i><input type="radio" name="mode" value="0" class="radio" id="mortgage" checked="checked"/><label for="mortgage" class="radio">押车</label></i>
                    <i><input type="radio" name="mode" value="1" class="radio" id="nomortgage" /><label for="nomortgage" class="radio">开走</label></i>
                </span>
            </li>
            <li class="clearfix">
                <label>还款方式</label>
                <span class="clearfix">
                    <i><input type="radio" name="repayment" value="0" class="radio" id="equal" checked="checked"/><label for="equal" class="radio">等额本息</label></i>
                    <i><input type="radio" name="repayment" value="1" class="radio" id="firsrrate" /><label for="firsrrate" class="radio">先息后本</label></i>
                </span>
            </li>
            <li class="clearfix">
                <label>借款期限（月）</label>
                <span class="clearfix">
                    <input type="text" name="term" onkeyup="this.value=this.value.replace(/[^0-9-]+/,'');" placeholder="请输入数字">
                </span>
            </li>
            <li class="clearfix">
                <label>借款金额（万）</label>
                <span class="clearfix">
                    <input type="text" name="money" onkeyup="value=value.replace(/[^\d.]/g,'')" placeholder="请输入金额(数字)">
                </span>
            </li>
            <li class="clearfix">
                <label>借款用途</label>
                <span class="clearfix">
                    <input type="text" name="loanUse" placeholder="请输入借款用途" minlength="6" maxlength="20">
                </span>
            </li>

        </ul>
      </div>
      <!--底部保存按钮-->
      <input type="button" class="savebtn" name="customApply" @click="checkform()"  value="保存">
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
    .borrowingInfo{
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
        margin-top: .53rem;
        background-color:#fff;
        li {
            font-size:.43rem;
            color:#a2a2a2;
            border-bottom:1px solid #ebebeb;
            padding: .44rem .4rem;
            span{
                width: 60%;
                float: right;
                i {
                    display: inline-block;
                    width: 50%;
                }
                i:first-child{
                    float: left;
                }
                i:last-child{
                    float: right;
                }
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
                    text-align: right;
                    font-size: .38rem;
                    border:0;
                    outline: none;
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

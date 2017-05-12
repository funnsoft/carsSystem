<template>
  <div id="login">
    <img src="../assets/images/loginMidun.jpg" width="100%">
    <ul class="l-width">
      <li class="l-input l-uname">
        <input type="text" id="userName" v-model="userName" @focus="userNameFocus" placeholder="账号">
      </li>
      <li class="l-input l-password">
        <input type="password" id="passWord" v-model="password" @focus="passwordFocus" placeholder="密码">
      </li>
      <li class="l-input l-submit">
        <input type="button" id="tologin" @click="login()" value="登录">
        <span class="msg-span" :class="{warn:isShow}">{{msg}}</span>
      </li>
      <li><router-link to="/findPwd"><span class="msg-span">忘记密码？</span></router-link></li>
    </ul>
  </div>
</template>
<script>
    import {sysConfig} from '../constants/sysConfig'
    export default {
        data() {
            return {
                userName: '',
                password: '',
                clearU: false,
                clearP: false,
                msg: '',
                isShow:false
            }
        },
        methods: {
            userNameFocus(){
                this.msg = '';
            },
            passwordFocus(){
                this.msg = '';
            },
            login(){
//                this.$http.headers.common['username'] = "test"
//                this.$http.headers.common['password'] = "123456"
//                this.$http.headers.common['Access-Control-Allow-Origin']="*"
                this.$http.jsonp("http://192.168.10.221:8080/identity/roles/1",function (data) {
                    console.log(data)
                })
//                this.$http.post(sysConfig.siteUrl + '/authenticate',{
//                    emulateJSON:true
//                }).then(function(response){
//                    console.log(response);
//                    if(response.data.success == false) {
//                            this.isShow = true;
//                            this.msg = '帐号或密码错误！';
//                        } else {
//                            this.accountPatientInitState(response.data.data);
//                            if (this.userId !== '') {
//                                var url = this.$router.currentRoute.query.returnUrl;
//                                if(url == '/') {
//                                    url = '/collaboration';
//                                    this.$router.push({path: url});
//                                }
//                                url = url === undefined ? '/collaboration' : url;
//                                this.$router.push({path: url});
//                            }
//                    }
//                });
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
  input {
    border: none;
    display: inline-block;
    outline: none;
    font-family: Microsoft YaHei;
    background-color: transparent;
  }
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
  }
  input::-webkit-input-placeholder {
    color: #bfbfbf;
    font-weight: normal;
  }
  #login {
    position: fixed;
    top: 0;
    bottom: 0;
    left:0;
    right:0;
    width: 100%;
  }
  .l-width {
    width: 80%;
    margin: 0 auto;
    position: absolute;
    top: 6.35rem;
    left: 10%;
  }
  .l-input {
    width: 100%;
    height:1.3rem;
  }
  .l-password{
    margin-top: .63rem;
  }
  .l-submit{
    margin-top:.8rem;
  }
  .l-input input {
    position: relative;
    display: block;
    width: 100%;
    border:1px solid #fff;
    border-radius:.67rem;
    height: 1.3rem;
    line-height: 1.3rem;
    font-size: .48rem;
    text-indent: .6rem;
    color: #fff;
  }
  /*修改input的placeholder*/
  .l-input input::-webkit-input-placeholder { /* WebKit browsers */
    color:    #fff;
  }
  .l-input input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color:    #fff;
    opacity:  1;
  }
  .l-input input::-moz-placeholder { /* Mozilla Firefox 19+ */
    color:    #fff;
    opacity:  1;
  }
  .l-input input:-ms-input-placeholder { /* Internet Explorer 10+ */
    color:    #fff;
  }

  .l-submit input {
    background: #f6764a;
    border:1px solid #f6764a;
    color: #fff;
    cursor: pointer;
    letter-spacing: 8px;
    font-weight: bold;
    text-indent: 0;
  }
  .l-submit input:active {
    height: 1.2rem;
    line-height: 1.2rem;
    margin-top:.1rem;
    width: 98%;
    margin-left: 1%;
    opacity: 0.7;
  }
  .msg-span {
    color: #fff;
    font-size: .37rem;
    text-align: right;
    width: 96%;
    display: block;
    padding-right: 10px;
    margin-top: .3rem;
  }
</style>

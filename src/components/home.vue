<template>
  <div id="homeNav">
    <div class="header clearfix">
        <router-link to="/addCustomer"><a class="left"></a></router-link><!--添加客户-->
        <a class="title"></a>
        <a class="right" @click="logout()"></a><!--登出 弹框确认-->
    </div>
    <div class="home-search">
        <div class="searchText">
            <input v-model="search" type="text" @blur="isCenter()"  @focus="isRight()" :class="{ 'bgcenter' : isShow, 'bgright': !isShow}" placeholder="搜索客户"  v-bind:value="search">
            <a class="searchBtn" @click="search()"></a>
        </div>
    </div>
    <div id="home-menu" class="home-menu clearfix">
        <div v-bind:class="active"  @click.prevent>
            <a class="all"   @click="makeActive('all')">全部</a>
            <a class="nopost"  @click="makeActive('nopost')">未提交</a>
            <a class="nofinishi"  @click="makeActive('nofinishi')">待补充</a>
            <a class="application"  @click="makeActive('application')" >申请中</a>
            <a class="pass"  @click="makeActive('pass')">通过</a>
            <a class="refuse"  @click="makeActive('refuse')">拒绝</a>
            <a class="cancel"  @click="makeActive('cancel')">已取消</a>
        </div>
    </div>
    <!--全部-->
    <div class="list" v-show="showall">
        <a class="listcont clearfix">
            <p class="user"><i class="name">张三</i><i class="tel">13154454474</i></p>
            <p class="cont"><i class="staus-nopost">未提交</i><i class="addtime">2017年03月10日 14:09</i></p>
        </a>
        <a class="listcont  clearfix">
            <p class="user"><i class="name">张三</i><i class="tel">13154454474</i></p>
            <p class="cont"><i class="staus-nofinishi">待补充</i><i class="addtime">2017年03月10日 14:09</i></p>
        </a>
        <!-- 申请中状态的显示btn-delete按钮</i>-->
        <a class="listcont clearfix">
            <p class="user"><i class="name">张三</i><i class="tel">13154454474</i><i class="delete"  @click="deletebtn()" ><img src="../assets/images/btn-delete.png"> </i></p>
            <p class="cont"><i class="staus-application">申请中</i><i class="addtime">2017年03月10日 14:09</i></p>
        </a>
        <a class="listcont clearfix">
            <p class="user"><i class="name">张三</i><i class="tel">13154454474</i></p>
            <p class="cont"><i class="staus-pass">通过</i><i class="addtime">2017年03月10日 14:09</i></p>
        </a>
        <a class="listcont clearfix">
            <p class="user"><i class="name">张三</i><i class="tel">13154454474</i></p>
            <p class="cont"><i class="staus-refuse">拒绝</i><i class="addtime">2017年03月10日 14:09</i></p>
        </a>
        <a class="listcont clearfix">
            <p class="user"><i class="name">张三</i><i class="tel">13154454474</i></p>
            <p class="cont"><i class="staus-cancel">已撤销</i><i class="addtime">2017年03月10日 14:09</i></p>
        </a>
    </div>
    <!--未提交-->
    <div class="list" v-show="shownopost">
        <a class="listcont clearfix">
            <p class="user"><i class="name">张三</i><i class="tel">13154454474</i></p>
            <p class="cont"><i class="staus-nopost">未提交</i><i class="addtime">2017年03月10日 14:09</i></p>
        </a>
        <a class="listcont clearfix">
            <p class="user"><i class="name">张三</i><i class="tel">13154454474</i></p>
            <p class="cont"><i class="staus-nopost">未提交</i><i class="addtime">2017年03月10日 14:09</i></p>
        </a>
        <a class="listcont clearfix">
            <p class="user"><i class="name">张三</i><i class="tel">13154454474</i></p>
            <p class="cont"><i class="staus-nopost">未提交</i><i class="addtime">2017年03月10日 14:09</i></p>
        </a>
        <a class="listcont clearfix">
            <p class="user"><i class="name">张三</i><i class="tel">13154454474</i></p>
            <p class="cont"><i class="staus-nopost">未提交</i><i class="addtime">2017年03月10日 14:09</i></p>
        </a>
        <a class="listcont clearfix">
            <p class="user"><i class="name">张三</i><i class="tel">13154454474</i></p>
            <p class="cont"><i class="staus-nopost">未提交</i><i class="addtime">2017年03月10日 14:09</i></p>
        </a>
        <a class="listcont clearfix">
            <p class="user"><i class="name">张三</i><i class="tel">13154454474</i></p>
            <p class="cont"><i class="staus-nopost">未提交</i><i class="addtime">2017年03月10日 14:09</i></p>
        </a>
        <a class="listcont clearfix">
            <p class="user"><i class="name">张三</i><i class="tel">13154454474</i></p>
            <p class="cont"><i class="staus-nopost">未提交</i><i class="addtime">2017年03月10日 14:09</i></p>
        </a>
        <a class="listcont clearfix">
            <p class="user"><i class="name">张三</i><i class="tel">13154454474</i></p>
            <p class="cont"><i class="staus-nopost">未提交</i><i class="addtime">2017年03月10日 14:09</i></p>
        </a>

    </div>
    <!--待补充-->
    <div class="list" v-show="shownofinishi">
        <a class="listcont  clearfix">
            <p class="user"><i class="name">张三</i><i class="tel">13154454474</i></p>
            <p class="cont"><i class="staus-nofinishi">待补充</i><i class="addtime">2017年03月10日 14:09</i></p>
        </a>
        <a class="listcont  clearfix">
            <p class="user"><i class="name">张三</i><i class="tel">13154454474</i></p>
            <p class="cont"><i class="staus-nofinishi">待补充</i><i class="addtime">2017年03月10日 14:09</i></p>
        </a>
        <a class="listcont  clearfix">
            <p class="user"><i class="name">张三</i><i class="tel">13154454474</i></p>
            <p class="cont"><i class="staus-nofinishi">待补充</i><i class="addtime">2017年03月10日 14:09</i></p>
        </a>
        <a class="listcont  clearfix">
            <p class="user"><i class="name">张三</i><i class="tel">13154454474</i></p>
            <p class="cont"><i class="staus-nofinishi">待补充</i><i class="addtime">2017年03月10日 14:09</i></p>
        </a>
        <a class="listcont  clearfix">
            <p class="user"><i class="name">张三</i><i class="tel">13154454474</i></p>
            <p class="cont"><i class="staus-nofinishi">待补充</i><i class="addtime">2017年03月10日 14:09</i></p>
        </a>
    </div>
    <!--申请中-->
    <div class="list" v-show="showapplication">
        <a class="listcont clearfix">
            <p class="user"><i class="name">张三</i><i class="tel">13154454474</i><i class="delete"  @click="deletebtn()" ><img src="../assets/images/btn-delete.png"> </i></p>
            <p class="cont"><i class="staus-application">申请中</i><i class="addtime">2017年03月10日 14:09</i></p>
        </a>
        <a class="listcont clearfix">
            <p class="user"><i class="name">张三</i><i class="tel">13154454474</i><i class="delete"  @click="deletebtn()" ><img src="../assets/images/btn-delete.png"> </i></p>
            <p class="cont"><i class="staus-application">申请中</i><i class="addtime">2017年03月10日 14:09</i></p>
        </a>
        <a class="listcont clearfix">
            <p class="user"><i class="name">张三</i><i class="tel">13154454474</i><i class="delete"  @click="deletebtn()" ><img src="../assets/images/btn-delete.png"> </i></p>
            <p class="cont"><i class="staus-application">申请中</i><i class="addtime">2017年03月10日 14:09</i></p>
        </a>
        <a class="listcont clearfix">
            <p class="user"><i class="name">张三</i><i class="tel">13154454474</i><i class="delete"  @click="deletebtn()" ><img src="../assets/images/btn-delete.png"> </i></p>
            <p class="cont"><i class="staus-application">申请中</i><i class="addtime">2017年03月10日 14:09</i></p>
        </a>
    </div>
    <!--通过-->
    <div class="list" v-show="showpass">
        <a class="listcont clearfix">
            <p class="user"><i class="name">张三</i><i class="tel">13154454474</i></p>
            <p class="cont"><i class="staus-pass">通过</i><i class="addtime">2017年03月10日 14:09</i></p>
        </a>
        <a class="listcont clearfix">
            <p class="user"><i class="name">张三</i><i class="tel">13154454474</i></p>
            <p class="cont"><i class="staus-pass">通过</i><i class="addtime">2017年03月10日 14:09</i></p>
        </a>
        <a class="listcont clearfix">
            <p class="user"><i class="name">张三</i><i class="tel">13154454474</i></p>
            <p class="cont"><i class="staus-pass">通过</i><i class="addtime">2017年03月10日 14:09</i></p>
        </a>
    </div>
    <!--拒绝-->
    <div class="list" v-show="showrefuse">
        <a class="listcont clearfix">
            <p class="user"><i class="name">张三</i><i class="tel">13154454474</i></p>
            <p class="cont"><i class="staus-refuse">拒绝</i><i class="addtime">2017年03月10日 14:09</i></p>
        </a>
        <a class="listcont clearfix">
            <p class="user"><i class="name">张三</i><i class="tel">13154454474</i></p>
            <p class="cont"><i class="staus-refuse">拒绝</i><i class="addtime">2017年03月10日 14:09</i></p>
        </a>
        <a class="listcont clearfix">
            <p class="user"><i class="name">张三</i><i class="tel">13154454474</i></p>
            <p class="cont"><i class="staus-refuse">拒绝</i><i class="addtime">2017年03月10日 14:09</i></p>
        </a>
        <a class="listcont clearfix">
            <p class="user"><i class="name">张三</i><i class="tel">13154454474</i></p>
            <p class="cont"><i class="staus-refuse">拒绝</i><i class="addtime">2017年03月10日 14:09</i></p>
        </a>
        <a class="listcont clearfix">
            <p class="user"><i class="name">张三</i><i class="tel">13154454474</i></p>
            <p class="cont"><i class="staus-refuse">拒绝</i><i class="addtime">2017年03月10日 14:09</i></p>
        </a>
    </div>
    <!--取消-->
    <div class="list" v-show="showcancel">
        <a class="listcont clearfix">
            <p class="user"><i class="name">张三</i><i class="tel">13154454474</i></p>
            <p class="cont"><i class="staus-cancel">已撤销</i><i class="addtime">2017年03月10日 14:09</i></p>
        </a>
        <a class="listcont clearfix">
            <p class="user"><i class="name">张三</i><i class="tel">13154454474</i></p>
            <p class="cont"><i class="staus-cancel">已撤销</i><i class="addtime">2017年03月10日 14:09</i></p>
        </a>
    </div>

    <div class="msgbox" v-show="showbox">
        <div class="boxbg"></div>
        <div class="deleteOK">
            <p>确认撤销该申请？</p>
            <div class="btn">
                <span><a class="btnOk"  >确定</a></span>
                <span><a class="btnCancel"  @click="hidebox()">取消</a></span>

            </div>
        </div>
    </div>

  </div>
</template>
<script>
    import {sysConfig} from '../constants/sysConfig'
    export default {
        data() {
            return {
                search: '',
                msg: '',
                isShow: true,
                active: 'all',
                showall: true,
                shownopost: false,
                shownofinishi: false,
                showapplication: false,
                showpass: false,
                showrefuse: false,
                showcancel: false,
                showbox : false
            }
        },
        methods: {
            isCenter() {
                this.isShow = true;
                this.search = '';
            },
            isRight() {
                this.isShow = false;
                this.search = '';
            },
            search(){

            },
            passwordFocus(){
                this.msg = '';
            },
//          tab 列表切换
            makeActive(item){
                this.active = item;
//                console.log(this.active);
                if( this.active == "all"){
                    this.showall = true;
                    this.shownopost = false;
                    this.shownofinishi =  false;
                    this.showapplication =  false;
                    this.showpass =  false;
                    this.showrefuse =  false;
                    this.showcancel =  false;
                    return;
                }
                if( item == "nopost"){
                    this.showall = false;
                    this.shownopost = true;
                    this.shownofinishi =  false;
                    this.showapplication =  false;
                    this.showpass =  false;
                    this.showrefuse =  false;
                    this.showcancel =  false;
                    return;

                }
                if( item == "nofinishi"){
                    this.showall = false;
                    this.shownopost = false;
                    this.shownofinishi =  true;
                    this.showapplication =  false;
                    this.showpass =  false;
                    this.showrefuse =  false;
                    this.showcancel =  false;
                    return;
                }
                if( item == "application"){
                    this.showall = false;
                    this.shownopost = false;
                    this.shownofinishi =  false;
                    this.showapplication =  true;
                    this.showpass =  false;
                    this.showrefuse =  false;
                    this.showcancel =  false;
                    return;
                }
                if( item == "pass"){
                    this.showall = false;
                    this.shownopost = false;
                    this.shownofinishi =  false;
                    this.showapplication =  false;
                    this.showpass =  true;
                    this.showrefuse =  false;
                    this.showcancel =  false;
                    return;

                }
                if( item == "refuse"){
                    this.showall = false;
                    this.shownopost = false;
                    this.shownofinishi =  false;
                    this.showapplication =  false;
                    this.showpass =  false;
                    this.showrefuse =  true;
                    this.showcancel =  false;
                    return;
                }
                if( item == "cancle"){
                    this.showall = false;
                    this.shownopost = false;
                    this.shownofinishi =  false;
                    this.showapplication =  false;
                    this.showpass =  false;
                    this.showrefuse =  false;
                    this.showcancel =  true;
                    return;
                }
                else{
                    this.showall = true;
                    this.shownopost = false;
                    this.shownofinishi =  false;
                    this.showapplication =  false;
                    this.showpass =  false;
                    this.showrefuse =  false;
                    this.showcancel =  false;
                    return;
                }
            },

            deletebtn(){
                this.showbox = true;
//                this.$el.querySelect('.my-class')
//                'delete':function(art){
//                    vue.toSendList.$remove(art)
//                }
            },
//          提醒弹框隐藏
            hidebox(){
                this.showbox = false;
            }

        }
    }

</script>
<style lang="less" scoped>
    #homeNav{
        background-color: #fff;
    }
    .header {
        padding: 0 .4rem;
        height: 1.46rem;
        line-height: 1.46rem;
        position: relative;
        background: url("../assets/images/home-top.jpg");
        background-size: 100%;
        .left {
            display: inline-block;
            float: left;
            width: .8rem;
            height: .6rem;
            margin-top: .43rem;
        }
        .right {
            display: inline-block;
            float: right;
            width: 1.2rem;
            height: .6rem;
            margin-top: .43rem;
        }
    }
    .home-search{
        background-color: #f6764a;
        height: 1.4rem;
        padding: 0 .4rem;
        .searchText{
            position:relative;
            input{
                margin-top:.26rem;
                height: .88rem;
                line-height: .88rem;
                width: 100%;
                border-radius: .44rem;
                /*background: #fff;*/
                font-size: .38rem;
                border:none;
            }
            .bgcenter{
                background: url("../assets/images/home-search.png") #fff no-repeat 37% center;
                background-size: .37rem .37rem;
                text-align: center;
            }
            .bgright{
                background: url("../assets/images/home-search.png") #fff no-repeat 91% center;
                background-size: .37rem .37rem;
                text-align: left;
                text-indent: .47rem;
            }
            .searchBtn{
                display: block;
                position: absolute;
                width: 1.3rem;
                height: 1rem;
                top: .26rem;
                right: .3rem;
                z-index: 2;
            }
            p{
                width: 100%;
                height: .88rem;
                line-height: .88rem;
                color:#d5d6d6;
                font-size: .38rem;
                margin-top:-.88rem;
                text-align: center;
                z-index: 2 ;
                background-color:#fff;
                border-radius: .44rem;

                img{
                    display: inline-block;
                    width: .37rem;
                    margin-right:.1rem;
                }
            }
        }
    }
    .home-menu{
        width: 100%;
        height:inherit;
        color: #a2a2a2;
        font-size: .43rem;
        overflow-x:scroll;
        div{
            width: 16.82rem;
            height:1.1rem;
            line-height: 1.1rem;
            a {
                text-align: center;
                line-height: 1.1rem;
                height: 1.1rem;
                width: 2.4rem;
                display: inline-block;
                float: left;
                z-index: 222;
                box-sizing: border-box;
                background-color: #fff;
                border-bottom: 1px solid #e9e9e9;
            }
        }
        div.all .all,
        div.nopost .nopost,
        div.nofinishi .nofinishi,
        div.nopost .nopost,
        div.application .application,
        div.pass .pass,
        div.refuse .refuse,
        div.cancel .cancel{
            border-bottom: 2px solid #f6764a;
        }
    }

    ::-webkit-scrollbar {
        width: 0;border: none;
    }
    ::-webkit-scrollbar-track {
        width: 0;border: none;
    }
    ::-webkit-scrollbar-thumb {
        width: 0;border: none;
    }
    /*客户列表部分*/
    .listcont{
        padding:.36rem .4rem;
        border-bottom:1px solid #e9e9e9;
        color: #a2a2a2;
        display: block;
        i{
            display: inline-block;
        }
        i.delete{
            display: inline-block;
            float: right;
            width: .37rem;
            height:.37rem;
            img{
                width: 100%;
                display: block;
            }
        }
        p.user{
            font-size:.42rem;
            /*i{*/
                /*display: inline-block;*/
            /*}*/
            i.name{
                padding-left:.36rem;
            }
            i.tel{
                margin-left:.62rem;
            }

        }
        p.cont{
            font-size:.38rem;
            margin-top:.27rem;
            i:first-child{
               line-height: .38rem;
               display: inline-block;
               padding-left:.29rem;
            }
            i.staus-nopost{
                border-left:4px solid #f08856;
                color: #f08856;
            }
            i.staus-nofinishi{
                border-left:4px solid #ffb55e;
                color: #ffb55e;
            }
            i.staus-application{
                border-left:4px solid #7ca6db;
                color: #7ca6db;
            }
            i.staus-pass{
                border-left:4px solid #7cdb80;
                color: #7cdb80;
            }
            i.staus-refuse{
                border-left:4px solid #ff684f;
                color: #ff684f;
            }
            i.staus-cancel{
                border-left:4px solid #a2a2a2;
                color: #a2a2a2;
            }
            i.addtime{
                color: #d5d6d6;
                float: right;
            }
        }
    }
    .listcont:last-child{
        border-bottom: 0;
    }
    .msgbox{
        position: fixed;
        .boxbg{
            position: fixed;
            top: 0;bottom: 0;left: 0;right: 0;
            background-color: rgba(0, 0, 0, 0.6);
            z-index: 1000;
        }
        .deleteOK{
            width: 92%;
            padding:1.1rem .8rem;
            background-color: #fff;
            z-index: 1001;
            position: fixed;
            top: 6rem;
            box-sizing: border-box;
            left: 4%;
            border-radius:.2rem;
            letter-spacing:2px;
            p{
                text-align: center;
                font-size: .48rem;
                color: #a2a2a2;
            }
            .btn{
                width: 100%;
                span{
                    display: inline-block;
                    width: 49%;
                    margin-top:.86rem;
                    a{
                        color: #fff;
                        display: inline-block;
                        width: 3.6rem;
                        height:.97rem;
                        line-height: .97rem;
                        text-align: center;
                        border-radius: .15rem;
                        font-size: .43rem;
                    }
                    a.btnOk{
                        background-color: #f6764a;
                    }
                    a.btnCancel{
                        background-color: #c2836d;
                    }
                }
                span:first-child{text-align: left}
                span:last-child{text-align: right}
            }
        }


    }
</style>

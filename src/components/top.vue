<template>
  <nav>
    <div class="navbar-nav">
      <ul>
        <router-link to="/collaboration">
          <li >
            <span class="img"><i class="collaboration"></i></span>
            <span class="text">多中心协作</span>
          </li>
        </router-link>

        <router-link to="/patient">
          <li>
            <span class="img"><i class="patient"></i></span>
            <span class="text">病例信息</span>
          </li>
        </router-link>

        <router-link to="/screening">
          <li>
            <span class="img"><i class="screening"></i></span>
            <span class="text">筛选病例</span>
          </li>
        </router-link>

        <router-link to="/statistics">
          <li>
            <span class="img"><i class="statistics"></i></span>
            <span class="text">数据统计</span>
          </li>
        </router-link>

        <router-link to="/follow">
          <li>
            <span class="img"><i class="follow"></i></span>
            <span class="text">随访管理</span>
          </li>
        </router-link>

        <router-link to="/progress">
          <li>
            <span class="img"><i class="progress"></i></span>
            <span class="text">建设进展</span>
          </li>
        </router-link>

        <router-link to="/account">
          <li>
            <span class="img"><i class="account"></i></span>
            <span class="text">我的帐号</span>
          </li>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>

</script>

<style lang="less">
  .navbar-nav {
    position: fixed;
    margin-left: -100px;
    left: 100px;
    width: 100px;
    height: 100%;
    border: none;
    background-color: #F3F3F4;
    font-size: 14px;
    color: #333333;
    overflow-y: auto;

    li {
      padding-top: 10px;
      height: 70px;
      text-align: center;
      text-decoration: none;

      .img {

        i {
          display: block;
          width: 50px;
          height: 40px;
          margin: 0px 25px 5px 25px;
        }
        i.collaboration {
          background: url('../assets/images/collaboration.png') no-repeat 0 0;
        }

        i.patient {
          background: url('../assets/images/patient.png') no-repeat 0 0;
        }

        i.screening {
          background: url('../assets/images/screening.png') no-repeat 0 0;
        }

        i.statistics {
          background: url('../assets/images/statistics.png') no-repeat 0 0;
        }

        i.follow {
          background: url('../assets/images/follow.png') no-repeat 0 0;
        }

        i.progress {
          background: url('../assets/images/progress.png') no-repeat 0 0;
        }

        i.account {
          background: url('../assets/images/account.png') no-repeat 0 0;
        }

      }

    }
    li:hover {
      background: #dddde1;;
    }

  }

  .router-link-active li {
    background: #dddde1;
  }
</style>

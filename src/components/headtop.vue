<template>
  <div class="headtop-wrap">
    <div class="container">
      <router-link to="/" class="head-logo" tag="div" />
      <div class="head-city" v-if="$route.path === '/'">
        <span class="head-city-name">{{ $store.state.city ? $store.state.city : '全国站' }}</span>
        <span class="head-select-city" @click="handleChangeCity">[切换城市]</span>
      </div>
      <div class="head-tab">
        <div class="tab-l">
          <router-link tag="div" to="/" exact>首页</router-link>
          <router-link tag="div" to="/a">公司</router-link>
          <router-link tag="div" to="/search">校园招聘</router-link>
          <router-link tag="div" to="/a">言职</router-link>
          <router-link tag="div" to="/a">课程</router-link>
        </div>
        <div class="tab-r">
          <div class="tab-login" v-if="$store.state.user">
            <div>消息</div>
            <router-link to="/myresume" tag="div">简历</router-link>
            <router-link to="/delivery" tag="div">投递箱</router-link>
            <router-link to="/collections" tag="div">收藏夹</router-link>
            <div>张诏</div>
          </div>
          <div class="tab-nologin" v-else>
            <div>上传简历</div>
            <div>职位订阅</div>
            <div class="login-box">
              <i class="iconfont icon-geren2"></i>
              <em>
                <router-link to="/login" tag="span">登录</router-link>
                <i>丨</i>
                <router-link to="/register" tag="span">注册</router-link>
              </em>
            </div>
          </div>
          <div class="tab-other">
            <div class="lagou-app">
              <i class="iconfont icon-shouji"></i>
              <span>拉勾APP</span>
            </div>
            <div class="tab-enterprise">进入企业版</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  methods: {
    handleChangeCity() {
      this.$emit("showMask");
    },
  },
};
</script>

<style lang="scss" scoped>
.headtop-wrap {
  width: 100%;
  height: 40px;
  font-size: 14px;
  color: #90959f;
  background-color: #32373e;
  .container {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .head-logo {
    width: 50px;
    height: 25px;
    cursor: pointer;
    background-image: url("../assets/sprite.png");
    background-repeat: no-repeat;
    background-position: -4px -6px;
    background-size: 64px 128px;
  }
  .head-city {
    width: 110px;
    height: 15px;
    margin: 0 30px 0 30px;
    .head-city-name {
      color: #0dca9f;
    }
    .head-select-city {
      color: #afb5c0;
      font-size: 12px;
      cursor: pointer;
    }
  }
  .head-tab {
    width: 980px;
    height: 100%;
    display: flex;
    justify-content: space-around;
    .tab-l {
      width: 380px;
      height: 100%;
      display: flex;
      > div {
        height: 100%;
        cursor: pointer;
        line-height: 40px;
        padding: 0 20px;
        &:hover {
          color: #fff;
        }
        &.router-link-active {
          color: #fff;
          background-color: #24282c;
        }
      }
    }
    .tab-r {
      width: 500px;
      height: 100%;
      display: flex;
      // .tab-login {

      // }
      .tab-login,
      .tab-nologin {
        width: 300px;
        line-height: 40px;
        display: flex;
        justify-content: space-around;
        > div {
          cursor: pointer;
          &:hover {
            color: #fff;
          }
        }
      }
      .tab-other {
        width: 185px;
        height: 100%;
        line-height: 40px;
        text-align: center;
        display: flex;
        .lagou-app {
          color: #00c295;
          width: 50%;
          cursor: pointer;
          &:hover {
            color: #12ddae;
          }
        }
        .tab-enterprise {
          width: 50%;
          cursor: pointer;
          &:hover {
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
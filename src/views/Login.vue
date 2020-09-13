<template>
  <div class="login-wrap">
    <div class="blue-bg"></div>
    <div class="gray-bg"></div>
    <div class="login-wrap">
      <router-link to="/" tag="a" class="logo">
        <img
          src="https://www.lgstatic.com/lg-passport-fed/static/pc/modules/common/img/logo_e420e46.png"
          alt
        />
      </router-link>
      <div class="inner-items">
        <div class="input-wrap">
          <div class="login-tab">
            <div
              :class="loginType === 0 ? 'login-tab-item active' : 'login-tab-item'"
              @click="loginType = 0"
            >密码登录</div>
            <div
              :class="loginType === 0 ? 'login-tab-item' : 'login-tab-item active'"
              @click="loginType = 1"
            >验证码登录</div>
          </div>
          <div class="input-password-box" v-show="loginType === 0">
            <input type="text" placeholder="请输入常用手机号/邮箱" />
            <input type="password" placeholder="请输入密码" />
            <div>
              <span>忘记密码？</span>
            </div>
          </div>
          <div class="input-verify-box" v-show="loginType === 1">
            <div class="phone-input">
              <div class="phone-area">0086</div>
              <input type="text" placeholder="请输入常用手机号" />
            </div>
            <div class="verify-input">
              <input type="text" placeholder="请输入验证码" />
              <span>获取验证码</span>
            </div>
          </div>
          <div class="login-btn">登录</div>
        </div>
        <div class="split-line">
          <div class="line"></div>
          <span>or</span>
        </div>
        <div class="third-part-login">
          <div class="register-wrap">
            <p>还没有账号：</p>
            <router-link to="/register" tag="span">立即注册</router-link>
            <i class="iconfont icon-you"></i>
          </div>
          <div class="login-part">
            <p>使用以下账号直接登录：</p>
            <a href target="_blank">
              <i class="iconfont icon-weibo wb"></i>
            </a>
            <a href target="_blank">
              <i class="iconfont icon-gongzhonghao wx"></i>
            </a>
            <a href target="_blank">
              <i class="iconfont icon-qq qq"></i>
            </a>
            <a href target="_blank">
              <i class="iconfont icon-baidu baidu"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginType: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.login-wrap {
  width: 100vw;
  height: 100vh;
  .blue-bg {
    height: 38vh;
    background-color: #00b38a;
  }
  .gray-bg {
    height: 62vh;
    background-color: #f8f9fc;
  }
  .login-wrap {
    width: 702px;
    height: 407px;
    position: absolute;
    left: 50%;
    top: 50%;
    border: 1px solid #dce1e6;
    background-color: #fff;
    transform: translate(-50%, -50%);
    .logo {
      left: 0;
      top: -76px;
      position: absolute;
      img {
        width: 115px;
        height: 45px;
      }
    }
    .inner-items {
      display: flex;
      justify-content: space-around;
      margin: 53px 40px 68px 80px;
    }
    .input-wrap {
      width: 290px;
      height: 285px;
      .login-tab {
        width: 290px;
        height: 42px;
        display: flex;
        margin-bottom: 29px;
        border-bottom: 1px solid #ebebeb;
        .login-tab-item {
          width: 50%;
          height: 43px;
          cursor: pointer;
          line-height: 42px;
          text-align: center;
          box-sizing: border-box;
          &.active {
            color: #00b38a;
            border-bottom: 1px solid #00b38a;
          }
        }
      }
      .input-password-box {
        input {
          width: 290px;
          height: 44px;
          border: none;
          outline: none;
          font-size: 15px;
          border-bottom: 1px solid #ededed;
          &:first-of-type {
            margin-bottom: 18px;
          }
        }
        div {
          text-align: right;
          span {
            cursor: pointer;
            line-height: 45px;
            font-size: 14px;
            color: #00b38a;
          }
        }
      }
      .input-verify-box {
        .phone-input,
        .verify-input {
          width: 290px;
          height: 44px;
          display: flex;
          align-items: center;
          font-size: 15px;
          border-bottom: 1px solid #ededed;
          input {
            border: none;
            outline: none;
            width: 219px;
          }
        }
        .phone-input {
          margin-bottom: 18px;
          .phone-area {
            width: 70px;
          }
        }
        .verify-input {
          span {
            width: 80px;
            font-size: 14px;
            cursor: pointer;
            color: #00b38a;
          }
        }
      }
      .login-btn {
        width: 290px;
        margin-top: 15px;
        font-weight: 600;
        font-size: 18px;
        line-height: 45px;
        text-align: center;
        border-radius: 5px;
        color: #fff;
        cursor: pointer;
        background-color: #00b38a;
      }
    }
    .split-line {
      width: 105px;
      height: 285px;
      position: relative;
      .line {
        width: 1px;
        height: 285px;
        margin: 0 auto;
        border-right: 1px dashed #f1f1f1;
      }
      span {
        z-index: 1;
        position: absolute;
        left: 50%;
        top: 50%;
        line-height: 25px;
        color: #d8d8d8;
        font-size: 14px;
        background-color: #fff;
        transform: translate(-50%, -50%);
      }
    }
    .third-part-login {
      width: 176px;
      height: 140px;
      color: #555;
      .register-wrap {
        height: 60px;
        margin-top: 72px;
        margin-bottom: 25px;
        line-height: 25px;
        p {
          color: #555555;
        }
        span {
          margin-right: 5px;
        }
        i,
        span {
          color: #00b38a;
          cursor: pointer;
        }
      }
      .login-part {
        height: 82px;
        p {
          line-height: 30px;
        }
        i {
          font-size: 20px;
          color: #b5b5b5;
          margin-right: 20px;
          &.wb:hover {
            color: #f76b69;
          }
          &.wx:hover {
            color: #79ce4c;
          }
          &.qq:hover {
            color: #49b9ec;
          }
          &.baidu:hover {
            color: #4b7cf4;
          }
        }
      }
    }
  }
}
</style>
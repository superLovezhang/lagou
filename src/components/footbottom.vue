<template>
  <div class="footbottom-wrap">
    <div class="container">
      <div class="foot-mid">
        <div class="foot-l">
          <div class="download-app">
            <i class="iconfont icon-shouji"></i> 下载拉钩APP
          </div>
          <div class="wx-app">
            <i class="iconfont icon-weixinxiaochengxu"></i> 微信小程序
          </div>
          <div class="link">
            <div class="wx-link">
              <i class="iconfont icon-weixin"></i>
              <span>拉勾微信</span>
            </div>
            <div class="wb-link">
              <i class="iconfont icon-tubiaozhizuo-"></i>
              <span>拉勾微博</span>
            </div>
          </div>
        </div>
        <div class="foot-r">
          <dl>
            <dt>企业服务</dt>
            <dd>招聘抢人宝典</dd>
            <dd>公司搜索</dd>
            <dd>拉勾APP</dd>
          </dl>
          <dl>
            <dt>用户帮助</dt>
            <dd>用户服务协议</dd>
            <dd>隐私协议</dd>
            <dd>在线提问</dd>
          </dl>
          <dl>
            <dt>联系方式</dt>
            <dd>服务热线 : 4006 2828 35(9:00 - 18:00)</dd>
            <dd>企业邮箱 : cc@lagou.com</dd>
            <dd>联系我们</dd>
          </dl>
        </div>
      </div>
    </div>
    <div class="foot-down">
      <div class="container">
        <span>&copy;2020 拉勾网 京ICP备14023790号-2</span>
        <a
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802024043"
          target="_blank"
        >
          <i></i>
          京公网安备 11010802024043号
        </a>
        <div class="report">
          <i></i>
          <p>违法和不良信息举报电话: 4006 2828 35邮箱: cc@lagou.com</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footbottom-wrap {
  width: 100%;
  height: 353px;
  border-top: 1px solid #ebebeb;
  font-size: 16px;
  color: #555;
  .foot-mid {
    width: 100%;
    height: 255px;
    display: flex;
    padding: 50px 0 64px 0;
    box-sizing: border-box;
    .foot-l {
      width: 312px;
      height: 140px;
      border-right: 1px solid #e8e8e8;
      .download-app,
      .wx-app {
        width: 180px;
        height: 40px;
        cursor: pointer;
        color: #00b38a;
        line-height: 40px;
        text-align: center;
        margin-bottom: 15px;
        border: 1px solid #00b38a;
        &:hover {
          color: #fff;
          background-color: #00b38a;
        }
      }
      .link {
        width: 180px;
        height: 28px;
        justify-content: space-between;
        display: flex;
        .wx-link,
        .wb-link {
          cursor: pointer;
          &:hover > * {
            color: #00b38a;
          }
        }
        i {
          color: #cccccc;
        }
      }
    }
    .foot-r {
      width: 887px;
      height: 140px;
      display: flex;
      padding-left: 130px;
      box-sizing: border-box;
      dl {
        line-height: 30px;
        margin-right: 170px;
        &:last-of-type {
          margin-right: 0;
        }
        dt {
          font-size: 18px;
          font-weight: 600;
          color: #555;
        }
        dd {
          font-size: 14px;
        }
      }
    }
  }
  .foot-down {
    width: 100%;
    height: 98px;
    background-size: 198px 19px;
        background: url(//www.lgstatic.com/lg-www-fed/common/widgets/footer_c/modules/img/footer_lagou_icon_75f0ebc.png) 1150px 45px no-repeat;
    background-color: #fafafa;
    .container {
      height: 100%;
      color: #999999;
      font-size: 14px;
      display: flex;
      align-items: center;
      a {
        color: #999999;
        display: block;
        margin: 0 20px 0 20px;
        i {
          display: inline-block;
          width: 16px;
          height: 16px;
          background: url(//www.lgstatic.com/lg-www-fed/common/widgets/footer_c/modules/img/sprite_9dd5c92.png) -150px -184px
            no-repeat;
          margin: 0 5px 0 0;
        }
      }
      .report {
        width: 187px;
        height: 60px;
        display: flex;
        align-items: center;
        font-size: 12px;
        padding: 8px 20px;
        box-sizing: border-box;
        border: 1px solid #d5dadf;
        i {
          display: inline-block;
          width: 20px;
          height: 24px;
          background: url(//www.lgstatic.com/lg-www-fed/common/widgets/footer_c/modules/img/sprite_9dd5c92.png) -132px -20px no-repeat;
          margin: 0 10px 0 0;
        }
        p {
          width: 110px;
        }
      }
    }
  }
}
</style>
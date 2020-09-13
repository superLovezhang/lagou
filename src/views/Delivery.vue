<template>
  <div class="delivery-wrap">
    <headtop />
    <div class="delivery-content">
      <div class="delivery-l">
        <div class="delivery-head">
          <h1>已投递简历状态</h1>
          <span>
            <i class="iconfont icon-shuaxin"></i>刷新
          </span>
        </div>
        <div class="delivery-tab">
          <div :class="deliveryType === 0 ? 'delivery-tab-item active' : 'delivery-tab-item'" @click="deliveryType = 0">
            投递成功
            <div class="bottom-border"></div>
          </div>
          <div class="line"></div>
          <div :class="deliveryType === 1 ? 'delivery-tab-item active' : 'delivery-tab-item'" @click="deliveryType = 1">
            被查看
            <div class="bottom-border"></div>
          </div>
          <div class="line"></div>
          <div :class="deliveryType === 2 ? 'delivery-tab-item active' : 'delivery-tab-item'" @click="deliveryType = 2">
            待沟通
            <div class="bottom-border"></div>
          </div>
          <div class="line"></div>
          <div :class="deliveryType === 3 ? 'delivery-tab-item active' : 'delivery-tab-item'" @click="deliveryType = 3">
            邀请面试
            <div class="bottom-border"></div>
          </div>
          <div class="line"></div>
          <div :class="deliveryType === 4 ? 'delivery-tab-item active' : 'delivery-tab-item'" @click="deliveryType = 4">
            不适合
            <div class="bottom-border"></div>
          </div>
          <div class="line"></div>
          <div :class="deliveryType === 5 ? 'delivery-tab-item active' : 'delivery-tab-item'" @click="deliveryType = 5">
            删除记录
            <div class="bottom-border"></div>
          </div>
        </div>
        <div class="delivery-list">
          <div class="delivery-list-item" v-for="(item, index) in deliveryList" :key="index">
            <div class="delivery-list-title">
              <p>java开发实习（2020-02-15)</p>
              <span>（1k-2k）</span>
              <i class="iconfont icon-liaotian"></i>
            </div>
            <div class="delivery-list-name">
              密工体育科技 <span>[广州]</span>
            </div>
            <div class="delivery-list-info">
             <div class="resume-type">使用简历 : <span>在线简历</span></div>
             <div class="delivery-time">
               2020-08-04 16:03
               <span>投递成功</span>
             </div>
            </div>
          </div>
          <div class="tip" v-show="deliveryList.length ===0">当前没有符合的投档记录</div>
        </div>
      </div>
      <div class="delivery-r">
        <div class="nav-tab">
          <i class="iconfont icon-xiangbao"></i>
          <span>投递箱</span>
        </div>
        <div class="nav-tab">
          <i class="iconfont icon-letter"></i>
          <span>邀请函</span>
        </div>
        <div class="nav-tab">
          <i class="iconfont icon-icon-"></i>
          <span>收藏夹</span>
        </div>
        <div class="nav-tab">
          <i class="iconfont icon-dingyue"></i>
          <span>订阅栏</span>
        </div>
      </div>
    </div>
    <footbottom />
  </div>
</template>

<script>
import headtop from "@/components/headtop";
import footbottom from "@/components/footbottom";

export default {
  components: {
    headtop,
    footbottom,
  },
  data() {
    return {
      deliveryType: 0,
      deliveryList: []
    }
  },
  watch: {
    deliveryType(val) {
      console.log(val)
    }
  }
};
</script>

<style lang="scss" scoped>
.delivery-wrap {
  .delivery-content {
    width: 1002px;
    margin: 35px auto 325px auto;
    display: flex;
    .delivery-l {
      width: 680px;
      min-height: 432px;
      margin-right: 42px;
      background-color: #fafafa;
      .delivery-head {
        height: 60px;
        line-height: 60px;
        display: flex;
        color: #555;
        padding: 0 20px;
        box-sizing: border-box;
        margin-bottom: 20px;
        justify-content: space-between;
        border-bottom: 1px solid #ebebeb;
        h1 {
          font-size: 24px;
        }
        span {
          font-size: 18px;
          cursor: pointer;
          &:not(i):hover {
            color: #00b38a;
          }
          i {
            color: #91cebe;
          }
        }
      }
      .delivery-tab {
        height: 48px;
        color: #777777;
        display: flex;
        align-items: center;
        background-color: #f2f2f2;
        .delivery-tab-item {
          line-height: 48px;
          padding: 0 25px;
          cursor: pointer;
          position: relative;
          &:hover {
            color: #00b38a;
          }
          &.active {
            color: #00b38a;
            .bottom-border {
              width: 100%;
              height: 3px;
              left: 0;
              bottom: 0;
              position: absolute;
              background-color: #00b38a;
            }
          }
        }
        .line {
          width: 1px;
          height: 15px;
          box-sizing: border-box;
          border-right: 1px solid #d8d8d8;
        }
      }
      .delivery-list {
        min-height: 304px;
        padding: 20px 34px 20px 29px;
        .delivery-list-item {
          padding: 12px;
          height: 100px;
          box-sizing: border-box;
          background-color: #fff;
          border-left: 2px solid #91cebe;
          .delivery-list-title {
            font-size: 18px;
            color: #0d9572;
            margin-bottom: 12px;
            display: flex;
            p {
              width: 175px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            span {
              color: #e6775c;
              margin: 0 5px;
            }
            i {}

          }
          .delivery-list-name {
            color: #555555;
            font-size: 16px;
            line-height: 28px;
            span {
              color: #999999;
            }
          }
          .delivery-list-info {
            font-size: 14px;
            color: #999;
            display: flex;
            justify-content: space-between;
            span {
              color: #333333;
            }
          }
        }
        .tip {
          font-size: 18px;
          text-align: center;
          margin-top: 50px;
        }
      }
    }
    .delivery-r {
      width: 280px;
      height: 70px;
      display: flex;
      .nav-tab {
        width: 67px;
        height: 70px;
        display: flex;
        cursor: pointer;
        margin-right: 4px;
        font-size: 14px;
        align-items: center;
        border: 1px solid #f2f2f2;
        box-sizing: border-box;
        flex-direction: column;
        &:last-of-type {
          margin-right: 0;
        }
        &:hover > * {
          color: #00b38a;
        }
        i {
          margin: 12px 0 5px 0;
          color: #878787;
        }
        span {
          color: #555555;
        }
      }
    }
  }
}
</style>
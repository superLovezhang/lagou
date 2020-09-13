<template>
  <div class="collection-wrap">
    <headtop />
    <div class="collection-content">
      <div class="collection-l">
        <div class="collection-head">
          <h1>我收藏的职位</h1>
        </div>
        <div class="collection-list">
          <!-- v-for="(item, index) in collectionList" :key="index" -->
          <div class="collection-list-item">
            <div class="collection-img">
              <img
                src="https://www.lgstatic.com/i/image2/M01/D3/C1/CgoB5lxGkWOAX8BcAAFAxNnySXk934.PNG"
                alt
              />
            </div>
            <div class="collection-info">
              <div class="collection-title">
                <div>
                  <p>JAVA实习（2018-02)</p>
                  <span>（2k-3k）</span>
                </div>
                <em>发布时间：2020-08-04 16:11</em>
              </div>
              <div class="collection-desc">恒拓开源 / 广州 / 不限 / 本科</div>
              <div class="collection-boon">
                <span>五险两金，带薪休假，公司食堂，出游团建</span>
                <div class="collection-btn">
                  <span>取消收藏</span>
                  <div class="line"></div>
                  <span>投个简历</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="collection-r">
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
      collectionList: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.collection-wrap {
  .collection-content {
    width: 1002px;
    margin: 35px auto 325px auto;
    display: flex;
    .collection-l {
      width: 680px;
      min-height: 432px;
      margin-right: 42px;
      background-color: #fafafa;
      .collection-head {
        height: 60px;
        line-height: 60px;
        color: #555;
        padding: 0 20px;
        box-sizing: border-box;
        margin-bottom: 20px;
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
      .collection-list {
        min-height: 304px;
        padding: 35px 40px;
        .collection-list-item {
          padding: 8px;
          height: 85px;
          display: flex;
          margin-bottom: 25px;
          box-sizing: border-box;
          background-color: #fff;
          &:last-of-type {
            margin-bottom: 0;
          }
          .collection-img {
            margin-right: 10px;
            border: 1px solid #ededed;
            img {
              width: 70px;
              height: 70px;
            }
          }
          .collection-info {
            width: 505px;
            font-size: 14px;
            .collection-title {
              display: flex;
              font-size: 18px;
              color: #0d9572;
              justify-content: space-between;
              > div {
                display: flex;
                p {
                  max-width: 130px;
                  overflow: hidden;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                }
                span {
                  color: #e6775c;
                  max-width: 90px;
                  font-size: 16px;
                  overflow: hidden;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                }
              }
              em {
                font-size: 12px;
                color: #999999;
              }
            }
            .collection-desc {
              color: #555555;
              line-height: 25px;
              margin-top: 5px;
            }
            .collection-boon {
              display: flex;
              justify-content: space-between;
              > span {
                width: 325px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }
              .collection-btn {
                width: 140px;
                display: flex;
                span {
                  color: #019875;
                  cursor: pointer;
                  &:hover {
                    color: #00b38a;
                  }
                }
                .line {
                  width: 1px;
                  height: 10px;
                  margin: 0 10px;
                  box-sizing: border-box;
                  border-right: 1px solid #c6c6c6;
                }
              }
            }
          }
        }
      }
    }
    .collection-r {
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
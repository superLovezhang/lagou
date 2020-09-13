<template>
  <div class="home-wrap">
    <headtop @showMask="showMask" />
    <div class="search-wrap">
      <div class="container">
        <div class="search-mid">
          <search-box />
          <div class="hot-keyowrd">
            热门搜索 :
            <span>测试开发</span>
            <span>Java开发</span>
          </div>
        </div>
      </div>
    </div>
    <div class="label-wrap">
      <div class="container">
        <div class="label-l">
          <ul>
            <li>
              <span>技术</span>
              <router-link to="/search/Java" tag="a">Java</router-link>
              <router-link to="/search/PHP" tag="a">PHP</router-link>
              <router-link to="/search/C++" tag="a">C++</router-link>
              <router-link to="/search/区块链" tag="a">区块链</router-link>
              <i class="iconfont icon-right"></i>
            </li>
            <li>
              <span>产品</span>
              <router-link to="/search/产品总监" tag="a">产品总监</router-link>
              <router-link to="/search/产品经理" tag="a">产品经理</router-link>
              <i class="iconfont icon-right"></i>
            </li>
            <li>
              <span>设计</span>
              <router-link to="/search/UI设计师" tag="a">UI设计师</router-link>
              <router-link to="/search/交互设计" tag="a">交互设计</router-link>
              <router-link to="/search/网页设计师" tag="a">网页设计师</router-link>
              <i class="iconfont icon-right"></i>
            </li>
            <li>
              <span>运营</span>
              <router-link to="/search/新媒体运营" tag="a">新媒体运营</router-link>
              <router-link to="/search/编辑" tag="a">编辑</router-link>
              <router-link to="/search/数据运营" tag="a">数据运营</router-link>
              <i class="iconfont icon-right"></i>
            </li>
            <li>
              <span>市场</span>
              <router-link to="/search/市场营销" tag="a">市场营销</router-link>
              <router-link to="/search/市场推广" tag="a">市场推广</router-link>
              <router-link to="/search/市场策划" tag="a">市场策划</router-link>
              <i class="iconfont icon-right"></i>
            </li>
            <li>
              <span>销售</span>
              <router-link to="/search/销售专员" tag="a">销售专员</router-link>
              <router-link to="/search/销售经理" tag="a">销售经理</router-link>
              <router-link to="/search/销售总监" tag="a">销售总监</router-link>
              <i class="iconfont icon-right"></i>
            </li>
            <li>
              <span>职能</span>
              <router-link to="/search/HR" tag="a">HR</router-link>
              <router-link to="/search/行政" tag="a">行政</router-link>
              <router-link to="/search/财务" tag="a">财务</router-link>
              <router-link to="/search/审计" tag="a">审计</router-link>
              <i class="iconfont icon-right"></i>
            </li>
            <li>
              <span>游戏</span>
              <router-link to="/search/小游戏开发" tag="a">小游戏开发</router-link>
              <router-link to="/search/U3D" tag="a">U3D</router-link>
              <router-link to="/search/游戏策划" tag="a">游戏策划</router-link>
              <i class="iconfont icon-right"></i>
            </li>
          </ul>
        </div>
        <div class="label-r">
          <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide>
              <a href>
                <img
                  src="https://www.lgstatic.com/i/image/M00/38/FF/Ciqc1F8erTGADhghAAF8-nnU4hY65.JPEG"
                  alt
                />
              </a>
            </swiper-slide>
            <swiper-slide>
              <a href>
                <img
                  src="https://www.lgstatic.com/i/image/M00/38/F4/CgqCHl8ek7KAE-krAADxTQach6Q356.PNG"
                  alt
                />
              </a>
            </swiper-slide>
            <swiper-slide>
              <a href>
                <img
                  src="https://www.lgstatic.com/i/image/M00/36/D4/CgqCHl8YH_2AaYbNAAFeVQog2kM667.JPG"
                  alt
                />
              </a>
            </swiper-slide>

            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </div>
      </div>
    </div>
    <div class="office-wrap">
      <div class="container">
        <div class="office-header">
          <div
            :class="['office-type-hot', officeType === true ? 'active' : '']"
            @click="officeType = true"
          >24Hour热门</div>
          <div
            :class="['office-type-new', officeType === false ? 'active' : '']"
            @click="officeType = false"
          >最新职位</div>
        </div>
        <div class="office-hot-content clearfloat" v-show="officeType">
          <div class="office-tip" v-if="hotTip">
            <i class="iconfont icon-yiwen"></i>
            <span>过去24小时，最多人看过的岗位在这里</span>
            <em @click="hotTip = false">我知道了</em>
          </div>
          <div class="office-item" v-for="item in 9" :key="item">
            <div class="office-item-top">
              <div class="office-title">
                <router-link to="/detail" tag="p" class="l">社群运营</router-link>
                <div class="publishtime l">[14:34]发布</div>
                <i class="iconfont icon-IMliaotian-shixin l"></i>
                <div class="salary r">7K-8K</div>
              </div>
              <div class="office-experience">经验1-3年 / 大专</div>
              <div class="office-label">
                <div class="office-label-item">活动策划</div>
                <div class="office-label-item">产品运营</div>
                <div class="office-label-item">用户运营</div>
              </div>
            </div>
            <div class="office-item-company">
              <a href>
                <img
                  src="https://www.lgstatic.com/thumbnail_100x100/i/image/M00/16/C3/Ciqc1F7WE0CAer4AAABVlEx2JAk401.png"
                  alt
                />
              </a>
              <div class="company-info">
                <a href>思谋信息</a>
                <span>移动互联网 / A轮 / 深圳</span>
              </div>
            </div>
          </div>
          <div class="office-more">
            <a href>查看更多</a>
          </div>
        </div>
        <div class="office-new-content clearfloat" v-show="!officeType">
          <div class="office-tip" v-if="newTip">
            <i class="iconfont icon-yiwen"></i>
            <span>刚刚才发布的职位！</span>
            <em @click="newTip = false">我知道了</em>
          </div>
          <div class="office-item" v-for="item in 9" :key="item">
            <div class="office-item-top">
              <div class="office-title">
                <router-link to="/detail" tag="p" class="l">核算会计(上海)</router-link>
                <div class="publishtime l">[11:24]发布</div>
                <i class="iconfont icon-IMliaotian-shixin l"></i>
                <div class="salary r">4K-6K</div>
              </div>
              <div class="office-experience">经验1-3年 / 大专</div>
              <div class="office-label">
                <div class="office-label-item">银行</div>
                <div class="office-label-item">会计</div>
                <div class="office-label-item">财务</div>
              </div>
            </div>
            <div class="office-item-company">
              <a href>
                <img
                  src="https://www.lgstatic.com/thumbnail_100x100/i/image/M00/13/51/CgqKkVbnZ52AYLVRAALVGclrAtY201.png"
                  alt
                />
              </a>
              <div class="company-info">
                <a href>赢时胜软件</a>
                <span>金融 / 上市公司 / 上海</span>
              </div>
            </div>
          </div>
          <div class="office-more">
            <a href>查看更多</a>
          </div>
        </div>
      </div>
    </div>
    <div class="company-wrap">
      <div class="container">
        <div class="company-header">
          <div class="company-hot">互联网热门公司榜</div>
        </div>
        <div class="company-list clearfloat">
          <div class="company-tip" v-if="companyTip">
            <i class="iconfont icon-yiwen"></i>
            <span>互联网行业实力热门企业</span>
            <em @click="companyTip = false">我知道了</em>
          </div>
          <div class="company-item l" v-for="(item, index) in 8" :key="index">
            <div class="company-top">
              <router-link to="/company/1" tag="a">
                <img
                  src="https://www.lgstatic.com/thumbnail_160x160/image1/M00/00/47/CgYXBlTUXOSAF2BxAABArVeLFCY330.png"
                  alt
                />
              </router-link>
              <div class="company-name">灵雀云</div>
              <span>数据服务,企业服务 / B轮</span>
              <p>国际化的顶级技术团队打造的下一代云平</p>
            </div>
            <div class="company-info">
              <div class="company-info-item">
                <span>21</span>
                <a href>面试评价</a>
              </div>
              <div class="company-info-item">
                <span>8</span>
                <a href>在招职位</a>
              </div>
              <div class="company-info-item">
                <span>88%</span>
                <a href>建立处理率</a>
              </div>
            </div>
          </div>
          <div class="company-more">
            <a href>查看更多</a>
          </div>
        </div>
      </div>
    </div>
    <div class="friend-links">
      <div class="container">
        <div class="friend-links-head">
          <ul class="clearfloat">
            <li :class="linkType === 0 ? 'active' : ''" @click="linkType = 0">友情链接</li>
            <li :class="linkType === 1 ? 'active' : ''" @click="linkType = 1">热门城市</li>
            <li :class="linkType === 2 ? 'active' : ''" @click="linkType = 2">热门公司</li>
            <li :class="linkType === 3 ? 'active' : ''" @click="linkType = 3">热门职位</li>
            <li :class="linkType === 4 ? 'active' : ''" @click="linkType = 4">热门行业</li>
            <li :class="linkType === 5 ? 'active' : ''" @click="linkType = 5">热门关键词</li>
          </ul>
        </div>
        <div class="friend-links-content" v-if="linkType === 0 || linkType !== 1">
          <ul class="clearfloat" ref="expand">
            <li>
              <a href>找工作</a>
            </li>
            <li>
              <a href>招聘</a>
            </li>
            <li>
              <a href>招聘网</a>
            </li>
            <li>
              <a href>Java课</a>
            </li>
            <li>
              <a href>字节跳动</a>
            </li>
            <li>
              <a href>字节跳动</a>
            </li>
            <li>
              <a href>字节跳动</a>
            </li>
            <li>
              <a href>字节跳动</a>
            </li>
            <li>
              <a href>字节跳动</a>
            </li>
            <li>
              <a href>字节跳动</a>
            </li>
            <li>
              <a href>字节跳动</a>
            </li>
            <li>
              <a href>字节跳动</a>
            </li>
            <li>
              <a href>字节跳动</a>
            </li>
            <li>
              <a href>字节跳动</a>
            </li>
            <li>
              <a href>字节跳动</a>
            </li>
            <li>
              <a href>字节跳动</a>
            </li>
            <li>
              <a href>字节跳动</a>
            </li>
            <li>
              <a href>字节跳动</a>
            </li>
            <li>
              <a href>字节跳动</a>
            </li>
            <li>
              <a href>字节跳动</a>
            </li>
            <li>
              <a href>字节跳动</a>
            </li>
          </ul>
          <div class="expand">
            <i :class="!isExpand ? 'iconfont icon-xia' : 'iconfont icon-ziyuan'"></i>
            <span @click="isExpand = !isExpand">{{ !isExpand ? '展开' : '收起' }}</span>
          </div>
        </div>
        <div class="friend-links-content" v-if="linkType === 1">
          <ul class="clearfloat" ref="expand">
            <li>
              <a href>Java课</a>
            </li>
          </ul>
          <div class="expand">
            <i :class="!isExpand ? 'iconfont icon-xia' : 'iconfont icon-ziyuan'"></i>
            <span @click="isExpand = !isExpand">{{ !isExpand ? '展开' : '收起' }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="city-mask" ref="mask">
      <div class="city-select">
        <div class="mask-head">
          <span>切换城市</span>
          <i class="iconfont icon-untitled94 r" @click="hideMask"></i>
        </div>
        <div class="city-content">
          <div class="city-content-top">
            <h4>亲爱的用户你好：</h4>
            <p>切换城市分站，让我们为您提供更准确的职位信息。</p>
          </div>
          <div class="city-content-mid">
            <span>点击进入</span>
            <em>{{ $store.state.city || '全国站' }}</em>
            <span>or 切换到以下城市</span>
          </div>
          <div class="city-content-bottom">
            <div class="city-item" @click="changeCity($event)">北京站</div>
            <div class="city-item" @click="changeCity($event)">上海站</div>
            <div class="city-item" @click="changeCity($event)">杭州站</div>
            <div class="city-item" @click="changeCity($event)">广州站</div>
            <div class="city-item" @click="changeCity($event)">深圳站</div>
            <div class="city-item" @click="changeCity($event)">成都站</div>
            <div class="city-item" @click="changeCity($event)">武汉站</div>
            <div class="city-item" @click="changeCity($event)">江苏站</div>
          </div>
        </div>
      </div>
    </div>
    <footbottom />
  </div>
</template>

<script>
import headtop from "@/components/headtop";
import footbottom from "@/components/footbottom";
import searchBox from "@/components/searchBox";
import { swiper, swiperSlide } from "vue-awesome-swiper";

import "swiper/dist/css/swiper.css";

export default {
  data() {
    return {
      officeType: true,
      hotTip: true,
      newTip: true,
      companyTip: true,
      isExpand: false,
      linkType: 0,
      swiperOption: {
        // 分页器配置
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // 设定初始化时slide的索引
        initialSlide: 0,
        //Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)
        direction: "horizontal",
        // 自动切换图配置
        autoplay: {
          delay: 5000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        // 箭头配置
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        // 环状轮播
        loop: true,
        // 修改swiper自己或子元素时，自动初始化swiper
        observer: true,
        // 修改swiper的父元素时，自动初始化swiper
        observeParents: true,
      },
    };
  },
  components: {
    headtop,
    footbottom,
    searchBox,
    swiper,
    swiperSlide,
  },
  methods: {
    changeCity(e) {
      this.$store.commit({
        type: "setCity",
        city: e.currentTarget.innerText,
      });
      this.$refs.mask.style.display = "none";
    },
    showMask() {
      this.$refs.mask.style.display = "block";
    },
    hideMask() {
      this.$refs.mask.style.display = "none";
    },
  },
  watch: {
    isExpand(newVal) {
      if (newVal === true) this.$refs.expand.style.height = "auto";
      else this.$refs.expand.style.height = "30px";
    },
  },
};
</script>

<style lang="scss" scoped>
.home-wrap {
  width: 100%;
  min-height: 100vh;
  .search-wrap {
    width: 100%;
    height: 132px;
    background-color: #f2f5f4;
    .container {
      height: 100%;
      padding: 30px 131px;
      box-sizing: border-box;
      .search-mid {
        width: 936px;
        height: 75px;
        .hot-keyowrd {
          width: 794px;
          height: 30px;
          font-size: 16px;
          line-height: 30px;
          color: #777777;
          span {
            color: #00b38a;
            margin-right: 25px;
          }
        }
      }
    }
  }
  .label-wrap {
    width: 100%;
    height: 438px;
    .container {
      height: 100%;
      padding-top: 45px;
      display: flex;
      box-sizing: border-box;
      .label-l {
        width: 300px;
        height: 353px;
        margin-right: 60px;
        ul {
          li {
            width: 300px;
            height: 46px;
            font-size: 18px;
            line-height: 46px;
            // box-shadow: 1px 1px 1px #000;
            &:hover {
              box-shadow: 0px 0px 5px rgba($color: #000000, $alpha: 0.5);
            }
            span {
              width: 40px;
              text-align: right;
              float: left;
              font-weight: bolder;
              margin-right: 12px;
            }
            a {
              float: left;
              font-size: 14px;
              color: #555555;
              margin-right: 21px;
              &:last-of-type {
                margin-right: 0;
              }
              &:hover {
                text-decoration: underline;
                color: #00b38a;
              }
            }
            i {
              float: right;
              color: #555555;
            }
          }
        }
      }
      .label-r {
        width: 841px;
        height: 347px;
        ::v-deep .swiper-pagination-bullet {
          transition: width 0.3s;
          background-color: rgba($color: #fff, $alpha: 0.5);
          opacity: 1;
        }
        ::v-deep .swiper-pagination-bullet-active {
          width: 24px;
          border-radius: 10px;
          background-color: #fff;
        }
      }
    }
  }
  .office-wrap {
    .container {
      .office-header {
        height: 52px;
        line-height: 52px;
        border-bottom: 1px solid #e8e8e8;
        .office-type-hot,
        .office-type-new {
          height: 52px;
          color: #999999;
          float: left;
          box-sizing: border-box;
          cursor: pointer;
          &.active {
            color: #333;
            border-bottom: 2px solid #333;
          }
        }
        .office-type-hot {
          margin-right: 55px;
        }
      }
      .office-new-content,
      .office-hot-content {
        max-height: 750px;
        position: relative;
        padding: 10px 0 50px 0;
        .office-tip {
          height: 65px;
          line-height: 65px;
          color: #999999;
          i,
          span {
            margin-right: 13px;
          }
          em {
            color: #00b38a;
            cursor: pointer;
          }
        }
        .office-item {
          width: 389px;
          height: 199px;
          float: left;
          margin-right: 15px;
          margin-bottom: 15px;
          padding: 20px 15px 15px 15px;
          box-sizing: border-box;
          border: 1px solid #eaeeed;
          &:nth-of-type(3n + 1) {
            margin-right: 0;
          }
          &:hover {
            box-shadow: 0 0 5px rgba($color: #000000, $alpha: 0.1);
          }
          .office-item-top {
            height: 105px;
            border-bottom: 1px dashed #e0e0e0;
            .office-title {
              height: 20px;
              p {
                cursor: pointer;
                max-width: 110px;
                overflow: hidden;
                margin-right: 5px;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
              .publishtime {
                margin-right: 5px;
                color: #999999;
              }
              i {
                color: #00b38a;
              }
              .salary {
                color: #fa6041;
              }
            }
            .office-experience {
              font-size: 14px;
              color: #777777;
              line-height: 25px;
            }
            .office-label {
              height: 27px;
              color: #999999;
              font-size: 12px;
              display: flex;
              margin-top: 10px;
              .office-label-item {
                width: 70px;
                height: 27px;
                line-height: 27px;
                text-align: center;
                margin-right: 10px;
                border: 1px solid #f0f0f0;
                &:last-of-type {
                  margin-right: 0;
                }
              }
            }
          }
          .office-item-company {
            height: 40px;
            display: flex;
            margin-top: 19px;
            img {
              width: 40px;
              height: 40px;
              margin-right: 12px;
            }
            .company-info {
              font-size: 16px;
              a {
                color: #333;
                &:hover {
                  color: #00b38a;
                }
              }
              span {
                color: #ccc;
              }
            }
          }
        }
        .office-more {
          width: 388px;
          height: 43px;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          position: absolute;
          line-height: 43px;
          text-align: center;
          transition: all 0.3s;
          border: 1px solid #00b38a;
          &:hover {
            background-color: #00b38a;
          }
          &:hover > a {
            color: #fff;
          }
          a {
            color: #00b38a;
          }
        }
      }
    }
  }
  .company-wrap {
    margin: 50px 0;
    .container {
      .company-header {
        height: 52px;
        line-height: 52px;
        color: #333;
        cursor: pointer;
        border-bottom: 1px solid #e8e8e8;
        .company-hot {
          display: inline-block;
          height: 52px;
          box-sizing: border-box;
          border-bottom: 2px solid #333;
        }
      }
      .company-list {
        position: relative;
        max-height: 680px;
        padding: 10px 0 50px 0;
        .company-tip {
          height: 65px;
          line-height: 65px;
          color: #999999;
          i,
          span {
            margin-right: 13px;
          }
          em {
            color: #00b38a;
            cursor: pointer;
          }
        }
        .company-item {
          width: 288px;
          height: 268px;
          margin-right: 15px;
          margin-bottom: 15px;
          line-height: 25px;
          text-align: center;
          border: 1px solid #eaeeed;
          box-sizing: border-box;
          padding: 25px 12px 15px 12px;
          &:nth-of-type(4n + 1) {
            margin-right: 0;
          }
          &:hover {
            box-shadow: 0 0 5px rgba($color: #000000, $alpha: 0.1);
          }
          .company-top {
            height: 175px;
            border-bottom: 1px dashed #e5e5e5;
            box-sizing: border-box;
            img {
              width: 80px;
              height: 80px;
            }
            .company-name {
            }
            span {
              font-size: 14px;
              color: #999999;
            }
            p {
              overflow: hidden;
              font-size: 14px;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
          }
          .company-info {
            display: flex;
            justify-content: space-between;
            margin-top: 10px;
            line-height: 15px;
            .company-info-item {
              width: 75px;
              height: 33px;
              text-align: center;
              border-right: 1px solid #ededed;
              font-size: 12px;
              &:last-of-type {
                border: none;
              }
              span {
                font-size: 14px;
                color: #00b38a;
              }
              a {
                display: block;
                color: #999999;
                &:hover {
                  color: #00b38a;
                }
              }
            }
          }
        }
        .company-more {
          width: 388px;
          height: 43px;
          bottom: 0;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          position: absolute;
          line-height: 43px;
          text-align: center;
          transition: all 0.3s;
          border: 1px solid #00b38a;
          &:hover {
            background-color: #00b38a;
          }
          &:hover > a {
            color: #fff;
          }
          a {
            color: #00b38a;
          }
        }
      }
    }
  }
  .friend-links {
    .container {
      .friend-links-head {
        height: 55px;
        line-height: 55px;
        border-bottom: 1px solid #e8e8e8;
        ul {
          li {
            height: 55px;
            float: left;
            cursor: pointer;
            margin-right: 22px;
            box-sizing: border-box;
            &.active {
              border-bottom: 3px solid #333333;
            }
          }
        }
      }
      .friend-links-content {
        position: relative;
        padding: 15px;
        font-size: 14px;
        ul {
          width: 80%;
          height: 30px;
          overflow: hidden;
          li {
            line-height: 30px;
            float: left;
            a {
              color: #555555;
              margin-right: 15px;
              &:hover {
                color: #00b38a;
                text-decoration: underline;
              }
            }
          }
        }
        .expand {
          color: #999;
          cursor: pointer;
          position: absolute;
          top: 15px;
          right: 0;
        }
      }
    }
  }
  .city-mask {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background-color: rgba($color: #000000, $alpha: 0.5);
    .city-select {
      width: 500px;
      height: 430px;
      position: absolute;
      left: 50%;
      top: 50%;
      z-index: 100;
      transform: translate(-50%, -50%);
      background-color: #fff;
      border: 13px solid rgba($color: #000000, $alpha: 0.6);
      .mask-head {
        height: 44px;
        line-height: 44px;
        color: #fff;
        text-indent: 15px;
        background-color: #00b38a;
        i {
          cursor: pointer;
          margin-right: 15px;
        }
      }
      .city-content {
        height: 306px;
        padding: 32px 40px;
        box-sizing: border-box;
        .city-content-top {
          height: 89px;
          border-bottom: 1px dashed #e5e5e5;
          h4 {
            font-size: 18px;
            font-weight: normal;
          }
          p {
            color: #555555;
            font-size: 14px;
            line-height: 30px;
          }
        }
        .city-content-mid {
          height: 92px;
          display: flex;
          color: #555;
          align-items: center;
          span {
            font-size: 14px;
            margin-right: 15px;
          }
          em {
            width: 90px;
            font-size: 17px;
            box-sizing: border-box;
            margin-right: 15px;
            line-height: 40px;
            text-align: center;
            border: 2px solid #00b38a;
          }
        }
        .city-content-bottom {
          height: 104px;
          .city-item {
            width: 86px;
            height: 39px;
            float: left;
            cursor: pointer;
            box-sizing: border-box;
            margin: 0 25px 13px 0;
            color: #999999;
            line-height: 39px;
            text-align: center;
            border: 1px solid #dce4e6;
            &:nth-of-type(4n) {
              margin-right: 0;
            }
            &:hover {
              color: #555;
              border-color: #00b38a;
            }
          }
        }
      }
    }
  }
}
</style>
<template>
  <div class="search-wrap">
    <headtop />
    <div class="search-content">
      <div class="container">
        <div class="search-type">
          <div class="search-type-item active">职位(3)</div>
          <div class="search-type-item">公司(3)</div>
        </div>
        <search-box />
      </div>
    </div>
    <div class="search-condition">
      <div class="container">
        <div class="search-condition-top">
          <div class="search-change-city">
            <div class="address l">工作地点 :</div>
            <div class="current-city l">{{ searchQuery.city }}</div>
            <i class="iconfont icon-right l"></i>
            <ul class="l">
              <li class="active">不限</li>
              <li
                v-for="(item, index) in cityList"
                :key="index"
                @click="searchQuery.city = item"
              >{{ item }}</li>
            </ul>
          </div>
          <div class="search-filter-item">
            <div class="left-title">工作经验 :</div>
            <div class="search-options">
              <ul>
                <!-- <li class="active">不限</li> -->
                <li
                  v-for="(item, index) in workExperience"
                  :key="index"
                  :class="searchQuery.workExperience === index ? 'active' : ''"
                  @click="searchQuery.workExperience = index"
                >{{ item }}</li>
              </ul>
            </div>
          </div>
          <div class="search-filter-item">
            <div class="left-title">学历要求 :</div>
            <div class="search-options">
              <ul>
                <!-- <li class="active">不限</li> -->
                <li
                  v-for="(item, index) in educationList"
                  :key="index"
                  :class="searchQuery.education === index ? 'active' : ''"
                  @click="searchQuery.education = index"
                >{{ item }}</li>
              </ul>
            </div>
          </div>
          <div class="search-filter-item">
            <div class="left-title">融资阶段 :</div>
            <div class="search-options">
              <ul>
                <!-- <li class="active">不限</li> -->
                <li
                  v-for="(item, index) in financingList"
                  :key="index"
                  :class="searchQuery.financing === index ? 'active' : ''"
                  @click="searchQuery.financing = index"
                >{{ item }}</li>
              </ul>
            </div>
          </div>
          <div class="search-filter-item">
            <div class="left-title">公司规模 :</div>
            <div class="search-options">
              <ul>
                <!-- <li class="active">不限</li> -->
                <li
                  v-for="(item, index) in scaleList"
                  :key="index"
                  :class="searchQuery.scale === index ? 'active' : ''"
                  @click="searchQuery.scale = index"
                >{{ item }}</li>
              </ul>
            </div>
          </div>
          <div class="search-filter-item">
            <div class="left-title">行业领域 :</div>
            <div class="search-options">
              <ul>
                <!-- <li class="active">不限</li> -->
                <li
                  v-for="(item, index) in companyTypeList"
                  :key="index"
                  :class="searchQuery.industry === index ? 'active' : ''"
                  @click="searchQuery.industry = index"
                >{{ item }}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="search-condition-bottom">
          <div class="left-title">排序方式 :</div>
          <div class="search-time-filter">
            <div
              :class="searchQuery.orderBy === 0 ? 'search-time active' : 'search-time'"
              @click="searchQuery.orderBy = 0"
            >默认</div>
            <div
              :class="searchQuery.orderBy === 1 ? 'search-time active' : 'search-time'"
              @click="searchQuery.orderBy = 1"
            >最新</div>
          </div>
          <div class="search-salary" @click="salaryShow = !salaryShow">
            <span>月薪 :</span>
            <div class="select-salary">
              <span>{{ salaryList[searchQuery.salary] }}</span>
              <i class="iconfont icon-up_st" :style="salaryShow ?  'transform: rotate(0);' : 'transform: rotate(180deg);'"></i>
              <ul v-show="salaryShow">
                <li 
                  v-for="(item, index) in salaryList" 
                  :key="index"
                  @click="searchQuery.salary = index"
                >{{ item }}</li>
              </ul>
            </div>
          </div>

          <div class="search-salary" @click="jobTypeShow = !jobTypeShow">
            <span>工作性质 :</span>
            <div class="select-salary">
              <span>{{ jobTypeList[searchQuery.jobType] }}</span>
              <i class="iconfont icon-up_st" :style="jobTypeShow ?  'transform: rotate(0);' : 'transform: rotate(180deg);'"></i>
              <ul v-show="jobTypeShow">
                <li 
                  v-for="(item, index) in jobTypeList" 
                  :key="index"
                  @click="searchQuery.jobType = index"
                >{{ item }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="search-result">
      <div class="container">
        <div class="search-result-item" v-for="item in 15" :key="item">
          <div class="search-item-top">
            <div class="search-item-l">
              <div class="info">
                <router-link to="/detail" tag="a">招聘专员[江岸区]</router-link>
                <em>13:26发布</em>
                <i class="iconfont icon-liaotian"></i>
              </div>
              <div class="claim">
                <span>3k-6k</span>
                <div class="experience">经验1-3年 / 大专</div>
              </div>
            </div>
            <div class="search-item-r">
              <div class="search-item-rl">
                <router-link to="/company/1" tag="a">
                  果石摄影
                  <i class="iconfont icon-renzheng"></i>
                </router-link>
                <span>电商,企业服务 / 不需要融资 / 50-150人</span>
              </div>
              <div class="search-item-rr">
                <router-link to="/company/1" tag="a">
                  <img
                    src="https://www.lgstatic.com/thumbnail_120x120/i/image2/M01/B1/CA/CgotOVv_SsCAaphyAABAxQKr2Z0051.png"
                    alt
                  />
                </router-link>
              </div>
            </div>
          </div>
          <div class="search-item-bottom">
            <div class="search-label">
              <div class="search-label-item">招聘</div>
              <div class="search-label-item">人事</div>
            </div>
            <div class="company-info">“招行一级子公司、商业保险、定期体检”</div>
          </div>
        </div>
        <pagination :totalPages="3" @handleParentMethod="getJobs" />
      </div>
    </div>
    <footbottom />
  </div>
</template>

<script>
import headtop from "@/components/headtop";
import footbottom from "@/components/footbottom";
import searchBox from "@/components/searchBox";
import pagination from "@/components/pagination";

// import request from '@/utils/request'

export default {
  components: {
    headtop,
    footbottom,
    searchBox,
    pagination,
  },
  data() {
    return {
      searchQuery: {
        city: this.$store.state.city
          ? this.$store.state.city.replace("站", "")
          : "全国",
        workExperience: 0,
        education: 0,
        financing: 0,
        scale: 0,
        industry: 0,
        orderBy: 0,
        salary: 0,
        jobType: 0,
      },
      jobTypeShow: false,
      salaryShow: false,
      cityList: [
        "全国",
        "北京",
        "上海",
        "深圳",
        "广州",
        "杭州",
        "成都",
        "南京",
        "西安",
        "厦门",
        "长沙",
        "苏州",
        "天津",
      ],
      workExperience: [
        "不限",
        "应届毕业生",
        "3年及以下",
        "3-5年",
        "5-10年",
        "10年以上",
        "不要求",
      ],
      educationList: ["不限", "大专", "本科", "硕士", "博士", "不要求"],
      financingList: [
        "不限",
        "未融资",
        "天使轮",
        "A轮",
        "B轮",
        "C轮",
        "D轮及以",
        "上市公司",
        "不需要融资",
      ],
      scaleList: [
        "不限",
        "少于15人",
        "15-50人",
        "50-150人",
        "150-500人",
        "500-2000人",
        "2000人以上",
      ],
      companyTypeList: [
        "不限",
        "移动互联网",
        "电商",
        "金融",
        "企业服务",
        "教育",
        "文娱丨内容",
        "游戏",
        "消费生活",
        "硬件",
      ],
      salaryList: [
        "不限",
        "2k以下",
        "2k-5k",
        "5k-10k",
        "10k-15k",
        "15k-25k",
        "25k-50k",
        "50k以上",
      ],
      jobTypeList: ["不限", "全职", "兼职", "实习"],
      jobsList: [],
    };
  },
  methods: {
    getJobs(page = 1) {
      console.log(page);
      window.scrollTo(0, 0);
      // request({
      //   method: 'GET',
      //   url: 'xxx',
      //   data: null
      // }).then(res => {})
    },
  },
};
</script>

<style lang="scss" scoped>
.search-wrap {
  width: 100%;
  overflow: hidden;
  color: #555555;
  min-height: 100vh;
  font-size: 14px;
  .search-content {
    width: 100%;
    height: 157px;
    background-color: #f2f5f4;
    .container {
      overflow: hidden;
      .search-type {
        height: 30px;
        margin: 30px 0 15px 0;
        line-height: 30px;
        display: flex;
        .search-type-item {
          padding: 0 10px;
          cursor: pointer;
          margin-right: 10px;
          color: #999999;
          &.active {
            color: #fff;
            background-color: #00b38a;
          }
        }
      }
    }
  }
  .search-condition {
    padding-top: 35px;
    .container {
      .search-condition-top {
        width: 960px;
        height: 210px;
        margin-bottom: 25px;
        border: 1px solid #ededed;
        .search-change-city {
          display: flex;
          height: 35px;
          box-sizing: border-box;
          align-items: center;
          background-color: #fafafa;
          border-bottom: 1px solid #ebebeb;
          .address {
            width: 90px;
            font-weight: bolder;
            margin-right: 5px;
            text-align: right;
          }
          .current-city {
            width: 45px;
            line-height: 24px;
            text-align: center;
            border: 1px solid #ebebeb;
          }
          i {
            color: #ccc;
            margin: 0 10px;
          }
          ul {
            width: 690px;
            display: flex;
            justify-content: space-between;
            li {
              width: 45px;
              height: 35px;
              cursor: pointer;
              text-align: center;
              line-height: 35px;
              box-sizing: border-box;
              &:hover {
                color: #fff;
                background-color: #00b38a;
              }
              &.active {
                color: #00b38a;
                cursor: default;
                border: 1px solid #ebebeb;
                border-bottom: 0;
                background-color: #fff;
              }
            }
          }
        }
        .search-filter-item {
          height: 35px;
          display: flex;
          align-items: center;
          background-color: #fafafa;
          .left-title {
            width: 90px;
            font-weight: bolder;
            float: left;
            margin-right: 5px;
            text-align: right;
          }
          .search-options {
            ul {
              width: 815px;
              height: 35px;
              align-items: center;
              display: flex;
              li {
                padding: 0 5px;
                height: 22px;
                line-height: 22px;
                cursor: pointer;
                margin-left: 5px;
                &.active {
                  color: #fff;
                  background-color: #00b38a;
                }
              }
            }
          }
        }
      }
      .search-condition-bottom {
        width: 960px;
        height: 45px;
        display: flex;
        align-items: center;
        margin-bottom: 17px;
        border: 1px solid #ededed;
        background-color: #fafafa;
        .left-title {
          width: 90px;
          font-weight: bolder;
          margin-right: 10px;
          text-align: right;
        }
        .search-time-filter {
          display: flex;
          margin-right: 40px;
          .search-time {
            width: 45px;
            height: 25px;
            cursor: pointer;
            text-align: center;
            line-height: 25px;
            &.active {
              color: #fff;
              background-color: #00b38a;
            }
          }
        }
        .search-salary {
          line-height: 25px;
          margin-right: 40px;
          display: flex;
          > span {
            font-weight: bolder;
            margin-right: 10px;
          }
          .select-salary {
            width: 85px;
            height: 25px;
            cursor: default;
            position: relative;
            display: flex;
            background-color: #fff;
            span {
              width: 60px;
              height: 22px;
              text-align: center;
              line-height: 22px;
            }
            i {
              color: #9b9b9b;
              transition: all 0.2s;
              transform: rotate(180deg);
            }
            ul {
              width: 100%;
              top: 28px;
              position: absolute;
              background-color: #fff;
              li {
                width: 85px;
                height: 32px;
                cursor: pointer;
                text-align: center;
                line-height: 32px;
                &:hover {
                  color: #00b38a;
                  background-color: #fafafa;
                }
              }
            }
          }
        }
      }
    }
  }
  .search-result {
    padding-bottom: 80px;
    .search-result-item {
      width: 960px;
      height: 125px;
      margin-bottom: 18px;
      border: 1px solid #ededed;
      .search-item-top {
        width: 100%;
        height: 83px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 15px 15px 0 15px;
        .search-item-l {
          width: 286px;
          height: 60px;
          line-height: 30px;
          .info {
            a {
              display: inline;
              max-width: 188px;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              font-size: 17px;
              color: #00b38a;
              margin-right: 5px;
            }
            em {
              font-size: 14px;
              color: #999999;
              margin-right: 5px;
            }
            i {
              cursor: pointer;
              font-size: 25px;
              color: #01b289;
            }
          }
          .claim {
            font-size: 14px;
            display: flex;
            span {
              color: #fd5f39;
              margin-right: 17px;
            }
            .experience {
            }
          }
        }
        .search-item-r {
          width: 380px;
          height: 60px;
          line-height: 30px;
          display: flex;
          justify-content: space-between;
          .search-item-rl {
            width: 270px;
            height: 60px;
            a {
              color: #00b38a;
              display: block;
            }
          }
          .search-item-rr {
            a {
              img {
                width: 60px;
                height: 60px;
              }
            }
          }
        }
      }
      .search-item-bottom {
        width: 100%;
        height: 42px;
        display: flex;
        justify-content: space-between;
        padding: 0 15px;
        box-sizing: border-box;
        background-color: #fafafa;
        .search-label {
          width: 285px;
          height: 42px;
          display: flex;
          align-items: center;
          .search-label-item {
            height: 20px;
            padding: 0 5px;
            line-height: 20px;
            border-radius: 3px;
            margin-right: 10px;
            border: 1px solid #dcdcdc;
            &:last-of-type {
              margin-right: 0;
            }
          }
        }
        .company-info {
          width: 375px;
          height: 42px;
          line-height: 42px;
        }
      }
    }
  }
}
</style>
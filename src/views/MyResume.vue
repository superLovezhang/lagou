<template>
  <div class="resume-wrap">
    <headtop />
    <div class="resume-content">
      <div class="containers">
        <div class="resume-l">
          <div class="resume-l-head">
            <div class="resume-head-img">
              <img
                src="https://www.lgstatic.com/i/image/M00/19/58/CgqCHl7aRGWASvK5AABfVeN_2mQ161.png"
                alt
              />
            </div>
            <div class="resume-head-info">
              <div class="resume-name">
                <span>张诏</span>
                <em>
                  <i class="iconfont icon-bianji"></i>编辑
                </em>
              </div>
              <div class="resume-school">武汉交通职业学院 / 大专 / 2021.06年毕业 / 20岁</div>
              <div class="resume-contact-information">
                <div class="resume-contact-item">
                  <i class="iconfont icon-shouji"></i>
                  <span>16607925248</span>
                </div>
                <div class="resume-contact-item">
                  <i class="iconfont icon-22"></i>
                  <span>2321885538@qq.com</span>
                </div>
              </div>
            </div>
          </div>
          <div class="resume-l-edit">
            <div class="resume-edit-item">
              <div class="resume-edit-head">
                <span>个人优势</span>
                <em>
                  <i class="iconfont icon-tianjiazengjiajia"></i>添加
                </em>
              </div>
              <div class="resume-edit-content">
                <span>能够熟练使用前端框架和后端Java框架能够熟练使用前端框架和后端Java框架能够熟练使用前端框架和后端Java框架能够熟练使用前端框架和后端Java框架能够熟练使用前端框架和后端Java框架</span>
                <em>
                  <i class="iconfont icon-bianji"></i>编辑
                </em>
              </div>
            </div>
            <div class="resume-edit-item">
              <div class="resume-edit-head">
                <span>教育经历</span>
                <em>
                  <i class="iconfont icon-tianjiazengjiajia"></i>添加
                </em>
              </div>
              <div class="resume-edit-content">
                <em>
                  <i class="iconfont icon-bianji"></i>编辑
                </em>
              </div>
            </div>
            <div class="resume-edit-item">
              <div class="resume-edit-head">
                <span>工作经历</span>
                <em>
                  <i class="iconfont icon-tianjiazengjiajia"></i>添加
                </em>
              </div>
              <div class="resume-edit-content">
                <em>
                  <i class="iconfont icon-bianji"></i>编辑
                </em>
              </div>
            </div>
            <div class="resume-edit-item">
              <div class="resume-edit-head">
                <span>项目经历</span>
                <em>
                  <i class="iconfont icon-tianjiazengjiajia"></i>添加
                </em>
              </div>
              <div class="resume-edit-content">
                <em>
                  <i class="iconfont icon-bianji"></i>编辑
                </em>
              </div>
            </div>
            <div class="resume-edit-item">
              <div class="resume-edit-head">
                <span>社交主页</span>
                <em>
                  <i class="iconfont icon-tianjiazengjiajia"></i>添加
                </em>
              </div>
              <div class="resume-edit-content">
                <em>
                  <i class="iconfont icon-bianji"></i>编辑
                </em>
              </div>
            </div>
            <div class="resume-edit-item">
              <div class="resume-edit-head">
                <span>图片作品</span>
                <em>
                  <i class="iconfont icon-tianjiazengjiajia"></i>添加
                </em>
              </div>
              <div class="resume-edit-content">
                <em>
                  <i class="iconfont icon-bianji"></i>编辑
                </em>
              </div>
            </div>
          </div>
        </div>
        <div class="resume-r">
          <div class="resume-career">
            <div class="resume-career-top">
              <div class="resume-career-title">
                <span>求职意向</span>
                <em v-if="1"><i class="iconfont icon-tianjiazengjiajia"></i>添加</em>
                <em v-else><i class="iconfont icon-bianji"></i>编辑</em>
              </div>
              <div class="resume-career-content">
                <i class="iconfont icon-77"></i>
                <span>WEB前端 / 九江 1K-2K</span>
              </div>
            </div>
            <div class="resume-career-bottom">
              <div class="resume-career-title">
                <span>求职状态</span>
                <em v-if="1"><i class="iconfont icon-tianjiazengjiajia"></i>添加</em>
                <em v-else><i class="iconfont icon-bianji"></i>编辑</em>
              </div>
              <div class="resume-career-content">
                <i class="iconfont icon-qiapian"></i>
                <span>积极找工作 ／随时可入职</span>
              </div>
            </div>
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

export default {
  components: {
    headtop,
    footbottom,
  },
};
</script>

<style lang="scss" scoped>
.resume-wrap {
  .resume-content {
    padding-top: 35px;
    margin-bottom: 80px;
    .containers {
      display: flex;
      .resume-l {
        width: 700px;
        border: 1px solid #e3ebe9;
        border-radius: 8px;
        margin-right: 40px;
        .resume-l-head {
          height: 207px;
          padding: 50px;
          display: flex;
          border-bottom: 1px solid #e3ebe9;
          box-sizing: border-box;
          background-color: #fafafa;
          .resume-head-img {
            width: 90px;
            height: 90px;
            margin-right: 17px;
            img {
              width: 90px;
              height: 90px;
              border-radius: 50%;
            }
          }
          .resume-head-info {
            width: 495px;
            height: 115px;
            font-size: 14px;
            .resume-name {
              display: flex;
              align-items: center;
              justify-content: space-between;
              span {
                font-size: 28px;
                font-weight: 600;
              }
              em {
                color: #00b38a;
                cursor: pointer;
              }
            }
            .resume-school {
              line-height: 25px;
            }
            .resume-contact-information {
              line-height: 25px;
              display: flex;
              .resume-contact-item {
                margin-right: 20px;
                i {
                  color: #666666;
                  margin-right: 5px;
                }
                span {
                }
              }
            }
          }
        }
        .resume-l-edit {
          padding: 50px;
          box-sizing: border-box;
          .resume-edit-item {
            font-size: 14px;
            margin-bottom: 85px;
            .resume-edit-head {
              display: flex;
              text-indent: 5px;
              height: 18px;
              margin-bottom: 20px;
              box-sizing: border-box;
              align-items: center;
              justify-content: space-between;
              border-left: 3px solid #00b38a;
              span {
                font-size: 18px;
                font-weight: 600;
              }
              em {
                cursor: pointer;
                color: #00b38a;
              }
            }
            .resume-edit-content {
              position: relative;
              line-height: 30px;
              &:hover > em {
                display: block;
              }
              em {
                right: 0;
                bottom: 0;
                display: none;
                cursor: pointer;
                position: absolute;
                color: #00b38a;
              }
            }
          }
        }
      }
      .resume-r {
        width: 285px;
        border-radius: 5px;
        .resume-career {
          padding: 0 20px;
          box-sizing: border-box;
          border: 1px solid #f2f2f2;
          .resume-career-top {
            box-sizing: border-box;
            border-bottom: 1px solid #f2f2f2;
          }
          .resume-career-top,
          .resume-career-bottom {
            height: 50%;
            color: #666;
            font-size: 14px;
            .resume-career-title {
              height: 55px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              span {
                font-size: 18px;
                font-weight: 600;
              }
              em {
                color: #00b38a;
                font-size: 14px;
                cursor: pointer;
              }
            }
            .resume-career-content {
              height: 55px;
              display: flex;
              align-items: center;
              i {
                width: 50px;
                text-align: center;
                color: #999999;
              }
              span {}
            }
          }
        }
      }
    }
  }
}
</style>
<template>
    <div>
        <NavBar
        title="校园智库"
        left-arrow
        @click-left="onClickLeft"/>
        <div class="sousuo">
            <Search
            v-model= 'value'
            show-action
            label="全部"
            placeholder="输入关键字..."
            @search="onSearch">
            <template #action>
                <div class="sjx"></div>
                <div class="serfont" @click="onSearch">搜索</div>
            </template>
            </Search>
            <center class="sc">
             我收藏的信息</center>
        </div>
        <div class="zhongbu"></div>
        <div class="bq">
            <div class="biaoqian">热门标签:<Tag color="#f0f0f0">职业生涯规划</Tag></div>
            <div class="biaoqian">我的关注:<Tag color="white">暂无关注的标签</Tag></div>
        </div>
        <div class="zhuanti"><span class="zt">专题</span></div>
        <Grid column-num="3"    >
            <GridItem>
                <div @click="yx"><span class="iconfont my_iconzhoushitubiao-"></span></div>
                <div>迎新</div>
            </GridItem>
            <GridItem>
                <div><span @click="xxjs" class="iconfont my_iconxuexiaojieshao"></span></div>
                <div>学校介绍</div>
            </GridItem>
            <GridItem>
                <div @click="rcsh"><span class="iconfont my_iconcha1"></span></div>
                <div>日常生活</div>
            </GridItem>
            <GridItem>
                <div><span @click="xxx" class="iconfont my_iconxuexi"></span></div>
                <div>学习</div>
            </GridItem>
            <GridItem>
                <div @click="kwhd"><span class="iconfont my_iconkewaihuodong-"></span></div>
                <div>课外活动</div>
            </GridItem>
            <GridItem>
                <div><span @click="jy" class="iconfont my_iconjiuye"></span></div>
                <div>就业</div>
            </GridItem>
            <GridItem>
                <div @click="cy"><span class="iconfont my_iconicon-test"></span></div>
                <div>创业</div>
            </GridItem>
            <GridItem>
                <div><span @click="xljy" class="iconfont my_iconxinlishenghuo"></span></div>
                <div>心灵寄语</div>
            </GridItem>
            <GridItem>
                <div><span @click="czda" class="iconfont my_iconzhuye_chengchangdangan"></span></div>
                <div>成长档案</div>
            </GridItem>
        </Grid>
    </div>
</template>

<script>
import { NavBar, Search, Tag, Grid, GridItem } from 'vant'
export default {
  components: {
    NavBar,
    Search,
    Tag,
    Grid,
    GridItem
  },
  methods: {
    onClickLeft () {
      this.$router.push({ path: '/index' })
    },
    onSearch () {
    },
    yx () {
      this.$router.push({ path: '/index' })
    },
    xxjs () {
      this.$router.push({ path: '/index' })
    },
    rcsh () {
      this.$router.push({ path: '/index' })
    },
    xxx () {
      this.$router.push({ path: '/index' })
    },
    kwhd () {
      this.$router.push({ path: '/index' })
    },
    jy () {
      this.$router.push({ path: '/index' })
    },
    cy () {
      this.$router.push({ path: '/index' })
    },
    xljy () {
      this.$router.push({ path: '/index' })
    },
    czda () {
      this.$router.push({ path: '/index' })
    }
  },
  data () {
    return {
      value: ''
    }
  }
}
</script>

<style lang="less" scoped>
.serfont{
  background-color: blue;
}
.van-search__action{
  background-color: blue;
  border: 1px solid blue;
  // margin-right: 8xp;
}
.van-search--show-action {
  padding-right: 8px;
}
.van-search__label{
  padding-right: 27px;
}
.sjx{
  width: 0;
  height: 0;
  border: 0px;
  border: 5px solid rgba(224, 230, 229, 0.582);
  border-top-color: black;
  border-bottom-color: rgba(224, 230, 229, 0);
  border-left-color: rgba(224, 230, 229, 0);
  border-right-color: rgba(224, 230, 229, 0);
  position: absolute;
  top: 76px;
  // left: -300px;
  left: 56px;
  z-index: 999;
}
.van-nav-bar__left{
  padding: 0px 8px;
}
.sousuo{
    height: 34px;
    width: 100%;
}
.sousuo .van-search__label{
    border: 1px solid blue;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}
.van-search{
  padding: 14px 12px;
  padding-left: 0px;
}
.van-search .van-cell {
    border: 1px solid blue;
    border-left: none;
}
.van-search__action{
  padding: 0px 12px;
  color: white;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.zhongbu{
    width: 100%;
    height: 20px;
    margin-top: 60px;
    background-color: rgba(224, 230, 229, 0.582);
}
.bq{
    text-align: left;
    padding: 15px;
    padding-left: 30px;
}
.bq div:first-child{
  color: red;
  .van-tag{
    color: black;
    font-size: 14px;
    margin-left: 5px;
}
}
.bq div:last-child{
  color: green;
  margin-top: 10px;
  .van-tag{
    color: #555;
    font-size: 14px;
    margin-left: 5px;
  }
}
.zhuanti{
    width: 100%;
    height:50px;
    font-weight: 600;
    line-height: 50px;
    padding-left: 20px;
    background-color:rgba(224, 230, 229, 0.582);
}
/deep/ .van-nav-bar .van-icon{
  color: white;
}
/deep/ .van-nav-bar__text{
  color: white;
      font-size: 0.83rem;
}
/deep/  .van-nav-bar{
background: #45bce4;
}
/deep/  .van-nav-bar__title{
  color:white;
  font-size: 1.1rem;
}
.iconfont{
  font-size: 40px;
}
</style>

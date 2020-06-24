<template>
    <div>
        <NavBar
        title="标题"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"/>
        <div class="sousuo">
            <Search
            v-model= 'value'
            show-action
            label="全部"
            placeholder="请输入搜索关键词"
            background="#0fb2fd"
            @search="onSearch">
            <template #action>
                <div @click="onSearch">搜索</div>
            </template>
            </Search>
            <center class="sc"><a href="http//www.baidu.com" >我收藏的信息</a></center>
        </div>
        <div class="zhongbu"></div>
        <div class="bq">
            <div class="biaoqian"><Tag color="#f2826a">热门标签:</Tag>职业生涯规划</div>
            <Tag color="rgb(164, 238, 168)">我的关注：</Tag>暂无关注的标签
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

<style scoped>
.sousuo{
    height: 34px;
    width: 100%;
}
.sc{
    margin-top: 0px;
}
.zhongbu{
    width: 100%;
    height: 20px;
    margin-top: 60px;
    background-color: rgba(224, 230, 229, 0.582);
}
.bq{
    text-align: center;
    padding-top: 15px;
}
.zhuanti{
    width: 100%;
    height:30px;
    padding-left: 20px;
    background-color:rgba(224, 230, 229, 0.582);
}
</style>

<template>
  <div id="app">
        <div class="tou">
            <NavBar class="tou"
            title="翻转校园"
            left-text="提醒"
            right-text="客服"
            @click-left="onClickLeft"
            @click-right="onClickRight"/>
        </div>

        <div class="lunbo">
        <Swipe :autoplay="3000" indicator-color="white">
            <SwipeItem><img class="tupian4" @click="lt1" src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg"></SwipeItem>
            <!-- <SwipeItem><img class="tupian4" @click="lt1" src="../../src/assets/tupian2.jpg"></SwipeItem>
            <SwipeItem><img class="tupian4" @click="lt1" src="../../src/assets/tupian3.jpg"></SwipeItem> -->
            </Swipe>
        </div>
        <div class ="zhuye1">
        <Grid square>  <!--九宫格 -->
            <GridItem>
            <div @click="jkbb"><span class="iconfont my_iconicon_jiankangbaobei"></span></div>
            <div>健康报备</div>
            </GridItem>
            <GridItem>
            <div @click="zn"><span class="iconfont my_iconkuyihuifu-"></span></div>
            <div>校园指南</div>
            </GridItem>
            <GridItem>
            <div><span class="iconfont my_iconshetuan"></span></div>
            <div>社团风采</div>
            </GridItem>
            <GridItem>
            <div @click="xy"><span class="iconfont my_iconjiechuqingnian"></span></div>
            <div>杰出校友</div>
            </GridItem>
            <GridItem>
            <div><span class="iconfont my_iconshetuan"></span></div>
            <div>社团风采</div>
            </GridItem>
            <GridItem>
            <div><span class="iconfont my_iconjiechuqingnian"></span></div>
            <div>杰出校友</div>
            </GridItem>
            <GridItem>
            <div><span class="iconfont my_iconjiaocaipingjia"></span></div>
            <div>教材评价</div>
            </GridItem>
            <GridItem>
            <div><span class="iconfont my_icongengduo"></span></div>
            <div>更多</div>
            </GridItem>
        </Grid>
        </div>
        <div class="zhuye2">
        <Grid direction="horizontal" column-num="2">  <!--四宫格 -->
            <GridItem>
            <span id= "tb" class="iconfont my_iconzhiku" ></span>
            <div class ="dh1">校园智库<div class="ziti">经验专题指引</div></div>
            </GridItem>
            <GridItem>
            <div><span id= "tb" class="iconfont my_iconchaxun"></span></div>
            <div>综合查询<div class="ziti">综合信息检索</div></div>
            </GridItem>
            <GridItem>
            <div><span id= "tb" class="iconfont my_iconketang"></span></div>
            <div>第二课堂<div class="ziti">综合素质拓展</div></div>
            </GridItem>
            <GridItem>
            <div><span id= "tb" class="iconfont my_iconshenpi"></span></div>
            <div>申报/审批<div class="ziti">填表申报审批</div></div>
            </GridItem>
        </Grid>
        </div>
        <div class="zhuye4">
            <!-- <img class="tupian4"  src="../../src/assets/tupian4.jpg"> -->
        </div>

        <div class="zhuye4">
            <!-- <img class="tupian4" src="../../src/assets/tupian5.jpg"> -->
        </div>
        <div class="zhuye5"> --我们的努力只为了您片刻的停留--</div>

        <div class="dibu">
        <Tabbar v-model="active">
            <TabbarItem icon="home-o">首页</TabbarItem>
            <TabbarItem icon="newspaper-o">资讯</TabbarItem>
            <TabbarItem icon="todo-list-o">课程</TabbarItem>
            <TabbarItem icon="balance-pay">缴费</TabbarItem>
            <TabbarItem icon="manager-o">我的</TabbarItem>
        </Tabbar>
        </div>
        <div class="kefu" ></div>
    </div>
</template>

<script>
import { NavBar, Swipe, SwipeItem, Grid, GridItem, Tabbar, TabbarItem, Dialog } from 'vant'
export default {
  methods: {
    onClickLeft () {
      Dialog.alert({
        title: '今天你努力了吗',
        message: '哈哈，啥也没有'
      }).then(() => {
        // on close
      })
    },
    onClickRight () {
      this.$router.push({ path: '/kefu' })
    },
    lt1 () {
      this.$router.push({ path: '/lbt' })
    },
    jkbb () {
      this.$router.push({ path: '/jkbb' })
    },
    zn () {
      this.$router.push({ path: '/xyzn' })
    },
    xy () {
      this.$router.push({ path: '/jcxy' })
    }
  },
  data () {
    return {
      active: 0,
      show: false
    }
  },

  components: {
    NavBar,
    Swipe,
    SwipeItem,
    Grid,
    GridItem,
    Tabbar,
    TabbarItem,
    [Dialog.Component.name]: Dialog.Component
  }
}
</script>>
<style lang="less" scoped>
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
  .tou{
    background-color: rgb(128, 228, 241);
  }

  .my-swipe{
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
  .size{
    color: #fff;
    width: 20px;
  }

  .zhuye2{
    /* height: 90px;
    width: 360px; */
    margin-top: 10px;
  }

  .zhuye1{
    margin-top: 10px;
  }
  .ziti{
    font-size: 8px;
    margin-top: 3px;
  }
  .zhuye4{
    margin-top: 10px;
  }
  .zhuye5{
    text-align: center;
    font-size: 12px;
    margin-bottom: 50px;
  }
  .tupian{
    width: 100%;
    height:150px;
  }
  .tupian4{
    width: 100%;
    height:210px;
  }
  #tb{
    margin-right: 21px;
  }
  .kefu{
    margin-bottom: 50px;
  }
</style>

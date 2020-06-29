<template>
  <div id="app">
        <div class="tou">
          <navigation title="反转校园" left="remind" right="customer" @click-left="remind">
          </navigation>
        </div>
        <div class="lunbo">
          <Swipe :autoplay="3000" indicator-color="white">
            <SwipeItem><img class="tupian4" @click="lt1" src='../assets/tupian1.jpg'></SwipeItem>
            <SwipeItem><img class="tupian4" @click="lt2" src="../assets/tupian3.jpg"></SwipeItem>
            <SwipeItem><img class="tupian4" @click="lt3" src="../assets/tupian2.jpg"></SwipeItem>
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
              <div><span @click="stfc" class="iconfont my_iconshetuan"></span></div>
              <div>社团风采</div>
              </GridItem>
              <GridItem>
              <div @click="xy"><span class="iconfont my_iconjiechuqingnian"></span></div>
              <div>杰出校友</div>
              </GridItem>
              <GridItem>
              <div><span @click="stfc" class="iconfont my_iconshetuan"></span></div>
              <div>社团风采</div>
              </GridItem>
              <GridItem>
              <div><span @click="xy" class="iconfont my_iconjiechuqingnian"></span></div>
              <div>杰出校友</div>
              </GridItem>
              <GridItem>
              <div><span class="iconfont my_iconjiaocaipingjia"></span></div>
              <div>教材评价</div>
              </GridItem>
              <GridItem>
              <div><span @click="gd" class="iconfont my_icongengduo"></span></div>
              <div>更多</div>
              </GridItem>
          </Grid>
        </div>
        <div class="zhuye2">
          <Grid direction="horizontal" column-num="2">  <!--四宫格 -->
            <GridItem @click="zkk">
            <span id= "tb" class="iconfont my_iconzhiku" ></span>
            <div class ="dh1">校园智库<div class="ziti">经验专题指引</div></div>
            </GridItem>
            <GridItem @click="zhcx">
            <div><span id= "tb" class="iconfont my_iconchaxun"></span></div>
            <div>综合查询<div class="ziti">综合信息检索</div></div>
            </GridItem>
            <GridItem @click="dier">
              <div><span id= "tb" class="iconfont my_iconketang"></span></div>
              <div>第二课堂<div class="ziti">综合素质拓展</div></div>
            </GridItem>
            <GridItem @click="hh">
            <div><span id= "tb" class="iconfont my_iconshenpi"></span></div>
            <div>申报/审批<div class="ziti">填表申报审批</div></div>
            </GridItem>
          </Grid>
        </div>
        <div class="zhuye4">
            <img @click="zdkf" class="tupian4"  src="../assets/tupian4.jpg">
        </div>

        <div class="zhuye4">
            <img @click="dlzn" class="tupian4" src="../assets/tupian5.jpg">
        </div>
        <div class="zhuye5"> --我们的努力只为了您片刻的停留--</div>

        <!-- <div class="dibu">
        <Tabbar v-model="active">
            <TabbarItem icon="home-o">首页</TabbarItem>
            <TabbarItem icon="newspaper-o">资讯</TabbarItem>
            <TabbarItem icon="todo-list-o">课程</TabbarItem>
            <TabbarItem icon="balance-pay">缴费</TabbarItem>
            <TabbarItem icon="manager-o">我的</TabbarItem>
        </Tabbar>
        </div> -->
            <tabbar >
            </tabbar>
        <div class="kefu" ></div>
    </div>
</template>

<script>
import navigation from '../component/navigation.vue'
import tabbar from '../component/tabbar.vue'
import { Swipe, SwipeItem, Grid, GridItem, Dialog } from 'vant'
export default {
  methods: {
    remind () {
      Dialog.alert({
        title: '今天你努力了吗',
        message: '哈哈，啥也没有'
      }).then(() => {
      })
    },
    ClickRight () {
      this.$router.push({ path: '/kefu' })
    },
    lt1 () {
      this.$router.push({ path: '/lbt' })
    },
    jkbb () {
      this.$router.push('/jkbb')
    },
    zn () {
      this.$router.push({ path: '/xyzn' })
    },
    xy () {
      this.$router.push({ path: '/jcxy' })
    },
    stfc () {
      this.$router.push({ path: '/stfc' })
    },
    gd () {
      this.$router.push({ path: '/gengduo' })
    },
    zkk () {
      this.$router.push({ path: '/xyzk' })
    },
    zhcx () {
      this.$router.push({ path: '/zhcx' })
    },
    lt2 () {
      this.$router.push({ path: '/lbt2' })
    },
    lt3 () {
      this.$router.push({ path: '/lbt3' })
    },
    dier () {
      this.$router.push({ path: '/dier' })
    },
    hh () {
      this.$router.push({ path: '/hhhh' })
    },
    zdkf () {
      this.$router.push({ path: '/lbt' })
    },
    dlzn () {
      this.$router.push({ path: '/dlzn' })
    }
  },
  data () {
    return {
      active: 0,
      show: false
    }
  },
  components: {
    Swipe,
    SwipeItem,
    Grid,
    GridItem,
    [Dialog.Component.name]: Dialog.Component,
    navigation,
    tabbar
  }
}
</script>
<style scoped>
  .tou{
    font-size: 20px;
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
    margin-top:10px;
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
    margin-bottom: 53px;
    margin-top: 0px;
    background-color: rgb(250, 214, 173);
  }
  .tupian{
    width: 100%;
    height:150px;
  }
  .tupian4{
    width: 100%;
    height:160px;
  }
  #tb{
    margin-right: 21px;
  }
  .kefu{
    margin-bottom: 50px;
  }
  .lunbo{
    margin-top: 45px;
  }
</style>

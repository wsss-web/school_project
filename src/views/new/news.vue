<template>
  <div>
    <navigation title="资讯"></navigation>
    <div class="sw">
      <Swipe class="my-swipe" autoplay=false indicator-color="white">
        <SwipeItem v-for="(item, index) in swplist" :key="index">
          <div class="swimg">
            <img :src="item.img" alt />
            <NoticeBar class="imgline" :scrollable="false" :text="item.title" />
            <!-- <div class="imgline">{{item.title}}</div> -->
          </div>
        </SwipeItem>
      </Swipe>
    </div>
    <div class="newsbox">
        <div v-for="(item, index) in newslist" :key="index" class="newsfonts">
            <img :src="item.img" alt="">
            <div class="newsright">
            <div class="titlefont">{{item.title}}</div>
            <div class="timefont">{{item.date}}</div>
            </div>
        </div>
    </div>
    <tar></tar>
  </div>
</template>

<script>
import { Swipe, SwipeItem, NoticeBar } from 'vant'
import navigation from '../../component/navigation'
import tar from '../../component/tabbar'
export default {
  //   name: 'new',
  data () {
    return {
      swplist: [
        {
          img:
            'http://www.yn.xinhuanet.com/original/2020-01/12/138698721_15788229472461n.jpg',
          title: '暗梅幽闻花,孔雀东南飞，物理一徘徊，西北有高楼，上与浮云齐'
        },
        {
          img:
            'http://www.sinaimg.cn/dy/c/p/2007-10-08/U397P1T1D14038293F21DT20071008115620.jpg',
          title: '雕栏玉砌今犹在，只是朱颜改'
        },
        {
          img: 'http://www.hkcd.com/userfiles/1581604535.jpg',
          title: '暗梅幽闻花,孔雀东南飞，物理一徘徊，西北有高楼，上与浮云齐'
        },
        {
          img: 'http://news.xinhuanet.com/politics/19cpcnc/2017-10/21/129724386_15085888316831n.jpg',
          title: '雕栏玉砌今犹在，只是朱颜改'
        }
      ],
      newslist: [
        {
          img: 'https://i01piccdn.sogoucdn.com/785c07e9f864befd',
          title: '时代剧的疯狂女的肌肤的地方',
          date: '2020-06-12'
        },
        {
          img: 'https://i04piccdn.sogoucdn.com/5b2493b59b3fa111',
          title: '海德堡随处可见的是本次选举',
          date: '2020-06-12'
        },
        {
          img: 'https://i01piccdn.sogoucdn.com/522bbbdb7fdf8e3f',
          title: '建瓯圣诞节圣诞节差不多嘛从女',
          date: '2020-06-12'
        },
        {
          img: 'https://i01piccdn.sogoucdn.com/94fe5834ee0c106a',
          title: '使得开发商贷款及时收集客户付费',
          date: '2020-06-12'
        },
        {
          img: 'https://i04piccdn.sogoucdn.com/d7509b1c1e849794',
          title: '适当放宽实际付款收款少女客服那边价格吧',
          date: '2020-06-12'
        },
        {
          img: 'https://i03piccdn.sogoucdn.com/7c15ab4de202c9f1',
          title: '但是快解放大军发表那个房间帮你保管',
          date: '2020-06-12'
        },
        {
          img: 'http://zjdaily.zjol.com.cn/images/2009-03/03/zjrb2009030300009v02b003.jpg',
          title: '士大夫VS覅和风纪扣那附近女方家那边',
          date: '2020-06-12'
        },
        {
          img: 'http://zjdaily.zjol.com.cn/images/2009-03/03/zjrb2009030300009v02b003.jpg',
          title: '收到VS反馈给人家你退款给你突然怀念以后',
          date: '2020-06-12'
        },
        {
          img: 'https://i01piccdn.sogoucdn.com/62b9aa32c2793687',
          title: '十字路口吃的烤肉翻了几倍v北流欸率',
          date: '2020-06-12'
        },
        {
          img: 'https://i04piccdn.sogoucdn.com/5d3e399ee2d4e8fa',
          title: '到处都是男方剋哦我然后国防部如果方便的',
          date: '2020-06-12'
        }
      ]
    }
  },
  components: {
    Swipe,
    SwipeItem,
    NoticeBar,
    navigation,
    tar
  },
  methods: {}
}
</script>
<style lang="less">
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  //   line-height: 150px;
  text-align: center;
//   background-color: #39a9ed;
}
.van-swipe__indicators{
    margin-left: 42%;

}
.van-notice-bar__content.van-ellipsis {
    max-width: 88%;
    // text-align: left;
    // margin-left: -10px;
}
.van-notice-bar__wrap{
    text-align: left;
}
.van-notice-bar{
    padding-left: 5px;
}
.swimg > img {
  width: 100%;
  height: 200px;
}
.van-swipe-item > div {
  // display: inline-block;
}
.imgline{
    height: 28px;
    background:#000;
    background-color: rgba(0, 0, 0, 0.3);
    // opacity: 0.3;
    color: white;
    font-size: 14px;
    margin-top: -30px;
}
.newsfonts{
    display: flex;
    padding: 5px;
    border-bottom: 1px solid #f0f0f0;
}
.newsfonts>img{
    width: 100px;
    height: 100px;
    padding-right: 10px;
}
.newsfonts>.titlefont{
    flex: 1;
    font-size: 14px;
    color: black;
    display: inline-block;
}
.timefont{
    // flex: 2;
    font-size: 14px;
    color: #888;
    display: inline-block;
}
.newsright{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>

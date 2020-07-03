<template>
  <div>
    <navigation title="资讯"></navigation>
    <div class="sw">
      <Swipe class="my-swipe" autoplay=false indicator-color="white">
        <SwipeItem v-for="(item, index) in list.slice(0,5)" :key="index" :id="item.new_id">
          <div class="swimg">
            <img :src="item.img_src" alt />
            <NoticeBar class="imgline" :scrollable="false" :text="item.title" />
            <!-- <div class="imgline">{{item.title}}</div> -->
          </div>
        </SwipeItem>
      </Swipe>
    </div>
    <div class="newsbox">
        <div v-for="(item, index) in list.slice(6)" :key="index" class="newsfonts" :id="item.new_id" @click="newmore(item.new_id)">
            <img :src="item.img_src" alt="">
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
      list: [],
      id: ''
    }
  },
  components: {
    Swipe,
    SwipeItem,
    NoticeBar,
    navigation,
    tar
  },
  methods: {
    newmore (newid) {
      console.log(newid)
      localStorage.setItem('newid', newid)
      this.$router.push('/newAtical')
    }
  },
  created: function () {
    var that = this
    this.tools.axios({
      url: '' + this.tools.requrl + '/newsinfo',
      method: 'get'
    })
      .then(
        function (res) {
          console.log('请求成功')
          that.list = res.data
        },
        function (err) {
          console.log(err)
        }
      )
  }
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
.newsbox{
  margin-bottom: 50px;
}
</style>

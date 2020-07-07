<template>
  <div class="artBody">
    <div class="artBody" v-for="(item, index) in artlist" :key="index">
      <!-- <navigation class="title" :title="item.title"></navigation> -->
      <div class="title">
        <div class="backfont" @click="backfont"></div>
        <div class="efont">{{item.title}}</div>
        <div class="iconfont">
          <img src="../../assets/newsimg/jiantou.png" @click="showShare = true" alt />
        </div>
      </div>
      <div class="artTitle">{{item.title}}</div>
      <div class="detials">{{item.autor}} &nbsp;&nbsp;&nbsp; 发表于 {{item.date}}</div>
      <div class="artText">
        <div>{{item.text}}</div>
        <div>
          <img :src="item.img_src" alt />
        </div>
      </div>
    </div>
    <ShareSheet v-model="showShare" title="立即分享给好友" :options="options" @select="onSelect" />
  </div>
</template>

<script>
// import navigation from '../component/navigation'
import { ShareSheet, Toast } from 'vant'
export default {
  data () {
    return {
      artlist: [],
      showShare: false,
      options: [
        [
          { name: '微信', icon: 'wechat' },
          { name: '微博', icon: 'weibo' },
          { name: 'QQ', icon: 'qq' }
        ],
        [
          { name: '复制链接', icon: 'link' },
          { name: '分享海报', icon: 'poster' },
          { name: '二维码', icon: 'qrcode' }
        ]
      ]
    }
  },
  components: {
    ShareSheet
  },
  methods: {
    backfont () {
      this.$router.push('/news')
    },
    onSelect (option) {
      Toast(option.name)
      this.showShare = false
    }
  },
  created: function () {
    var that = this
    var newid = localStorage.getItem('newid')
    console.log(newid)
    this.tools.axios({
      url: '' + this.tools.requrl + '/newmore?new_id=' + newid + '',
      method: 'get'
    })
      .then(
        function (res) {
          console.log('请求成功')
          that.artlist = res.data
          console.log(res)
        },
        function (err) {
          console.log(err)
        }
      )
  }
}
</script>

<style scoped>
.artBody {
  padding: 10px;
}
.backfont {
  border-left: 2px solid white;
  border-top: 2px solid white;
  width: 0.4rem;
  height: 0.4rem;
  transform: rotate(-45deg);
  margin-left: 25px;
}
.artTitle {
  font-size: 20px;
  font-weight: 520;
  padding: 5px 0px;
  margin-top: 0.7rem;
  padding-top: 26px;
}
.iconfont > img {
  width: 1rem;
  height: 1rem;
  margin-right: 25px;
}
.detials {
  font-size: 12px;
  color: #999;
  padding: 15px 0px;
  border-bottom: 1px solid #f0f0f0;
}
.title {
  /* display: flex; */
  /* justify-content: space-around; */
  position: fixed;
  z-index: 99;
  width: 100%;
  top: 0;
  left: 0;
  background: rgb(69, 188, 228);
  font-size: 20px;
  text-align: center;
  padding: 0.7rem 0;
  /* line-height: ; */
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.title > div {
  display: inline-block;
}
.efont {
  margin: auto;
  max-width: 65%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.artText {
  padding: 15px 0px;
}
.artText > div > img {
  width: 100%;
  height: 300px;
  margin: 10px 0px;
}
</style>

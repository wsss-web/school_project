<template>
  <div class="artBody">
    <div class="artBody" v-for="(item, index) in artlist" :key="index">
      <!-- <navigation class="title" :title="item.title"></navigation> -->
      <div class="title">
        <div class="backfont"></div>
        <div class="efont">{{item.title}}</div>
        <div class="iconfont"><img src="../../assets/newsimg/jiantou.png" alt=""></div>
      </div>
      <div class="artTitle">{{item.title}}</div>
      <div class="detials">{{item.autor}} &nbsp;&nbsp;&nbsp; 发表于 {{item.date}}</div>
      <div class="artText">
          <div>{{item.text}}</div>
          <div>
            <img :src='item.src' alt="">
          </div>
      </div>
    </div>
  </div>
</template>

<script>
// import navigation from '../component/navigation'
export default {
  data () {
    return {
      artlist: [
        {
          title: '是的快女富士康v你覅收入及v能否发表',
          autor: 'fgvf',
          date: '2020-12-09 15.04',
          src: 'https://i01piccdn.sogoucdn.com/94fe5834ee0c106a',
          text:
            '收到v表示符号的俗人回复可能如果救恩堂默认发到v表示符号的俗人回复可能如果救恩堂默认发到到v表示符号的俗人回复可能如果救恩堂默认发v表示符号的俗人回复可能如果救恩堂默认发大脑男爵夫人健康往往会放入回复危机恶化覅如果黑u任何国际妇女收看凤凰卫视库for回复v哦i然后妇女技术开发的女生v'
        }
      ]
    }
  },
  components: {
  }
}
</script>

<style scoped>
.artBody{
  padding: 10px;
}
.backfont{
  border-left: 2px solid white;
  border-top: 2px solid white;
  width: 0.4rem;
  height: 0.4rem;
  transform: rotate(-45deg);
  margin-left: 25px;
}
.artTitle{
  font-size: 20px;
  font-weight: 520;
  padding: 5px 0px;
  margin-top: 0.7rem;
  padding-top: 26px;
}
.iconfont >img{
  width: 1rem;
  height: 1rem;
  margin-right: 25px;
}
.detials{
  font-size: 12px;
  color: #999;
  padding: 15px 0px;
  border-bottom: 1px solid #f0f0f0;
}
.title{
  /* display: flex; */
  /* justify-content: space-around; */
  position: fixed;
  z-index: 99;
  width: 100%;
  top: 0;
  left: 0;
  background: rgb(69,188,228);
  font-size: 20px;
  text-align: center;
  padding: 0.7rem 0;
  /* line-height: ; */
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.title>div{
  display: inline-block;
}
.efont{
  margin: auto;
  max-width: 65%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.artText{
  padding: 15px 0px;
}
.artText>div>img{
  width: 100%;
  height: 300px;
  margin: 10px 0px;
}

</style>

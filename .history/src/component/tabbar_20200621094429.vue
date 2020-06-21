<template>
  <ul class="t_box">
    <li  v-for="(i,k) in topage" @click=" tonav (i.path)" :key="k" >
      <i class="iconfont " :class="[{active: theactive === i.path},i.icon]" ></i>
      <p class="font">{{i.text}}</p>
    </li>
  </ul>
</template>
<style lang="less" scoped>
li {
  list-style: none;
}
.t_box {
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 3.2rem;
  background: #2a313a;
  li {
      width: 25%;
    display: flex;
    justify-content: center;
    color: #696e83;
    margin-top:.12rem;
    i {
      font-size: 1.4rem !important;
    }
    .font{
    margin-top:26px;
    margin-left: -23px;
    margin-bottom: 0px;
    font-size: 13px;
    }
  }
}
.active {
  color: #e96593;
}
</style>
<script>
export default {
  data () {
    return {
      theactive: 0,
      topage: [
        {
          path: '/index',
          icon: 'icon-zhuye',
          text: '首页'
        },
        {
          path: '/news',
          icon: 'icon-zixun',
          text: '资讯'
        },
        {
          path: '/course',
          icon: 'icon-kecheng',
          text: '课程'
        },
        {
          path: '/pay',
          icon: 'icon-tongxueshangke-',
          text: '缴费'
        },
        {
          path: '/my',
          icon: 'icon-wode',
          text: '我的'
        }
      ]
    }
  },
  methods: {
    tonav (i) {
      if (i === this.$route.path) {
      } else {
        this.$router.push(i)
      }
    }
  },
  created () {
    console.log(this.$route.path)
    this.theactive = this.$route.path
  }
}
</script>

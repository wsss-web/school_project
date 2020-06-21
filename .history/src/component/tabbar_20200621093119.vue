<template>
  <ul class="t_box">
    <li  v-for="(i,k) in topage" @click=" tonav (i.path)" :key="k" >
      <i class="iconfont " :class="[{active: theactive === i.path},i.icon]" ></i>
      <p class="zi">首页</p>
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
    align-items: center;
    color: #696e83;
    i {
      font-size: 1.2rem !important;
    }
    .zi{
   text-align:center;
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
          icon: 'icon-zhuye'
        },
        {
          path: '/news',
          icon: 'icon-zixun'
        },
        {
          path: '/course',
          icon: 'icon-kecheng'
        },
        {
          path: '/pay',
          icon: 'icon-tongxueshangke-'
        },
        {
          path: '/my',
          icon: 'icon-wode'
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

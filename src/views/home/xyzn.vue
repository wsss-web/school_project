<template>
    <div>
        <NavBar
        title="标题"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"/>
        这是校园指南界面
    </div>
</template>

<script>
import { NavBar } from 'vant'

export default {
  components: {
    NavBar
  },
  methods: {
    onClickLeft () {
      this.$router.push({ path: '/index' })
    }
  }
}
</script>

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
</style>

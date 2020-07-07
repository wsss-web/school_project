<template>
    <div>
        <NavBar
        title="申报/审批中心"
        left-text="返回"
        right-text="历史"
        left-arrow
        @click-left="onClickLeft"/>
        <div>
          <Tabs>
              <Tab title="可申报事项">
                <Empty  />
              </Tab>
              <Tab title="待办事项">
                <Empty  />
              </Tab>
          </Tabs>
        </div>
    </div>
</template>

<script>
import { NavBar, Tab, Tabs, Empty } from 'vant'
export default {
  components: {
    NavBar,
    Tab,
    Tabs,
    Empty
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

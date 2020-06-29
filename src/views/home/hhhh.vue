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
              <Tab title="可申报事项">暂无可申报事项</Tab>
              <Tab title="待办事项">暂无代办事项</Tab>
          </Tabs>
        </div>
    </div>
</template>

<script>
import { NavBar, Tab, Tabs } from 'vant'
export default {
  components: {
    NavBar,
    Tab,
    Tabs
  },
  methods: {
    onClickLeft () {
      this.$router.push({ path: '/index' })
    }
  }
}
</script>

<style scoped>

</style>

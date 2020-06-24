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

<style scoped>

</style>

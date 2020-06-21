<template>
    <div>
      这是首页
   <tabbar ></tabbar>
   <navigation left='提醒' title="翻转校园" right="people"></navigation>
    </div>
</template>
<script>
import tabbar from '../component/tabbar.vue'
import navigation from '../component/navigation.vue'
export default {
  data () {
    return {
    }
  },
  components: {
    tabbar,
    navigation
  }
}
</script>
<style lang="less" scoped>

</style>

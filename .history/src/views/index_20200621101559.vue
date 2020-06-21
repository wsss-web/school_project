<template>
    <div>
      这是首页
   <tabbar ></tabbar>
   <navigation title='提醒'></navigation>
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

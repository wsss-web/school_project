<template>
    <div>
     <navigation left='back' title="三方平台绑定" ></navigation>
     <div class="Icon">
 <span class="iconfont icon-weixin"></span>
     </div>
    </div>
</template>

<script>
import navigation from '../../component/navigation.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    navigation
  }
}
</script>
<style lang="less">
.Icon{
    margin-top:60px;
}
</style>

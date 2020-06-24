<template>
    <div>
     <navigation left='back' title="三方平台绑定" ></navigation>
     <div class="Icon">
 <span class="iconfont icon-weixin"></span>
 <span class="iconfont icon-koukou"></span>
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
    margin-top:90px;
   color:#45bce4;
   display: flex;
   justify-content: center;
   align-items: center;
   .iconfont{
       font-size: 38px;
   }
}
</style>

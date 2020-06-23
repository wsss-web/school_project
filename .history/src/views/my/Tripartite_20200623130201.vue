<template>
    <div>
     <navigation left='back' title="三方平台绑定" ></navigation>
     <div class="Icon">
 <span class="iconfont icon-weixin"></span>
 <span class="iconfont icon-koukou"></span>
     </div>
     <Button type="primary">解除绑定</Button>
    </div>
</template>

<script>
import { Button } from 'vant'
import navigation from '../../component/navigation.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    navigation,
    Button
  }
}
</script>
<style lang="less">
.Icon{
    margin-top:90px;
   color:#45bce4;
   display: flex;
   align-items: center;
     justify-content: space-around;
   .iconfont{
       font-size: 38px;
   }
}
</style>

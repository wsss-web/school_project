<template>
    <div>
     <navigation left='back' title="三方平台绑定" ></navigation>
     <div class="Icon">
 <span class="iconfont icon-weixin"></span>
 <span class="iconfont icon-koukou"></span>
     </div>
     <div class="button">
<Button type="primary">解除绑定</Button>
<Button type="primary">解除绑定</Button>
     </div>
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
<style lang="less" scoped>
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
.button{
    display: flex;
   justify-content: space-around;
    align-items: center;
    .van-button--primary{
        color:rgb(83, 183,215);
        background-color:white;
        border:1px solid rgb(83, 183,215);
           border-radius: 0.3rem;
    }
    .van-button--normal{
        padding: 0 15px;
    font-size: 14px;
    height:1.8rem;
    margin-top: .8rem;
    }
}
</style>

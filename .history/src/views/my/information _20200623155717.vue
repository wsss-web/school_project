<template>
    <div>
        <navigation left="back" title="重要信息维护"></navigation>
        <div class="title">
            <div class="case">
                <p>个人基本信息</p>
                <p>完整度:(0%)</p>
            </div>
            <div class="head">
               <div class="portrait">
                   个人照片
               </div>
               <van-uploader :after-read="afterRead" />
            </div>
        </div>
    </div>
</template>
<script>
import navigation from '../../component/navigation'
import { Uploader } from 'vant'
export default {
  data () {
    return {

    }
  },
  components: {
    navigation,
    Uploader
  }
}
</script>
<style lang="less">
.title{
    margin-top: 40px;
    height: 3rem;
    background: rgb(241, 240, 245);
    .case{
        margin-left:4px;
        margin-right:4px;
        display: flex;
        justify-content: space-between;
        line-height: 48px;
    }
    p:last-child{
        color:rgb(120, 119, 124)
    }
}
.head{
         margin-left: 34px;
    margin-top: 12px;
}
.portrait{
    font-size: 14px;
}
</style>

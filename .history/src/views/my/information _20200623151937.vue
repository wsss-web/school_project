<template>
    <div>
        <navigation left="back" title="重要信息维护"></navigation>
        <div class="title">
            <div class="case">
                <p>个人基本信息</p>
                <p>完整度:(0%)</p>
            </div>
        </div>
    </div>
</template>
<script>
import navigation from '../../component/navigation'
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
.title{
    margin-top: 40px;
    height: 3rem;
    background: rgb(241, 240, 245);
    .case{
        margin-left:4px;
        margin-right:4px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-align: center;
    }
}
</style>

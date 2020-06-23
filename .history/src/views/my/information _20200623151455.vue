<template>
    <div>
        <navigation left="back" title="重要信息维护"></navigation>
        <div class="title"></div>
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
    height: 2.5rem;
    background: rgb(241, 240, 245);
}
</style>

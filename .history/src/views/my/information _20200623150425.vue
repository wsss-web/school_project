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
    margin-top: 50px;
    height: 200px;
    border:1px solid black;
}
</style>

<template>
    <div>
      <navigation title="电子学生证" left="back"></navigation>
      <div class="case"></div>
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
.case{
    margin-top: 45px;
    border:1px solid black;
    margin:0px 10px;
}
</style>

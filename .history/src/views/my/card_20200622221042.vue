<template>
    <div>
      <navigation title="电子学生证" left="back"></navigation>
      <div class="case">
          <div class="card"></div>
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
.case{
    margin-top: 45px;
    border:1px solid black;
       padding: 0px 10px;
}
.card{
    border:1px solid black;
}
</style>

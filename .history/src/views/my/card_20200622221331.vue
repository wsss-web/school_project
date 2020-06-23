<template>
    <div>
      <navigation title="电子学生证" left="back"></navigation>
      <div class="case">
          <div class="card">
              <Icon name="warning-o" />
          </div>
      </div>
    </div>
</template>
<script>
import navigation from '../../component/navigation'
import { Icon } from 'vant'
export default {
  data () {
    return {

    }
  },
  components: {
    navigation,
    Icon
  }
}
</script>
<style lang="less">
.case{
    margin-top: 45px;
          padding: 0px 14px;
}
.card{
    border:1px solid black;
}
</style>

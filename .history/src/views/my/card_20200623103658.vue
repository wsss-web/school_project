<template>
    <div>
      <navigation title="电子学生证" left="back"></navigation>
      <div class="case">
          <div class="card">
              <Icon name="warning-o" color='rgb(233,177,79)' />
              <p>无权限或登录状态失败！</p>
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
body{
  background:rgb(239, 239, 239)
}
.case{
    margin-top: 45px;
          padding: 0px 14px;
}
.card{
    border:1px solid black;
    display: flex;
    align-content: center;
    justify-content: center;
    margin-top:80px;
    background: white;
}
</style>

<template>
    <div>
      <navigation title="电子学生证" left="back"></navigation>
      <div class="cases">
          <div class="card">
            <div class="no">
 <Icon name="warning-o" color='rgb(233,177,79)' />
            </div>
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
<style lang="less" scoped>
.cases{
    margin-top: 45px;
          padding: 0px 14px;
}
.card{
    display: flex;
    align-items: center;
    margin-top:80px;
   background:rgb(239, 239, 239);
    height: 150px;
    line-height: 150px;
    padding-left:15px;
    .no{
          margin-top: 1rem;
    padding-right: .4rem;
    }
    .van-icon{
          font-size: 32px;
    }
}
</style>

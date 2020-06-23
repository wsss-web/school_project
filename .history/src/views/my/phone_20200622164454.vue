<template>
    <div>
      <navigation title="绑定手机号" left="back" ></navigation>
      <div class="center">
              <div class="title"></div>
      </div>
    </div>
</template>
<script>
import navigation from '../../component/navigation.vue'
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
.center{
display: flex;
justify-content: center;
align-content: center;
.title{
     margin-top:44px;
    height: 400px;
}
}

</style>

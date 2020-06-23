<template>
    <div>
      <navigation title="绑定手机号" left="back" ></navigation>
      <div class="ccenter">
          <div class="icon"></div>
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
.icon{
    margin-top:44px;
    border:1px solid black;
    width:100px;
    height: 100px;
    border-radius: 50%;
}
}

</style>

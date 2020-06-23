<template>
    <div>
      <navigation title="绑定手机号" left="back" ></navigation>
      <div class="center">
              <div class="title">
                  <div class="icon"></div>
              </div>
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

.title{
     margin-top:44px;
    height: 400px;
    display: flex;
justify-content: center;
.icon{
    width:100px;
    height: 100px;
    border-radius: 50%;
    border:1px solid black;
}
}
}

</style>

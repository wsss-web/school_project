<template>
    <div>
       <navigation left="back" title="编辑昵称" right='sure'></navigation>
       <div class="text">
  <Field></Field>
       </div>
    </div>
</template>
<script>
import navigation from '../../component/navigation.vue'
import { Field } from 'vant'
export default {
  data () {
    return {

    }
  },
  components: {
    navigation,
    Field
  }
}
</script>
<style lang="less">
.text{
    margin-top:46px;
}
</style>

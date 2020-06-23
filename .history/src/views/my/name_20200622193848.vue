<template>
    <div>
       <navigation left="back" title="编辑昵称" right='sure'></navigation>
       <div class="text">
  <Field placeholder="请输入要编辑的内容"  v-model="value" :formatter="formatter"></Field>
       </div>
    </div>
</template>
<script>
import navigation from '../../component/navigation.vue'
import { Field } from 'vant'
export default {
  data () {
    return {
      value: ''
    }
  },
  components: {
    navigation,
    Field
  },
  methods: {
    formatter (value) {
      // 过滤输入的数字
      this.value = value
    }
  }
}
</script>
<style lang="less">
.text{
    margin-top:46px;
    .van-field__control{
        border:1px solid rgb(190,190,190);
        border-radius: .22rem;
    }
}
</style>

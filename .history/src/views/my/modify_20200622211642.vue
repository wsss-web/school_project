<template>
    <div>
        <navigation left="back" title="修改密码"></navigation>
        <div class="form">
       <Form  v-model="password"
    type="password"
    name="密码"
    label="密码"
    placeholder="密码"
    :rules="[{ required: true, message: '请填写密码' }]"></Form>
        </div>
    </div>
</template>
<script>
import navigation from '../../component/navigation'
import { Form } from 'vant'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  components: {
    navigation,
    Form
  }

}
</script>
<style lang="less">
.form{
    margin-top:60px;
}
</style>

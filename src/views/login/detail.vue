<template>
  <div>
    <div class="title">
      <navigation left="back" title="重要信息完善"></navigation>
          <CellGroup>
      <Cell title="名字"  />
      <Cell title="账号" :value="people.stu_id"></Cell>
      <Cell title="手机号" :value="people.phone" is-link to= '/my/phone'></Cell>
      <Cell title="昵称" :value="people.nickname" is-link to='/my/name'></Cell>
      <Cell title="性别" :value="people.sex" is-link @click="set"></Cell>
      <Cell title='邮箱' :value="people.address" is-link to='/my/mail'></Cell>
      <Cell title='修改密码' is-link  to='/my/modify'></Cell>
      <Cell style="color:red" title='重要信息维护' is-link to='/my/information'></Cell>
      <Cell  title='电子学生证' is-link to='/my/card'></Cell>
      <Cell  title='绑定第三方账号' is-link to='/my/tripartite'></Cell>
      <Cell title="关于" value="4.54" class="about" />
    </CellGroup>
    </div>
  </div>
</template>
<script>
import navigation from '../../component/navigation.vue'
import { Icon, Cell, CellGroup, Button, Dialog, Overlay } from 'vant'
export default {
  data () {
    return {}
  },
  components: {
    navigation
  }
}
</script>
<style lang="less" scoped>
</style>

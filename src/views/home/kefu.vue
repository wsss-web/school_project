<template>

    <div>
        <NavBar
        class="kftou"
        title="客服"
        v-model="values"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"/>
        <div class="tou1">问题和意见：</div>
        <Field
        rows="2"
        autosize
        label="请输入问题描述："
        type="textarea"
        maxlength="100"
        placeholder="请填写问题描述，客服小番会尽快解决您的问题"
        show-word-limit
        />
        <div class="tou1">联系方式</div>
        <CellGroup >
            <Cell title="学号/工号:" value="187414718341"/>
            <Cell title="您的姓名：" value="马云"/>
            <Cell title="联系电话：" value="1920394341"/>
            <Cell title="回访时间：" value="请输入方便联系的时间"/>
        </CellGroup >
        <Button @click="tj" type="primary" block>提交</Button>
    </div>

</template>

<script>
import { NavBar, Field, Cell, CellGroup, Button } from 'vant'
export default {
  name: 'kefu',
  components: {
    NavBar,
    Field,
    Cell,
    CellGroup,
    Button
  },
  methods: {
    onClickLeft () {
      this.$router.push({ path: '/index' })
    },
    onClickRight () {
    },
    tj () {
      console.log('dsdasd')
    }
  },
  data () {
    return {
      values: ''
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .van-nav-bar .van-icon{
  color: white;
}
/deep/ .van-nav-bar__text{
  color: white;
      font-size: 0.83rem;
}
/deep/  .van-nav-bar{
background: #45bce4;
}
/deep/  .van-nav-bar__title{
  color:white;
  font-size: 1.1rem;
}
.tou1{
  height: 30px;
  width: 100%;
  background-color: rgba(230, 234, 238, 0.856);
}
</style>

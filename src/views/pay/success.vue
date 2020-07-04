<template>
  <div>
    <div class="ti">
      <Nav left="back"></Nav>
      <span class="iconfont icon-weixintubiao"></span>
    </div>
    <p class="pay">支付成功</p>
    <p class="money">￥
      <span >{{title}}</span>
    </p>
    <div class="butt">
<Button type="default" size="normal" @click="finish">完成</Button>
    </div>
  </div>
</template>
<script>
import Nav from '../../component/navigation.vue'
import { Button } from 'vant'
export default {
  data () {
    return {
      value3: ''
    }
  },
  components: {
    Button,
    Nav
  },
  created () {
    this.title = this.$route.query.money
    console.log(this.title)
  },
  methods: {
    finish () {
      this.$router.push('/pay/payment')
    }
  }
}
</script>
<style lang="less" scoped>
.ti {
  margin-top:60px;
  display: flex;
  justify-content: center;
}
/deep/ .iconfont{
  font-size: 34px;
  color:green;
}
.pay{
  text-align: center;
  color:green;
  font-size: 18px;
  margin-top:20px;
}
.money{
  margin-top: 30px;
  font-size: 18px;
  text-align: center;
  span{
    font-size: 26px;
  }
}
.butt{
  margin-top: 60px;
  text-align: center;
  .van-button--default{
        width: 48%;
    border: 1px solid #5c925c;
    color: #5c925c;
  }
}
</style>

<template>
  <div class="ti">
    <navigation title="支付订单" left="back"></navigation>
      <div class="xiaofei">
        <div style="margin:15px 20px; font-size:13px;">消费总额</div>
        <div class="shuru">
          <span>￥</span>
          <Field v-model='titles' label="￥"></Field>
        </div>
        <p style="margin:15px 20px;font-size:13px;">可询问工作人员应缴费用总额</p>
      </div>
      <Button @click="pay(titles)" class="queren" size="small" >支付</Button>
  </div>
</template>

<script>
import navigation from '../../component/navigation'
import { Button, Field } from 'vant'
export default {
  name: 'zhifu',
  data () {
    return {
      value: '',
      value3: ''
    }
  },
  components: {
    Button,
    navigation,
    Field
  },
  methods: {
    pay (i) {
      this.current = i
      this.$router.push({
        path: '/pay/success',
        query: { money: this.titles }
      })
    }
  },
  created () {
    this.titles = this.$route.query.money
    console.log(this.$route.path)
    this.theactive = this.$route.path
  },
  mounted () {
    document
      .querySelector('html')
      .setAttribute('style', 'background-color:rgb(243,243,243)')
  },
  beforeDestroy () {
    document.querySelector('html').removeAttribute('style')
  }
}
</script>

<style  scoped lang="less">
.ti{
  margin-top: 46px;
}
.xiaofei{
  margin:20px 20px 0px 20px;
  border:1px solid #ccd0d2;
  background:  #fff;
  border-radius: 5px;
  color:#8D8D8F;
  /deep/ .van-field__label{
    width:60px;
  }
}
.queren{
  width: 80%;
  margin-left: 10%;
  background: #80D983;
  border-radius: 5px;
  margin-top: 30px;
  color: #f2f3f5;
  border: 1px solid #47D14C;
  background: rgb(69, 188, 228);
  border: 1px solid rgb(69, 188, 228);
  height: 2rem;
  border-radius: 0.3rem;
}
.shuru span {
  position: absolute;
  top: 5px;
  font-size: 25px;
  margin-left: 15px;
  vertical-align:top;
}
.shuru div {
  border: none;
  width: 90%;
  height: 50px;
  font-size: 25px;
  line-height: 50px;
  border-bottom: 1px solid #CFCFCF;
  text-indent: 30px;
  outline: none;
  white-space: pre;
  overflow-x: scroll;
  margin: 0 auto;
  vertical-align:top;
}
.shuru {
  position: relative;
  margin-bottom: 10px;
}
</style>

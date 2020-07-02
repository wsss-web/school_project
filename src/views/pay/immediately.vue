<template>
  <div class="big">
    <navigation title="支付订单" left="back"></navigation>
      <div class="xiaofei">
        <div style="margin:15px 20px; font-size:13px;">消费总额</div>
        <div class="shuru">
          <!-- <Field
          v-model="value"
          label="￥"
          placeholder=""
          input-align="left"
          /> -->
          <span>￥</span>
          <div>{{titles}}</div>
        </div>
        <p style="margin:15px 20px;font-size:13px;">可询问工作人员应缴费用总额</p>
      </div>
      <Button @click="showPopup" class="queren" size="small">支付</Button>
  </div>
</template>

<script>
import navigation from '../../component/navigation'
import { Button } from 'vant'
export default {
  name: 'zhifu',
  data () {
    return {
      value: ''
    }
  },
  components: {
    Button,
    navigation
  },
  methods: {
    showPopup () {
      this.show = true
    }
  },
  created () {
    this.titles = this.$route.query.money
  }
  // beforeCreate () {
  //   document.querySelector('body').setAttribute('style', 'background:rgb(245,251,253,1)')
  // },
  // beforeDestroy () {
  //   document.querySelector('body').setAttribute('style', '')
  // }
  // mounted () {
  //   document
  //     .querySelector('body')
  //     .setAttribute('style', 'background-color:rgb(243,243,243)')
  // },
  // beforeDestroy () {
  //   document.querySelector('body').removeAttribute('style')
  // }
}
</script>

<style  scoped>
.xiaofei{
  margin: 50px 20px;
  border:1px solid #ccd0d2;
  background:  #fff;
  border-radius: 5px;
  color:#8D8D8F;
}
.queren{
  width: 80%;
  margin-left: 10%;
  background: #80D983;
  border-radius: 5px;
  margin-top: 30px;
  color: #f2f3f5;
  border: 1px solid #47D14C
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

<template>
  <div class="big">
    <navigation title="云缴费" left="back" right="bill"></navigation>
    <div class="case">
      <div class="tu">
        <VanImage
          round
          width="2rem"
          height="2rem "
          style="margin-right:10px;"
          src="http://img1.imgtn.bdimg.com/it/u=3004952430,2809598645&fm=26&gp=0.jpg"
        />
        <div class="font">空调用电支出</div>
      </div>
      <div>
        <Cell title="缴费学院" v-model="data.sch_id" name="sch_id" size="large" />
        <Cell title="余额" v-model="data.money" name="sch_id" size="large" />
        <Cell title="缴费房间" is-link value="房间号"  v-model="data.room"></Cell>
        <Field  clearable label="缴费金额"  v-model="value2" input-align="right" placeholder="请输入金额" />
      </div>
      <p class="rest">提示：可能存在网络延迟，以上剩余量仅供参考</p>
      <div class="button">
        <Button type="danger" size="normal" @click="join">加入待缴费账单</Button>
        <Button
          type="warning"
          style="background:rgb(254,184,48); border:1px solid rgb(248,180,69);border-radius: 5px; color:white;"
          @click="pay(value2)"
        >立即支付</Button>
      </div>
    </div>
    <!-- <tab></tab> -->
  </div>
</template>
<script>
import navigation from '../../component/navigation'
import { Image as VanImage, Cell, Field, Button, Dialog } from 'vant'
export default {
  data () {
    return {
      show: false,
      value3: '',
      value2: '',
      // carmodel: '',
      data: {
        sch_id: '',
        money: ''
      }
    }
  },
  created () {
    var that = this
    var usernam = localStorage.getItem('username')
    this.tools.axios({
      url: 'http://localhost:3000/payment?username=' + usernam + '',
      method: 'get'
    })
      .then((res) => {
        that.data = res.data
        console.log(res)
      })
      .catch(function (err) {
        console.log(err)
      })
  },
  mounted () {
    document
      .querySelector('html')
      .setAttribute('style', 'background-color:rgb(243,243,243)')
  },
  beforeDestroy () {
    document.querySelector('html').removeAttribute('style')
  },
  components: {
    navigation,
    VanImage,
    Cell,
    Field,
    Button,
    [Dialog.Component.name]: Dialog.Component
  },
  methods: {
    join () {
      this.$router.push('/pay')
    },
    pay (i) {
      if (i === '') {
        Dialog.confirm({
          title: '提示',
          message: '请填写充值金额'
        })
          .then(() => {
            // that.$router.push('/index')
          })
          .catch(() => {
            // on cancel
          })
      } else {
        console.log(i)
        var that = this
        that.data.money = parseInt(i) + parseInt(that.data.money)
        this.tools.axios({
          url: 'http://localhost:3000/resetdomitory',
          method: 'get',
          params: that.data
        })
          .then(
            function (res) {
              console.log(res)
              // this.current = i
              that.$router.push({
                path: '/zhifu',
                query: { money: that.value2 }
              })
            },
            function (err) {
              console.log(err)
            }
          )
      }
    }
  }
}
</script>
<style lang="less" scoped>
body {
  background-color: rgb(243, 243, 243);
}
.van-cell--clickable {
  padding-left: 10px;
}
.case {
  margin: 0px 10px;
}
.rest {
  font-size: 14px;
  margin-left: 8px;
  margin-top: 12px;
  margin-bottom: 20px;
}
.tu {
  background: white;
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 70px;
  .font {
    color: black;
    font-size: 14px;
  }
}
.van-cell--large {
  padding-left: 10px;
}
.van-cell--large .van-cell__title {
  color: #969799;
  font-size: 14px;
}
.van-cell__value {
  color: black;
  font-size: 12px;
}
.van-cell--clickable {
  color: #969799;
}
.van-cell {
  padding-left: 10px;
}
/deep/ .van-field__label {
  color: #969799;
}
/deep/ .van-field__control {
  margin-left: 59%;
}
.button {
  display: flex;
  align-content: center;
  justify-content: space-around;
}
.van-button--danger {
  border-radius: 5px;
  border: 1px solid rgb(240, 179, 72);
  background: white;
  .van-button__text {
    color: rgb(240, 179, 72);
  }
}
.van-button--danger[data-v-538eddd2] {
  width: 130px;
}
.van-button .van-button--warning .van-button--normal {
  .van-button__text:nth-child(1) {
    color: white;
  }
}
.van-button {
  width: 130px;
}
</style>

<template>
  <div>
    <navigation left="back" title="重要信息维护"></navigation>
    <Form @submit="onSubmit" class="boxfont">
      <div class="titlefont2">宿舍信息</div>
      <div class="id">
        <CellGroup>
          <Field label="楼号" v-model="buildingId" name="buildingId" placeholder="楼号" />
          <Field label="楼层" v-model="floor" name="floor" placeholder="楼层" />
          <Field label="房间" v-model="room" name="room" placeholder="房间" />
          <Field label="房间规格" v-model="specifications" name="specifications" placeholder="房间规格" />
          <Field label="有无独卫" v-model="washroom" name="washroom" placeholder="有无独卫" />
          <Field label="有无阳台" v-model="balcony" name="balcony" placeholder="有无阳台" />
        </CellGroup>
        <div class="titlefont2">宿舍长信息</div>
        <CellGroup>
          <Field label="您的用户名" name="username" :placeholder="username" readonly/>
          <Field label="宿舍余额" v-model="money" name="money" placeholder="宿舍余额" />
          <Field label="宿舍长姓名" name="moniter" :placeholder="moniter" readonly/>
          <Field label="宿舍长学号" v-model="moniter_id" name="moniter_id" placeholder="宿舍长学号" />
          <Field label="院系" name="sch_id" :placeholder="sch_id" readonly/>
        </CellGroup>
        <div style="margin: 16px;">
          <Button round block type="info" native-type="submit" >保存</Button>
        </div>
      </div>
    </Form>
  </div>
</template>
<script>
import navigation from '../../component/navigation'
import { Form, Button, Field, CellGroup, Dialog } from 'vant'
export default {
  data () {
    return {
      buildingId: '',
      floor: '',
      room: '',
      specifications: '',
      washroom: '',
      balcony: '',
      username: localStorage.getItem('username'),
      money: '',
      moniter: localStorage.getItem('moniter'),
      moniter_id: '',
      sch_id: localStorage.getItem('schid')
    }
  },
  components: {
    Form,
    Button,
    Field,
    navigation,
    CellGroup,
    [Dialog.Component.name]: Dialog.Component
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
      var onedata = {
        buildingId: values.buildingId,
        floor: values.floor,
        room: values.room,
        specifications: values.specifications,
        washroom: values.washroom,
        balcony: values.balcony,
        username: localStorage.getItem('username'),
        money: values.money,
        moniter: localStorage.getItem('moniter'),
        moniter_id: values.moniter_id,
        sch_id: localStorage.getItem('schid')
        // username: localStorage.getItem('username'),
      }
      var that = this
      var flag = ''
      for (var p in onedata) {
        if (onedata[p] !== '') {
          flag = true
        } else {
          flag = false
        }
      }
      if (flag === true) {
        this.tools
          .axios({
            url: 'http://localhost:3000/registerdomitory',
            method: 'get',
            params: onedata
          })
          .then(res => {
            Dialog.confirm({
              title: '提示',
              message: '您已成功保存个人信息'
            })
              .then(() => {
                // on confirm
                that.$router.push('/index')
              })
              .catch(() => {
                // on cancel
              })
          })
          .catch(function (err) {
            console.log(err)
          })
      } else {
        Dialog.confirm({
          title: '提示',
          message: '请把表单填写完整'
        })
          .then(() => {
            // on confirm
          })
          .catch(() => {
            // on cancel
          })
      }
    },
    // validator (val) {
    //   return /1\d{10}/.test(val)
    // },
    // 异步校验函数返回 Promise
    // asyncValidator (val) {
    //   return new Promise(resolve => {
    //     Toast.loading('验证中...')
    //     setTimeout(() => {
    //       Toast.clear()
    //       resolve(/\d{6}/.test(val))
    //     }, 1000)
    //   })
    // },
    onFailed (errorInfo) {
      console.log('failed', errorInfo)
    }
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
<style scoped>
.boxfont {
  margin-top: 45px;
  background-color: #f0f0f0;
}
.titlefont1 {
  padding-left: 10px;
  display: flex;
  justify-content: space-between;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
}
.titlefont1 > div {
  display: inline-block;
}
.titlefont1 > div:last-child {
  color: #555;
}
.titlefont2 {
  padding-left: 10px;
  height: 50px;
  font-size: 14px;
  line-height: 50px;
}
.van-cell {
  padding: 5px 26px !important;
}
.van-field__label {
  padding-top: 6px;
}
.van-field__control {
  padding: 5px 0px;
  padding-left: 18px !important;
  border: 1px solid #31829b;
}
.cellfont1 .van-field__control {
  border: 0px solid #fff !important;
}
.lastcellfont {
  margin-top: 20px;
}
.cellfont1 .van-field__label {
  display: block;
}
.van-cell {
  line-height: 38px;
}
</style>

<template>
  <div>
    <navigation left="back" title="重要信息维护"></navigation>
    <Form validate-first @failed="onFailed" class="boxfont">
      <div class="titlefont2">宿舍信息</div>
      <div class="id">
      <CellGroup>
        <Field
            label="楼号"
            v-model="buildingId"
            name="2"
            placeholder="楼号"
        />
        <Field
            label="楼层"
            v-model="floorId"
            name="3"
            placeholder="楼层"
        />
        <Field
            label="房间"
            v-model="roomId"
            name="4"
            placeholder="房间"
        />
        <Field
            label="房间规格"
            v-model="roomSpecifications"
            name="2"
            placeholder="房间规格"
        />
        <Field
            label="有无独卫"
            v-model="singleGuard"
            name="3"
            placeholder="有无独卫"
        />
        <Field
            label="有无阳台"
            v-model="withoutBalconyr"
            name="4"
            placeholder="有无阳台"
        />
      </CellGroup>
      <div class="titlefont2">宿舍长信息</div>
      <CellGroup>
        <Field
            label="学号"
            v-model="m_id"
            name="2"
            placeholder="班级"
        />
        <Field
            label="姓名"
            v-model="sushezname"
            name="3"
            placeholder="姓名"
        />
        <Field
            label="院系"
            v-model="yuanxi"
            name="4"
            placeholder="院系"
        />
      </CellGroup>
      <div style="margin: 16px;">
        <Button round block type="info" native-type="submit">保存</Button>
      </div>
      </div>
    </Form>
  </div>
</template>
<script>
import navigation from '../../component/navigation'
import { Form, Button, Field, Toast, CellGroup } from 'vant'
export default {
  data () {
    return {
      degree: '0',
      uploader: [{ url: '' }],
      value1: '',
      value2: '',
      value3: '',
      pattern: /\d{6}/,
      sushezname: '',
      yuanxi: '',
      m_id: '',
      withoutBalconyr: '',
      singleGuard: '',
      roomSpecifications: '',
      roomId: '',
      floorId: '',
      buildingId: ''
    }
  },
  components: {
    Form,
    Button,
    Field,
    navigation,
    CellGroup
  },
  methods: {
    validator (val) {
      return /1\d{10}/.test(val)
    },
    // 异步校验函数返回 Promise
    asyncValidator (val) {
      return new Promise(resolve => {
        Toast.loading('验证中...')

        setTimeout(() => {
          Toast.clear()
          resolve(/\d{6}/.test(val))
        }, 1000)
      })
    },
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
.boxfont{
    margin-top: 45px;
    background-color: #f0f0f0;
}
.titlefont1{
    padding-left: 10px;
    display: flex;
    justify-content: space-between;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
}
.titlefont1>div{
    display: inline-block;
}
.titlefont1>div:last-child{
    color: #555;
}
.titlefont2{
    padding-left: 10px;
    height: 50px;
    font-size: 14px;
    line-height: 50px;
}
.van-cell{
    padding: 5px 26px!important;
}
.van-field__label{
    padding-top: 6px;
}
.van-field__control{
    padding: 5px 0px;
    padding-left: 18px!important;
    border: 1px solid #31829b;
}
.cellfont1 .van-field__control{
    border: 0px solid #fff!important;
}
.lastcellfont{
    margin-top: 20px;
}
.cellfont1 .van-field__label{
    display: block;
}
.van-cell{
  line-height: 38px;
}
</style>

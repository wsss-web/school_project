<template>
  <div>
    <navigation title="填写申请" left="back"></navigation>
    <div style="margin-top:47px;">
      <Form @submit="onSubmit">
        <CellGroup>
          <div style="font-weight:700;margin:7px 7px;">基本信息</div>
                    <Field
            v-model="value6"
            name="stuid"
            label="学号"
            input-align="right"
            placeholder="输入学号"
          />
                    <Field
            v-model="value7"
            name="place"
            label="学院"
            input-align="right"
            placeholder="输入学院-"
          />
                    <Field
            v-model="value8"
            name="place"
            label="专业"
            input-align="right"
            placeholder="输入专业"
          />
                    <Field
            v-model="value9"
            name="place"
            label="班级"
            input-align="right"
            placeholder="输入班级"
          />
                    <Field
            v-model="value10"
            name="place"
            label="辅导员"
            input-align="right"
            placeholder="输入辅导员"
          />
          <!-- <Cell title="申请人" value="name" />
          <Cell title="学号" value="164552" />
          <Cell title="学院" value="信息工程学院" />
          <Cell title="专业" value="物联网工程" />
          <Cell title="班级" value="16物联网2班" />
          <Cell title="辅导员" value="暂无" /> -->
          <div style="font-weight:700;margin:7px 7px;">活动信息</div>
          <Field
            v-model="value1"
            label="活动名称"
            input-align="right"
            name="activity"
            placeholder="输入活动名称"
          />
          <Field
            v-model="value2"
            label="获奖名称"
            input-align="right"
            name="prizename"
            placeholder="-输入获奖名称-"
          />
          <Cell title="获奖时间" :value="date1" name="prizetime" @click="show = true" />
          <Calendar v-model="show" @confirm="onConfirm" />
          <Cell title="活动时间" :value="date"  name="activitytime" @click="end = true" />
          <Calendar v-model="end"  @confirm="onConfirm2" />
          <Field
            v-model="value3"
            name="place"
            label="活动地点"
            input-align="right"
            placeholder="输入活动地点"
          />
          <Field
            v-model="value4"
            name="hostcompany"
            label="主办单位"
            input-align="right"
            placeholder="输入主办单位"
          />
          <Field
            v-model="value5"
            label="颁奖单位"
            name="unit"
            input-align="right"
            placeholder="输入颁奖单位"
          />
          <!-- <Cell is-link  @click="show = true" name="grade" v-model="carmodel">获奖等级</Cell>
          <Picker
  title="标题"
  v-model="show2"
  show-toolbar
  :columns="columns"
  @confirm="onConfirm"
  @cancel="onCancel"
  @change="onChange"
          />-->
          <!-- <Popup v-model="shows">
            <RadioGroup v-model="radios">
              <Radio class="leixing" name="1">校级优秀奖</Radio>
              <Radio class="leixing" name="2">校级三等奖</Radio>
              <Radio class="leixing" name="3">校级一等奖</Radio>
              <Radio class="leixing" name="4">校级二等奖</Radio>
              <Radio class="leixing" name="5">市级优秀奖</Radio>
            </RadioGroup>
          </Popup>-->
          <div style="font-weight:700;margin:7px 7px;">附件说明</div>
          <div style="margin:10px 10px;">说明附件</div>
          <Uploader v-model="fileList" multiple />
          <Field
            v-model="message"
            rows="2"
            autosize
            label="备注"
            type="textarea"
            maxlength="40"
            placeholder="最多输入40字"
            show-word-limit
            name="remarks"
          />
        </CellGroup>
        <div class="bt">
          <Button round type="info" style="position:center;">提交申请</Button>
        </div>
      </Form>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import navigation from '../../component/navigation.vue'
import { Cell, CellGroup, Field, Calendar, Uploader, Button, Form } from 'vant'
export default {
  data () {
    return {
      show: false,
      radio: '',
      prizetime: '',
      show2: false,
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
      value7: '',
      value8: '',
      value9: '',
      value10: '',
      date: '',
      start: '',
      show1: false,
      end: false,
      date1: '',
      message: '',
      fileList: [
      ]
    }
  },
  components: {
    Cell,
    CellGroup,
    navigation,
    Field,
    Calendar,
    Uploader,
    Button,
    Form
  },
  methods: {
    formatDate (date) {
      return `${date.getMonth() + 1}/${date.getDate()}`
    },
    onConfirm2 (date) {
      this.end = false
      this.date = this.formatDate(date)
    },
    showPopup (e) {
      this.show = true
    },
    showPopups (value) {
      console.log(value)
      this.shows = false
    },
    afterRead (file) {
      // 此时可以自行将文件上传至服务器
      console.log(file)
    },
    onSubmit (values) {
      console.log('submit', values)
      this.$router.push('/dier')
    },
    onConfirm (date) {
      this.show = false
      this.date1 = this.formatDate(date)
      // this.date1 = this.formatDate(date)
      // this.data = this.formatDate(date1)
      // 关闭弹框
    }
  }
}
</script>

<style  lang="less" scoped>
.leixing {
  margin: 10px 10px;
}
.van-button::before {
  margin: 0 auto;
}
.bt {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  /deep/ .van-button--info {
    width: 30%;
  }
  /deep/ .van-button::before {
    width: 100%;
  }
}
.van-uploader {
  display: flex;
  justify-content: center;
  border: none;
}
</style>

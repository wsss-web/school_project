<template>
    <div>
        <navigation title="填写申请" left="back" ></navigation>
        <div style="margin-top:47px;">
            <CellGroup>
              <div style="font-weight:700;margin:7px 7px;">基本信息</div>
              <Cell title="申请人" value="赵丽" />
              <Cell title="学号" value="164552" />
              <Cell title="学院" value="信息工程学院" />
              <Cell title="专业" value="物联网工程" />
              <Cell title="班级" value="16物联网2班" />
              <Cell title="辅导员" value="暂无" />
              <div style="font-weight:700;margin:7px 7px;">活动信息</div>
              <Cell is-link @click="showPopup" >二课活动类型</Cell>
              <Popup v-model="show1">
                  <RadioGroup v-model="radio" >
                    <Radio class="leixing" name="1">志愿公益</Radio >
                    <Radio class="leixing" name="2">技能特长</Radio >
                    <Radio class="leixing" name="3">工作履历</Radio >
                    <Radio class="leixing" name="4">社会实践</Radio >
                    <Radio class="leixing" name="5">创新创业</Radio >
                  </RadioGroup>
              </Popup>
                <Field v-model="value1" label="活动名称" placeholder="-点击输入-" />
                <Field v-model="value2" label="获奖名称" placeholder="-点击输入-" />
                <Cell title="获奖时间" :value="date" @click="show = true" />
                <Calendar v-model="show" @confirm="onConfirm" />
                <Cell title="活动时间" :value="date" @click="show = true" />
                <Calendar v-model="show" @confirm="onConfirm" />
                <Field v-model="value3" label="活动地点" placeholder="-点击输入-" />
                <Field v-model="value4" label="主办单位" placeholder="-点击输入-" />
                <Field v-model="value5" label="颁奖单位" placeholder="-点击输入-" />
                <Cell is-link @click="showPopups" >获奖等级</Cell>
                <Popup  v-model="shows">
                  <RadioGroup v-model="radios" >
                    <Radio class="leixing" name="1">校级优秀奖</Radio >
                    <Radio class="leixing" name="2">校级三等奖</Radio >
                    <Radio class="leixing" name="3">校级一等奖</Radio >
                    <Radio class="leixing" name="4">校级二等奖</Radio >
                    <Radio class="leixing" name="5">市级优秀奖</Radio >
                  </RadioGroup>
                </Popup>
              <div style="font-weight:700;margin:7px 7px;">附件说明</div>
              <div style="margin:10px 10px;">说明附件</div>
              <Uploader :after-read="afterRead" style="border:1px dashed black;margin:10px 10px;" />
              <Field
                v-model="message"
                rows="2"
                autosize
                label="备注"
                type="textarea"
                maxlength="40"
                placeholder="最多输入40字"
                show-word-limit
              />
            </CellGroup>
        </div>
        <div class="submit">
  <Button round type="info" style="position:center;">提交申请</Button>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import navigation from '../../component/navigation.vue'
import { Cell, CellGroup, Popup, Radio, RadioGroup, Field, Calendar, Uploader, Button } from 'vant'
export default {
  data () {
    return {
      show: false,
      radio: '',
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      date: '',
      show1: false,
      message: '',
      shows: false,
      radios: ''
    }
  },
  components: {
    Cell,
    CellGroup,
    navigation,
    Popup,
    RadioGroup,
    Radio,
    Field,
    Calendar,
    Uploader,
    Button
  },
  methods: {
    formatDate (date) {
      return `${date.getMonth() + 1}/${date.getDate()}`
    },
    onConfirm (date) {
      this.show = false
      this.date = this.formatDate(date)
    },
    showPopup () {
      this.show1 = true
    },
    showPopups (value) {
      console.log(value)
      this.shows = true
    },
    afterRead (file) {
      // 此时可以自行将文件上传至服务器
      console.log(file)
    }
  }
}
</script>

<style  lang="less" scoped>
.leixing{
    margin: 10px 10px;
}
.van-button::before {
  margin: 0 auto;
}
</style>

<template>
  <div>
    <navigation left="back" title="个人信息"></navigation>
    <Form validate-first  @submit="onSubmit" class="boxfont">
      <!-- 头像上传 -->
      <!-- <Field name="uploader" label="头像上传">
        <template #input>
          <Uploader  v-model="uploader" />
        </template>
      </Field>-->
      <!-- 通过 pattern 进行正则校验 -->
      <Field label="学号"  v-model="stuid" name='stuid' placeholder="学号" />
      <Field label="名字" v-model="name" name="name" placeholder="名字" />
      <Field label="用户名"  v-model="username" name="username" placeholder="用户名" />
      <!-- 通过 validator 进行异步函数校验 -->
      <Field
        label="手机号"
        v-model="phone"
        name="phone"
        placeholder="手机"
        :rules="[{ validator, message: '请输入正确内容' }]"
      />
      <Field label="昵称"  v-model="nickname" name="nickname" placeholder="昵称" />
      <Field name="sex"  label="单选框">
        <template #input>
          <RadioGroup v-model="sex" direction="horizontal">
            <Radio name="男">男</Radio>
            <Radio name="女">女</Radio>
          </RadioGroup>
        </template>
      </Field>
      <Field
      v-model="address"
        label="邮箱"
        name="address"
        placeholder="邮箱"
        :rules="[{ emailvalidator, message: '请输入正确内容' }]"
      />
      <Field label="院系" name="schid"  v-model="schid" placeholder="院系" />
      <Field label="宿舍长"  name="majorid" v-model="majorid" placeholder="宿舍长" />
      <Field label="班级名字" name="classname" v-model="classname"   placeholder="班级名字" />
      <Field label="成绩"  name="grade" v-model="grade" placeholder="成绩" />
      <Field label="教育" name="education" v-model="education"   placeholder="教育" />
      <Field label="家庭住址"  name="home_address" v-model="home_address" placeholder="家庭住址" />
      <Field label="规划"  name="plan" v-model="plan" placeholder="规划" />

      <div style="margin: 16px;">
        <Button round block type="info" native-type="submit" >下一步</Button>
      </div>
    </Form>
  </div>
</template>
<script>
import navigation from '../../component/navigation'
import { Form, Button, Field, RadioGroup, Radio, Toast } from 'vant'
export default {
  data () {
    return {
      uploader: [{ url: '' }],
      value1: '',
      value2: '',
      value3: '',
      pattern: /\d{6}/,
      name1: '',
      userid: '',
      phonenumber: '',
      email: '',
      passwold: '',
      importantinfo: '',
      eleprove: '',
      othernews: '',
      stuid: '',
      name: '',
      username: '',
      phone: '',
      nickname: '',
      sex: '',
      address: '',
      schid: '',
      majorid: '',
      classname: '',
      grade: '',
      education: '',
      home_address: '',
      plan: ''
    }
  },
  created: function () {
    var that = this
    var usernam = localStorage.getItem('username')
    this.tools
      .axios({
        url: 'http://localhost:3000/loginlook?username=' + usernam + '',
        method: 'get'
      })
      .then(res => {
        that.data = res.data
        console.log(res)
      })
      .catch(function (err) {
        console.log(err)
      })
  },
  components: {
    Form,
    Button,
    Field,
    RadioGroup,
    Radio,
    navigation
  },
  mounted () {
    document
      .querySelector('html')
      .setAttribute('style', 'background-color:rgb(243,243,243)')
  },
  beforeDestroy () {
    document.querySelector('html').removeAttribute('style')
  },
  methods: {
    validator (val) {
      return /1\d{10}/.test(val)
    },
    emailvalidator (val) {
      return /\d{6,12}@/.test(val)
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
    },
    onSubmit (values) {
      console.log('submit', values)
      console.log(values)
      console.log(values.phone)
      var onedata = {
        stuid: values.stuid,
        name: values.name,
        username: values.username,
        phone: values.phone,
        nickname: values.nickname,
        sex: values.sex,
        address: values.address,
        schid: values.schid,
        majorid: values.majorid,
        classname: values.classname,
        grade: values.grade,
        education: values.education,
        home_address: values.home_address,
        plan: values.plan,
        // username: localStorage.getItem('username'),
        status: 1
      }
      var that = this
      this.tools
        .axios({
          url: 'http://localhost:3000/loginuser',
          method: 'get',
          params: onedata
        })
        .then(res => {
          console.log(res)
          that.$router.push('/login/domitory')
        })
        .catch(function (err) {
          console.log(err)
        })
    }
    // goon () {
    //   this.$router.push('/login/domitory')
    // }
  }
}
</script>
<style scoped>
.boxfont {
  margin-top: 50px;
}
</style>

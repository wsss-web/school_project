<template>
  <div>
    <navigation left="back" title="个人信息"></navigation>
    <Form validate-first @failed="onFailed" class="boxfont">
      <!-- 头像上传 -->
      <!-- <Field name="uploader" label="头像上传">
        <template #input>
          <Uploader  v-model="uploader" />
        </template>
      </Field> -->
      <!-- 通过 pattern 进行正则校验 -->
      <Field
        label="名字"
        v-model="name1"
        name="2"
        placeholder="名字"
      />
      <!-- 通过 validator 进行异步函数校验 -->
      <Field
        label="手机号"
        v-model="phonenumber"
        name="4"
        placeholder="手机"
        :rules="[{ validator, message: '请输入正确内容' }]"
      />
      <Field
        label="昵称"
        v-model="nickname"
        name="5"
        placeholder="昵称"
      />
      <Field name="6" label="单选框">
        <template #input>
            <RadioGroup v-model="sex" direction="horizontal">
                <Radio name="男">男</Radio>
                <Radio name="女">女</Radio>
            </RadioGroup>
        </template>
      </Field>
      <Field
        label="邮箱"
        v-model="email"
        name="7"
        placeholder="邮箱"
        :rules="[{ emailvalidator, message: '请输入正确内容' }]"
      />
      <div style="margin: 16px;">
        <Button round block type="info" native-type="submit">下一步</Button>
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
      nickname: '',
      sex: '',
      email: '',
      passwold: '',
      importantinfo: '',
      eleprove: '',
      othernews: ''
    }
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
    }
  }
}
</script>
<style scoped>
.boxfont{
    margin-top: 50px;
}
</style>

<template>
    <div>
        <NavBar
        class="tt"
        title="翻转校园登录指南"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"/>
        <div class="tou">
            <span class="tou1">【翻转校园】APP登录指南</span>
            <div class="tou2">翻转小番  发表于2020-04-26 14:50</div>
        </div>
        <Divider/>
        <div class="tou3">翻转校园登录指南</div>
        <div class="tou4">一、登录教程</div>
        <div class="tou4">1.账号信息</div>
        <div class="biaoge"  >
          <table v-for="(item , i) in list" :key="i">
            <tbody>
            <tr>
              <td class="td1" style="width:20%;">{{item.add}}</td>
              <td class="td2" style="width:40%;">{{item.school}}</td>
              <td class="td3" style="width:20%;">{{item.dai}}</td>
            </tr>
            </tbody>
          </table>
        </div>
        <div style="font-size:13px;"><span style=" font-weight: 700; ">学生登录账号：</span><span>学校代码+学号（忽略+号；例：a9999123450011)</span></div>
        <div style="font-size:13px;"><span style=" font-weight: 700; ">学生初始密码：</span><span>身份证后6位（以X结尾的，请大写X）</span></div>
        <div>------华丽的分割线------</div>
        <div style="font-size:13px;"><span style=" font-weight: 700; ">老师登录账号：</span><span>学校代码+工号（忽略+号；例：a9999123450011)</span></div>
        <div style="font-size:13px;"><span style=" font-weight: 700; ">老师初始密码：</span><span>登录账号后6位（例：450011）</span></div>
        <p style="color:red;font-size:13px;font-weight: 700;text-indent:25px;">注意1：登录过之前版本且修改过密码的用户，直接使用个人密码登录即可；</p>
        <p style="color:red;font-size:13px;font-weight: 700;text-indent:25px;">注意2：由于翻转校园是全封闭实名制，请确保修改初始密码，并保管好个人账号。</p>
        <div class="tou4">2.登录入口</div>
        <div style="font-size:13px;text-indent:25px;">APP登录界面输入账号与密码点击登录即可。</div>
        <div class="tou4">3.绑定手机号</div>
        <div style="font-size:13px;text-indent:25px;">初次登录成功，会进入绑定手机号页面，必须绑定手机号才能使用APP。当前绑定的手机号可在“我的”页面修改。</div>
        <div class="tou4">4.修改初始密码</div>
        <div style="font-size:13px;text-indent:25px;">初次登录成功，绑定手机号后，会进入修改初始密码界面，为了账号安全，请修改初始密码。登陆成功后，密码可以随时在“我的”页面进行修改。</div>
        <div class="tou4">5.绑定设备</div>
        <div style="font-size:13px;text-indent:25px;">一个账号只能绑定一台设备，如果更换登录设备，需要重新绑定设备。</div>
        <div class="tou4">6.密码丢失</div>
        <div style="font-size:13px;text-indent:25px;">如果忘记登录密码，请在登录页面点击“忘记密码”按钮，进入找回密码界面，然后输入账号及账号绑定的手机号，获取短信验证码，成功后即可设置新密码。。</div>
    </div>
</template>

<script>
import { NavBar, Divider } from 'vant'
export default {
  data () {
    return {
      list: [
        {
          add: '所在市',
          school: '学校名称',
          dai: '学校代码'
        },
        {
          add: '安阳市',
          school: '河南护理职业学院',
          dai: '14349'
        },
        {
          add: '长春市',
          school: '长春理工大学光电信息学院',
          dai: '13602'
        },
        {
          add: '常德市',
          school: '湖南应用技术学院',
          dai: '13809'
        },
        {
          add: '成都市',
          school: '电子科技大学成都学院',
          dai: '13665'
        },
        {
          add: '成都市',
          school: '四川城市职业学院',
          dai: '14175'
        },
        {
          add: '成都市',
          school: '四川现代职业学院',
          dai: '14176'
        },
        {
          add: '重庆市',
          school: '重庆科创职业学院',
          dai: '14173'
        },
        {
          add: '重庆市',
          school: '重庆交通职业学院',
          dai: '14267'
        },
        {
          add: '大连市',
          school: '大连艺术学院',
          dai: '13599'
        },
        {
          add: '登封市',
          school: '崇山少林武术职业学院',
          dai: '13785'
        },
        {
          add: '广州市',
          school: '广州华夏职业学院',
          dai: '14268'
        },
        {
          add: '海宁市',
          school: '浙江财经大学东方学院',
          dai: '13294'
        }
      ]
    }
  },
  components: {
    NavBar,
    Divider
  },
  methods: {
    onClickLeft () {
      this.$router.push({ path: '/index' })
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .van-nav-bar .van-icon{
  color: white;
}
/deep/ .van-nav-bar__text{
  color: white;
      font-size: 0.83rem;
}
/deep/  .van-nav-bar{
background: #45bce4;
}
/deep/  .van-nav-bar__title{
  color:white;
  font-size: 1.1rem;
}
.tou1{
    margin-left: 10px;
    font-size: 18px;
    font-weight: 700;
}
.tou2{
    margin-left: 10px;
    font-size: 11px;
    font-weight: 120;
    margin-top: 15px;
}
.tou3{
    text-align: center;
    font-size: 16px;
    font-weight: 800;
}
.tou4{
    font-size: 16px;
    font-weight: 600;
    margin-top: 10px;
    margin-left:10px;
}
.biaoge td{
  border: 1px solid black;
  font-size: 13px;
}
.biaoge table{
  border-collapse: collapse;
  border-spacing: 0;
  width:80%;
  margin:0 auto;
  text-align: center;
  font-size:13px;
}

</style>

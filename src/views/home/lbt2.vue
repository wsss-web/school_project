<template>
    <div>
        <NavBar
        class="toutou"
        title="老师/学生首次使用必读"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"/>
        <span><center class="tou1">老师/学生首次使用必读</center></span>
        <span><center  class="tou2">超级管理员 :发表于2020年2月30日</center></span>
        <Divider/>
        <center>
            <div class="tou3">客服答疑：</div>
            <div class="tou3">客服热线（打不通的）：1231312314</div>
            <div class="tou3">QQ：<span class="kechengliebiao">“00000”</span></div>
            <div class="tou3">接听、回应时间：周一至周五</div>
            <div class="tou3">上午08:00-12:00</div>
            <div class="tou3">下午08:00-12:00</div>
            <div class="tou3">或者手机APP右上角直接点击客服，填写问题内容及联系方式，我们会尽快为您服务</div>
        </center>
        <center>
            <div class="tou3">课程问题：</div>
        </center>
        <div class="tou4">Q: 点名时手机没网，没能正常签到怎么办</div>
        <div class="tou5">A：课上老师在点名结束界面，找到该学生，点击，可以修改学生的签到状态。或课下老师在课程详情页点击“统计”按钮，进入点名记录页面，找到需要修改的记录进入，找到该学生点击，进行修改签到状态。</div>
        <div class="tou4">Q: 学生没有签到成功（忘带手机/手机网络不好）怎么办？</div>
        <div class="tou5">A：在点名结束时，点击未签到成功的学生，修改其状态为“已到”即可。</div>
        <div class="tou4">Q: 学生签到状态为“？”或“未知”是什么情况？</div>
        <div class="tou5">A: 说明学生距离签到地过远；“未知”说明学生手机后台定位未打开（有时因信号问题，也会导致签到状态为未知或“？”，但并不影响出勤率）</div>
        <div class="tou4">Q：如何修改学生出勤状态</div>
        <div class="tou5">A：点名结束时，老师可对学生的当前签到状态进行修改，若上课已结束，七天之内均可修改。（进入需修改出勤状态的课程，点击“统计”找到需修改的时间，进入修改状态即可）</div>
        <div class="tou4">Q：课程上课时间不对</div>
        <div class="tou5">A：老师您进入课程详情界面，点击右上角“修改”按钮，选择正确的时间即可</div>

    </div>
</template>

<script>
import { NavBar, Divider } from 'vant'

export default {
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
.toutou{
    background-color: rgb(119, 207, 241);
}
.tou1{
    font-size: 20px;
}
.tou2{
    font-size: 10px;
    margin-top: 15px;
    font-weight: 300;
}
.tou3{
    font-weight: 600;
    margin-top: 10px;
    font-size: 15px;
}
.kechengliebiao{
  font-size: 15px;
  background-color: yellow;
}
.tu1{
    width: 90%;
    height: 300px;
    margin-top: 15px;
}
.tu2{
    width: 90%;
    height: 450px;
    margin-top: 15px;
}
.tou4{
    font-weight: 600;
    margin-top: 30px;
    margin-left: 5px;
}
.tou5{
    text-align:left;
    width: 98%;
    margin-top: 20px;
    margin-left: 5px;
}
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
</style>

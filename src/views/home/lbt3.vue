<template>
    <div>
        <NavBar
        class="toutou"
        title="教师使用指南——审核信息"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"/>
        <span><center class="tou1">教师使用指南——审核信息</center></span>
        <span><center  class="tou2">超级管理员 :发表于2020年2月30日</center></span>
        <Divider/>
        <center>
            <div class="tou3">老师登录账号以后，</div>
            <div class="tou3">需要先审核自己的课程信息呦</div>
            <div class="tou3">在课程界面点击<span class="kechengliebiao">“课程列表”</span></div>
            <div class="tou3">进入课程列表页面</div>
            <div class="tou3">即可查看自己的课程数量</div>
        </center>
        <div><center><img class="tu1" src="../../assets/lsshkb.jpg"></center></div>
        <center>
            <div class="tou3">检查课程数量是否正确，</div>
            <div class="tou3">是否有无少课或多课？</div>
            <div class="tou3">已存在的课程点开课程，</div>
            <div class="tou3">进入课程详情页，</div>
        </center>
        <div><center><img class="tu2" src="../../assets/lsshkb3.jpg" ></center></div>
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

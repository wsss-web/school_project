<template>
  <div>
    <NavBar
        class="kftou"
        title="微信公众号客服"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"/>
     <span class="kftext">
            <center>微信公众号客服人员上线啦!!!</center>
            <center class="kftext2">校园小番：  发表于 2020年6月30日</center>
            <Divider/>
          </span>
          <div class="kftext3">挥别以往单一的客服QQ时代，我们的微信公众号有人工客服来尽心尽力的服务大家喽~~~</div>
          <span>1. 打开手机微信关注 “翻转校园APP”</span>
          <div><center><img class="wxtp" src="./weixingongzhonghao.jpg"></center></div>
          <div>2. 关注成功后，将自己需要咨询的问题输入对话框，进行咨询，我们将以最快的速度为您答疑解惑</div>
          <div class="weibu"><center>如有问题，请联系我们</center></div>
          <div class="weibu"><center>电话：110-110</center></div>
          <div class="weibu"><center>qq: 11111111</center></div>
  </div>
</template>

<script>
import { NavBar, Divider } from 'vant'
export default {
  name: 'lbt',
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

<style scoped>
.kftext{
  text-align: center;
  font-size: 20px;
  margin-bottom: 5px;
  border-bottom: 1px solid rgb(231, 236, 241);
}
.kftext2{
  font-size: 9px;
  margin-top:10px;
  margin-bottom: 20px;
}
.kftext3{
  margin-top:10px;
  margin-bottom: 20px;
}
.wxtp{
  width: 350px;
  height: 260px;
  margin-top: 20px;
}
.weibu{
  margin-top: 10px;
}
</style>

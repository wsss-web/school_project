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
            <div class="tou2">校园小番  发表于2020-04-26 14:50</div>
        </div>
        <Divider/>
        <div class="tou3">翻转校园登录指南</div>
        <div class="tou4">一、登录教程</div>
        <div class="tou4">1.账号信息</div>
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

<style scoped>
.tt{
    background-color: rgb(15, 232, 240);
}
.tou1{
    margin-left: 10px;
    font-size: 25px;
    font-weight: 700;
}
.tou2{
    margin-left: 10px;
    font-size: 13px;
    font-weight: 120;
    margin-top: 15px;
}
.tou3{
    text-align: center;
    font-size: 20px;
    font-weight: 600;
}
.tou4{
    font-size: 20px;
    font-weight: 600;
    margin-top: 10px;
}
</style>

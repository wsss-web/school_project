<template>
    <div>
        <NavBar class="tou"
        title="第二课堂"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"/>
        <div><img class="tu11" src="./erketang.jpg"></div>
        <center><Icon name="todo-list" color="#1989fa" size='1.2rem'>活动列表</Icon></center>
        <div><img class="tu22" src="./chengjirending.jpg"></div>
        <div class="cj">
          <span class="tb1"><Icon name="add" color="#1989fa" size='1.2rem'>填写申请</Icon></span>
          <span class="tb2"><Icon name="todo-list" color="#1989fa" size='1.2rem'>申请记录</Icon></span>
        </div>
    </div>
</template>

<script>
import { NavBar, Icon } from 'vant'
export default {
  components: {
    NavBar,
    Icon
  },
  methods: {
    onClickLeft () {
      this.$router.push({ path: '/index' })
    }
  }
}
</script>

<style scoped>
.tu11{
  width: 100%;
  height: 140px;
}
.tu22{
  width: 100%;
  height: 140px;
  margin-top: 10px;
}
.tou{
  background-color: rgb(14, 222, 250);
}
.cj{
  text-align: center;
}
.tb1{
  text-align: center;
  padding-right: 20px;
}
.tb2{
  text-align: center;
  padding-left: 20px;
}
</style>

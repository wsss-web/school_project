<template>
  <div class="box" >
    <!-- 参数：left     trophy = 奖杯  back= 返回 -->
    <!-- title = 页面标题 -->
    <!-- right list= 列表  edit = 编辑  setting = 设置 -->
    <div class="content">
      <div class="left">
        <img
          v-if="left === 'trophy'"
          class="jiangbei"
          src=""
          height="24"
          alt
        />
         <p v-if="left=== 'remind'">提醒</p>
        <i v-if="left === 'back'" @click="back" class="iconfont .icon-iconzuojiantou"></i>
      </div>
      <div class="center">{{title}}</div>
      <div class="right">
        <img src="" v-if="right === 'list'" height="24" alt />
        <img
          class="customer"
          src="../assets/1.png"
          v-if="right === 'customer'"
          height="24"
          altright
        />
        <p v-if="right=== 'people'">个人档案</p>
        <van-icon name="setting" v-if="right === 'set'" @click="toset" />
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>

.box{
   position: fixed;
   z-index: 99;
  width: 100%;
  top: 0;
  left: 0;
  background: rgb(69,188,228);
}
.content {

  display: flex;
  justify-content: space-between;
  padding: 0.7rem 0.8rem;
  align-items: center;
  i,
  van-icon {
    font-size: 0.96rem;
    color: white;
  }
  .left {
    width: 100%/3;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color:white;
    font-size: 0.83rem;
  }
  .center {
    width: 100%/3;
    color: white;
    font-size: 0.88rem;
    text-align: center;
  }
  .right {
    width: 100%/3;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color:white;
    font-size: 0.83rem;
  }
}
</style>
<script>
export default {
  name: 'Menu',
  props: ['left', 'right', 'title'],
  data () {
    return {
      titles: ''
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    toset () {
      this.$router.push('/setup')
    }
  }
}
</script>

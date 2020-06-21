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
        <p>提醒</p>
        <i v-if="left === 'back'" @click="back" class="iconfont icon-zuojiantou"></i>
      </div>
      <div class="center">{{title}}</div>
      <div class="right">
        <img src="" v-if="right === 'list'" height="24" alt />
        <img
          class="edit"
          src=""
          v-if="right === 'edit'"
          height="24"
          alt
        />
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
  background: #21272e;
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

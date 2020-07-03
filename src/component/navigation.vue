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
        <p v-if="left==='sweep'">扫一扫</p>
         <p v-if="left=== 'remind'" @click="remind" class="remind">提醒</p>
        <i v-if="left === 'back'" @click="back" class="iconfont icon-iconfontjiantouzuo"></i>
      </div>
      <div class="center">{{title}}</div>
      <div class="right">
        <img src="" v-if="right === 'list'" height="24" alt />
        <img
          class="customer"
          @click="customer"
          src="../assets/1.png"

          v-if="right === 'customer'"
          height="24"
          altright
        />
        <p v-if="right==='list'">课程列表</p>
        <p v-if="right=== 'sure'">确定</p>
        <p v-if="right=== 'people'">个人档案</p>
        <p v-if="right==='bill'">账单</p>
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
    font-size: 0.8rem;
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
    width: 100%/2;
    color: white;
    font-size: 1.1rem;
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
  .remind {
    font-size: 15px;
  }
}
</style>
<script>
import { Dialog } from 'vant'
export default {
  name: 'Menu',
  props: ['left', 'right', 'title'],
  data () {
    return {
      titles: ''
    }
  },
  components: {
    [Dialog.Component.name]: Dialog.Component
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    toset () {
      this.$router.push('/setup')
    },
    remind () {
      console.log('1111')
      Dialog.alert({
        title: '今天你努力了吗',
        message: '哈哈，啥也没有'
      }).then(() => {
      })
    },
    customer () {
      this.$router.push({ path: '/kefu' })
    }
  }
}
</script>

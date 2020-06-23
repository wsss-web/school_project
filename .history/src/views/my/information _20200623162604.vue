<template>
    <div class="title">
          <navigation left="back" title="重要信息维护"></navigation>
      <div class="case">
        <p>个人基本信息</p>
        <p>完整度:(0%)</p>
      </div>
      <div class="head">
        <div class="portrait">个人照片</div>
        <div class="uploader">
          <Uploader :after-read="afterRead" />
          <p class="photo">点击上传证件照</p>
        </div>
      </div>
  <div class="dell">
      <div class="name"><p>姓名</p></div>
  </div>
  </div>
</template>
<script>
import navigation from '../../component/navigation'
import { Uploader } from 'vant'
export default {
  data () {
    return {}
  },
  components: {
    navigation,
    Uploader
  },
  methods: {
    afterRead (file) {
      // 此时可以自行将文件上传至服务器
      console.log(file)
    }
  }
}
</script>
<style lang="less">
.title {
  margin-top: 40px;
  height: 3rem;
  background: rgb(241, 240, 245);
  .case {
    margin-left: 4px;
    margin-right: 4px;
    display: flex;
    justify-content: space-between;
    line-height: 48px;
      p:last-child {
    color: rgb(120, 119, 124);
  }
  }

}
.head {
  margin-left: 34px;
  margin-top: 12px;
}
.portrait {
  font-size: 14px;
}
.uploader {
text-align: center;
    margin-bottom: 22px;
}
.photo{
    color:black;
    font-size: 13px;
}
.dell{
      height: 50px;
 border-top:1px solid black;
 border-bottom: 1px solid black;
    padding-left: 16px;
}
.name{
    padding: 0px 16px;
    display: flex;
    p{
  font-size: 14px;
    }
}
</style>

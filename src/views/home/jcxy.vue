<template>
    <div>
        <NavBar
          title="标题"
          left-text="返回"
          left-arrow
          @click-left="onClickLeft"/>
        <Card
          desc="我没钱，我对钱没有兴趣"
          title="马没钱"
          thumb="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2706052641,3356625088&fm=26&gp=0.jpg">
        <template #tags>
            <Tag plain type="danger" color="#bfbfbf">毕业日期：2020年2月30日</Tag>
        </template>
        </Card>
         <Card
          desc="你充钱了吗？你是会员吗"
          title="马花腾"
          thumb="http://img0.imgtn.bdimg.com/it/u=3815488876,3697742850&fm=26&gp=0.jpg">
        <template #tags>
            <Tag plain type="danger" color="#bfbfbf">成立时间：2020年2月30日</Tag>
        </template>
        </Card>
         <Card
          desc="定个小目标，先挣一个亿"
          title="王见临"
          thumb="http://img2.imgtn.bdimg.com/it/u=1521767977,2071630531&fm=26&gp=0.jpg">
        <template #tags>
            <Tag plain type="danger" color="#bfbfbf">成立时间：2000年2月30日</Tag>
        </template>
        </Card>
         <Card
          desc="点关注了吗，点赞了吗"
          title="罗永浩"
          thumb="http://img5.imgtn.bdimg.com/it/u=7268833,3107872108&fm=11&gp=0.jpg">
        <template #tags>
            <Tag plain type="danger" color="#bfbfbf">成立时间：2000年2月30日</Tag>
        </template>
        </Card>
         <Card
          desc="are you OK？"
          title="雷军"
          thumb="http://img0.imgtn.bdimg.com/it/u=1427931691,3777965301&fm=15&gp=0.jpg">
        <template #tags>
            <Tag plain type="danger" color="#bfbfbf">成立时间：2000年2月30日</Tag>
        </template>
        </Card>
    </div>
</template>
<script>
import { NavBar, Card, Tag } from 'vant'

export default {
  components: {
    NavBar,
    Card,
    Tag
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
</style>

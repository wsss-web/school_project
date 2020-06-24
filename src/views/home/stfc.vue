<template>
    <div>
        <NavBar
        title="标题"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"/>
        <Card
        desc="人数 1 人"
        title="青年传媒中心"
        thumb="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2706052641,3356625088&fm=26&gp=0.jpg">
        <template #tags>
            <Tag plain type="danger" color="#bfbfbf">成立时间：2000年2月30日</Tag>
        </template>
        </Card>
         <Card
        desc="人数 1 人"
        title="青年传媒中心"
        thumb="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3709156882,3336791121&fm=26&gp=0.jpg">
        <template #tags>
            <Tag plain type="danger" color="#bfbfbf">成立时间：2000年2月30日</Tag>
        </template>
        </Card>
         <Card
        desc="人数 1 人"
        title="青年传媒中心"
        thumb="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2215640435,2466918974&fm=26&gp=0.jpg">
        <template #tags>
            <Tag plain type="danger" color="#bfbfbf">成立时间：2000年2月30日</Tag>
        </template>
        </Card>
         <Card
        desc="人数 1 人"
        title="青年传媒中心"
        thumb="https://pic.rmb.bdstatic.com/38188957fb36c814567e63da0409b9ad.jpeg@wm_2,t_55m+5a625Y+3L0JhdHRsZeWFiOeUnw==,fc_ffffff,ff_U2ltSGVp,sz_30,x_19,y_19">
        <template #tags>
            <Tag plain type="danger" color="#bfbfbf">成立时间：2000年2月30日</Tag>
        </template>
        </Card>
         <Card
        desc="人数 1 人"
        title="青年传媒中心"
        thumb="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2706052641,3356625088&fm=26&gp=0.jpg">
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

<style scoped>

</style>

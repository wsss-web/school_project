<template>
    <div>
        <NavBar
          title="杰出校友"
          left-text="返回"
          left-arrow
          @click-left="onClickLeft"/>
        <Card
          desc="现工作单位：河南省卫辉市第一中学"
          title="崔瑛璐"
          thumb="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2706052641,3356625088&fm=26&gp=0.jpg">
        <template #tags>
            <Tag plain type="danger" color="#bfbfbf">毕业日期：2008年07月</Tag>
            <div style="text-indent: 18px;">在平顶山学院学习期间，崔瑛璐同学获得国家励志奖学金、“三好学生”、“优秀通讯员”等荣誉，并积极参加“挑战杯”、“演讲比赛”等各种校园活动，获得多项荣誉，并积极参加志愿者活动，为社会贡献自己的力量。2017-10-至今就职与卫辉市第一中学，在任教的过程中，表现突出，受到老师和同学们的一致认可。</div>
        </template>
        </Card>
         <Card
          desc="现工作单位：卫东区明珠世纪小学"
          title="张鲁雅"
          thumb="http://img0.imgtn.bdimg.com/it/u=3815488876,3697742850&fm=26&gp=0.jpg">
        <template #tags>
            <Tag plain type="danger" color="#bfbfbf">毕业时间：2008年07月</Tag>
            <div style="text-indent: 18px;">张鲁雅同学在校期间成绩优异，连续荣获2009学年和2010学年的国家励志奖学金，毕业时获得“优秀大学生”荣誉称号。参加工作以来，爱岗敬业，勤奋学习，深受学生喜爱。先后评为“平顶山市教学标兵”等称号。在专业课和科研方面也积极探索，并发表教研论文1篇，荣获一等奖。</div>
        </template>
        </Card>
         <Card
          desc="现工作单位：濮阳医学高等专科学校"
          title="刘艳华"
          thumb="http://img2.imgtn.bdimg.com/it/u=1521767977,2071630531&fm=26&gp=0.jpg">
        <template #tags>
            <Tag plain type="danger" color="#bfbfbf">毕业时间：2010年07月</Tag>
            <div style="text-indent: 18px;">刘艳华，研究生学，教师，中共党员。2009年9月-2010年07月就读于平顶山学院化学化工学院化学教育专业（专升本），2010年09月-2013年07月就读于郑州大学化学与分子工程学院无机化学专业；现就职于濮阳医学高等专科学校科研处，从事课题项目申报、管理和化学教学工作。</div>
        </template>
        </Card>
         <Card
          desc="现工作单位：上海浦东新区安全生产协会"
          title="姚向娜"
          thumb="http://img5.imgtn.bdimg.com/it/u=7268833,3107872108&fm=11&gp=0.jpg">
        <template #tags>
            <Tag plain type="danger" color="#bfbfbf">毕业时间：2010年7月</Tag>
            <div style="text-indent: 18px;">姚向娜，2010年9月至2013年7月在郑州大学化学系有机化学专业学习，获硕士研究生学位。目前在上海浦东新区安全生产协会的舟桥事务所从事职业卫生检测与评价工作，现担任报告编制和质量审核工作。</div>
        </template>
        </Card>
         <Card
          desc="现工作单位：河南省杞县高中"
          title="张利沙"
          thumb="http://img0.imgtn.bdimg.com/it/u=1427931691,3777965301&fm=15&gp=0.jpg">
        <template #tags>
            <Tag plain type="danger" color="#bfbfbf">毕业时间：2011年06月</Tag>
            <div style="text-indent: 18px;">张利沙同学现任杞县高中化学教师。2007年考入化学教育专业。大学期间成绩优异，连续获得“励志奖学金”。2011年毕业，同年考入兰州交通大学攻读硕士研究生。2016年从事教育工作，坚持以校为家，所交的学生成绩一直在学校排名中位列第一、第二，由于教学效果优秀多次受到表彰。</div>
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
      // font-size: 20px;
}
/deep/  .van-nav-bar{
background: #45bce4;
}
/deep/  .van-nav-bar__title{
  color:white;
  font-size: 1.1rem;
}
</style>

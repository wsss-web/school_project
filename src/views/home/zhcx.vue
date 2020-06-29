<template>
    <div>
        <NavBar
        title="标题"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"/>
        <div class="gd1">学生事务</div>
        <Grid>
            <GridItem>
                <div @click="xy"><span class="iconfont my_iconjiechuqingnian"></span></div>
                <div>杰出校友</div>
            </GridItem>
            <GridItem>
                <div><span @click="stfc" class="iconfont my_iconshetuan"></span></div>
                <div>社团风采</div>
            </GridItem>
            <GridItem/>
            <GridItem/>
        </Grid>

        <div class="gd1">教学管理</div>
        <Grid>
            <GridItem>
                <div @click="xy"><span class="iconfont my_iconjiechuqingnian"></span></div>
                <div>教材评价</div>
            </GridItem>
            <GridItem>
                <div><span @click="stfc" class="iconfont my_iconkaoshianpai"></span></div>
                <div>考试安排</div>
            </GridItem>
            <GridItem/>
            <GridItem/>
        </Grid>

        <div class="gd1">校园生活</div>
        <Grid>
            <GridItem>
                <div @click="xy"><span class="iconfont my_iconjiechuqingnian"></span></div>
                <div>健康报备</div>
            </GridItem>
            <GridItem>
                <div><span @click="stfc" class="iconfont my_iconshetuan"></span></div>
                <div>校园指南</div>
            </GridItem>
            <GridItem>
                <div><span @click="stfc" class="iconfont my_iconshipinxuexi"></span></div>
                <div>视频学习</div>
            </GridItem>
            <GridItem>
                <div><span @click="stfc" class="iconfont my_icondazhongdianping"></span></div>
                <div>周边众评</div>
            </GridItem>
        </Grid>
    </div>
</template>

<script>
import { NavBar, Grid, GridItem } from 'vant'

export default {
  components: {
    NavBar,
    Grid,
    GridItem
  },
  methods: {
    onClickLeft () {
      this.$router.push({ path: '/index' })
    },
    xy () {
      this.$router.push({ path: '/jcxy' })
    },
    stfc () {
      this.$router.push({ path: '/stfc' })
    }
  }
}
</script>

<style scoped>
.gd1{
    background-color: rgb(220, 226, 224);
    border-left: 3px solid rgb(38, 174, 236);
    padding-left: 6px;
    margin-top: 10px;
}
</style>

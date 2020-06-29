<template>
    <div class="course">
        <navigation title="课程"></navigation>
        <div class="textbox">
            <input class="word" id=“word1 type="text" placeholder="请输入点名口令">
            <button @click="submit_btn" class="submit">提交</button>
        </div>
        <div class="tips">
            <span>Tips:</span>
            <span>请确认当前的课程是您所选课程，并输入正确的点名口令。</span>
            <!-- <div class='link-top'></div> -->
        </div>
        <div class="course_logo">
          <div class='link-top'></div>
            <div class="course1" v-for="(item , i) in list" :key="i">
            <ul>
                <li>
                  <router-link :to="item.url">
                    <span><img :src="item.img"></span>
                    <span style="color: black;">{{item.title}}</span>
                    <div class='link-top'></div>
                  </router-link>
                </li>
            </ul>
            </div>
        </div>
        <tabbar></tabbar>
        <router-view></router-view>
    </div>
</template>

<script>
import navigation from '../../component/navigation'
import tabbar from '../../component/tabbar'
// import { Toast } from 'vant'
export default {
  data () {
    return {
      value: '1',
      list: [
        {
          img: require('../../../public/img/课程表.png'),
          title: '我的课程表',
          url: 'timetable'
        },
        {
          img: require('../../../public/img/课程.png'),
          title: '查看所有课程',
          url: 'courses'
        },
        {
          img: require('../../../public/img/待评价.png'),
          title: '综合评价',
          url: 'evaluate'
        }
      ]
    }
  },
  components: {
    navigation,
    tabbar
    // Toast
  },
  methods: {
    submit_btn () {
      // console.log(111)
      this.$toast('翻转校园：请输入正确的点名口令')
    }
  }
}
</script>

<style lang="less">
.link-top {
    width: 100%;
    height: 1px;
    border-top: solid #ACC0D8 1px;
    margin-left: 0px;
    margin-top: 10px;
}
.course_head {
    width: 100%;
    height: 50px;
    background-color: rgb(69, 188, 228);
    border-radius: 5px;
}
.submit{
    background-color: rgb(69, 188, 228);
    border:none;
    outline:medium;
    border: 1px solid #c8c9cc;
    border-left:0px ;
    color: rgb(221, 252, 252);
    height: 26px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    flex: 1;
}
.word{
    border:none;
    outline:medium;
    border: 1px solid #c8c9cc;
    border-right:0px ;
    height: 22px;
    // width: 250px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    flex: 6;
    margin: 0 auto;
}
.textbox{
    display: flex;
    border-radius: 3px;
    height: 40px;
    margin: 70px 35px 1px 35px;
}
.tips{
    height: 40px;
    margin: 1px 35px 10px 35px;
    text-align: center;
    text-align:left;
    display: flex;
}
li img{
    width:30px;
    vertical-align: middle;
    margin-right: 15px;
}
.course_logo{
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    height: 200px;
    // margin-top: 60px;
    margin: 1px 35px 1px 35px;
}
.course1{
  flex: 1;
  margin-top: 20px;
}
</style>

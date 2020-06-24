<template>
    <div class="course">
        <!-- <div class="course_head">
            <span>课程</span>
        </div> -->
        <navigation title="课程"></navigation>
        <div class="textbox">
            <input class="word" type="text" placeholder="请输入点名口令">
            <button class="submit_btn">提交</button>
        </div>
        <div class="tips">
            <span>Tips:</span><br>
            <span>请确认当前的课程是您所选课程，并输入正确的点名口令。</span>
            <div class='link-top'></div>
        </div>
        <div class="course_logo">
            <div v-for="(item , i) in list" :key="i">
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
export default {
  data () {
    return {
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
  }
}
</script>

<style lang="less">
.link-top {
    width: 100%;
    height: 1px;
    border-top: solid #ACC0D8 1px;
    margin-left: 0px;
    margin-top: 25px;
}
.course_head {
    width: 100%;
    height: 50px;
    background-color: rgb(69, 188, 228);
    border-radius: 5px;
}
.course_head span {
    margin-left: 180px;
    text-align: center;
    font-size: 20px;
    line-height: 48px;
    color: rgb(221, 252, 252);
    letter-spacing: 5px;
}
.submit_btn{
    background-color: rgb(69, 188, 228);
    border:none;
    outline:medium;
    border: 1px solid #c8c9cc;
    border-left:0px ;
    margin: 0 auto;
    color: rgb(221, 252, 252);
    vertical-align: bottom;
    padding-top:2px ;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}
.word{
    border:none;
    outline:medium;
    border: 1px solid #c8c9cc;
    border-right:0px ;
    height: 22px;
    width: 250px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}
.textbox{
    border-radius: 3px;
    // width: 278px;
    width: 400px;
    height: 50px;
    margin: 0 auto;
    margin-top: 60px;
    text-align: center;
}
.tips{
    width: 300px;
    height: 40px;
    margin: 0 auto;
    text-align: center;
    text-align:left;
}
li img{
    width:30px;
    vertical-align: middle;
    margin-right: 15px;
}
.course_logo{
    width: 310px;
    margin: 0 auto;
    margin-top: 60px;
}
.course_logo div{
    margin: 20px 20px 20px 0px;
}
</style>

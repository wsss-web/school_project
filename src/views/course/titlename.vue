<template>
    <div>
        <navigation title="模拟电子技术" left="back"></navigation>
        <div class="titlename_s" v-for="(item,i) in list" :key="i">
            课程名称：{{item.c_name}}<br>
            课程代码：{{item.c_num}}<br>
            教师姓名：{{item.t_name}}<br>
            班级名称：{{item.class_name}}<br>
            上课时间：{{item.c_time}}<br>
            上课地点：{{item.c_add}}
        </div>
        <div class="titlename_x">综合评价：<Rate v-model="value" /><span style="color:#47bbe2;margin-left: 10px;vertical-align: top;">0人已评</span><br></div>
        <router-view></router-view>
    </div>
</template>

<script>
import { Rate } from 'vant'
import navigation from '../../component/navigation'
export default {
  data () {
    return {
      value: 0,
      list: [
        {
          c_name: '模拟电子技术',
          c_num: '070227',
          t_name: '刘征',
          class_name: '17自动化技术1班',
          c_time: '周五第9、10节{第5-15周|单周}',
          c_add: '3202基础电子学实验室'
        }
      ]
    }
  },
  components: {
    navigation,
    Rate
  }
}
</script>

<style  scoped>
.titlename_s{
    width: 90%;
    border: 1px solid #c8c9cc;
    margin: 0 auto;
    margin-top: 60px;
}
.titlename_x{
    width: 90%;
    border: 1px solid #c8c9cc;
    margin: 8px auto;
}
</style>

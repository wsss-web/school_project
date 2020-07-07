<template>
    <div>
        <navigation title="课程详情" left="back"></navigation>
        <div class="content_s" v-for="(item,i) in list" :key="i">
            课程名称：{{item.c_name}}<br>
            课程代码：{{item.c_num}}<br>
            教师姓名：{{item.t_name}}<br>
            班级名称：{{item.class_name}}<br>
            上课时间：{{item.c_time}}<br>
            上课地点：{{item.c_add}}
        </div>
        <div class="content" @click="go_allcourse">
            <CellGroup>
              <img class="content_img" src="../../../public/img/客户.png"><Cell  class="all" title="刘征的所有课程" is-link >
              </Cell>
            </CellGroup>
        </div>
        <div class="content_x">
            综合评价：<Rate v-model="value" allow-half /><span style="color:#47bbe2;margin-left: 10px;vertical-align: top;"></span><br>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import { Cell, CellGroup, Rate } from 'vant'
import navigation from '../../component/navigation'
export default {
  data () {
    return {
      value: 0,
      list: [
        {
          c_name: '数字电子技术',
          c_num: '070205',
          t_name: '刘征',
          class_name: '18自动化1班',
          c_time: '周五第9、10节{第5-15周|单周}',
          c_add: '3202基础电子学实验室'
        }
      ]
    }
  },
  methods: {
    go_allcourse () {
      this.$router.push('/allcourse')
    }
  },
  components: {
    Cell,
    CellGroup,
    navigation,
    Rate
  }
}
</script>

<style  scoped>
.content_s{
    width: 90%;
    border: 1px solid #c8c9cc;
    margin: 0 auto;
    margin-top: 60px;
}
.content_img{
    width:40px;
    vertical-align: middle;
    margin-right: 20px;
    flex: 1;
}
.content{
  width: 90%;
  border: 1px solid #c8c9cc;
  margin: 20px auto;
  /* display: flex; */
  /* align-items: center; */
}
.all{
  flex: 1;
}
.content_x{
  width: 90%;
  border: 1px solid #c8c9cc;
  margin: 20px auto;
}
</style>

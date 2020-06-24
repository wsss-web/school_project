<template>
    <div>
        <div class="details_head">
            <span @click="jiantou"><img class="details_img" src="../../../public/img/箭头.png" /></span>
            <span>课程详情</span>
        </div>
        <div class="content_s" v-for="(item,i) in list" :key="i">
            课程名称：{{item.c_name}}<br>
            课程代码：{{item.c_num}}<br>
            教师姓名：{{item.t_name}}<br>
            班级名称：{{item.class_name}}<br>
            上课时间：{{item.c_time}}<br>
            上课地点：{{item.c_add}}
        </div>
        <div>
            <CellGroup>
                <img class="content_img" src="../../../public/img/客户.png"><Cell title="刘征的所有课程" is-link ></Cell>
            </CellGroup>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import { Cell, CellGroup } from 'vant'
export default {
  data () {
    return {
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
    jiantou () {
      this.$router.push('/Cname')
    }
  },
  components: {
    Cell,
    CellGroup
  }
}
</script>

<style  scoped>
.details_head {
    width: 100%;
    height: 50px;
    background-color: rgb(69, 188, 228);
    border-radius: 5px;
}
.details_head img{
    width: 30px;
    vertical-align: middle;
}
.details_head span:nth-child(2) {
    margin-left: 130px;
    text-align: center;
    font-size: 20px;
    line-height: 48px;
    color: rgb(221, 252, 252);
    letter-spacing: 5px;
}
.content_s{
    width: 90%;
    height: 140px;
    border: 1px solid #c8c9cc;
    margin: 0 auto;
    margin-top: 20px;
}
.content_img{
    width:40px;
    vertical-align: middle;
    margin-right: 20px;
}
</style>

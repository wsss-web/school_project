<template>
    <div class="course_name">
        <div class="Cname_head">
            <span @click="jiantou"><img class="Cname_img" src="../../../public/img/箭头.png" /></span>
            <span>数字电子技术</span>
        </div>
        <CellGroup>
            <div v-for="(item , i) in list" :key="i">
              <Cell is-link @click="go_details">
                  教师：{{item.name}}<br>
                  选课号：{{item.num}}<br>
                  综合评价：{{item.comm}}
                  <Rate v-model="value" /><span style="color:#47bbe2;margin-left: 10px;vertical-align: top;">0人已评</span><br>
                  时间：{{item.time}}<br>
              </Cell>
            </div>
        </CellGroup>
        <router-view></router-view>
    </div>
</template>

<script>
import { Cell, Rate, CellGroup } from 'vant'
export default {
  data () {
    return {
      value: 0,
      list: [
        {
          name: '刘征',
          num: '(2019-2020-1) -070205-072665-1',
          time: '周五第9、10节{第5-15周|单周}'
        },
        {
          name: '刘征',
          num: '(2019-2020-1) -070205-072665-2',
          time: '周四第9、10节{第5-15周|单周}'
        }
      ]

    }
  },
  methods: {
    jiantou () {
      this.$router.push('/courses')
    },
    go_details () {
      this.$router.push('/details')
    }
  },
  components: {
    Cell,
    Rate,
    CellGroup
  }
}
</script>

<style  scoped>
.Cname_head {
    width: 100%;
    height: 50px;
    background-color: rgb(69, 188, 228);
    border-radius: 5px;
}
.Cname_head img{
    width: 30px;
    vertical-align: middle;
}
.Cname_head span:nth-child(2) {
    margin-left: 110px;
    text-align: center;
    font-size: 20px;
    line-height: 48px;
    color: rgb(221, 252, 252);
    letter-spacing: 5px;
}
</style>

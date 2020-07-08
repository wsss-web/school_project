<template>
    <div class="course_name">
        <navigation title="数字电子技术" left="back"></navigation>
        <div class="couser2">
        <CellGroup>
            <div v-for="(item , i) in list" :key="i">
              <Cell  >
                  教师：{{item.name}}<br>
                  选课号：{{item.num}}<br>
                  综合评价：{{item.comm}}
                  <Rate v-model="value" allow-half /><span style="color:#47bbe2;margin-left: 10px;vertical-align: top;"></span><br>
                  时间：{{item.time}}<br>
              <i  class="iconfont icon-iconfontjiantouzuo" @click="go_details"></i>
              </Cell>
                            <Cell  >
                  教师：刘征<br>
                  选课号：(2019-2020-1) -070205-072665-2<br>
                  综合评价：
                  <Rate v-model="value2" allow-half /><span style="color:#47bbe2;margin-left: 10px;vertical-align: top;"></span><br>
                  时间：周四第9、10节{第5-15周|单周}<br>
              <i  class="iconfont icon-iconfontjiantouzuo" @click="go_details"></i>
              </Cell>
            </div>
        </CellGroup>
        </div>
    </div>
</template>
<script>
import { Cell, Rate, CellGroup } from 'vant'
import navigation from '../../component/navigation'
export default {
  data () {
    return {
      value: 0,
      value2: 0,
      list: [
        {
          name: '刘征',
          num: '(2019-2020-1) -070205-072665-1',
          time: '周五第9、10节{第5-15周|单周}'
        }
        // {
        //   name: '刘征',
        //   num: '(2019-2020-1) -070205-072665-2',
        //   time: '周四第9、10节{第5-15周|单周}'
        // }
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
    CellGroup,
    navigation
  }
}
</script>

<style  scoped>
.couser2{
  margin-top: 43px;
}
.iconfont{
  font-size: 12px;
    color: #969799;
    position: absolute;
    top: 1px;
    right: 1px;
    transform: rotate(180deg);
}
</style>

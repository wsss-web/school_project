<template>
    <div>
        <navigation title="刘征的所有课程" left="back"></navigation>
        <div class="allcourse">
        <CellGroup>
            <div v-for="(item , i) in list" :key="i">
              <Cell >
                {{item.title}}<br>
                学期：{{item.session}}<br>
                选课号：{{item.num}}<br>
                综合评价：<Rate v-model="value" allow-half /><span style="color:#47bbe2;margin-left: 10px;vertical-align: top;"></span><br>
                时间：{{item.time}}<br>
                 <i  class="iconfont icon-iconfontjiantouzuo" @click="go_details"></i>
              </Cell>
            </div>
                          <Cell >
                模拟电子技术<br>
                学期：2018-2019-1<br>
                选课号：(2018-2019-1) -070227-2265-1<br>
                综合评价：<Rate v-model="value1" allow-half /><span style="color:#47bbe2;margin-left: 10px;vertical-align: top;"></span><br>
                时间：周四第5、6节{第1-3周|单周} 周五第9、10节{第1-3周|单周}...<br>
                 <i  class="iconfont icon-iconfontjiantouzuo" @click="go_details"></i>
              </Cell>
        </CellGroup>
        </div>
    </div>
</template>

<script>
import { Rate, Cell, CellGroup } from 'vant'
import navigation from '../../component/navigation'
export default {
  data () {
    return {
      value: 0,
      value1: 0,
      list: [
        {
          title: '模拟电子技术',
          session: '2018-2019-1',
          num: '(2018-2019-1) -070227-2265-1',
          time: '周四第5、6节{第1-3周|单周} 周五第9、10节{第1-3周|单周}...'
        }
        // {
        //   title: '模拟电子技术',
        //   session: '2018-2019-1',
        //   num: '(2018-2019-1) -070227-2265-2',
        //   time: '周四第7、8节{第1-3周|单周} 周五第9、10节{第1-3周|单周}...'
        // }
      ]
    }
  },
  components: {
    Rate,
    navigation,
    CellGroup,
    Cell
  },
  methods: {
    go_details () {
      this.$router.push('/titlename')
    }
  }
}
</script>

<style scoped>
.van-cell__value .van-cell__value--alone{
position: relative;
}
.iconfont{
  font-size: 12px;
    color: #969799;
    position: absolute;
    top: 1px;
    right: 1px;
    transform: rotate(180deg);
}
.allcourse {
  margin-top: 47px;
  margin-bottom: unset;
  /* border: 1px solid black; */
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

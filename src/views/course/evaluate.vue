<template>
  <div>
    <navigation title="综合评价" left="back"></navigation>
    <div class="course_name">
      <div class="couser2">
        <CellGroup>
          <div v-for="(item , i) in list" :key="i" >
            <Cell>
              课程：{{item.name}}
              <br />
              选课号：{{item.num}}
              <br />
              综合评价:
              <Rate  v-model="value1"  allowHalf></rate>
              <span style="color:#47bbe2;margin-left: 10px;vertical-align: top;"></span>
              <br />
              时间：{{item.time}}
              <br />
              <i class="iconfont icon-iconfontjiantouzuo"></i>
            </Cell>
          </div>
            <Cell>
              课程：模拟电子技术
              <br />
              选课号：(2019-2020-1) -070205-072665-2
              <br />
              综合评价：
              <Rate  v-model="value" allowHalf ></rate>
              <span style="color:#47bbe2;margin-left: 10px;vertical-align: top;"></span>
              <br />
              时间：周四第9、10节{第5-15周|单周
              <br />
              <i class="iconfont icon-iconfontjiantouzuo"></i>
            </Cell>
                        <Cell>
              课程：C语言程序设计
              <br />
              选课号：(2019-2020-1) -070205-072665-3
              <br />
              综合评价：
              <Rate  v-model="value2"  allowHalf></rate>
              <span style="color:#47bbe2;margin-left: 10px;vertical-align: top;"></span>
              <br />
              时间：周四第9、10节{第5-15周|单周
              <br />
              <i class="iconfont icon-iconfontjiantouzuo"></i>
            </Cell>
                                    <Cell>
              课程：大学体育一
              <br />
              选课号：(2019-2020-1) -070205-072665-4
              <br />
              综合评价：
              <Rate  v-model="value3" allowHalf ></rate>
              <span style="color:#47bbe2;margin-left: 10px;vertical-align: top;"></span>
              <br />
              时间：周四第9、10节{第5-15周|单周
              <br />
              <i class="iconfont icon-iconfontjiantouzuo"></i>
            </Cell>
                                                <Cell>
              课程：大学生职业生涯规划
              <br />
              选课号：(2019-2020-1) -070205-072665-5
              <br />
              综合评价：
              <Rate  v-model="value4" allowHalf ></rate>
              <span style="color:#47bbe2;margin-left: 10px;vertical-align: top;"></span>
              <br />
              时间：周四第9、10节{第5-15周|单周
              <br />
              <i class="iconfont icon-iconfontjiantouzuo"></i>
            </Cell>
          <div id="pie" :style="{ height: '300px'}"></div>
        </CellGroup>
      </div>
    </div>
  </div>
</template>

<script>
import { Cell, Rate, CellGroup } from 'vant'
import navigation from '../../component/navigation'
export default {
  name: 'evaluate',
  data () {
    return {
      value: 0,
      value1: 0,
      value2: 0,
      value3: 0,
      value4: 0,
      list: [
        {
          name: '数字电子技术',
          num: '(2019-2020-1) -070205-072665-1',
          time: '周五第9、10节{第5-15周|单周}'
        }
        // {
        //   name: '模拟电子技术',
        //   num: '(2019-2020-1) -070205-072665-2',
        //   time: '周四第9、10节{第5-15周|单周}'
        // },
        // {
        //   name: 'C语言程序设计',
        //   num: '(2019-2020-1) -070205-072665-3',
        //   time: '周四第9、10节{第5-15周|单周}'
        // },
        // {
        //   name: '大学体育一',
        //   num: '(2019-2020-1) -070205-072665-4',
        //   time: '周四第9、10节{第5-15周|单周}'
        // },
        // {
        //   name: '大学生职业生涯规划',
        //   num: '(2019-2020-1) -070205-072665-5',
        //   time: '周四第9、10节{第5-15周|单周}'
        // }
      ]
    }
  },
  methods: {
    drawpie () {
      // 基于准备好的dom，初始化echarts实例
      const myChart = this.$echarts.init(document.getElementById('pie'))

      // 绘制图表
      myChart.setOption({
        title: {
          text: '评价',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        xAxis: { show: false },
        yAxis: { show: false },
        series: [
          {
            name: '评价',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              { value: 335, name: '数字电子技术' },
              { value: 300, name: '模拟电子技术' },
              { value: 254, name: 'C语言程序设计' },
              { value: 300, name: '大学体育一' },
              { value: 160, name: '大学生职业生涯规划' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
    }
  },
  components: {
    navigation,
    Cell,
    Rate,
    CellGroup
  },
  created () {
  },
  mounted () {
    this.drawpie()
  }
}
</script>

<style  scoped>
.couser2 {
  margin-top: 43px;
}
.iconfont {
  font-size: 12px;
  color: #969799;
  position: absolute;
  top: 1px;
  right: 1px;
  transform: rotate(180deg);
}
#pie{
  margin-top: 8px;
}
</style>

<template>
    <div class="courses">
        <div class="courses_head">
            <span @click="jiantou"><img class="courses_img" src="../../../public/img/箭头.png" /></span>
            <span>信息工程学院课程</span>
            <span @click="showPicker = true">筛选</span>
        </div>
            <Popup v-model="showPicker" round position="bottom">
            <Picker
              show-toolbar
              :columns="columns"
              @cancel="showPicker = false"
              @confirm="onConfirm"
            />
            </Popup>
        <div>
            <CellGroup @click="go_A" v-for="(item,i) in list" :key="i">
              <Cell :title="item.title" is-link >{{item.value}}</Cell>
            </CellGroup>
      </div>
      <router-view></router-view>
  </div>
</template>

<script>
import { Cell, CellGroup, Picker, Popup } from 'vant'
export default {
  name: 'courses',
  data () {
    return {
      value: '',
      showPicker: false,
      list: [
        {
          title: '数字电子技术',
          value: '2条记录'
        },
        {
          title: '模拟电子技术',
          value: '2条记录'
        },
        {
          title: 'C语言程序设计',
          value: '1条记录'
        },
        {
          title: '大学体育（一）',
          value: '1条记录'
        },
        {
          title: '大学生职业生涯规划',
          value: '2条记录'
        },
        {
          title: '计算机网络',
          value: '2条记录'
        },
        {
          title: '电子信息工程导论',
          value: '2条记录'
        }
      ],
      columns: [
        // 第一列
        {
          values: ['2015级', '2016级', '2017级', '2018级', '2019级'],
          efaultIndex: 2
        },
        // 第二列
        {
          values: ['旅游与规划学院', '新闻与传播学院', '现代教育技术中心', '电气与机械工程学院', '经济管理学院', '离退休职工工作处'],
          defaultIndex: 1
        }
      ]
    }
  },
  components: {
    Cell,
    CellGroup,
    Picker,
    // Field,
    Popup
  },
  methods: {
    jiantou () {
      this.$router.push('/course')
    },
    onConfirm (value) {
      this.value = value
      this.showPicker = false
    },
    go_A () {
      this.$router.push('/Cname')
    }
  }
}
</script>

<style  scoped>
.courses_head {
    width: 100%;
    height: 50px;
    background-color: rgb(69, 188, 228);
    border-radius: 5px;
}
.courses_head img{
    width: 30px;
    vertical-align: middle;
}
.courses_head span:nth-child(2) {
    margin-left: 80px;
    text-align: center;
    font-size: 20px;
    line-height: 48px;
    color: rgb(221, 252, 252);
    letter-spacing: 5px;
}
.courses_head span:nth-child(3) {
    margin-left: 50px;
    text-align: center;
    font-size: 20px;
    line-height: 48px;
    color: rgb(221, 252, 252);
    letter-spacing: 2px;
}
</style>

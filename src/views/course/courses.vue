<template>
    <div>
        <div class="courses_head">
          <div  class="courses">
            <span @click="back"><div class="iconfont icon-iconfontjiantouzuo"></div></span>
            <span >信息工程学院课程</span>
            <span @click="showPicker = true">筛选</span>
            <!-- <span>111</span>
            <span>111</span>
            <span>111</span> -->
          </div>
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
            <CellGroup @click="go_A" v-for="(item,index) in list" :key="index">
              <Cell :title='item.title'  :value='item.value' is-link ></Cell>
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
      data: {
        lesson1: ''
      },
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
  created () {
    var that = this
    var usernam = localStorage.getItem('username')
    this.tools.axios({
      url: '' + this.tools.requrl + '/courselook?username=' + usernam + '',
      method: 'get'
    })
      .then(
        function (res) {
          console.log('请求成功')
          that.artlist = res.data
          console.log(res)
        },
        function (err) {
          console.log(err)
        }
      )
  },
  components: {
    Cell,
    CellGroup,
    Picker,
    // Field,
    Popup
  },
  methods: {
    onConfirm (value) {
      this.value = value
      this.showPicker = false
    },
    go_A () {
      this.$router.push('/Cname')
    },
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style  scoped lang="less">
/deep/ .iconfont{
      line-height: 46px;
    color: white;
    padding-left: 0.7rem;
    font-size: 0.8rem;
}
.courses_head {
    width: 100%;
    height: 46.4px;
    background-color: rgb(69, 188, 228);
    /* border-radius: 5px; */
}
.courses{
  display: flex;
}
.courses_img{
    width: 17px;
    line-height: 46.4px;
    vertical-align: middle;
    margin-left: 10px;
    margin-top: 14px;
}
.courses span:nth-child(2) {
    width: 33.33333333%;
    color: white;
    font-size: 1.1rem;
    text-align: center;
    flex: 15;
    line-height: 46.4px;
}
.courses span:nth-child(3) {
    flex: 2;
    width: 33.33333333%;
    align-items: center;
    justify-content: flex-end;
    color: white;
    font-size: 0.83rem;
    line-height: 46.4px;
}

</style>

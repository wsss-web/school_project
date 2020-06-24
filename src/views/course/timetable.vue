<template>
  <div>
    <!-- <div class="table-wrapper">
          <span @click="jiantou"><img class="timetable_img" src="../../../public/img/箭头.png" /></span>
          <span>课程表</span>
          <span>课程列表</span>
    </div>-->
    <navigation title="课程表" left="back" right="list"></navigation>
    <div class="timetable">
    <div class="content">
      <table>
        <tbody>
          <tr v-for="(lesson, lessonIndex) in classTableData.lessons" :key="lessonIndex">
            <td>
              <p>{{ digital2Chinese(lessonIndex+1) }}</p>
              <p class="period">{{ lesson }}</p>
            </td>

            <td
              v-for="(course, courseIndex) in classTableData.courses"
              :key="courseIndex"
            >{{classTableData.courses[courseIndex][lessonIndex] || '-'}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import navigation from '../../component/navigation'
export default {
  name: 'timetable',
  data () {
    return {
      classTableData: {
        lessons: ['', '', '', '', '', '', '', ''],
        courses: [
          ['一', '', '', '', '', '', '', ''],
          ['二', '物理', '化学', '政治', '历史', '英语', '', '语文'],
          ['三', '数学', '英语', '历史', '', '化学', '物理', '生物'],
          ['四', '', '化学', '政治', '历史', '英语', '数学', '语文'],
          ['五', '数学', '英语', '历史', '政治', '', '物理', '生物'],
          ['六', '物理', '化学', '', '历史', '英语', '数学', '语文'],
          ['日', '数学', '英语', '', '', '', '', '']
        ]
      }
    }
  },
  components: {
    navigation
  },
  methods: {
    digital2Chinese (num, identifier) {
      const character = [
        '',
        '节',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '十一',
        '十二'
      ]
      return identifier === 'week' && (num === 0 || num === 7)
        ? '日'
        : character[num]
    },
    jiantou () {
      this.$router.push('/course')
    }
  }
}
</script>

<style  scoped>
.timetable{
    margin-top:47px;
}
.table-wrapper {
  width: 100%;
  height: 50px;
  background-color: rgb(69, 188, 228);
  border-radius: 5px;
}
.table-wrapper img {
  width: 30px;
  vertical-align: middle;
}
.table-wrapper span:nth-child(2) {
  margin-left: 150px;
  text-align: center;
  font-size: 20px;
  line-height: 48px;
  color: rgb(221, 252, 252);
  letter-spacing: 5px;
}
.table-wrapper span:nth-child(3) {
  margin-left: 80px;
  text-align: center;
  font-size: 15px;
  line-height: 48px;
  color: rgb(221, 252, 252);
  letter-spacing: 2px;
}
.tbody {
  background-color: #eaf2ff;
}
.th,
td {
  width: 60px;
  padding: 12px 2px;
  font-size: 12px;
  text-align: center;
}
.content {
  height: 1000px;
  background-color: #eaf2ff;
}
</style>

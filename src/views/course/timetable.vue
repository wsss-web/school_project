<template>
  <div>
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
            >{{classTableData.courses[courseIndex][lessonIndex] || ''}}</td>
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
html{
  background:#45bce40d;
}
.timetable{
    margin-top:47px;
}
.tbody {
  flex: 1;
  background-color: #f7f8fa;
}
.th,td {
  width: 60px;
  height: 20px;
  /* flex: 1; */
  padding: 12px 2px;
  text-align: center;
  margin: 5px 2px 5px 2px;
  border: 1px solid pink;
  /* background: brown; */
}
.content {
  display: flex;
  height: 1000px;
  background-color: #f7f8fa;
}
</style>

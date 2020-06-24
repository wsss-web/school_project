<template>
    <div>
        <!-- <div class="table-wrapper">
          <span @click="jiantou"><img class="timetable_img" src="../../../public/img/箭头.png" /></span>
          <span>综合评价</span>
        </div> -->
        <navigation title="综合评价" left="back"></navigation>
    </div>
</template>

<script>
import navigation from '../../component/navigation'
export default {
  name: 'evaluate',
  data () {
    return {

    }
  },
  methods: {
    jiantou () {
      this.$router.push('/course')
    }
  },
  components: {
    navigation
  }
}
</script>

<style  scoped>
.table-wrapper {
  width: 100%;
  height: 50px;
  background-color: rgb(69, 188, 228);
  border-radius: 5px;
}
.table-wrapper img{
    width: 30px;
    vertical-align: middle;
}
.table-wrapper span:nth-child(2) {
    margin-left: 130px;
    text-align: center;
    font-size: 20px;
    line-height: 48px;
    color: rgb(221, 252, 252);
    letter-spacing: 5px;
}
</style>

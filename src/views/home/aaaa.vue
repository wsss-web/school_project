<template>
    <div>
        <navigation :title="aindex.title" left="back" ></navigation>
        <div style="margin:50px 20px 10px 20px;">
            <!-- <Cell title="单元格" value="内容" /> -->
            <span>成立时间：{{aindex.aaa}}</span><Button @click="go_bbbb" type="info">社团动态</Button><br>
            <!-- <span>{{aindex.aaa}}</span><br>
            <span></span> -->
            <span>社团人数：{{aindex.bbb}}</span><br>
            <span>社团部门：{{aindex.ccc}}</span>
        </div>
    </div>
</template>

<script>
import navigation from '../../component/navigation'
import { Button } from 'vant'
export default {
  data () {
    return {
    }
  },
  components: {
    navigation,
    Button
  },
  created () {
    this.aindex = this.$route.query.aindex
    console.log(this.aindex)
  }
}
</script>

<style  scoped>

</style>

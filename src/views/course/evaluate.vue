<template>
    <div>
        <navigation title="综合评价" left="back"></navigation>
        <Toast></Toast>
    </div>
</template>

<script>
import { Toast } from 'vant'
import navigation from '../../component/navigation'
export default {
  name: 'evaluate',
  data () {
    return {
    }
  },
  methods: {
  },
  components: {
    navigation,
    Toast
  },
  created () {
    this.$toast('翻转校园：暂时还没有可以评价的课程哦')
  }
}
</script>

<style  scoped>

</style>

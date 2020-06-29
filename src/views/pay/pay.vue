<template>
  <div class="big">
    <navigation id="ffoot" title="云缴费" left="back" right="bill"></navigation>
    <div class="case">
      <div>
      <tabs>
  <tab title="待缴账单">待缴账单</tab>
  <tab title="预付费">预付费</tab>
</tabs>
      </div>
    <tabbar></tabbar>
  </div>
  </div>
</template>
<script>
import navigation from '../../component/navigation'
import tabbar from '../../component/tabbar'
import { Tab, Tabs } from 'vant'
export default {
  data () {
    return {

    }
  },
  components: {
    navigation,
    tabbar,
    Tab,
    Tabs
  },
  beforeCreate () {
    document
      .querySelector('body')
      .setAttribute('style', 'background-color:rgb(243,243,243)')
  },

  beforeDestroy () {
    document.querySelector('body').removeAttribute('style')
  }
}
</script>
<style lang="less" scoped>
#ffoot{
height:50px;
position:fixed;
bottom:0px;
transform: translateZ(0);
-webkit-transform: translateZ(0);
}
.case{
  padding-top: 60px;
}

</style>

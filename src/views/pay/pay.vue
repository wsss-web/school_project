<template>
  <div class="big">
    <navigation id="ffoot" title="云缴费" left="back" right="bill"></navigation>
    <div class="case">
      <div>
        <tabs title-active-color="rgb(255,179,43)">
          <div class="wait">
            <tab title="待缴账单">
              <Cell
                title="平顶山学院"
                class="iconfont icon-jiaofei color:rgb(204,142,83)"
                value="王森(****0204)"
                is-link
              />
              <div class="payable">
                <Cell title="应缴账单" icon="checked " color="red" />
                <Cell title="暂无应缴账单" />
              </div>
              <div class="payable">
                <Cell title="自选账单" icon="checked " />
                <Cell title="暂无自选账单" />
              </div>
              <SubmitBar :price="0.00" button-text="提交订单" @submit="onSubmit">
                <Checkbox v-model="checked">全选</Checkbox>
                <template #tip>
                  你的收货地址不支持同城送,
                  <span>修改地址</span>
                </template>
              </SubmitBar>
            </tab>
          </div>
          <tab title="预付费">
            <Search v-model="value" placeholder="请输入搜索关键词" background="rgb(243,243,243)" />
            <div class="title">
              <van-image
                round
                width="2rem"
                height="2rem"
                src="http://img1.imgtn.bdimg.com/it/u=3004952430,2809598645&fm=26&gp=0.jpg"
              />
              <Cell title="宿舍照明用电支出" is-link to="/pay/payment" />
            </div>
            <div class="title">
              <van-image
                round
                width="2rem"
                height="2rem"
                src="http://img1.imgtn.bdimg.com/it/u=3004952430,2809598645&fm=26&gp=0.jpg"
              />
              <Cell title="空调用电支出" is-link to="/pay/aircondition" />
            </div>
          </tab>
        </tabs>
      </div>
      <tabbar></tabbar>
    </div>
  </div>
</template>
<script>
import navigation from '../../component/navigation'
import tabbar from '../../component/tabbar'
import {
  Tab,
  Tabs,
  Search,
  Image as VanImage,
  Cell,
  SubmitBar,
  Checkbox
} from 'vant'
export default {
  data () {
    return {
      value: '',
      checked: ''
    }
  },
  components: {
    navigation,
    tabbar,
    Tab,
    Tabs,
    Search,
    VanImage,
    Cell,
    SubmitBar,
    Checkbox
  },
  mounted () {
    document
      .querySelector('body')
      .setAttribute('style', 'background-color:rgb(243,243,243)')
  },
  beforeDestroy () {
    document.querySelector('body').removeAttribute('style')
  },
  methods: {
    onSubmit (e) {
      console.log(e)
    }
  }
}
</script>
<style lang="less" scoped>
/deep/ body {
  background: rgb(243, 243, 243);
}
.wait {
  /deep/.van-cell__value {
    font-size: 14px;
  }
  /deep/ .icon-jiaofei:before {
    color: rgb(255, 184, 118);
    margin-right: 10px;
    font-size: 22px;
  }
  /deep/ .van-cell__right-icon {
    color: rgb(213, 214, 196);
  }
  /deep/ .van-cell__value {
    color: black;
  }
  .payable {
    margin-top: 10px;
    /deep/ .van-cell__left-icon {
      margin-right: 5px;
      color: red;
      font-size: 19px;
    }
  }
}
.van-submit-bar {
  position: fixed;
  bottom: 52px;
  left: 0;
  z-index: 100;
  width: 100%;
}
#ffoot {
  height: 50px;
  position: fixed;
  bottom: 0px;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
}
.case {
  padding-top: 60px;
}
/deep/ .van-tabs--line .van-tabs__wrap {
  height: 55px;
}
/deep/ .van-tabs__line {
  width: 40%;
  background-color: rgb(255, 179, 43);
  height: 2px;
}
/deep/ .van-tabs__content {
  margin-top: 20px;
}
/deep/ .van-search__content {
  border-radius: 16px;
}
/deep/ .van-field__left-icon .van-icon,
.van-field__right-icon .van-icon {
  margin-left: 12px;
}
.van-search {
  height: 60px;
}
.title {
  padding: 15px;
  background: white;
  display: flex;
  align-items: center;
}
.iconfont{
      font-size: 16px;
}
</style>

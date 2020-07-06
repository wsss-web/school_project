<template>
  <div class="big">
    <navigation id="ffoot" title="云缴费" left="back" right="bill"></navigation>
    <div class="case">
      <div>
        <tabs title-active-color="rgb(255,179,43)">
          <div class="wait">
            <tab title="待缴账单">
              <Cell
               :title="data.sch_id"
                class="iconfont icon-jiaofei color:rgb(204,142,83)"
                is-link
                :value="data.name"
              />
              <div class="payable">
                <CheckboxGroup v-model="result" ref="checkboxGroup">
                  <Checkbox v-model="checkedd" icon-size="24px">自选账单</Checkbox>
                  <Cell title="暂无应缴账单" />
                  <div class="payable">
                    <Checkbox v-model="check" name="a" icon-size="24px">自选账单</Checkbox>
                    <Cell title="暂无应缴账单"></Cell>
                  </div>
                </CheckboxGroup>
              </div>
              <SubmitBar :price="0.00" button-text="提交订单" @submit="onSubmit">
                <Checkbox v-model="checked"  @click="checkAll">全选</Checkbox>
              </SubmitBar>
            </tab>
          </div>
          <tab title="预付费">
            <Search v-model="value"  placeholder="请输入搜索关键词" background="rgb(243,243,243)"    @search="onSearch"
    @cancel="onCancel"  />
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
  Checkbox,
  CheckboxGroup
} from 'vant'
export default {
  data () {
    return {
      value: '',
      checked: '',
      checkedd: '',
      check: '',
      result: [],
      title: '',
      data: {
        sch_id: '',
        name: '',
        src: ''
      }
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
    Checkbox,
    CheckboxGroup
  },
  mounted () {
    document
      .querySelector('html')
      .setAttribute('style', 'background-color:rgb(243,243,243)')
  },
  beforeDestroy () {
    document.querySelector('html').removeAttribute('style')
  },
  created () {
    console.log(this.$route.path)
    this.theactive = this.$route.path
    var that = this
    var usernam = localStorage.getItem('username')
    this.tools.axios({
      url: 'http://localhost:3000/paylook?username=' + usernam + '',
      method: 'get'
    })
      .then((res) => {
        that.data = res.data
        console.log(res)
      })
      .catch(function (err) {
        console.log(err)
      })
  },
  methods: {
    onSubmit (e) {
      console.log(e)
    },
    checkAll () {
      console.log(this.$refs.checkboxGroup)
      this.$refs.checkboxGroup.toggleAll(true)
    },
    onSearch (val) {
      console.log(val)
    },
    onCancel () {
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
      display: flex;
      align-items: center;
      align-content: center;
    }
    /deep/ .van-checkbox {
      background: white;
      padding: 10px 16px;
    }
    /deep/ .van-icon-success {
      font-size: 14px;
      margin-top: 3px;
    }
    /deep/ .van-checkbox__label {
      font-size: 14px;
      margin-left: 10px;
    }
    /deep/ .van-checkbox__icon--checked .van-icon {
      background: red;
      border-color: red;
    }
    /deep/ .van-field__left-icon .van-icon,
    .van-field__right-icon .van-icon {
      margin-left: 12px;
      background: red;
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
.van-search {
  height: 60px;
}
.title {
  padding: 15px;
  background: white;
  display: flex;
  align-items: center;
}
.iconfont {
  font-size: 16px;
}
.van-submit-bar {
  /deep/ .van-checkbox__icon--checked .van-icon {
    background: red;
    border-color: red;
  }
  /deep/ .van-field__left-icon .van-icon,
  .van-field__right-icon .van-icon {
    margin-left: 12px;
    background: red;
  }
}
</style>

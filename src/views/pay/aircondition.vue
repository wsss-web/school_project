<template>
  <div class="big">
    <navigation title="云缴费" left="back" right="bill"></navigation>
    <div class="case">
      <div class="tu">
        <VanImage
          round
          width="2rem"
          height="2rem "
          style="margin-right:10px;"
          src="http://img1.imgtn.bdimg.com/it/u=3004952430,2809598645&fm=26&gp=0.jpg"
        />
        <div class="font">空调用电支出</div>
      </div>
      <div>
        <Cell title="缴费单位" value="平顶山学院" size="large" />
        <Cell title="缴费房间" is-link value="请选择房间" @click="showPopup" />
          <Field
    v-model="value2"
    clearable
    label="缴费金额"
  input-align="right"
    placeholder="请输入金额"
  />
      </div>
      <popup v-model="show" position="bottom" :style="{ height: '50%' }">
        <Area
          title="标题"
          :area-list="areaList"
          :columns-placeholder="['请选择']"
          :columns-num="2" ref="myArea"
          @change="onChange"
          @confirm="onConfirm"
          @cancel="onCancel"
        />
      </popup>
      <p class="rest">提示：可能存在网络延迟，以上剩余量仅供参考</p>
      <div class="button">
         <Button type="danger"  size="normal" @click="join" >加入待缴费账单</Button>
         <Button  type="warning" style="background:rgb(254,184,48); border:1px solid rgb(248,180,69);border-radius: 5px; color:white;" @click="pay">立即支付</Button>
      </div>
    </div>
    <tab></tab>
  </div>
</template>
<script>
import navigation from '../../component/navigation'
import tab from '../../component/tabbar'
import { Image as VanImage, Cell, Area, popup, Field, Button } from 'vant'
export default {
  data () {
    return {
      show: false,
      value2: '',
      areaList: {
        province_list: {
          110000: '9110',
          120000: '9111',
          130000: '9112',
          140000: '9113',
          150000: '9114',
          160000: '9115'
        }
        // city_list: {
        //   110100: '北京市',
        //   110200: '县',
        //   120100: '天津市',
        //   120200: '县'
        // },
        // county_list: {
        //   110101: '东城区',
        //   110102: '西城区',
        //   110105: '朝阳区',
        //   110106: '丰台区',
        //   120101: '和平区',
        //   120102: '河东区',
        //   120103: '河西区',
        //   120104: '南开区',
        //   120105: '河北区'
        //   // ....
        // }
      }
    }
  },
  mounted () {
    document
      .querySelector('body')
      .setAttribute('style', 'background-color:rgb(243,243,243)')
  },
  beforeDestroy () {
    document.querySelector('body').removeAttribute('style')
  },
  components: {
    navigation,
    VanImage,
    Cell,
    tab,
    Area,
    popup,
    Field,
    Button
  },
  methods: {
    showPopup () {
      this.show = true
    },
    // value=0改变省，1改变市，2改变区
    onChange (picker, index, value) {
      const val = picker.getValues()
      console.log(val)
      // 查看打印
      const areaName = ''
      // for (var i = 0; i < val.length; i++) {
      //   areaName = areaName + (i === 0 ? '' : '/') + val[i].name
      // }
      this.carmodel = areaName
    },
    // 确定选择城市
    onConfirm (val) {
      console.log(val[0].name + ',')
      this.show = false
      // 关闭弹框
    },
    // 取消选中城市
    onCancel () {
      this.show = false
      this.$refs.myArea.reset()
      // 重置城市列表
    },
    join () {
      this.$router.push('/pay/')
    },
    pay () {
      this.$router.push('/pay/immediately')
    }
  }
}
</script>
<style lang="less" scoped>
body{
  background-color:rgb(243,243,243);
}
.van-cell--clickable{
 padding-left: 10px;
}
.case {
  margin: 0px 10px;
}
.rest{
 font-size: 14px;
 margin-left:8px;
 margin-top: 12px;
 margin-bottom: 20px;
}
.tu {
  background: white;
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 70px;
  .font {
    color: black;
    font-size: 14px;
  }
}
.van-cell--large {
  padding-left: 10px;
}
.van-cell--large .van-cell__title {
  color: #969799;
  font-size: 14px;
}
.van-cell__value {
  color: black;
  font-size: 12px;
}
.van-cell--clickable{
  color:#969799;
}
.van-cell{
  padding-left:10px;
}
 /deep/ .van-field__label{
  color:#969799;
}
/deep/ .van-field__control{
  margin-left: 59%;
}
.button{
  display: flex;
  align-content: center;
  justify-content: space-around;
}
.van-button--danger{
  border-radius: 5px;
  border:1px solid rgb(240,179,72);
  background:white;
     .van-button__text{
  color:rgb(240,179, 72);
}
}
.van-button--danger[data-v-538eddd2]{
  width: 130px;

}
.van-button .van-button--warning .van-button--normal{
  .van-button__text:nth-child(1){
  color:white;
}

}
.van-button {
 width: 130px;
}

</style>

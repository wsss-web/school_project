<template>
    <div class="big">
        <div class="zhifu">
            <navigation title="支付订单" left="back"></navigation>
            <img src="../../../public/img/商店.png" alt="">
            <div class="zhifu2">
              <Field
              v-model="value"
              label="金额"
              placeholder="￥"
              input-align="right"
              />
            </div>
        </div>
        <div class="zhifu4">
            <CheckboxGroup v-model="result">
            <CellGroup>
                <Cell
                v-for="(item, index) in list"
                clickable
                :key="item"
                :title="`H5支付 ${item}`"
                @click="toggle(index)"
                >
                <template #right-icon>
                    <Checkbox :name="item" ref="checkboxes" />
                </template>
                </Cell>
            </Cellgroup>
            </CheckboxGroup>
        </div>
        <div class="zhifu3">
            <Field
            v-model="value2"
            label="备注："
            placeholder="请添加备注信息"
            input-align="right"
            />
        </div>
        <Button class="queren"  size="small">确认支付</Button>
    </div>
</template>

<script>
import { Field, CheckboxGroup, CellGroup, Cell, Checkbox, Button } from 'vant'
import navigation from '../../component/navigation'
export default {
  data () {
    return {
      value: '',
      value2: '',
      list: [''],
      result: []
    }
  },
  components: {
    navigation,
    Field,
    CheckboxGroup,
    CellGroup,
    Cell,
    Checkbox,
    Button
  },
  methods: {
    toggle (index) {
      this.$refs.checkboxes[index].toggle()
    }
  }
}
</script>

<style  scoped>
.big{
  background:#f7f8fa;
  height: 100%;
}
.zhifu{
    margin: 20px 20px 10px 20px ;
    background:#ffffff;
    height: 155px;
}
.zhifu img{
    width: 30px;
    margin-top: 47px;

}
.zhifu2{
    width: 90%;
    margin: 0 auto;
    margin-top: 10px;
}

.zhifu2 div{
   background: #f2f3f5;
   border-radius: 3px;
   height: 50px;
}
.zhifu3{
  margin: 15px 20px;
}
.zhifu4{
  margin: 1px 20px;
}
.queren{
  width: 80%;
  margin-left: 10%;
  background: #f58686;
  border-radius: 5px;
  margin-top: 40px;
  color: #f2f3f5;
}
</style>

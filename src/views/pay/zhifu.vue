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
        <Button @click="showPopup" class="queren" size="small">确认支付</Button>
        <div><Popup v-model="show" class="cc">
          <div class="c1">
            <!-- <span class="c2">×</span>
            <span class="c3">请输入支付密码</span><br>
            <div>￥11</div> -->
            <!-- 密码输入框 -->
             <PasswordInput
              :shuzi="shuzi"
              info="密码为 6 位数字"
              :focused="showKeyboard"
              @focus="showKeyboard = true"
            />
            <!-- 数字键盘 -->
            <NumberKeyboard
              :show="showKeyboard"
              @input="onInput"
              @delete="onDelete"
              @blur="showKeyboard = false"
            />
          </div>
        </Popup></div>
    </div>
</template>

<script>
import { Field, CheckboxGroup, CellGroup, Cell, Checkbox, Button, Popup, PasswordInput, NumberKeyboard } from 'vant'
import navigation from '../../component/navigation'
export default {
  data () {
    return {
      value: '',
      value2: '',
      list: [''],
      result: [],
      show: false,
      shuzi: '123',
      showKeyboard: true
    }
  },
  components: {
    navigation,
    Field,
    CheckboxGroup,
    CellGroup,
    Cell,
    Checkbox,
    Button,
    Popup,
    PasswordInput,
    NumberKeyboard
  },
  methods: {
    toggle (index) {
      this.$refs.checkboxes[index].toggle()
    },
    showPopup () {
      this.show = true
    },
    onInput (key) {
      this.value = (this.value + key).slice(0, 6)
    },
    onDelete () {
      this.value = this.value.slice(0, this.value.length - 1)
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
.cc{
  border-radius: 10px;
}
.c1{
  display: flex;
  width: 200px;
  height:190px;
}
.c2{
  flex: 1;
  /* width: 20%; */
  margin: 20px 10px;
  height: 20px;
}
.c3{
  flex: 4;
  /* width: 80%; */
  margin: 8px auto;
  font-size: 13px;
  height: 20px;
  text-align: center;
}
</style>

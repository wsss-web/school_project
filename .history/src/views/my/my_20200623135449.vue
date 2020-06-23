<template>
  <div>
    <navigation title="我的" left="sweep" right="people"></navigation>
    <div class="gild">
      <div class="cell">
        <div class="cell-item">
          <p class="font">头像</p>
          <div class="title">
            <img src="../../assets/1.png" alt />
          </div>
          <Icon name="arrow" color="#969799" />
        </div>
      </div>
    </div>
    <CellGroup>
      <Cell
        v-for="(item,index) in List"
        :key="index"
        :title="(item.title)"
        :value="(item.value)"
        :is-link= "true"
        :to="item.to"
      />
         <Cell title="关于" value="4.54"  class="about" />
    </CellGroup>
    <div class="bottom">
 <Button type="primary" size="large" @click="loginout">退出登录</Button>
    </div>
    <tabbar></tabbar>
    <Overlay :show="show" @click="show = false">
  <div class="wrapper" @click.stop>
    <div class="block" />
    <Cell title="单元格" value="内容" size="large" />
    <Cell title="单元格" value="内容" size="large" />
      <div>
      </div>
  </div>
</Overlay>
  </div>
</template>
<script>
import tabbar from '../../component/tabbar.vue'
import navigation from '../../component/navigation.vue'
import { Icon, Cell, CellGroup, Button, Dialog, Overlay } from 'vant'
export default {
  data () {
    return {
      show: true,
      List: [
        {
          title: '名字',
          value: '王森'
        },
        {
          title: '账号',
          value: '1019161360204'
        },
        {
          title: '手机号',
          value: '17337570185',
          to: '/my/phone'
        },
        {
          title: '昵称',
          value: 'zzedu',
          to: '/my/name'
        },
        {
          title: '性别',
          value: '男'
        },
        {
          title: '邮箱',
          value: '',
          to: '/my/mail'
        },
        {
          title: '修改密码',
          value: '',
          to: '/my/modify'
        },
        {
          title: '重要信息维护',
          value: ''
        },
        {
          title: '电子学生证',
          value: '',
          to: '/my/card'
        },
        {
          title: '绑定第三方账号',
          value: '',
          to: '/my/tripartite'
        }
      ]
    }
  },
  components: {
    tabbar,
    navigation,
    Icon,
    Cell,
    CellGroup,
    Button,
    [Dialog.Component.name]: Dialog.Component,
    Overlay
  },
  methods: {
    loginout () {
      Dialog.confirm({
        title: '提示',
        message: '您确认退出登录吗？'
      })
        .then(() => {
          this.$router.push('/login')
        })
        .catch(() => {
        })
    }
  }
}
</script>
<style lang="less">
.gild {
  margin-top: 41.6px;
  border-bottom: 1px solid gray;
  height: 55px;
}
.cell {
  margin: 0px 16px;
  .van-icon {
    line-height: 55px;
  }
}
.cell-item {
  display: flex;
  align-content: center;
  align-content: center;
  text-align: center;
  height: 55px;
  .font {
    line-height: 55px;
    font-size: 14px;
    color: rgb(51, 51, 51);
  }
  .title {
    margin-left: auto;
    text-align: center;
    margin-top: 0.46rem;
    img {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
    }
  }
}
.about{
    border-bottom:none;
}
.van-cell-group{
 .van-cell{
   border-bottom:1px solid gray;
 }
}
.van-cell:last-child{
  border-bottom:none;
}
.bottom{
     margin: 0px 16px 80px 16px;
     .van-cell::after{
    border-bottom:none;
}
.van-button--primary{
    background:rgb(69,188,228);
    border:1px solid rgb(69,188,228);
    height: 2rem;
    border-radius: .3rem;
}
}
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    display: flex;
  width: 78%;
    height: 18%;
    background-color: #fff;
      box-shadow: 0px -4px;
  }
</style>

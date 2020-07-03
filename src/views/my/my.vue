<template>
  <div>
    <navigation title="我的" left="sweep" right="people"></navigation>
    <div class="gild">
      <div class="cell">
        <div class="cell-item">
          <p class="font">头像</p>
          <div class="ti">
            <img src="../../assets/1.png" alt />
          </div>
          <Icon name="arrow" color="#969799" />
        </div>
      </div>
    </div>
    <CellGroup>
      <Cell title="名字" :value="people.name" />
      <Cell title="账号" :value="people.stu_id"></Cell>
      <Cell title="手机号" :value="people.phone" is-link to= '/my/phone'></Cell>
      <Cell title="昵称" :value="people.nickname" is-link to='/my/name'></Cell>
      <Cell title="性别" :value="people.sex" is-link @click="set"></Cell>
      <Cell title='邮箱' :value="people.address" is-link to='/my/mail'></Cell>
      <Cell title='修改密码' is-link  to='/my/modify'></Cell>
      <Cell style="color:red" title='重要信息维护' is-link to='/my/information'></Cell>
      <Cell  title='电子学生证' is-link to='/my/card'></Cell>
      <Cell  title='绑定第三方账号' is-link to='/my/tripartite'></Cell>
      <Cell title="关于" value="4.54" class="about" />
    </CellGroup>
    <div class="botto">
      <Button type="primary" size="large" @click="loginout">退出登录</Button>
    </div>
    <tabbar></tabbar>
    <Overlay :show="show" @click="show = false">
      <div class="wrapper" @click.stop>
        <div class="block">
          <Cell @click="chose" title="男" />
          <Cell @click="girl" title="女" />
        </div>
        <div></div>
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
      people: {},
      show: false
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
        .catch(() => {})
    },
    set (index) {
      console.log(index)
      this.show = true
    },
    chose (e) {
      console.log(e.target.innerText)
      console.log(this)
      this.show = false
    },
    girl () {
      this.show = false
    }
    // chuan () {
    //   this.tools.axios({
    //     params: {
    //       status: 3,
    //       stu_id: '161360205',
    //       buliding_id: '3号楼',
    //       floor: 1,
    //       room: 3102,
    //       specifications: '六人间',
    //       washroom: '无',
    //       balcony: '无',
    //       username: 'wsss',
    //       money: 30,
    //       moniter: '陈鹏程'
    //     },
    //     url: 'http://localhost:3000/resetdomitoryinfo',
    //     method: 'get',
    //     header: {
    //       'Content-Type': 'application/json'
    //     }
    //   })
    //     .then(
    //       function (res) {
    //         console.log(res)
    //       },
    //       function (err) {
    //         console.log(err)
    //       }
    //     )
    // }
  },
  created: function () {
    var that = this
    var username = localStorage.getItem('username')
    this.tools
      .axios({
        url: 'http://localhost:3000/userinfo?username=' + username + '',
        method: 'get'
      })
      .then(
        function (res) {
          that.people = res.data
          var user = JSON.stringify({
            username: res.data.username,
            password: res.data.password,
            stu_id: res.data.stu_id,
            name: res.data.name,
            nickname: res.data.nickname,
            sex: res.data.sex
          })
          localStorage.setItem('user', user)
          console.log(res)
        },
        function (err) {
          console.log(err)
        }
      )
  }
}
</script>
<style lang="less">
.gild {
  margin-top: 41.6px;
  height: 55px;
  background: white;
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
  .ti {
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
.botto {
.van-cell-group{
 .van-cell{
   border-bottom:1px solid  #bebebe;
 }
}
}
.bottom {
  margin: 10px 16px 80px 16px;
  background-color: #45bce4;
  border-radius: 0.3rem;
  .van-button--primary {
    background: rgb(69, 188, 228);
    border: 1px solid rgb(69, 188, 228);
    height: 2rem;
    border-radius: 0.3rem;
  }
       .van-cell::after{
     border-bottom:1px solid  #bebebe;}
  .van-cell::after{
  border-bottom:1px solid  #bebebe;
  }
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 78%;
  height: 14%;
  background-color: #fff;
  box-shadow: 0px -4px;
}
</style>

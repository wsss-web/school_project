<template>
    <div>
      <navigation title="绑定手机号" left="back" ></navigation>
      <div class="center">
              <div class="tit">
                  <div class="icon">
                     <span class="iconfont icon-wode"></span>
                  </div>
                  <p>您的手机号</p>
                  <p>{{list.phone}}</p>
              </div>
      </div>
      <div class="bottom">
 <Button type="primary" size="large" @click="phone">更换手机号码</Button>
    </div>
    </div>
</template>
<script>
import navigation from '../../component/navigation.vue'
import { Button } from 'vant'
export default {
  data () {
    return {
      list: {}
    }
  },
  components: {
    navigation,
    Button
  },
  methods: {
    phone: function () {
      this.$router.push('/my/newphone')
    }
  },
  created: function () {
    var username = localStorage.getItem('username')
    var that = this
    this.tools.axios({
      url: '' + this.tools.requrl + '/userinfo?username=' + username + '',
      method: 'get'
    })
      .then(
        function (res) {
          that.list = res.data
          console.log(that.list)
        },
        function (err) {
          console.log(err)
        }
      )
  }

}
</script>
<style lang="less" scoped>
.center{
.tit{
     margin-top:6rem;
.icon{
    width:4rem;
    height:4rem;
    border-radius: 50%;
    border:1px solid rgb(223, 224, 219);
    margin-top:3rem;
    background:rgb(223, 224, 219);
    margin: auto;
    .iconfont{
       position: relative;
    top: 6px;
    left: 5px;
    font-size: 56px;
    color:white;
}
}
p:nth-child(2){
    margin-top:.8rem;
    text-align: center;
    color:rgb(68, 68, 68)
}
p:last-child{
    margin-top:.8rem;
       color:rgb(75, 75, 75);
       text-align:center;
}
}
}
.bottom{
     margin: 10px 16px 80px 16px;
     background-color:#45bce4;
     border-radius: 0.3rem;
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

</style>

<template>
    <div>
      <navigation title="绑定手机号" left="back" ></navigation>
      <div class="center">
              <div class="title">
                  <div class="icon">
                     <span class="iconfont icon-wode"></span>
                  </div>
                  <p>您的手机号</p>
                  <p>17337570185</p>
              </div>
      </div>
      <div class="bottom">
 <Button type="primary" size="large">更换手机号码</Button>
    </div>
    </div>
</template>
<script>
import navigation from '../../component/navigation.vue'
import { Button } from 'vant'
export default {
  data () {
    return {

    }
  },
  components: {
    navigation,
    Button
  }

}
</script>
<style lang="less">
.center{
.title{
     margin-top:6rem;
.icon{
    width:4rem;
    height:4rem;
    border-radius: 50%;
    border:1px solid rgb(223, 224, 219);
    margin-top:3rem;
    background:rgb(223, 224, 219);
    margin: auto;
    position: absolute;
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
     margin: 60px 16px 80px 16px;
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
.iconfont{
    position: relative;
    top:0;
    left:0;
}
</style>

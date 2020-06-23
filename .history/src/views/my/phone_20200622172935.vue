<template>
    <div>
      <navigation title="绑定手机号" left="back" ></navigation>
      <div class="center">
              <div class="title">
                  <div class="icon"></div>
                  <p>您的手机号</p>
                  <p>17337570185</p>
              </div>
      </div>
    </div>
</template>
<script>
import navigation from '../../component/navigation.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    navigation
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
}
p:first-child{
    text-align: center;
    color:rgb(68, 68, 68)
}
p:last-child{
       color:rgb(75, 75, 75);
       text-align:center;
}
}
}

</style>

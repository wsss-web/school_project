<template>
  <ul class="t_box">
    <li  v-for="(i,k) in topage" @click=" tonav (i.path)" :key="k" >
      <i class="iconfont " :class="[{active: theactive === i.path},i.icon]" ></i>
    </li>
  </ul>
</template>
<style lang="less" scoped>
li {
  list-style: none;
}
.t_box {
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 3.2rem;
  background: #2a313a;
  li {
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #696e83;
    i {
      font-size: 1.2rem !important;
    }
  }
}
.active {
  color: #e96593;
}
</style>
<script>
export default {
  data () {
    return {
      theactive: 0,
      topage: [
        {
          path: '/',
          icon: 'icon-shouye1'
        },
        {
          path: '/explore',
          icon: 'icon-tansuo'
        },
        {
          path: '/bookcase',
          icon: 'icon-zhengshudayin'
        },
        {
          path: '/my',
          icon: 'icon-yonghu'
        }
      ]
    }
  },
  methods: {
    tonav (i) {
      if (i === this.$route.path) {
      } else {
        this.$router.push(i)
      }
    }
  },
  created () {
    console.log(this.$route.path)
    this.theactive = this.$route.path
  }
}
</script>

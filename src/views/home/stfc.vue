<template>
  <div>
    <navigation title="社团风采" left="back"></navigation>
     <div class="content"  v-for="(item , i) in list" :key="i" @click="go_aaaa(i)">
       <img :src="item.img" alt="">
       <div class="content_s">
          <p>{{item.title}}</p>
          <p>人数：{{item.num}}</p>
          <p>成立时间：{{item.time}}</p>
       </div>
     </div>
  </div>
</template>

<script>
import navigation from '../../component/navigation'
export default {
  data () {
    return {
      list: [
        {
          img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2706052641,3356625088&fm=26&gp=0.jpg',
          title: '青年传媒中心',
          num: '20',
          time: '2010年6月',
          list1: {
            title: '青年传媒中心',
            aaa: '2000年01月17日',
            bbb: '20人',
            ccc: '未知'
          }

        },
        {
          img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3709156882,3336791121&fm=26&gp=0.jpg',
          title: '街舞社',
          num: '32',
          time: '2011年3月',
          list1: {
            title: '街舞社',
            aaa: '2000年01月01日',
            bbb: '24人',
            ccc: '未知'
          }
        },
        {
          img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2706052641,3356625088&fm=26&gp=0.jpg',
          title: '轮滑社',
          num: '20',
          time: '2010年12月',
          list1: {
            title: '轮滑社',
            aaa: '2000年01月01日',
            bbb: '28人',
            ccc: '未知'
          }

        }
      ]
    }
  },
  methods: {
    go_aaaa (i) {
      var ajie = this.list[i].list1
      this.$router.push({
        path: '/aaaa',
        query: {
          aindex: ajie
        }
      })
    }
  },
  components: {
    navigation
  }
}
</script>

<style  scoped>
.content{
  width:300px;
  height:100px;
  display: flex;
  /* border:1px solid black; */
  margin: 50px 20px 4px 20px;
}
.content img{
  width: 35%;
  flex: 2;
}
.content_s{
  flex: 3;
  margin-left: 10px;
}
</style>

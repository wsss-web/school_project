<template>
  <div>
    <div class="title">
      <navigation left="back" title="重要信息维护"></navigation>
      <div class="case">
        <p>个人基本信息</p>
        <p>完整度:(0%)</p>
      </div>
    </div>
    <div class="head">
      <div class="portrait">个人照片</div>
    </div>
    <div class="uploader">
      <Uploader :after-read="afterRead" />
      <p class="photo">点击上传证件照</p>
    </div>
    <div class="dell" v-for="(item,index) in List" :key="index">
      <div class="name">
        <div class="first">{{item.name}}</div>
        <div class="right">{{item.text}}</div>
      </div>
    </div>
     <div class="bo">
      <div class="case">
        <p>信息维护</p>
      </div>
    </div>
        <div class="both" @click="go" >
      <div class="name">
        <div class="first">出生日期</div>
        <div class="input" style="display:none"  :show="show" > <DatetimePicker
  v-model="currentDate"
  :show="show"
  type="date"
  title="选择年月日"
  :min-date="minDate"
  :max-date="maxDate"
/></div>
      </div>
    </div>
  </div>
</template>
<script>
import navigation from '../../component/navigation'
import { Uploader, DatetimePicker } from 'vant'
export default {
  data () {
    return {
      show: false,
      value: '',
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
      List: [
        {
          name: '姓名',
          text: '王森'
        },
        {
          name: '性别',
          text: '男'
        }
      ]
    }
  },
  components: {
    navigation,
    Uploader,
    DatetimePicker
  },
  methods: {
    afterRead (file) {
      // 此时可以自行将文件上传至服务器
      console.log(file)
    },
    go () {
      console.log(111)
      this.style.display = 'block'
    },
    formatter (type, val) {
      if (type === 'year') {
        return `${val}年`
      } else if (type === 'month') {
        return `${val}月`
      }
      return val
    }
  }
}
</script>
<style lang="less" scoped>
.bo{
    height: 3rem;
  background: rgb(241, 240, 245);
   .case {
       margin-left: 16px;
    margin-right: 16px;
    display: flex;
    justify-content: space-between;
    line-height: 48px;
    p:last-child {
      color: rgb(120, 119, 124);
    }
  }
}
.title {
  margin-top: 40px;
  height: 3rem;
  background: rgb(241, 240, 245);
  .case {
        margin-left: 16px;
    margin-right: 16px;
    display: flex;
    justify-content: space-between;
    line-height: 48px;
    p:last-child {
      color: rgb(120, 119, 124);
    }
  }
}
.head {
  margin-left: 34px;
  margin-top: 12px;
}
.portrait {
  font-size: 14px;
}
.uploader {
  text-align: center;
  height: 126px;
}
.photo {
  color: black;
  font-size: 13px;
}
.dell {
  height: 50px;
  border-top: 1px solid #78777c;
  padding-left: 16px;
  line-height: 50px;
}
.name {
  padding: 0px 18px;
  display: flex;
  p {
    font-size: 14px;
  }
  .right {
    display: flex;
    flex: 1;
    text-align: center;
    justify-content: center;
  }
  .input {
    display: flex;
    flex: 1;
    text-align: center;
    justify-content: center;
    border:1px solid rgb(205,232,249);
    margin-left: 2rem;
    margin-bottom: .08rem
  }
}
.both{
        border-bottom: 1px solid #78777c;
    height: 50px;
    padding-left: 16px;
    line-height: 50px;
           .case {
       margin-left: 16px;
    margin-right: 16px;
    display: flex;
    justify-content: space-between;
    line-height: 48px;
    p:last-child {
      color: rgb(120, 119, 124);
    }
  }
}
</style>

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
    <div v-for="(item,index) in List" :key="index">
      <div class="dell">
        <div class="name">
          <div class="first">{{item.name}}</div>
          <div class="right">{{item.text}}</div>
        </div>
      </div>
      <Divider />
    </div>
    <!-- <div class="bo">
      <Divider />
      <div class="case">
        <p>信息维护</p>
      </div>
    </div> -->
    <!-- <div class="both" @click="go">
      <div class="name">
        <div class="first">出生日期</div>
        <div class="input" style="display:none" @click="isactive=true">
          <DatetimePicker
            v-model="currentDate"
            type="date"
            :isactive="isactive"
            title="选择年月日"
            :min-date="minDate"
            :max-date="maxDate"
          />
        </div>
      </div>
    </div> -->
    <div class="bo">
      <Divider />
      <div class="case">
        <p>宿舍信息</p>
      </div>
    </div>
    <div>
      <div class="kuang">
        <div class="dell">
          <div class></div>
          <div class="na">
            <div class="second">楼号</div>
            <div class="right">
              <Field :value='room.buliding_id'></Field>
            </div>
          </div>
          <Divider />
        </div>
         <div class="dell">
          <div class></div>
          <div class="na">
            <div class="second">楼层</div>
            <div class="right">
              <Field  :value='room.floor'></Field>
            </div>
          </div>
          <Divider />
        </div>
          <div class="dell">
          <div class></div>
          <div class="na">
            <div class="second">房间</div>
            <div class="right">
              <Field  :value='room.room'></Field>
            </div>
          </div>
          <Divider />
        </div>
          <div class="dell">
          <div class></div>
          <div class="na">
            <div class="second">房间规格</div>
            <div class="right">
              <Field  :value='room.specifications'></Field>
            </div>
          </div>
          <Divider />
        </div>
            <div class="dell">
          <div class></div>
          <div class="na">
            <div class="second">有无独卫</div>
            <div class="right">
              <Field :value='room.washroom'></Field>
            </div>
          </div>
          <Divider />
        </div>
                <div class="dell">
          <div class></div>
          <div class="na">
            <div class="second">有无阳台</div>
            <div class="right">
              <Field  :value='room.balcony'></Field>
            </div>
          </div>
          <Divider />
        </div>
      </div>
    </div>
    <div class="bo">
      <Divider />
      <div class="case">
        <p>宿舍长信息</p>
      </div>
    </div>
    <div>
      <div class="kuang">
        <div class="dell" >
          <div class></div>
          <div class="na">
            <div class="second">学号</div>
            <div class="right">
              <Field :value='room.stu_id'></Field>
            </div>
          </div>
          <Divider />
        </div>
        <div class="dell" >
          <div class></div>
          <div class="na">
            <div class="second">姓名</div>
            <div class="right">
              <Field ></Field>
            </div>
          </div>
          <Divider />
        </div>
          <div class="dell" >
          <div class></div>
          <div class="na">
            <div class="second">院系</div>
            <div class="right">
              <Field ></Field>
            </div>
          </div>
          <Divider />
        </div>
      </div>
      <div class="end"></div>
        <div class="kuang">
        <div class="dell">
          <div class></div>
          <div class="na">
            <div class="second">职业规划</div>
            <div class="right">
              <Field v-model="value"></Field>
            </div>
          </div>
          <Divider />
        </div>
      </div>
      <div class="button">
            <div class="bottom">
 <Button type="primary" size="large" >保存</Button>
    </div>
      </div>
    </div>
  </div>
</template>
<script>
import navigation from '../../component/navigation'
import { Uploader, Divider, Field, Button } from 'vant'

export default {
  data () {
    var user = JSON.parse(localStorage.getItem('user'))
    return {
      date: '',
      isactive: false,
      value: '',
      room: {},
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
      List: [
        {
          name: '姓名',
          text: user.name
        },
        {
          name: '性别',
          text: user.sex
        }
      ],
      // msg: [
      //   {
      //     title: '楼号',
      //     placeholder: '521'
      //   },
      //   {
      //     title: '楼层',
      //     placeholder: '5'
      //   },
      //   {
      //     title: '房间',
      //     placeholder: '529'
      //   },
      //   {
      //     title: '房间规格',
      //     placeholder: '未知'
      //   },
      //   {
      //     title: '独立卫生间',
      //     placeholder: '未知'
      //   },
      //   {
      //     title: '有无阳台',
      //     placeholder: '未知'
      //   }
      // ],
      Dormitory: [
        {
          title: '学号',
          text: '点击寻找宿舍长'
        },
        {
          title: '姓名',
          text: ''
        },
        {
          title: '院系',
          text: ''
        }
      ]
    }
  },
  components: {
    navigation,
    Uploader,
    // DatetimePicker,
    Divider,
    Field,
    Button
  },
  methods: {
    afterRead (file) {
      // 此时可以自行将文件上传至服务器
      console.log(file)
    },
    go () {
      console.log(111)
    },
    formatter (type, val) {
      if (type === 'year') {
        return `${val}年`
      } else if (type === 'month') {
        return `${val}月`
      }
      return val
    }
  },
  created: function () {
    var that = this
    var username = localStorage.getItem('username')
    this.tools
      .axios({
        url: 'http://localhost:3000/domitoryshow?username=' + username + '',
        method: 'get'
      })
      .then(
        function (res) {
          that.room = res.data
          console.log(res)
        },
        function (err) {
          console.log(err)
        }
      )
  }
}
</script>
<style lang="less" scoped>
.na {
  padding: 0px 18px;
  display: flex;
  align-items: center;
  p {
    font-size: 14px;
  }
  .right {
    display: flex;
    flex: 1;
    text-align: center;
    justify-content: center;
    border: 1px solid #adc9df;
  }
}
.second {
  width: 30%;
}
.kuang {
  padding-top: 20px;
}
.first {
  text-align: center;
}
.active {
  display: block;
}
.bo {
  height: 3rem;
  background: rgb(241, 240, 245);
  .case {
    margin-left: 16px;
    margin-right: 16px;
    display: flex;
    justify-content: space-between;
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
  padding-left: 16px;
}
.name {
  padding: 0px 18px;
  display: flex;
  align-items: center;
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
    border: 1px solid rgb(205, 232, 249);
    margin-left: 2rem;
    margin-bottom: 0.08rem;
  }
}
.both {
  height: 50px;
  padding-left: 16px;
  line-height: 50px;
  .case {
    margin-left: 16px;
    margin-right: 16px;
    display: flex;
    justify-content: space-between;
    p:last-child {
      color: rgb(120, 119, 124);
    }
  }
}
/deep/ .van-cell {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  color: #323233;
  font-size: 14px;
  line-height: 24px;
  background-color: #fff;
  padding: 0px 0px;
}
.end{
  height: 20px;
  background:#f1f0f5;
}
.button{
    height: 62px;
    background: #f1f0f5;
    padding: 10px 0;
}
.bottom{
     margin: 10px 16px 80px 16px;
     background-color:#45bce4;
     border-radius: 0.3rem;
.van-button--primary{
    background: #07c160;
    border: 1px solid #07c160;
    height: 2.5rem;
    border-radius: .3rem;
}
}
</style>

<template>
  <div>
    <div class="title">
      <navigation left="back" title="重要信息维护"></navigation>
      <div class="case">
        <p>个人基本信息</p>
        <p>完整度:(0%)</p>
      </div>
    </div>
    <div class="portrait">个人照片</div>
    <div class="uploader">
      <Field name="uploader">
        <template #input>
          <Uploader style="margin: 0 auto;" v-model="images" :after-read="afterRead" multiple :max-count="1">
<!--            <img :src="aaa" > -->
          </Uploader>
        </template>
      </Field>
    </div>
    <div v-for="(item,index) in List" :key="index">
      <div class="dell">
        <div class="name">
          <div class="first">{{item.text}}</div>
          <div class="right">{{item.text}}</div>
        </div>
      </div>
      <Divider />
    </div>
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
              <Field :value='room.buliding_id' @click="showPicker.showPicker1 = true"></Field>
                <Popup v-model="showPicker.showPicker1" round position="bottom">
                  <Picker
                    show-toolbar
                    :columns="columns1"
                    @cancel="showPicker.showPicker1 = false"
                    @confirm="onConfirm_buliding"
                  />
                </Popup>
            </div>
          </div>
          <Divider />
        </div>
         <div class="dell">
          <div class></div>
          <div class="na">
            <div class="second">楼层</div>
            <div class="right">
              <Field :value='room.floor' @click="showPicker.showPicker2 = true"></Field>
                <Popup v-model="showPicker.showPicker2" round position="bottom">
                  <Picker
                    show-toolbar
                    :columns="columns2"
                    @cancel="showPicker.showPicker2 = false"
                    @confirm="onConfirm_floor"
                  />
                </Popup>
            </div>
          </div>
          <Divider />
        </div>
          <div class="dell">
          <div class></div>
          <div class="na">
            <div class="second">房间</div>
            <div class="right">
              <Field :value='room.room' @click="showPicker.showPicker3 = true"></Field>
                <Popup v-model="showPicker.showPicker3" round position="bottom">
                  <Picker
                    show-toolbar
                    :columns="columns3"
                    @cancel="showPicker.showPicker3 = false"
                    @confirm="onConfirm_room"
                  />
                </Popup>
            </div>
          </div>
          <Divider />
        </div>
          <div class="dell">
          <div class></div>
          <div class="na">
            <div class="second">房间规格</div>
            <div class="right">
              <Field :value='room.specifications' @click="showPicker.showPicker4 = true"></Field>
                <Popup v-model="showPicker.showPicker4" round position="bottom">
                  <Picker
                    show-toolbar
                    :columns="columns4"
                    @cancel="showPicker.showPicker4 = false"
                    @confirm="onConfirm_specifications"
                  />
                </Popup>
            </div>
          </div>
          <Divider />
        </div>
            <div class="dell">
          <div class></div>
          <div class="na">
            <div class="second">有无独卫</div>
            <div class="right">
              <Field :value='room.washroom' @click="showPicker.showPicker5 = true"></Field>
                <Popup v-model="showPicker.showPicker5" round position="bottom">
                  <Picker
                    show-toolbar
                    :columns="columns5"
                    @cancel="showPicker.showPicker5 = false"
                    @confirm="onConfirm_washroom"
                  />
                </Popup>
            </div>
          </div>
          <Divider />
        </div>
                <div class="dell">
          <div class></div>
          <div class="na">
            <div class="second">有无阳台</div>
            <div class="right">
              <Field :value='room.balcony' @click="showPicker.showPicker6 = true"></Field>
                <Popup v-model="showPicker.showPicker6" round position="bottom">
                  <Picker
                    show-toolbar
                    :columns="columns6"
                    @cancel="showPicker.showPicker6 = false"
                    @confirm="onConfirm_balcony"
                  />
                </Popup>
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
              <Field :value='room.moniter_id'></Field>
            </div>
          </div>
          <Divider />
        </div>
        <div class="dell" >
          <div class></div>
          <div class="na">
            <div class="second">姓名</div>
            <div class="right">
              <Field :value='room.moniter' ></Field>
            </div>
          </div>
          <Divider />
        </div>
          <div class="dell" >
          <div class></div>
          <div class="na">
            <div class="second">院系</div>
            <div class="right">
              <Field :value='room.sch_id' ></Field>
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
 <Button type="primary" size="large" @click="newmsg">保存</Button>
    </div>
      </div>
    </div>
  </div>
</template>
<script>
import navigation from '../../component/navigation'
import { Uploader, Divider, Field, Button, Picker, Toast, Popup, Dialog } from 'vant'

export default {
  data () {
    var user = JSON.parse(localStorage.getItem('user'))
    console.log(user)
    return {
      date: '',
      // showPicker: false,
      // showPicker2: false,
      showPicker: {
        showPicker1: false,
        showPicker2: false,
        showPicker3: false,
        showPicker4: false,
        showPicker5: false,
        showPicker6: false
      },
      isactive: false,
      value: '',
      room: {},
      columns1: ['1号楼', '2号楼', '3号楼', '4号楼', '5号楼', '6号楼', '7号楼', '8号楼', '9号楼', '10号楼', '11号楼', '12号楼', '13号楼', '14号楼'],
      columns2: [1, 2, 3, 4, 5, 6],
      columns3: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
      columns4: ['六人间', '八人间'],
      columns5: ['有', '无'],
      columns6: ['有', '无'],
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
      ],
      images: [{ url: '' }]
      // aaa: '',
      // aaa2: ''
      // imgSrc: require('../../serve/static/images/u=3350677925,1908554&fm=26&gp=0.jpg')
    }
  },
  components: {
    navigation,
    Uploader,
    // DatetimePicker,
    Divider,
    Field,
    Button,
    // Overlay,
    Picker,
    Popup,
    [Dialog.Component.name]: Dialog.Component
  },
  methods: {
    afterRead (file) {
      // 此时可以自行将文件上传至服务器
      console.log(file)
      var that = this
      this.tools.axios.post('' + this.tools.requrl + '/image', {
        image: file,
        username: localStorage.getItem('username')
      })
        .then(function (res) {
          console.log(res)
          that.images[0].url = res.data
        })
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
    },
    onConfirm_buliding (value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`)
      this.room.buliding_id = `${value}`
      this.showPicker.showPicker1 = false
    },
    onConfirm_floor (value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`)
      this.room.floor = `${value}`
      this.showPicker.showPicker2 = false
    },
    onConfirm_room (value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`)
      this.room.room = parseInt(this.room.buliding_id) + '' + this.room.floor + '' + `${value}`
      this.showPicker.showPicker3 = false
    },
    onConfirm_specifications (value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`)
      this.room.specifications = `${value}`
      this.showPicker.showPicker4 = false
    },
    onConfirm_washroom (value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`)
      this.room.washroom = `${value}`
      this.showPicker.showPicker5 = false
    },
    onConfirm_balcony (value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`)
      this.room.balcony = `${value}`
      this.showPicker.showPicker6 = false
    },
    onCancel () {
      Toast('取消')
    },
    newmsg () {
      var that = this
      this.tools.axios({
        url: '' + this.tools.requrl + '/resetdomitory?status=' + status + '',
        method: 'get',
        params: that.room
      })
        .then(
          function (res) {
            console.log(res)
            Dialog.confirm({
              title: '提示',
              message: '您已成功修改宿舍信息'
            })
              .then(() => {
                that.$router.push('/my')
              })
              .catch(() => {
                // on cancel
              })
          },
          function (err) {
            console.log(err)
          }
        )
    }
  },
  created: function () {
    var that = this
    var username = localStorage.getItem('username')
    this.tools
      .axios({
        url: '' + this.tools.requrl + '/domitoryshow?username=' + username + '',
        method: 'get'
      })
      .then(
        function (res) {
          that.room = res.data
          that.value = res.data.building_id
          that.images[0].url = res.data.image
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
.portrait {
  text-align: center;
  font-size: 16px;
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
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 80%;
    height: 50%;
    background-color: #fff;
    box-shadow: none;
  }
</style>

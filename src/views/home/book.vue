<template>
    <div class="main">
      <navigation left="back" title="2048小游戏"></navigation>
        <div class="top">
            <div class="top_left">
              <span class="game_name">2048</span>
              <br />
              <span class="more">合并相同的方块，得到2048的方块！</span>
            </div>
            <div class="top_right">
              <div class="score">
                分数:{{conunta}}
              </div>
            </div>
        </div>
        <div class="jiu">
            <div class="grid-cell" id="grid-cell-0-0">
                <div class="cell" v-if="a00">{{a00}}</div>
            </div>
            <div class="grid-cell" id="grid-cell-0-1">
                <div class="cell" v-if="a01">{{a01}}</div>
            </div>
            <div class="grid-cell" id="grid-cell-0-2">
                <div class="cell" v-if="a02">{{a02}}</div>
            </div>
            <div class="grid-cell" id="grid-cell-0-3">
                <div class="cell" v-if="a03">{{a03}}</div>
            </div>

            <div class="grid-cell" id="grid-cell-1-0">
                <div class="cell" v-if="a10">{{a10}}</div>
            </div>
            <div class="grid-cell" id="grid-cell-1-1">
                <div class="cell" v-if="a11">{{a11}}</div>
            </div>
            <div class="grid-cell" id="grid-cell-1-2">
                <div class="cell" v-if="a12">{{a12}}</div>
            </div>
            <div class="grid-cell" id="grid-cell-1-3">
                <div class="cell" v-if="a13">{{a13}}</div>
            </div>

            <div class="grid-cell" id="grid-cell-2-0">
                <div class="cell" v-if="a20">{{a20}}</div>
            </div>
            <div class="grid-cell" id="grid-cell-2-1">
                <div class="cell" v-if="a21">{{a21}}</div>
            </div>
            <div class="grid-cell" id="grid-cell-2-2">
                <div class="cell" v-if="a22">{{a22}}</div>
            </div>
            <div class="grid-cell" id="grid-cell-2-3">
                <div class="cell" v-if="a23">{{a23}}</div>
            </div>

            <div class="grid-cell" id="grid-cell-3-0">
                <div class="cell" v-if="a30">{{a30}}</div>
            </div>
            <div class="grid-cell" id="grid-cell-3-1">
                <div class="cell" v-if="a31">{{a31}}</div>
            </div>
            <div class="grid-cell" id="grid-cell-3-2">
                <div class="cell" v-if="a32">{{a32}}</div>
            </div>
            <div class="grid-cell" id="grid-cell-3-3">
                <div class="cell" v-if="a33">{{a33}}</div>
            </div>
        </div>
        <div class="bottom">
          <Button class="re" type="primary" @click="refresh()">重玩</Button>
        </div>
    </div>
</template>

<script>
import { Button } from 'vant'
import navigation from '../../component/navigation'
export default {
  name: 'Game',
  data () {
    return {
      arryList: [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048],
      timeInterval: true,
      a00: '',
      a01: '',
      a02: '',
      a03: '',
      a10: '',
      a11: '',
      a12: '',
      a13: '',
      a20: '',
      a21: '',
      a22: '',
      a23: '',
      a30: '',
      a31: '',
      a32: '',
      a33: ''
    }
  },
  components: {
    Button: Button,
    navigation
  },
  computed: {
    conunta: function () {
      var aa = (this.a00 === '' ? 0 : parseInt(this.a00)) + (this.a01 === '' ? 0 : parseInt(this.a01)) + (this.a02 === '' ? 0 : parseInt(this.a02)) + (this.a03 === '' ? 0 : parseInt(this.a03)) +
             (this.a10 === '' ? 0 : parseInt(this.a10)) + (this.a11 === '' ? 0 : parseInt(this.a11)) + (this.a12 === '' ? 0 : parseInt(this.a12)) + (this.a13 === '' ? 0 : parseInt(this.a13)) +
             (this.a20 === '' ? 0 : parseInt(this.a20)) + (this.a21 === '' ? 0 : parseInt(this.a21)) + (this.a22 === '' ? 0 : parseInt(this.a22)) + (this.a23 === '' ? 0 : parseInt(this.a23)) +
             (this.a30 === '' ? 0 : parseInt(this.a30)) + (this.a31 === '' ? 0 : parseInt(this.a31)) + (this.a32 === '' ? 0 : parseInt(this.a32)) + (this.a33 === '' ? 0 : parseInt(this.a33))
      return aa
    }
  },
  methods: {
    generate () {
      var c3 = (Math.random() * 3).toFixed(0)
      var c4 = (Math.random() * 3).toFixed(0)
      var random = Math.random().toFixed(1)
      if (this['a' + c3 + c4]) {
        this.generate()
      } else {
        this['a' + c3 + c4] = this.arryList[random > 0.6 ? 1 : 0]
      }
    },
    isEnd () {
      var b = false
      for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
          if (this['a' + i + j] === '') {
            b = true
          }
        }
      }
      return b
    },
    refresh () {
      for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
          this['a' + i + j] = ''
        }
      }
      var c1 = (Math.random() * 3).toFixed(0)
      var c2 = (Math.random() * 3).toFixed(0)
      var random = Math.random().toFixed(1)
      this['a' + c1 + c2] = this.arryList[random > 0.6 ? 1 : 0]
      this.generate()
    },
    time () {
      this.timeInterval = false
      var logintimeOut = setInterval(() => {
        this.timeInterval = true
        clearInterval(logintimeOut)
      }, 1000 * 0.2)
    },
    reghtUp () {
      var b = false // eslint-disable-line no-unused-vars
      if (this.isEnd()) {
        for (var i = 0; i < 4; i++) {
          for (var j = 2; j > -1; j--) {
            for (var k = 3; k > j; k--) {
              if (this['a' + i + j]) {
                if (this['a' + i + k] === '' && this.noBlockHorizontal(i, j, k)) {
                  this.time()
                  b = true
                  this['a' + i + k] = this['a' + i + j]
                  this['a' + i + j] = ''
                } else if (this['a' + i + k] === this['a' + i + j] && this.noBlockHorizontal(i, j, k)) {
                  this.time()
                  b = true
                  var a = parseInt(this['a' + i + k]) + parseInt(this['a' + i + j])
                  this['a' + i + k] = a
                  this['a' + i + j] = ''
                }
              }
            }
          }
        }
      } else {
        this.$Message.warning('游戏结束您的分数是：' + this.conunta)
      }
    },
    bottomUp () {
      var b = false
      if (this.isEnd()) {
        for (var i = 0; i < 4; i++) {
          for (var j = 2; j > -1; j--) {
            for (var k = 3; k > j; k--) {
              if (this['a' + j + i]) {
                if (this['a' + k + i] === '' && this.toBlockHorizontal(i, j, k)) {
                  this.time()
                  b = true
                  this['a' + k + i] = this['a' + j + i]
                  this['a' + j + i] = ''
                } else if (this['a' + k + i] === this['a' + j + i] && this.toBlockHorizontal(i, j, k)) {
                  this.time()
                  b = true
                  var a = parseInt(this['a' + k + i]) + parseInt(this['a' + j + i])
                  this['a' + k + i] = a
                  this['a' + j + i] = ''
                }
              }
            }
          }
        }
      } else {
        this.$Message.warning('游戏结束您的分数是：' + this.conunta)
      }
      return b
    },
    topUp () {
      var b = false
      if (this.isEnd()) {
        for (var i = 0; i < 4; i++) {
          for (var j = 1; j < 4; j++) {
            for (var k = 0; k < j; k++) {
              if (this['a' + j + i]) {
                if (this['a' + k + i] === '' && this.toBlockHorizontal(i, k, j)) {
                  this.time()
                  b = true
                  this['a' + k + i] = this['a' + j + i]
                  this['a' + j + i] = ''
                } else if (this['a' + k + i] === this['a' + j + i] && this.toBlockHorizontal(i, k, j)) {
                  this.time()
                  b = true
                  var a = parseInt(this['a' + k + i]) + parseInt(this['a' + j + i])
                  this['a' + k + i] = a
                  this['a' + j + i] = ''
                }
              }
            }
          }
        }
      } else {
        this.$Message.warning('游戏结束您的分数是：' + this.conunta)
      }
      return b
    },
    leftUp () {
      var b = false
      if (this.isEnd()) {
        for (var i = 0; i < 4; i++) {
          for (var j = 1; j < 4; j++) {
            for (var k = 0; k < j; k++) {
              if (this['a' + i + j]) {
                if (this['a' + i + k] === '' && this.noBlockHorizontal(i, k, j)) {
                  this.time()
                  b = true
                  this['a' + i + k] = this['a' + i + j]
                  this['a' + i + j] = ''
                } else if (this['a' + i + k] === this['a' + i + j] && this.noBlockHorizontal(i, k, j)) {
                  this.time()
                  b = true
                  var a = parseInt(this['a' + i + k]) + parseInt(this['a' + i + j])
                  this['a' + i + k] = a
                  this['a' + i + j] = ''
                }
              }
            }
          }
        }
      } else {
        this.$Message.warning('游戏结束您的分数是：' + this.conunta)
      }
      return b
    },
    monitor (_this) {
      window.onkeydown = function (e) {
        if (_this.timeInterval) {
          switch (e.keyCode) {
            case 37:
              if (_this.leftUp()) {
                _this.generate()
              }
              break
            case 38:
              if (_this.topUp()) {
                _this.generate()
              }
              break
            case 39:
              if (_this.reghtUp()) {
                _this.generate()
              }
              break
            case 40:
              if (_this.bottomUp()) {
                _this.generate()
              }
              break
          }
        }
      }
    },
    noBlockHorizontal (row, col1, col2) {
      for (var i = col1 + 1; i < col2; i++) {
        if (this['a' + row + i]) {
          return false
        }
      }
      return true
    },
    toBlockHorizontal (row, col1, col2) {
      for (var i = col1 + 1; i < col2; i++) {
        if (this['a' + i + row]) {
          return false
        }
      }
      return true
    }
  },
  mounted () {
    var c1 = (Math.random() * 3).toFixed(0)
    var c2 = (Math.random() * 3).toFixed(0)
    var random = Math.random().toFixed(1)
    this['a' + c1 + c2] = this.arryList[random > 0.6 ? 1 : 0]
    this.generate()
    this.monitor(this)
  }
}
</script>

<style scoped>
   .main {
     height: 100%;
     width: 100%;
     background: white;
     margin-top: 80px;
   }
   .top {
     display: flex;
     text-align: center;
     margin: 10px;
     height: 100px;
   }
   .top_left{
     position: relative;
     text-align: left;
     flex: 3.5;
   }
   .game_name{
     font-size: 45px;
     font-weight: 600;
     color: rgb(119,110,101);
   }
   .more{
     position: absolute;
     font-size: 17px;
     color: rgb(119,110,101);
     top: 65px;
   }
   .top_right{
     height: 100%;
     background-color: rgb(143,122,102);
     flex: 1;
     border-radius: 8px;
   }
   .score{
     color: white;
     font-size: 20px;
     margin-top: 36px;
   }
   .re{
     width: 5rem;
     font-size: 20px;
   }
   .con{
     margin-top: 0px;
   }
   .jiu {
     background: #ecdede;
     width: 22.5rem;
     height: 23rem;
     margin: auto;
     justify-content: center;
     /* top: 100px; */

     padding: 10px,10px;
   }
   .grid-cell {
     width: 70px;
     height: 70px;
     margin: 10px;
     background: #c3bcae;
     float: left;
     border-radius: 15%;
   }
   .cell {
     line-height: 70px;
     background: coral;
     border-radius: 15%;
     font-size: 50px;
     color: white;
     font-weight: bold;
     text-align: center;
   }
   .bottom {
     background-color: white;
     text-align: center;
     margin-top: 20px;
   }
</style>

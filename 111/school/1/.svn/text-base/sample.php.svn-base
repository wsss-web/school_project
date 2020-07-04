<?php
require_once "jssdk.php";
$jssdk = new JSSDK("wxf229578fe3307129", "747d6de3d3cc28675b977385e3e7a28c");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title></title>
</head>
<body>
    <button class="start_btn">开始录音</button>
    <button class="stop_btn">停止录音</button>
    <button class="play_btn">播放录音</button>
</body>
<script src="https://res.wx.qq.com/open/js/jweixin-1.6.0.js"></script>
<script>

  var sb = ""
 
  // 开始录音按钮
  document.querySelector(".start_btn").onclick = function () {
    wx.startRecord();
  }
  // 停止录音按钮
  document.querySelector(".stop_btn").onclick = function () {
    wx.stopRecord({
      success: function (res) {
        sb = res.localId;
      }
    });
  }
  // 播放录音按钮
  document.querySelector(".play_btn").onclick = function () {
    wx.playVoice({
      localId: sb 
    });
  }
  wx.config({
    debug: true,
    appId: '<?php echo $signPackage["appId"];?>',
    timestamp: <?php echo $signPackage["timestamp"];?>,
    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
    signature: '<?php echo $signPackage["signature"];?>',
    jsApiList: [
      'startRecord',
      'stopRecord',
      'playVoice'
    ]
  });
  wx.ready(function () {
    // 在这里调用 API
  });
</script>
</html>

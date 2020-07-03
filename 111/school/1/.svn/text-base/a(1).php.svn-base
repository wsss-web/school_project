<?php

$my_code = $_GET["code"];

$appid = "wxf229578fe3307129";
$secret = "747d6de3d3cc28675b977385e3e7a28c";


// code  --->  access_toke 和 appid

$access_token_url = "https://api.weixin.qq.com/sns/oauth2/access_token?appid=". $appid ."&secret=". $secret ."&code=". $my_code ."&grant_type=authorization_code";


$url = $access_token_url;
$curl = curl_init();
//设置抓取的url
curl_setopt($curl, CURLOPT_URL, $url);
//设置头文件的信息作为数据流输出
curl_setopt($curl, CURLOPT_HEADER, 0);
// 超时设置,以秒为单位
curl_setopt($curl, CURLOPT_TIMEOUT, 1);
//设置获取的信息以文件流的形式返回，而不是直接输出。
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
//执行命令
$data = curl_exec($curl);
$data = json_decode($data);


$actk = $data->access_token;
$openid = $data->openid;


$user_info_url = "https://api.weixin.qq.com/sns/userinfo?access_token=". $actk ."&openid=". $openid ."&lang=zh_CN";
$url = $user_info_url;
$curl = curl_init();
//设置抓取的url
curl_setopt($curl, CURLOPT_URL, $url);
//设置头文件的信息作为数据流输出
curl_setopt($curl, CURLOPT_HEADER, 0);
// 超时设置,以秒为单位
curl_setopt($curl, CURLOPT_TIMEOUT, 1);
//设置获取的信息以文件流的形式返回，而不是直接输出。
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
//执行命令
$yh_userinfo = curl_exec($curl);

$yh_userinfo = json_decode($yh_userinfo);
var_dump($yh_userinfo);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<!--    我是个界面 <?php echo $aaa; ?> -->
    <h1>姓名： <?php echo $yh_userinfo->nickname;?></h1>
    <h1>性别： <?php echo $yh_userinfo->sex;?></h1>
    <img src="<?php echo $yh_userinfo->headimgurl; ?>" alt="">

</body>

<script>

    alert(`<?php echo $yh_userinfo->headimgurl ?>`);

</script>
</html>

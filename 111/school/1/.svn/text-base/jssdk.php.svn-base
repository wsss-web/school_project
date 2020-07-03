<?php
class JSSDK {
  private $appId;
  private $appSecret;

  public function __construct($appId, $appSecret) {
    $this->appId = $appId;
    $this->appSecret = $appSecret;
  }

  // 因为新浪云不允许我们读取文件
  // 所以 我们自己通过 浏览器 
  // 暂时获取一下 access_token 和 js_api_ticket

  // access_token: 
  // https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=你的appid&secret=你的密码

  // 票据 js_api_ticket：
  // https://api.weixin.qq.com/cgi-bin/ticket/getticket?type=jsapi&access_token=你上一步拿到的access_token

  public function getSignPackage() {
    
    // 注意 URL 一定要动态获取，不能 hardcode.
    $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
    $url = "$protocol$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
    $jsapiTicket = "HoagFKDcsGMVCIY2vOjf9pbm2KCQceACJsiIdepgSwCZmAxHqa8qe3IBcIt4RIJiNC7j_HMiXqKEvEpAYhHkIg";
    $timestamp = time();
    $nonceStr = "ffddssccvvb55tgA";

    // 这里参数的顺序要按照 key 值 ASCII 码升序排序
    $string = "jsapi_ticket=$jsapiTicket&noncestr=$nonceStr&timestamp=$timestamp&url=$url";

    $signature = sha1($string);

    $signPackage = array(
      "appId"     => $this->appId,
      "nonceStr"  => $nonceStr,
      "timestamp" => $timestamp,
      "url"       => $url,
      "signature" => $signature,
      "rawString" => $string
    );
    return $signPackage; 
  }
}


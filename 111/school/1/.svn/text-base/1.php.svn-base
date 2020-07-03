<?php
header('Content-type:text');

define("TOKEN", "weixin");
$wechatObj = new wechatCallbackapiTest;




if (isset($_GET['echostr'])) {
    $wechatObj->valid();
    
}else{
    $wechatObj->responseMsg();
}

class wechatCallbackapiTest
{
    //验证签名
    public function valid()
    {
        $echoStr = $_GET["echostr"];
        $signature = $_GET["signature"];
        $timestamp = $_GET["timestamp"];
        $nonce = $_GET["nonce"];
        $token = TOKEN;
        $tmpArr = array($token, $timestamp, $nonce);
        sort($tmpArr, SORT_STRING);
        $tmpStr = implode($tmpArr);
        $tmpStr = sha1($tmpStr);
        if($tmpStr == $signature){
            echo $echoStr;
            exit;
        }
    }

    //响应消息
    public function responseMsg()
    {
        $postStr = $GLOBALS["HTTP_RAW_POST_DATA"];
        if (!empty($postStr)){
            $postObj = simplexml_load_string($postStr);

            $my_content = "";
            $yhn = $postObj->Content;
            if ($postObj->MsgType == "event"){
                $my_content = "您好， 欢迎关注我的新号";
            } else if ($postObj->MsgType == "text") {
                
                if ($yhn == "111") {
                    $my_content = "三角形";
                } else if ($yhn == "222"){
                    $my_content = "正方形";
                }
            }

            if ($yhn == "333") {
                // 回复音乐
                $music_url = "http://tyst.migu.cn/public/product8th/product40/2020/05/2600/2020%E5%B9%B405%E6%9C%8825%E6%97%A518%E7%82%B902%E5%88%86%E7%B4%A7%E6%80%A5%E5%86%85%E5%AE%B9%E5%87%86%E5%85%A5%E5%8D%8E%E7%BA%B36%E9%A6%96289273/%E6%AD%8C%E6%9B%B2%E4%B8%8B%E8%BD%BD/MP3_40_16_Stero/6005752DXKE004545.mp3?key=b1c2b5dbd4f64fba&Tim=1593420406856&channelid=00&msisdn=1ff2802965144fe4a19963040cdafbc8&CI=6005752DXKE2600913000009337537&F=000009";
                $xml_str = "<xml>
                    <ToUserName><![CDATA[%s]]></ToUserName>
                    <FromUserName><![CDATA[%s]]></FromUserName>
                    <CreateTime>%s</CreateTime>
                    <MsgType><![CDATA[music]]></MsgType>
                    <Music>
                    <Title><![CDATA[海阔天空]]></Title>
                    <Description><![CDATA[this is a music]]></Description>
                    <MusicUrl><![CDATA[%s]]></MusicUrl>
                    <HQMusicUrl><![CDATA[%s]]></HQMusicUrl>
                    </Music>
                </xml>";

                $xml_str_2 = sprintf($xml_str , $postObj->FromUserName , $postObj->ToUserName , time() , $music_url , $music_url);
                echo $xml_str_2;
            } else {
                $xml_str = "<xml>
                    <ToUserName><![CDATA[%s]]></ToUserName>
                    <FromUserName><![CDATA[%s]]></FromUserName>
                    <CreateTime>%s</CreateTime>
                    <MsgType><![CDATA[text]]></MsgType>
                    <Content><![CDATA[%s]]></Content>
                </xml>";

                $xml_str_2 = sprintf($xml_str , $postObj->FromUserName , $postObj->ToUserName , time() , $my_content);
                echo $xml_str_2;
            }





            // $yhn = $postObj->Content;
            // if($yhn == "111") {
            //     $result = $this->sendText($postObj , "三角形");
            // } else {
            //     $result = $this->sendText($postObj , "正方形");
            // }
            // $nr_arr = explode(':', $yhn);
            // if ($nr_arr[0] == "歌曲") {
            //     $song_name = $nr_arr[1];
            //     $result = $this->get_music($postObj , $song_name);
            // } else {
            //     $result = $this->sendText($postObj , "请按 歌曲:歌曲名 格式输入");
            // }
            

            //  echo $result;
        }else {
            echo "";
            exit;
        }
    }

    private function get_music($postObj , $song_name) {
        // 准备参数
        $my_params1 = $song_name;
        // 准备请求地址
        $my_url1 = "http://mobilecdn.kugou.com/api/v3/search/song?format=json&keyword=".$my_params."&page=1&pagesize=20&showtype=1";
        $result1 = $this->my_get($my_url1);

        // 获取 音乐 hash值
        $hash = $result1["data"]["info"][0]["hash"];
        
        // 放到第二个详情地址中进行请求
        // 准备参数
       
        // 准备请求地址
        $my_url2 = "http://m.kugou.com/app/i/getSongInfo.php?cmd=playInfo&hash=".$hash;
        $result2 = $this->my_get($my_url2);

        $gm = $result2["songName"];
        $ms = $result2["singerName"];
        $dz = $result2["url"];

        $result = $this->sendMp3($postObj,$gm , $ms , $dz);
        return $result;
    }

    private function sendText($postObj, $content){
        $xmlTpl = "<xml>
            <ToUserName><![CDATA[%s]]></ToUserName>
            <FromUserName><![CDATA[%s]]></FromUserName>
            <CreateTime>%s</CreateTime>
            <MsgType><![CDATA[text]]></MsgType>
            <Content><![CDATA[%s]]></Content>
        </xml>";
        $result = sprintf($xmlTpl, $postObj->FromUserName, $postObj->ToUserName, time(), $content);
        return $result;
    }


    private function sendImg($postObj){
        $xmlTpl = "<xml>
        <ToUserName><![CDATA[%s]]></ToUserName>
        <FromUserName><![CDATA[%s]]></FromUserName>
        <CreateTime>%s</CreateTime>
        <MsgType><![CDATA[image]]></MsgType>
        <Image>
          <MediaId><![CDATA[media_id]]></MediaId>
        </Image>
      </xml>";
        $result = sprintf($xmlTpl, $postObj->FromUserName, $postObj->ToUserName, time(), $content);
        return $result;
    }

    private function sendMp3($postObj,$gm , $ms , $dz){
        $xmlTpl = "<xml>
            <ToUserName><![CDATA[%s]]></ToUserName>
            <FromUserName><![CDATA[%s]]></FromUserName>
            <CreateTime>%s</CreateTime>
            <MsgType><![CDATA[text]]></MsgType>
            <Content><![CDATA[%s]]></Content>
        </xml>";
        $result = sprintf($xmlTpl, $postObj->FromUserName, $postObj->ToUserName, time(),$gm , $ms , $dz , $dz);
        return $result;
    }

    private function my_get($my_url){
        // 创建请求对象
        $curl = curl_init();
        // 绑定url
        curl_setopt($curl, CURLOPT_URL, $my_url);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        // 发送请求 执行请求
        $data = curl_exec($curl);
        // 关闭请求
        curl_close($curl);   
        //显示获得的数据
        $json_data = json_decode($data , true);
        return $json_data;
    }

}
?>

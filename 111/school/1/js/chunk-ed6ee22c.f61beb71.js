(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ed6ee22c"],{"555a":function(t,i,n){"use strict";n.r(i);var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",[n("NavBar",{attrs:{title:"标题","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft}}),n("div",{staticClass:"sousuo"},[n("Search",{attrs:{"show-action":"",label:"全部",placeholder:"请输入搜索关键词",background:"#0fb2fd"},on:{search:t.onSearch},scopedSlots:t._u([{key:"action",fn:function(){return[n("div",{on:{click:t.onSearch}},[t._v("搜索")])]},proxy:!0}]),model:{value:t.value,callback:function(i){t.value=i},expression:"value"}}),n("center",{staticClass:"sc"},[n("a",{attrs:{href:"http//www.baidu.com"}},[t._v("我收藏的信息")])])],1),n("div",{staticClass:"zhongbu"}),n("div",{staticClass:"bq"},[n("div",{staticClass:"biaoqian"},[n("Tag",{attrs:{color:"#f2826a"}},[t._v("热门标签:")]),t._v("职业生涯规划")],1),n("Tag",{attrs:{color:"rgb(164, 238, 168)"}},[t._v("我的关注：")]),t._v("暂无关注的标签 ")],1),t._m(0),n("Grid",{attrs:{"column-num":"3"}},[n("GridItem",[n("div",{on:{click:t.yx}},[n("span",{staticClass:"iconfont my_iconzhoushitubiao-"})]),n("div",[t._v("迎新")])]),n("GridItem",[n("div",[n("span",{staticClass:"iconfont my_iconxuexiaojieshao",on:{click:t.xxjs}})]),n("div",[t._v("学校介绍")])]),n("GridItem",[n("div",{on:{click:t.rcsh}},[n("span",{staticClass:"iconfont my_iconcha1"})]),n("div",[t._v("日常生活")])]),n("GridItem",[n("div",[n("span",{staticClass:"iconfont my_iconxuexi",on:{click:t.xxx}})]),n("div",[t._v("学习")])]),n("GridItem",[n("div",{on:{click:t.kwhd}},[n("span",{staticClass:"iconfont my_iconkewaihuodong-"})]),n("div",[t._v("课外活动")])]),n("GridItem",[n("div",[n("span",{staticClass:"iconfont my_iconjiuye",on:{click:t.jy}})]),n("div",[t._v("就业")])]),n("GridItem",[n("div",{on:{click:t.cy}},[n("span",{staticClass:"iconfont my_iconicon-test"})]),n("div",[t._v("创业")])]),n("GridItem",[n("div",[n("span",{staticClass:"iconfont my_iconxinlishenghuo",on:{click:t.xljy}})]),n("div",[t._v("心灵寄语")])]),n("GridItem",[n("div",[n("span",{staticClass:"iconfont my_iconzhuye_chengchangdangan",on:{click:t.czda}})]),n("div",[t._v("成长档案")])])],1)],1)},a=[function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"zhuanti"},[n("span",{staticClass:"zt"},[t._v("专题")])])}],s=(n("5407"),n("a977")),o=(n("8472"),n("9c34")),c=(n("e0d3"),n("621e")),r=(n("0b60"),n("ece6")),l=(n("5ad7"),n("94eb")),h={components:{NavBar:l["a"],Search:r["a"],Tag:c["a"],Grid:o["a"],GridItem:s["a"]},methods:{onClickLeft:function(){this.$router.push({path:"/index"})},onSearch:function(){},yx:function(){this.$router.push({path:"/index"})},xxjs:function(){this.$router.push({path:"/index"})},rcsh:function(){this.$router.push({path:"/index"})},xxx:function(){this.$router.push({path:"/index"})},kwhd:function(){this.$router.push({path:"/index"})},jy:function(){this.$router.push({path:"/index"})},cy:function(){this.$router.push({path:"/index"})},xljy:function(){this.$router.push({path:"/index"})},czda:function(){this.$router.push({path:"/index"})}},data:function(){return{value:""}}},d=h,u=(n("6672"),n("4023")),f=Object(u["a"])(d,e,a,!1,null,"9dc271f4",null);i["default"]=f.exports},"5ad7":function(t,i,n){"use strict";n("63ca"),n("e0cd"),n("ed45"),n("9b89")},"621e":function(t,i,n){"use strict";var e=n("23c4"),a=n.n(e),s=n("7e94"),o=n("8c37"),c=n("18b8"),r=n("548a"),l=Object(s["a"])("tag"),h=l[0],d=l[1];function u(t,i,n,e){var s,l,h=i.type,u=i.mark,f=i.plain,v=i.color,p=i.round,x=i.size,g=f?"color":"backgroundColor",m=(s={},s[g]=v,s);i.textColor&&(m.color=i.textColor);var b={mark:u,plain:f,round:p};x&&(b[x]=x);var k=i.closeable&&t(r["a"],{attrs:{name:"cross"},class:d("close"),on:{click:function(t){t.stopPropagation(),Object(o["a"])(e,"close")}}});return t("transition",{attrs:{name:i.closeable?"van-fade":null}},[t("span",a()([{key:"content",style:m,class:[d([b,h]),(l={},l[c["d"]]=f,l)]},Object(o["b"])(e,!0)]),[null==n.default?void 0:n.default(),k])])}u.props={size:String,mark:Boolean,color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean,type:{type:String,default:"default"}},i["a"]=h(u)},6672:function(t,i,n){"use strict";var e=n("d222"),a=n.n(e);a.a},"94eb":function(t,i,n){"use strict";var e=n("7e94"),a=n("18b8"),s=n("548a"),o=Object(e["a"])("nav-bar"),c=o[0],r=o[1];i["a"]=c({props:{title:String,fixed:Boolean,zIndex:[Number,String],leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,border:{type:Boolean,default:!0}},data:function(){return{height:null}},mounted:function(){this.placeholder&&this.fixed&&(this.height=this.$refs.navBar.getBoundingClientRect().height)},methods:{genLeft:function(){var t=this.$createElement,i=this.slots("left");return i||[this.leftArrow&&t(s["a"],{class:r("arrow"),attrs:{name:"arrow-left"}}),this.leftText&&t("span",{class:r("text")},[this.leftText])]},genRight:function(){var t=this.$createElement,i=this.slots("right");return i||(this.rightText?t("span",{class:r("text")},[this.rightText]):void 0)},genNavBar:function(){var t,i=this.$createElement;return i("div",{ref:"navBar",style:{zIndex:this.zIndex},class:[r({fixed:this.fixed}),(t={},t[a["b"]]=this.border,t)]},[i("div",{class:r("left"),on:{click:this.onClickLeft}},[this.genLeft()]),i("div",{class:[r("title"),"van-ellipsis"]},[this.slots("title")||this.title]),i("div",{class:r("right"),on:{click:this.onClickRight}},[this.genRight()])])},onClickLeft:function(t){this.$emit("click-left",t)},onClickRight:function(t){this.$emit("click-right",t)}},render:function(){var t=arguments[0];return this.placeholder&&this.fixed?t("div",{class:r("placeholder"),style:{height:this.height+"px"}},[this.genNavBar()]):this.genNavBar()}})},"9b89":function(t,i,n){},b874:function(t,i,n){},d222:function(t,i,n){},e0d3:function(t,i,n){"use strict";n("63ca"),n("e0cd"),n("ed45"),n("b874")}}]);
//# sourceMappingURL=chunk-ed6ee22c.f61beb71.js.map
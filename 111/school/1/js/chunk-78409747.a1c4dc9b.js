(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78409747"],{"43cf":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("NavBar",{attrs:{title:"标题","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft}}),t._v(" 这是校园指南界面 ")],1)},s=[],r=(i("5ad7"),i("94eb")),l={components:{NavBar:r["a"]},methods:{onClickLeft:function(){this.$router.push({path:"/index"})}}},a=l,h=i("4023"),c=Object(h["a"])(a,n,s,!1,null,"b06e47fe",null);e["default"]=c.exports},"5ad7":function(t,e,i){"use strict";i("63ca"),i("e0cd"),i("ed45"),i("9b89")},"94eb":function(t,e,i){"use strict";var n=i("7e94"),s=i("18b8"),r=i("548a"),l=Object(n["a"])("nav-bar"),a=l[0],h=l[1];e["a"]=a({props:{title:String,fixed:Boolean,zIndex:[Number,String],leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,border:{type:Boolean,default:!0}},data:function(){return{height:null}},mounted:function(){this.placeholder&&this.fixed&&(this.height=this.$refs.navBar.getBoundingClientRect().height)},methods:{genLeft:function(){var t=this.$createElement,e=this.slots("left");return e||[this.leftArrow&&t(r["a"],{class:h("arrow"),attrs:{name:"arrow-left"}}),this.leftText&&t("span",{class:h("text")},[this.leftText])]},genRight:function(){var t=this.$createElement,e=this.slots("right");return e||(this.rightText?t("span",{class:h("text")},[this.rightText]):void 0)},genNavBar:function(){var t,e=this.$createElement;return e("div",{ref:"navBar",style:{zIndex:this.zIndex},class:[h({fixed:this.fixed}),(t={},t[s["b"]]=this.border,t)]},[e("div",{class:h("left"),on:{click:this.onClickLeft}},[this.genLeft()]),e("div",{class:[h("title"),"van-ellipsis"]},[this.slots("title")||this.title]),e("div",{class:h("right"),on:{click:this.onClickRight}},[this.genRight()])])},onClickLeft:function(t){this.$emit("click-left",t)},onClickRight:function(t){this.$emit("click-right",t)}},render:function(){var t=arguments[0];return this.placeholder&&this.fixed?t("div",{class:h("placeholder"),style:{height:this.height+"px"}},[this.genNavBar()]):this.genNavBar()}})},"9b89":function(t,e,i){}}]);
//# sourceMappingURL=chunk-78409747.a1c4dc9b.js.map
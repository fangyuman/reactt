(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{103:function(e,t,n){},108:function(e,t,n){},15:function(e,t,n){e.exports=n.p+"static/media/pic.f24fadf5.png"},180:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(9),l=n.n(c),r=n(23),i=n(24),s=n(26),u=n(25),m=function(e){return o.a.createElement("ul",null,e.data.map((function(e){return o.a.createElement("li",{key:e.id},e.title)})))},d=function(e){return o.a.createElement("div",null,[1,2,3,4,5].map((function(t){return o.a.createElement("button",{key:t,onClick:function(){return e.getData(t)}},t)})))},p=(a.Component,n(12)),h=n(11),E=(n(103),n(108),n(10)),b=function(e){return o.a.createElement("h1",null,e.match.params.type)},f=(Object(h.g)((function(e){return console.log(e),o.a.createElement("div",{className:"doc"},o.a.createElement("div",{className:"content"},o.a.createElement(h.b,{path:"/doc/:type",component:b}),o.a.createElement(h.a,{from:"/doc",to:"/doc/core"})),o.a.createElement("ol",null,o.a.createElement("li",null,o.a.createElement(p.b,{to:"/doc/core"},"\u6838\u5fc3\u6982\u5ff5")),o.a.createElement("li",null,o.a.createElement(p.b,{to:"/doc/guide"},"\u9ad8\u7ea7\u6307\u5f15")),o.a.createElement("li",null,o.a.createElement(p.b,{to:"/doc/api"},"API")),o.a.createElement("li",null,o.a.createElement(p.b,{to:"/doc/hooks"},"Hooks"))))})),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={selectedTab:"blueTab"},a}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.props.location.pathname;return o.a.createElement("div",{style:{position:"fixed",width:"100%",bottom:0}},o.a.createElement(E.d,{unselectedTintColor:"#949494",tintColor:"red",barTintColor:"white"},o.a.createElement(E.d.Item,{title:"\u9996\u9875",key:"home",icon:o.a.createElement("i",{className:"iconfont icon-shouye"}),selectedIcon:o.a.createElement("i",{className:"iconfont icon-shouye"}),selected:"/"===t,onPress:function(){e.props.history.push("/")},"data-seed":"logId"}),o.a.createElement(E.d.Item,{icon:o.a.createElement("i",{className:"iconfont icon-gouwuchekong"}),selectedIcon:o.a.createElement("i",{className:"iconfont icon-gouwuchekong"}),title:"\u8d2d\u7269\u8f66",key:"cart",selected:"/cart"===t,onPress:function(){e.props.history.push("/cart")},"data-seed":"logId1"}),o.a.createElement(E.d.Item,{icon:o.a.createElement("i",{className:"iconfont icon-dingdanliebiao"}),selectedIcon:o.a.createElement("div",{style:{width:"22px",height:"22px",background:"url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat"}}),title:"\u8ba2\u5355\u5217\u8868",key:"Friend",selected:"greenTab"===this.state.selectedTab,onPress:function(){}}),o.a.createElement(E.d.Item,{icon:o.a.createElement("i",{className:"iconfont icon-wodetaobao"}),selectedIcon:{uri:"https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg"},title:"\u6211\u7684\u6dd8\u5b9d",key:"my",selected:"yellowTab"===this.state.selectedTab,onPress:function(){e.setState({selectedTab:"yellowTab"})}})))}}]),n}(o.a.Component)),g=Object(h.g)(f),y=function(e){return o.a.createElement("div",null,o.a.createElement(E.e,null,o.a.createElement("div",{className:"sub-title"})),o.a.createElement(E.c,{placeholder:"Search",onSubmit:function(e){return console.log(e,"onSubmit")},onClear:function(e){return console.log(e,"onClear")},onCancel:function(){console.log(e),e.history.goBack()},onBlur:function(){return console.log("onBlur")},showCancelButton:!0}),"\u4f60\u597d\uff0c\u8fd9\u662f\u8df3\u8f6c\u7684\u9875\u9762")},k=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={value:"\u7f8e\u98df"},e.onChange=function(t){e.setState({value:t})},e.clear=function(){e.setState({value:""})},e.handleClick=function(){e.manualFocusInst.focus()},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(E.e,null,o.a.createElement("div",{className:"sub-title"})),o.a.createElement(E.c,{placeholder:"\u5bfb\u627e\u5b9d\u8d1d",onSubmit:function(e){return console.log(e,"onSubmit")},onClear:function(e){return console.log(e,"onClear")},onFocus:function(t){console.log(t),e.props.history.push("./searchturn")},onBlur:function(){return console.log("onBlur")},onCancel:function(){return console.log("onCancel")},showCancelButton:!0,onChange:this.onChange}))}}]),n}(o.a.Component),v=Object(h.g)(k),C=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={data:["1","2","3"],imgHeight:176},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({data:["AiyWuByWklrrUDlFignR","TekJlZRVCjLFexlOCuWn","IJOtIlfsYdTyaDTRVrLI"]})}),100)}},{key:"render",value:function(){var e=this;return o.a.createElement(E.e,null,o.a.createElement(E.a,{autoplay:!0,infinite:!0,beforeChange:function(e,t){return console.log("slide from ".concat(e," to ").concat(t))},afterChange:function(e){return console.log("slide to",e)}},this.state.data.map((function(t){return o.a.createElement("a",{key:t,href:"http://www.alipay.com",style:{display:"inline-block",width:"100%",height:e.state.imgHeight}},o.a.createElement("img",{src:"https://zos.alipayobjects.com/rmsportal/".concat(t,".png"),alt:"",style:{width:"100%",verticalAlign:"top"},onLoad:function(){window.dispatchEvent(new Event("resize")),e.setState({imgHeight:"auto"})}}))}))))}}]),n}(o.a.Component),I=(n(97),Object(h.g)((function(e){return o.a.createElement("div",null,o.a.createElement("div",{className:"flex-container"},o.a.createElement("div",{className:"sub-title"}),o.a.createElement(E.b,null,o.a.createElement(E.b.Item,null,o.a.createElement("img",{onClick:function(){return e.history.push("/goods")},src:n(15)})),o.a.createElement(E.b.Item,null,o.a.createElement("img",{onClick:function(){return e.history.push("/goods")},src:n(15)}))),o.a.createElement(E.b,null,o.a.createElement(E.b.Item,null,o.a.createElement("img",{onClick:function(){return e.history.push("/goods")},src:n(15)})),o.a.createElement(E.b.Item,null,o.a.createElement("img",{onClick:function(){return e.history.push("/goods")},src:n(15)}))),o.a.createElement(E.b,null,o.a.createElement(E.b.Item,null,o.a.createElement("img",{onClick:function(){return e.history.push("/goods")},src:n(15)})),o.a.createElement(E.b.Item,null,o.a.createElement("img",{onClick:function(){return e.history.push("/goods")},src:n(15)}))),o.a.createElement(E.b,null,o.a.createElement(E.b.Item,null,o.a.createElement("img",{onClick:function(){return e.history.push("/goods")},src:n(15)})),o.a.createElement(E.b.Item,null,o.a.createElement("img",{onClick:function(){return e.history.push("/goods")},src:n(15)}))),o.a.createElement(E.b,null,o.a.createElement(E.b.Item,null,o.a.createElement("img",{onClick:function(){return e.history.push("/goods")},src:n(15)})),o.a.createElement(E.b.Item,null,o.a.createElement("img",{onClick:function(){return e.history.push("/goods")},src:n(15)}))),o.a.createElement(E.b,null,o.a.createElement(E.b.Item,null,o.a.createElement("img",{onClick:function(){return e.history.push("/goods")},src:n(15)})),o.a.createElement(E.b.Item,null,o.a.createElement("img",{onClick:function(){return e.history.push("/goods")},src:n(15)})))))}))),j=Object(h.g)((function(){return o.a.createElement("div",null,o.a.createElement(v,null),o.a.createElement(C,null),o.a.createElement(I,null),o.a.createElement(g,null))})),w=function(){return o.a.createElement("div",null,"\u8d2d\u7269\u8f66")},O=n(54),x=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={selectedTab:"blueTab"},a}return Object(i.a)(n,[{key:"render",value:function(){var e,t=this,n=this.props.location.pathname;return o.a.createElement("div",{style:{position:"fixed",width:"100%",bottom:0}},o.a.createElement(E.d,{unselectedTintColor:"#949494",tintColor:"red",barTintColor:"white"},o.a.createElement(E.d.Item,{title:"\u5e97\u94fa",key:"home",icon:o.a.createElement("i",{className:"iconfont  icon-dianpu"}),selectedIcon:o.a.createElement("i",{className:"picpicpic icon-dianpu"}),selected:"/"===n,onPress:function(){},"data-seed":"logId"}),o.a.createElement(E.d.Item,{icon:o.a.createElement("i",{className:"iconfont icon-kefu"}),selectedIcon:o.a.createElement("i",{className:"iconfont icon-kefu"}),title:"\u5ba2\u670d",key:"cart",selected:"/cart"===n,onPress:function(){t.props.history.push("/cart")},"data-seed":"logId1"}),o.a.createElement(E.d.Item,{icon:o.a.createElement("i",{className:"iconfont icon-shoucang"}),title:"\u6536\u85cf",key:"Friend",selected:"greenTab"===this.state.selectedTab}),o.a.createElement(E.d.Item,(e={title:""},Object(O.a)(e,"title",""),Object(O.a)(e,"key","home"),Object(O.a)(e,"icon",o.a.createElement("div",{style:{backgroundColor:"orange",borderTopRightRadius:"0px",borderTopLeftRadius:"20px",borderBottomLeftRadius:"20px",borderBottomRightRadius:"0px",width:"100px",height:"35px"}},o.a.createElement("span",{style:{display:"inline-block",color:"white",marginTop:"9px"}},"\u52a0\u5165\u8d2d\u7269\u8f66"))),e)),o.a.createElement(E.d.Item,{title:"",key:"home",icon:o.a.createElement("div",{style:{backgroundColor:"#FF6600",borderTopRightRadius:"20px",borderTopLeftRadius:"0px",borderBottomLeftRadius:"0px",borderBottomRightRadius:"20px",width:"100px",height:"35px"}},o.a.createElement("span",{style:{display:"inline-block",color:"white",marginTop:"9px"}},"\u7acb\u5373\u8d2d\u4e70"))})))}}]),n}(o.a.Component),T=Object(h.g)(x),N=Object(h.g)((function(e){return o.a.createElement("div",null,o.a.createElement("span",{onClick:function(){return e.history.goBack("/home")}},"<-"),o.a.createElement("div",{className:"flex-container"},o.a.createElement("div",{className:"sub-title"}),o.a.createElement(E.b,null,o.a.createElement(E.b.Item,null,o.a.createElement("img",{src:n(15)})))),o.a.createElement(T,null))})),R=function(){return o.a.createElement(p.a,null,o.a.createElement(h.d,null,o.a.createElement(h.b,{exact:!0,path:"/",component:j}),o.a.createElement(h.b,{path:"/cart",component:w}),o.a.createElement(h.b,{path:"/mytab",component:g}),o.a.createElement(h.b,{path:"/searchturn",component:y}),o.a.createElement(h.b,{path:"/goods",component:N})))};n(179);l.a.render(o.a.createElement(R,null),document.getElementById("root"))},98:function(e,t,n){e.exports=n(180)}},[[98,1,2]]]);
//# sourceMappingURL=main.979a13e5.chunk.js.map
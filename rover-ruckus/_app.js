(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{399:function(e,t,n){__NEXT_REGISTER_PAGE("/_app",function(){return e.exports=n(400),{page:e.exports.default}})},400:function(e,t,n){e.exports=n(401)},401:function(e,t,n){e.exports=n(402)},402:function(e,t,n){"use strict";var r=n(33),a=n(10);Object.defineProperty(t,"__esModule",{value:!0}),t.createUrl=C,t.Container=t.default=void 0;var u=a(n(55)),o=a(n(56)),l=a(n(403)),i=a(n(41)),p=a(n(13)),c=a(n(14)),s=a(n(29)),f=a(n(30)),d=a(n(31)),h=a(n(22)),v=r(n(1)),y=a(n(0)),m=a(n(120)),k=n(38),x=n(86),P=function(e){function t(){return(0,p.default)(this,t),(0,s.default)(this,(0,f.default)(t).apply(this,arguments))}var n;return(0,d.default)(t,e),(0,c.default)(t,[{key:"getChildContext",value:function(){return{headManager:this.props.headManager,router:(0,x.makePublicRouterInstance)(this.props.router),_containerProps:(0,i.default)({},this.props)}}},{key:"componentDidCatch",value:function(e){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,a=C(t);return v.default.createElement(g,null,v.default.createElement(n,(0,l.default)({},r,{url:a})))}}],[{key:"getInitialProps",value:(n=(0,o.default)(u.default.mark(function e(t){var n,r,a;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,t.router,r=t.ctx,e.next=3,(0,k.loadGetInitialProps)(n,r);case 3:return a=e.sent,e.abrupt("return",{pageProps:a});case 5:case"end":return e.stop()}},e,this)})),function(e){return n.apply(this,arguments)})}]),t}(v.Component);t.default=P,(0,h.default)(P,"childContextTypes",{_containerProps:y.default.any,headManager:y.default.object,router:y.default.object}),(0,h.default)(P,"displayName","App");var g=function(e){function t(){return(0,p.default)(this,t),(0,s.default)(this,(0,f.default)(t).apply(this,arguments))}return(0,d.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"shouldComponentUpdate",value:function(e){return!(0,m.default)(this.props,e)}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=this.context._containerProps.hash;if(e){var t=document.getElementById(e);t&&setTimeout(function(){return t.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),t}(v.Component);t.Container=g,(0,h.default)(g,"contextTypes",{_containerProps:y.default.any});var w=(0,k.execOnce)(function(){0});function C(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return w(),r},get pathname(){return w(),t},get asPath(){return w(),n},back:function(){w(),e.back()},push:function(t,n){return w(),e.push(t,n)},pushTo:function(t,n){w();var r=n?t:null,a=n||t;return e.push(r,a)},replace:function(t,n){return w(),e.replace(t,n)},replaceTo:function(t,n){w();var r=n?t:null,a=n||t;return e.replace(r,a)}}}},403:function(e,t,n){var r=n(60);function a(){return e.exports=a=r||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}e.exports=a}},[[399,1,0]]]);
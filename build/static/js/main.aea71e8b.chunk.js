(window.webpackJsonpconnect=window.webpackJsonpconnect||[]).push([[0],{24:function(e,t,n){e.exports=n.p+"static/media/\u30ab\u30a4\u30b8.3975da28.png"},29:function(e,t,n){e.exports=n(54)},30:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);n(30);var a=n(1),c=n.n(a),r=n(15),o=n.n(r),i=n(5),u=n(20),l=n.n(u),s=n(23),p=n(7),h=n(8),m=n(10),f=n(9),b=n(11),d=(n(40),function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(m.a)(this,Object(f.a)(t).call(this,e))).state={flg:!0},n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.title;return c.a.createElement("div",{className:"header"},c.a.createElement("h1",{className:"header_title"},e))}}]),t}(a.Component)),v=(n(41),n(24)),O=n.n(v),j=Object(i.b)(function(e){return{inputChat:e.inputChat}})(function(e){var t=e.inputChat;return c.a.createElement("div",{className:"chatPanel"},c.a.createElement("div",{className:"chatPanel_content"},t.map(function(e,t){return c.a.createElement("div",{className:"chatPanel_message",key:t},c.a.createElement("div",{className:"chatPanel_imgBox"},c.a.createElement("img",{src:O.a,className:"chatPanel_img",alt:"\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u5199\u771f"})),c.a.createElement("p",{className:"chatPanel_text"},e.text))})))}),y=(n(42),n(25)),E=n.n(y).a.initializeApp({apiKey:"AIzaSyCXT-Kv9En2cLsa08Gzjsw4Xw795d9-T4Y",authDomain:"connect-bb28b.firebaseapp.com",databaseURL:"https://connect-bb28b.firebaseio.com",projectId:"connect-bb28b",storageBucket:"",messagingSenderId:"68923430908",appId:"1:68923430908:web:a74d583c09b897ef"}).database(),g=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(c)))).handleCancel=function(e){e.preventDefault()},n.validation=function(e){if(""===e)return!1;E.ref("rooms").child("room1").child("chat").push({text:e,time:(new Date).getHours().toString()+":"+(new Date).getMinutes().toString()})},n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.chat,a=t.inputChat;return c.a.createElement("div",{className:"chatForm"},c.a.createElement("form",{className:"chatForm_panel",onSubmit:function(t){e.handleCancel(t)}},c.a.createElement("input",{type:"text",placeholder:"chat your message",className:"chatForm_text",value:n,onChange:function(e){a(e.target.value)}}),c.a.createElement("button",{type:"send",className:"chatForm_sendButton",onClick:function(){e.validation(n)}},c.a.createElement("i",{className:"fas fa-comments chatForm_icon"}))))}}]),t}(a.Component),w=Object(i.b)(function(e){return{chat:e.chat}},function(e){return{inputChat:function(t){return e(function(e){return{type:"INPUT_MESSAGE",payload:{chat:e}}}(t))}}})(g),C=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props.equalDatabase,E.ref("rooms").child("room1").child("chat").on("value",function(e){e.val()&&(t(Object.values(e.val())),console.log(Object.values(e.val())))});case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(d,{title:"CONNECT"}),c.a.createElement(j,null),c.a.createElement(w,null))}}]),t}(a.Component),N=Object(i.b)(function(e){return{state:e.state}},function(e){return{equalDatabase:function(t){return e(function(e){return{type:"EQUAL_DATABASE",payload:{inputChat:e}}}(t))}}})(C),P=n(13),_=n(27),A=n.n(_),D=n(28);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(n,!0).forEach(function(t){Object(D.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var x={chat:"",inputChat:[]},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INPUT_MESSAGE":return k({},e,{chat:t.payload.chat});case"EQUAL_DATABASE":var n=t.payload.inputChat.reverse();return k({},e,{chat:"",inputChat:n});default:return e}},T=(n(53),Object(P.c)(I,Object(P.a)(A.a)));o.a.render(c.a.createElement(i.a,{store:T},c.a.createElement(N,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.aea71e8b.chunk.js.map
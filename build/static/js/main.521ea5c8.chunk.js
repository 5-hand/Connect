(window.webpackJsonpconnect=window.webpackJsonpconnect||[]).push([[0],{26:function(e,t,n){e.exports=n.p+"static/media/\u30ab\u30a4\u30b8.3975da28.png"},27:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},30:function(e,t,n){e.exports=n(58)},31:function(e,t,n){},40:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);n(31);var a=n(1),c=n.n(a),r=n(16),o=n.n(r),i=n(3),l=n(5),u=n(6),s=n(8),m=n(7),p=n(9),f=(n(40),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.isLogin,a=e.logOut;console.log(a),console.log(this.props);var r=n?c.a.createElement(h,{logOut:a}):null;return c.a.createElement("div",{className:"header"},c.a.createElement("h1",{className:"header_title"},t),r)}}]),t}(a.Component)),h=function(e){return c.a.createElement("button",{className:"header_logout",onClick:function(){return e.logOut()}},"Logout")},d=n(11),b=n.n(d),g=Object(i.b)(function(e){return{isLogin:e.isLogin}},function(e){return{logOut:function(){b.a.auth().signOut().then(function(){e({type:"LOGOUT"})})}}})(f),O=n(21),v=n.n(O),y=n(25),E=(n(52),n(53),n(26)),j=n.n(E),N=b.a.initializeApp({apiKey:"AIzaSyCXT-Kv9En2cLsa08Gzjsw4Xw795d9-T4Y",authDomain:"connect-bb28b.firebaseapp.com",databaseURL:"https://connect-bb28b.firebaseio.com",projectId:"connect-bb28b",storageBucket:"",messagingSenderId:"68923430908",appId:"1:68923430908:web:a74d583c09b897ef"}).database(),_=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(y.a)(v.a.mark(function e(){var t;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props.equalDatabase,N.ref("rooms").child("room1").child("chat").on("value",function(e){e.val()&&(t(Object.values(e.val())),console.log(Object.values(e.val())))});case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.inputChat;return c.a.createElement("div",{className:"chatPanel"},c.a.createElement("div",{className:"chatPanel_content"},e.map(function(e,t){return c.a.createElement("div",{className:"chatPanel_message",key:t},c.a.createElement("div",{className:"chatPanel_imgBox"},c.a.createElement("img",{src:j.a,className:"chatPanel_img",alt:"\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u5199\u771f"})),c.a.createElement("p",{className:"chatPanel_text"},e.text),c.a.createElement("span",{className:"chatPanel_time"},e.time))})))}}]),t}(a.Component),C=Object(i.b)(function(e){return{inputChat:e.inputChat}},function(e){return{equalDatabase:function(t){return e(function(e){return{type:"EQUAL_DATABASE",payload:{inputChat:e}}}(t))}}})(_),w=(n(54),n(55),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).handleCancel=function(e){e.preventDefault()},n.validation=function(e){if(""===e)return!1;N.ref("rooms").child("room1").child("chat").push({text:e,time:(new Date).getHours().toString()+":"+(new Date).getMinutes().toString()})},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.chat,a=t.inputChat;return c.a.createElement("div",{className:"chatForm"},c.a.createElement("form",{className:"chatForm_panel",onSubmit:function(t){e.handleCancel(t)}},c.a.createElement("input",{type:"text",placeholder:"chat your message",className:"chatForm_text",value:n,onChange:function(e){a(e.target.value)}}),c.a.createElement("button",{type:"send",className:"chatForm_sendButton",onClick:function(){e.validation(n)}},c.a.createElement("i",{className:"fas fa-comments chatForm_icon"}))))}}]),t}(a.Component)),L=Object(i.b)(function(e){return{chat:e.chat}},function(e){return{inputChat:function(t){return e(function(e){return{type:"INPUT_MESSAGE",payload:{chat:e}}}(t))}}})(w),x=(n(56),n(27)),P=n.n(x),A=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).handleCancel=function(e){e.preventDefault()},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.refLogin()}},{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"login_messageBox"},c.a.createElement("img",{src:P.a,className:"login_logo",alt:"logo"}),c.a.createElement("h2",{className:"login_text"},"Let's connect your friends, family, ",c.a.createElement("br",null),"peopele in the world")),c.a.createElement("div",{className:"login_formBox"},c.a.createElement("form",{className:"login_form",onSubmit:function(t){return e.handleCancel(t)}},c.a.createElement("h3",{className:"login_formTitle"},"Log in to Connect"),c.a.createElement("div",{className:"login_formTextBox"},c.a.createElement("input",{type:"text",className:"login_formText",placeholder:"Email Address"}),c.a.createElement("input",{type:"password",className:"login_formText",placeholder:"Password"}),c.a.createElement("button",{type:"send",className:"login_formTextButton"},"Login"))),c.a.createElement("div",{className:"login_acount"},c.a.createElement("p",{className:"login_acountText"},"Google\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f7f\u3063\u3066\u30ed\u30b0\u30a4\u30f3"),c.a.createElement("button",{className:"login_acountButton",onClick:this.props.doLogin},c.a.createElement("i",{className:"fab fa-google font-color--google"})))))}}]),t}(a.Component),k=Object(i.b)(function(e){return{}},function(e){return{doLogin:function(){var e=new b.a.auth.GoogleAuthProvider;b.a.auth().signInWithPopup(e)},refLogin:function(){b.a.auth().onAuthStateChanged(function(t){t?e(function(e){return{type:"LOGIN_OK",payload:{displayName:e.displayName,email:e.email,uid:e.uid}}}(t)):alert("\u8a8d\u8a3c\u304c\u5931\u6557\u3057\u307e\u3057\u305f")})}}})(A),D=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.uid?c.a.createElement(c.a.Fragment,null,c.a.createElement(C,null),c.a.createElement(L,null)):c.a.createElement(k,null);return c.a.createElement(c.a.Fragment,null,c.a.createElement(g,{title:"CONNECT"}),e)}}]),t}(a.Component),S=Object(i.b)(function(e){return{uid:e.auth.uid}})(D),T=n(14),B=n(28),I=n.n(B),G=n(29);function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(n,!0).forEach(function(t){Object(G.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var M={chat:"",inputChat:[],isLogin:!1,auth:{uid:"",displayName:"",email:""}},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INPUT_MESSAGE":return U({},e,{chat:t.payload.chat});case"EQUAL_DATABASE":var n=t.payload.inputChat.reverse();return U({},e,{chat:"",inputChat:n});case"LOGIN_OK":return U({},e,{auth:{uid:t.payload.uid,email:t.payload.email,displayName:t.payload.displayName},isLogin:!0});case"LOGOUT":return U({},e,{auth:{uid:"",email:"",displayName:""},isLogin:!1});default:return e}},z=(n(57),Object(T.c)(K,Object(T.a)(I.a)));o.a.render(c.a.createElement(i.a,{store:z},c.a.createElement(S,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.521ea5c8.chunk.js.map
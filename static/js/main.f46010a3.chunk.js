(this.webpackJsonpcognatech=this.webpackJsonpcognatech||[]).push([[0],{16:function(e,t,n){e.exports=n.p+"static/media/Cogna_Logo.a114eb31.png"},19:function(e,t,n){e.exports=n(43)},24:function(e,t,n){},25:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),c=n.n(o),l=(n(24),n(2)),i=n(3),u=n(5),s=n(4),m=(n(25),n(16)),h=n.n(m);var g=function(){return r.a.createElement("img",{src:h.a,className:"App-logo",alt:"logo"})},p=n(17),f=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",number:"",message:""},e.change=function(t){e.setState(Object(p.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.setState({name:"",email:"",number:"",message:""})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("form",null,r.a.createElement("input",{name:"name",placeholder:"First name",value:this.state.name,onChange:function(t){return e.change(t)}}),r.a.createElement("br",null),r.a.createElement("input",{name:"email",placeholder:"Last name",value:this.state.email,onChange:function(t){return e.change(t)}}),r.a.createElement("br",null),r.a.createElement("input",{name:"number",placeholder:"number",value:this.state.number,onChange:function(t){return e.change(t)}}),r.a.createElement("br",null),r.a.createElement("input",{name:"message",placeholder:"message",value:this.state.message,onChange:function(t){return e.change(t)}}),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(t){return e.onSubmit(t)}},"Submit"))}}]),n}(r.a.Component),b=n(18),d=n.n(b),v=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={fields:{}},e.onSubmit=function(t){e.setState({fields:t}),console.log(t),d.a.post("https://cogna.herokuapp.com/message",{crossdomain:!0},{fields:t}).then((function(e){console.log(e),console.log(e.data)}))},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(g,null)),r.a.createElement(f,{onSubmit:function(t){return e.onSubmit(t)}}),r.a.createElement("p",null,JSON.stringify(this.state.fields,null,2)))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.f46010a3.chunk.js.map
(this.webpackJsonprobbofriends=this.webpackJsonprobbofriends||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(7),i=n.n(r),s=(n(13),n(8)),c=n(2),o=n(3),h=n(5),l=n(4),u=n(0),d=function(e){var t=e.name,n=e.email,a=e.id;return Object(u.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(u.jsx)("img",{alt:"Robots",src:"https://robohash.org/".concat(a,"?200x200")}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:t}),Object(u.jsx)("p",{children:n})]})]})},b=function(e){var t=e.robots;return Object(u.jsx)("div",{children:t.map((function(e,t){return Object(u.jsx)(d,{id:e.id,name:e.name,email:e.email},t)}))})},j=function(e){var t=e.searchChange;return Object(u.jsx)("div",{className:"pa2",children:Object(u.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search robot",onChange:t})})},m=function(e){return Object(u.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"},children:e.children})},p=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(o.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(u.jsx)("h1",{children:"Oops. That is not good"}):this.props.children}}]),n}(a.Component),f=(n(15),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.handleNameChange=function(t){e.setState({name:t.target.value})},e.handleEmailChange=function(t){e.setState({email:t.target.value})},e.onSubmit=function(t){e.setState({id:e.state.id+1});var n={name:e.state.name,id:e.state.id,email:e.state.email};e.setState({robots:[].concat(Object(s.a)(e.state.robots),[n])}),t.preventDefault(),e.setState({name:"",email:""})},e.state={robots:[],searchField:"",email:"",name:"",id:11},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(u.jsxs)("div",{className:"tc",children:[Object(u.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(u.jsx)(j,{searchChange:this.onSearchChange}),Object(u.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(u.jsx)("input",{type:"text",required:!0,id:"nameField",value:this.state.name,onChange:this.handleNameChange,placeholder:"Enter your name"}),Object(u.jsx)("input",{type:"text",required:!0,id:"emailField",value:this.state.email,onChange:this.handleEmailChange,placeholder:"Enter your email"}),Object(u.jsx)("input",{type:"submit",value:"Submit"})]}),Object(u.jsx)(m,{children:Object(u.jsx)(p,{children:Object(u.jsx)(b,{robots:a})})})]}):Object(u.jsx)("h1",{className:"tc",children:"Loading"})}}]),n}(a.Component)),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),i(e),s(e)}))};n(16);i.a.render(Object(u.jsx)(f,{}),document.getElementById("root")),g()}},[[17,1,2]]]);
//# sourceMappingURL=main.662ec7f9.chunk.js.map
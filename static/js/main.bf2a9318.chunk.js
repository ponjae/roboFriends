(this.webpackJsonprobbofriends=this.webpackJsonprobbofriends||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(7),s=n.n(r),i=(n(13),n(8)),c=n(2),o=n(3),l=n(5),h=n(4),b=n(0),u=function(e){var t=e.name,n=e.email,a=e.id;return Object(b.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(b.jsx)("img",{alt:"Robots",src:"https://robohash.org/".concat(a,"?200x200")}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:t}),Object(b.jsx)("p",{children:n})]})]})},d=function(e){var t=e.robots;return Object(b.jsx)("div",{children:t.map((function(e,t){return Object(b.jsx)(u,{id:e.id,name:e.name,email:e.email},t)}))})},j=function(e){var t=e.searchChange;return Object(b.jsx)("div",{className:"pa2",children:Object(b.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search robot",onChange:t})})},m=function(e){return Object(b.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"},children:e.children})},g=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(o.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(b.jsx)("h1",{children:"Oops. That is not good"}):this.props.children}}]),n}(a.Component),p=(n(15),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.handleNameChange=function(t){e.setState({name:t.target.value})},e.handleEmailChange=function(t){e.setState({email:t.target.value})},e.onSubmit=function(t){e.setState({id:e.state.id+1});var n={name:e.state.name,id:e.state.id,email:e.state.email};e.setState({robots:[].concat(Object(i.a)(e.state.robots),[n])}),t.preventDefault(),e.setState({name:"",email:""})},e.state={robots:[],searchField:"",email:"",name:"",id:11},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(b.jsxs)("div",{className:"tc",children:[Object(b.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(b.jsx)(j,{searchChange:this.onSearchChange}),Object(b.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(b.jsx)("input",{type:"text",className:"pa3 ba b--green bg-lightest-blue",required:!0,id:"nameField",value:this.state.name,onChange:this.handleNameChange,placeholder:"Enter your name"}),Object(b.jsx)("input",{type:"text",className:"pa3 ba b--green bg-lightest-blue",required:!0,id:"emailField",value:this.state.email,onChange:this.handleEmailChange,placeholder:"Enter your email"}),Object(b.jsx)("input",{type:"submit",className:"pa3 ba b--green bg-lightest-blue",value:"Submit"})]}),Object(b.jsx)(m,{children:Object(b.jsx)(g,{children:Object(b.jsx)(d,{robots:a})})})]}):Object(b.jsx)("h1",{className:"tc",children:"Loading"})}}]),n}(a.Component)),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),s(e),i(e)}))};n(16);s.a.render(Object(b.jsx)(p,{}),document.getElementById("root")),f()}},[[17,1,2]]]);
//# sourceMappingURL=main.bf2a9318.chunk.js.map
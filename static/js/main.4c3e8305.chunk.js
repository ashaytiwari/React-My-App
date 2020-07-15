(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{19:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(2),l=a(4),c=a(3),o=a(0),i=a.n(o),u=a(10),s=a(5),m=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).submitHandler=function(e){e.preventDefault(),alert("Subscribed Email is : ".concat(r.state.email))},r.changeHandler=function(e){r.setState({email:e.target.value})},r.state={email:""},r}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("ul",{className:"navigation"},i.a.createElement("li",{className:"logo"},i.a.createElement(u.b,{to:"/"},"React-app")),i.a.createElement("li",null,i.a.createElement("div",{className:"dropdown"},i.a.createElement("button",{className:"dropBtn"},"Components",i.a.createElement("span",{className:"glyphicon glyphicon-arrow-down"})),i.a.createElement("div",{className:"dropdown-content"},i.a.createElement(u.b,{to:"/higherordercomponents"},"HOC-Demo"),i.a.createElement(u.b,{to:"/errorboundarydemo"},"ErrBoundaryDemo"),i.a.createElement(u.b,{to:"/parentportal"},"ParentPortal")))),i.a.createElement("li",null,i.a.createElement(u.b,{to:"/refsDemo"},"Refs-Demo")),i.a.createElement("li",null,i.a.createElement(u.b,{to:"/counter"},"Counter")),i.a.createElement("li",null,i.a.createElement(u.b,{to:"/about"},"About")),i.a.createElement("li",null,i.a.createElement(u.b,{to:"/"},"Home"))),i.a.createElement("div",{className:"jumbotron text-center"},i.a.createElement("h1",null,"React-App"),i.a.createElement("p",null,"We specialize in ",i.a.createElement("strong",null,"Web Development")),i.a.createElement("form",{className:"form-inline subscribingForm",onSubmit:this.submitHandler},i.a.createElement("div",{className:"input-group subscribing-form"},i.a.createElement("input",{type:"email",className:"form-control",value:this.state.email,onChange:this.changeHandler,size:"70",placeholder:"Email...",required:!0,autoFocus:!0}),i.a.createElement("div",{className:"input-group-btn"},i.a.createElement("input",{type:"submit",value:"Subscribe",className:"subscribingBtn"}))))))}}]),a}(o.Component);t.default=Object(s.f)(m)},20:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(2),l=a(4),c=a(3),o=a(0),i=a.n(o),u=a(29),s=a.n(u),m=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"container-fluid about"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-7 about-content"},i.a.createElement("h2",null,"About our App"),i.a.createElement("h4",null,"This App is based on the ",i.a.createElement("strong",null,"Multipage Website Routing")),i.a.createElement("p",null,"I know that the title of this post might confuse you if you are familiar with React. Because React deals with components instead of pages. But how can we implement a multi-page website with React?",i.a.createElement("br",null),"A React app consists of a single HTML file index.html. The views are coded in JSX format as components.",i.a.createElement("br",null),"But we sometimes need to build multi-page websites because a single-page website can not always represent complete information.",i.a.createElement("br",null))),i.a.createElement("div",{className:"col-md-5"},i.a.createElement("img",{src:s.a,alt:"Pic"}))))}}]),a}(o.Component);t.default=m},21:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(2),l=a(4),c=a(3),o=a(0),i=a.n(o),u=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).increment=function(){r.setState((function(e){return{count:e.count+1}}))},r.decrement=function(){r.setState((function(e){return{count:e.count-1}}))},r.reset=function(){r.setState((function(){return{count:0}}))},r.state={count:0},r}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"row counter"},i.a.createElement("div",{className:"col-md-3"}),i.a.createElement("div",{className:"col-md-6"},i.a.createElement("div",{className:"countercard text-center"},i.a.createElement("h1",null,"Counter"),i.a.createElement("div",{className:"row text-center"},i.a.createElement("div",{className:"col-md-4"},i.a.createElement("button",{className:"increment",onClick:this.increment},"+")),i.a.createElement("div",{className:"col-md-4 countcard"},this.state.count),i.a.createElement("div",{className:"col-md-4"},i.a.createElement("button",{className:"decrement",onClick:this.decrement},"-"))),i.a.createElement("br",null),i.a.createElement("button",{className:"reset",onClick:this.reset},"RC"))),i.a.createElement("div",{className:"col-md-3"}))}}]),a}(o.Component);t.default=u},22:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=function(){return r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Age"),r.a.createElement("th",null,"Job"),r.a.createElement("th",null,"Delete")))},c=function(e){var t=e.characterData.map((function(t,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.age),r.a.createElement("td",null,t.job),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return e.removeCharacter(a)},className:"delete-btn"},"Delete")))}));return r.a.createElement("tbody",null,t)};t.default=function(e){var t=e.characterData,a=e.removeCharacter;return r.a.createElement("div",{className:"row home"},r.a.createElement("div",{className:"col-md-3"}),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("table",null,r.a.createElement(l,null),r.a.createElement(c,{characterData:t,removeCharacter:a}))),r.a.createElement("div",{className:"col-md-3"}))}},23:function(e,t,a){"use strict";a.r(t);var n=a(30),r=a(1),l=a(2),c=a(4),o=a(3),i=a(0),u=a.n(i),s=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(r.a)(this,a);for(var l=arguments.length,c=new Array(l),o=0;o<l;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).initialState={name:"",age:"",job:""},e.state=e.initialState,e.changeHandler=function(t){var a=t.target,r=a.name,l=a.value;e.setState(Object(n.a)({},r,l))},e.submitUserRecord=function(){e.props.submitHandler(e.state),e.setState(e.initialState)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.job,n=e.age;return u.a.createElement("form",{className:"form-inline user-entry"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-md-3"},u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{htmlFor:"name"},"Name:-"),u.a.createElement("input",{type:"text",className:"form-control",name:"name",id:"name",value:t,autoFocus:!0,onChange:this.changeHandler,placeholder:"Name"}))),u.a.createElement("div",{className:"col-md-3"},u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{htmlFor:"age"},"Age:-"),u.a.createElement("input",{type:"number",className:"form-control",name:"age",id:"age",value:n,autoFocus:!0,onChange:this.changeHandler,placeholder:"Age"}))),u.a.createElement("div",{className:"col-md-3"},u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{htmlFor:"job"},"Job:-"),u.a.createElement("input",{type:"text",className:"form-control",name:"job",id:"job",value:a,autoFocus:!0,onChange:this.changeHandler,placeholder:"Job"}))),u.a.createElement("div",{className:"col-md-3"},u.a.createElement("input",{type:"button",value:"Add Record",onClick:this.submitUserRecord,className:"btn btn-warning"}))))}}]),a}(i.Component);t.default=s},24:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(2),l=a(4),c=a(3),o=a(0),i=a.n(o),u=a(31),s=a.n(u),m=function(e){return function(t){Object(l.a)(o,t);var a=Object(c.a)(o);function o(e){var t;return Object(n.a)(this,o),(t=a.call(this,e)).incrementCount=function(){t.setState((function(e){return{count:e.count+1}}))},t.state={count:0},t}return Object(r.a)(o,[{key:"render",value:function(){return i.a.createElement(e,Object.assign({count:this.state.count,incrementCount:this.incrementCount},this.props))}}]),o}(i.a.Component)},d=m(function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props,t=e.count,a=e.incrementCount;return i.a.createElement("div",{className:"click-counter text-center"},i.a.createElement("button",{onClick:a},this.props.heroName," Click ",t," times"))}}]),a}(o.Component)),h=m(function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props,t=e.count,a=e.incrementCount;return i.a.createElement("div",{className:"hover-counter text-center"},i.a.createElement("p",{onMouseOver:a,className:"hover-heading"},this.props.heroName," Hovered ",t," Times"))}}]),a}(o.Component)),f=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"HOC"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-6"},i.a.createElement("h1",null,"Higher Order Components"),i.a.createElement("p",null,"A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React\u2019s compositional nature."),i.a.createElement(d,{heroName:"IronMan"}),i.a.createElement("br",null),i.a.createElement(h,{heroName:"Hulk"})),i.a.createElement("div",{className:"col-md-6"},i.a.createElement("img",{src:s.a,alt:"pic"}))))}}]),a}(o.Component);t.default=f},25:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(1),c=a(2),o=a(4),i=a(3),u=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={isError:null,errorInfo:null},n}return Object(c.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({isError:e,errorInfo:t})}},{key:"render",value:function(){return this.state.errorInfo?r.a.createElement("div",{className:"errorboundary"},r.a.createElement("h2",null,"Something went wrong here"),r.a.createElement("details",null,this.state.isError&&this.state.isError.toString(),r.a.createElement("br",null),this.state.errorInfo.componentStack)):this.props.children}}]),a}(n.Component),s=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleClick=function(){n.setState((function(e){return{counter:e.counter+1}}))},n.state={counter:0},n}return Object(c.a)(a,[{key:"render",value:function(){if(5===this.state.counter)throw new Error("I crashed!...............");return r.a.createElement("h1",{onClick:this.handleClick,className:"counter-text"},this.state.counter)}}]),a}(n.Component);t.default=function(){return r.a.createElement("div",{className:"errorboundarydemo"},r.a.createElement("b",null,r.a.createElement("h2",null,"This is an example of error boundaries in React 16.")),r.a.createElement("br",null),r.a.createElement("h4",null,"Click on the numbers to increase the counters."),r.a.createElement("br",null),r.a.createElement("p",null,"The counter is programmed to throw when it reaches 5. This simulates a JavaScript error in a component."),r.a.createElement("hr",null),r.a.createElement("div",{className:"demo1"},r.a.createElement(u,null,r.a.createElement("p",null,"These two counters are inside the same error boundary.If one crashes, the error boundary will replace both of them."),r.a.createElement(s,null),r.a.createElement(s,null)),r.a.createElement("hr",null)),r.a.createElement("br",null),r.a.createElement("div",{className:"demo2 "},r.a.createElement("p",null,"These two counters are each inside of their own error boundary. So if one crashes, the other is not affected."),r.a.createElement(u,null,r.a.createElement(s,null)),r.a.createElement(u,null,r.a.createElement(s,null)),r.a.createElement("hr",null)))}},26:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(2),l=a(4),c=a(3),o=a(0),i=a.n(o),u=i.a.forwardRef((function(e,t){return i.a.createElement("div",null,i.a.createElement("input",{className:"form-control",type:"email",placeholder:"Email",ref:t}))})),s=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).clickHandler=function(){alert(r.inputRefs.current.value),alert(r.cbRefs.value),alert(r.emailRefs.current.value)},r.inputRefs=i.a.createRef(),r.cbRefs=null,r.setcbRefs=function(e){r.cbRefs=e},r.emailRefs=i.a.createRef(),r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.inputRefs.current.focus(),console.log(this.inputRefs)}},{key:"render",value:function(){return i.a.createElement("div",{className:"row refs-demo"},i.a.createElement("div",{className:"col-md-3"}),i.a.createElement("div",{className:"col-md-6 card text-center"},i.a.createElement("h2",null,"Refs Demo"),i.a.createElement("input",{type:"text",className:"form-control",ref:this.inputRefs,placeholder:"FirstName"}),i.a.createElement("br",null),i.a.createElement("input",{type:"text",className:"form-control",ref:this.setcbRefs,placeholder:"LastName"}),i.a.createElement("br",null),i.a.createElement(u,{ref:this.emailRefs}),i.a.createElement("br",null),i.a.createElement("button",{type:"button",onClick:this.clickHandler},"Click"),i.a.createElement("br",null)),i.a.createElement("div",{className:"col-md-3"}))}}]),a}(o.Component);t.default=s},27:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(2),l=a(4),c=a(3),o=a(0),i=a.n(o),u=a(12),s=a.n(u),m=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return s.a.createPortal(i.a.createElement("div",{className:"portal",onClick:this.props.onClose},i.a.createElement("div",{className:"portal-content"},this.props.children,i.a.createElement("hr",null),i.a.createElement("button",{onClick:this.props.onClose},"Close"))),document.getElementById("portal-root"))}}]),a}(o.Component),d=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).handleShowMessageClick=function(){r.setState({showModal:!0})},r.handleCloseModal=function(){r.setState({showModal:!1})},r.state={showModal:!1},r}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"parent-portal"},i.a.createElement("div",{className:"card"},i.a.createElement("h1",null,"Portal-Demo"),i.a.createElement("p",null,"Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.",i.a.createElement("br",null),"The first argument (child) is any renderable React child, such as an element, string, or fragment. The second argument (container) is a DOM element."),i.a.createElement("button",{onClick:this.handleShowMessageClick},"Show Secret Modal"),this.state.showModal?i.a.createElement(m,{onClose:this.handleCloseModal},i.a.createElement("div",null,i.a.createElement("h1",null,"React Portals"),i.a.createElement("p",null,"React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",i.a.createElement("br",null),"Declarative views make your code more predictable and easier to debug."))):null))}}]),a}(o.Component);t.default=d},29:function(e,t,a){e.exports=a.p+"static/media/about.4658f38e.jpg"},31:function(e,t,a){e.exports=a.p+"static/media/Higher-Order.ab37609b.png"},33:function(e,t,a){e.exports=a(45)},38:function(e,t,a){},39:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t),a.d(t,"Header",(function(){return C.default})),a.d(t,"About",(function(){return w.default})),a.d(t,"Counter",(function(){return k.default})),a.d(t,"Home",(function(){return R.default})),a.d(t,"Form",(function(){return S.default})),a.d(t,"RefsDemo",(function(){return H.default})),a.d(t,"ParentPortal",(function(){return x.default})),a.d(t,"ErrorBoundaryDemo",(function(){return D.default})),a.d(t,"HigherOrderComponents",(function(){return P.default}));var n=a(0),r=a.n(n),l=a(12),c=a.n(l),o=(a(38),a(32)),i=a(1),u=a(2),s=a(4),m=a(3),d=(a(39),a(10)),h=a(5),f=Object(n.lazy)((function(){return Promise.resolve().then(a.bind(null,19))})),E=Object(n.lazy)((function(){return Promise.resolve().then(a.bind(null,20))})),p=Object(n.lazy)((function(){return Promise.resolve().then(a.bind(null,21))})),b=Object(n.lazy)((function(){return Promise.resolve().then(a.bind(null,22))})),v=Object(n.lazy)((function(){return Promise.resolve().then(a.bind(null,23))})),g=Object(n.lazy)((function(){return Promise.resolve().then(a.bind(null,26))})),N=Object(n.lazy)((function(){return Promise.resolve().then(a.bind(null,27))})),O=Object(n.lazy)((function(){return Promise.resolve().then(a.bind(null,25))})),j=Object(n.lazy)((function(){return Promise.resolve().then(a.bind(null,24))})),y=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={characters:[]},e.removeCharacter=function(t){var a=e.state.characters;e.setState({characters:a.filter((function(e,a){return a!==t}))})},e.submitHandler=function(t){e.setState({characters:[].concat(Object(o.a)(e.state.characters),[t])})},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.state.characters;return r.a.createElement("div",null,r.a.createElement(d.a,null,r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",{className:"loadingPage row"},r.a.createElement("div",{className:"col-md-3"}),r.a.createElement("div",{className:"col-md-6 well"},r.a.createElement("h1",null,"Please wait while loading......"),r.a.createElement("h3",null,"Proxy script downloaded"),r.a.createElement("p",null,"Check your internet connection")),r.a.createElement("div",{className:"col-md-3"}))},r.a.createElement(f,null),r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/",exact:!0,render:function(a){return r.a.createElement("div",null,r.a.createElement(v,{submitHandler:e.submitHandler}),r.a.createElement(b,{characterData:t,removeCharacter:e.removeCharacter}))}}),r.a.createElement(h.a,{path:"/about",exact:!0,component:function(){return r.a.createElement(E,null)}}),r.a.createElement(h.a,{path:"/counter",exact:!0,component:function(){return r.a.createElement(p,null)}}),r.a.createElement(h.a,{path:"/errorboundarydemo",exact:!0,component:function(){return r.a.createElement(O,null)}}),r.a.createElement(h.a,{path:"/higherordercomponents",exact:!0,component:function(){return r.a.createElement(j,null)}}),r.a.createElement(h.a,{path:"/parentportal",exact:!0,component:function(){return r.a.createElement(N,null)}}),r.a.createElement(h.a,{path:"/refsDemo",exact:!0,component:function(){return r.a.createElement(g,null)}})))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=a(19),w=a(20),k=a(21),R=a(22),S=a(23),H=a(26),x=a(27),D=a(25),P=a(24);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.4c3e8305.chunk.js.map
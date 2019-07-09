(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(18)},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(3),c=a.n(s),o=(a(17),a(9)),l=a(6),i=a(7),m=a(1),u=a(4),d=a(8),p=a(5),f=a(10),h=function(e){var t=e.applyFilter;return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row w-100"},r.a.createElement("div",{className:"col-12 d-flex justify-content-between"},r.a.createElement("div",{className:"navbar-brand"},"react_dynamic-list-of-posts"),r.a.createElement("div",{className:"form-inline my-2 my-lg-0"},r.a.createElement("input",{className:"form-control mr-sm-2",type:"text",placeholder:"Search",onChange:function(e){t(e.target.value)}}))))))},b=new function e(){var t=this;Object(m.a)(this,e),this._baseUrl="https://jsonplaceholder.typicode.com/",this._getData=function(e){return fetch("".concat(t._baseUrl).concat(e)).then(function(e){return e.json()})},this.getPosts=function(){return t._getData("posts")},this.getUsers=function(){return t._getData("users")},this.getComments=function(){return t._getData("comments")}},g=function(e){var t=e.user,a=t.name,n=t.email,s=t.address,c=s.suite,o=s.street,l=s.city;return r.a.createElement("span",null,a," ",n," ",c," ",o," ",l)},v=function(e){var t=e.comment,a=t.name,n=t.body,s=t.email;return r.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center bg-secondary"},r.a.createElement("div",{className:"card border-0 bg-secondary"},r.a.createElement("h6",{className:"card-subtitle"},a,"(",s,")"),r.a.createElement("p",{className:"card-text"},n)))},y=function(e){var t=e.comments;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h5",{className:"mb-1"},"Comments"),r.a.createElement("ul",{className:"list-group list-group-flush"},t.map(function(e){return r.a.createElement(v,{comment:e,key:e.id})})))},E=function(e){var t=e.post,a=t.title,n=t.body,s=t.user,c=t.comments;return r.a.createElement("li",{className:"list-group-item d-flex justify-content-center align-items-center p-0 border-0"},r.a.createElement("div",{className:"card border-0 bg-primary text-white mb-3"},r.a.createElement("h4",{className:"card-header"},a),r.a.createElement("div",{className:"card-body"},r.a.createElement("h6",{className:"card-subtitle mb-2"},r.a.createElement(g,{user:s})),r.a.createElement("p",{className:"card-text"},n),r.a.createElement(y,{comments:c}))))},N=function(e){var t=e.posts;return r.a.createElement("ul",{className:"list-group"},t.map(function(e){return r.a.createElement(E,{post:e,key:e.id})}))};var w=function(e,t){var a=null;return function(){for(var n=this,r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];clearTimeout(a),a=setTimeout(function(){e.call.apply(e,[n].concat(s))},t)}},j=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={posts:[],showedPosts:[],users:[],comments:[],isLoading:!1,query:""},a.dowloadPosts=function(){a.setState({isLoading:!0});var e=b.getPosts,t=b.getUsers,n=b.getComments;Promise.all([e(),t(),n()]).then(function(e){var t=Object(i.a)(e,3),n=t[0],r=t[1],s=t[2];a.setState({posts:n,users:r,comments:s,isLoading:!1,showedPosts:a.getPostWithData(n,r,s,a.state.query)})})},a.applyFilter=w(function(e){if(e!==a.state.query){var t=a.state,n=t.posts,r=t.users,s=t.comments;a.setState({query:e,showedPosts:a.getPostWithData(n,r,s,e)})}},500),a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"getPostWithData",value:function(e,t,a,n){var r=n.toLowerCase();return Object(l.a)(e).filter(function(e){var t=e.body,a=e.title;return"".concat(a,"\n").concat(t).toLowerCase().includes(r)}).map(function(e){return Object(o.a)({},e,{user:t.find(function(t){return t.id===e.userId}),comments:a.filter(function(t){return t.postId===e.id})})})}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.showedPosts,n=e.posts,s=t?r.a.createElement("div",{className:"spinner spinner-border text-primary"}):null;return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{applyFilter:this.applyFilter}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 text-center p-5"},s,r.a.createElement(N,{posts:a}),0===a.length&&n.length>0?"Nothing":null,r.a.createElement("button",{type:"button",className:"btn btn-info ".concat(t||n.length>0?"d-none":null),onClick:this.dowloadPosts},"Download Posts")))))}}]),t}(n.Component);c.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.cffc6927.chunk.js.map
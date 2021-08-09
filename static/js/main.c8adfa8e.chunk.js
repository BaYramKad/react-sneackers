(this["webpackJsonpreact-sneakers"]=this["webpackJsonpreact-sneakers"]||[]).push([[0],{17:function(e,t,a){e.exports={cartStyle:"Header_cartStyle__31Apq",price:"Header_price__3wNPu",favorites:"Header_favorites__H-nAa"}},21:function(e,t,a){e.exports={card:"Card_card__3oRRY",favorite:"Card_favorite__2g-49",button:"Card_button__w68c2"}},26:function(e,t,a){e.exports={parent:"Order_parent__3Z4JB",title:"Order_title__25Id_"}},43:function(e,t,a){},5:function(e,t,a){e.exports={overlay:"Drawer_overlay__2_zNX",overlayVisible:"Drawer_overlayVisible__16Qib",drawer:"Drawer_drawer__1XLcp",items:"Drawer_items__QACjt",cartBlock:"Drawer_cartBlock__IxUuc",emptyCart:"Drawer_emptyCart__2i3mk",greenButton:"Drawer_greenButton__xQc7m",emptyArrow:"Drawer_emptyArrow__kFnGg",cartTotalBlock:"Drawer_cartTotalBlock__2jj0B",cartItem:"Drawer_cartItem__1oqG7",cartItemImg:"Drawer_cartItemImg__avg_K",removeBtn:"Drawer_removeBtn__SJfYA"}},70:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),n=a(36),s=a.n(n),i=a(13),o=(a(43),a(44),a(11)),l=a(14),d=a(8),j=a.n(d),u=a(15),b=a(4),m=a(17),x=a.n(m),h=c.a.createContext(),f=function(){var e=c.a.useContext(h).cartItems,t=e.reduce((function(e,t){return Number(t.price)+Number(e)}),0),a=e.reduce((function(e,t){return[].concat(Object(l.a)(e),[t])}),[]);return{totalPrice:t,percentPrice:Math.floor(t/100*5),orders:a}},p=a(1);var v=function(e){var t=f().totalPrice;return Object(p.jsxs)("header",{className:"d-flex justify-between align-center p-30 ".concat(x.a.header),children:[Object(p.jsxs)(i.b,{to:"/react-sneackers/",className:"d-flex align-center",children:[Object(p.jsx)("img",{width:40,height:40,src:"img/logo.png",alt:"logo"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{className:"text-uppercase",children:"React Sneakers"}),Object(p.jsx)("p",{className:"opacity-5",children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u043b\u0443\u0447\u0448\u0438\u0445 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a"})]})]}),Object(p.jsxs)("ul",{className:"d-flex",children:[Object(p.jsxs)("li",{className:x.a.cartStyle,onClick:e.onShowCart,children:[Object(p.jsx)("img",{width:18,height:18,src:"img/cart.svg",alt:"cart"}),Object(p.jsxs)("span",{className:x.a.price,children:[t," \u0440\u0443\u0431."]})]}),Object(p.jsx)(i.b,{to:"favorites",className:x.a.favorites,children:Object(p.jsx)("img",{width:18,src:"img/favorites.svg",alt:"favorites"})}),Object(p.jsx)(i.b,{to:"orders",className:x.a.favorites,children:Object(p.jsx)("img",{width:18,src:"img/user.svg",alt:"user"})})]})]})},O=a(6),g=a.n(O),k=a(5),_=a.n(k),w=function(e){var t=e.image,a=e.title,r=e.description,n=c.a.useContext(h).setCart;return Object(p.jsxs)("div",{className:_.a.emptyCart,children:[Object(p.jsx)("img",{src:t,alt:"empty-cart"}),Object(p.jsx)("strong",{children:a}),Object(p.jsx)("p",{children:r}),Object(p.jsx)("div",{children:Object(p.jsxs)("button",{onClick:function(){return n(!1)},className:_.a.greenButton,children:[Object(p.jsx)("img",{className:_.a.emptyArrow,src:"img/back-main.svg",alt:"back"}),"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"]})})]})},N=function(e){return new Promise((function(t){return setTimeout(t,e)}))};var y=function(e){var t=e.onCloseCart,a=e.removeCard,r=e.cartItems,n=e.isCart,s=f(),i=s.totalPrice,o=s.percentPrice,l=c.a.useContext(h).setCartItems,d=c.a.useState(!1),m=Object(b.a)(d,2),x=m[0],v=m[1],O=c.a.useState([]),k=Object(b.a)(O,2),y=k[0],C=k[1],I=function(){var e=Object(u.a)(j.a.mark((function e(){var t,a,c,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.post("https://60d5a9d3943aa60017768b17.mockapi.io/orders",{items:r});case 3:t=e.sent,a=t.data,C(a),v(!0),l([]),c=0;case 9:if(!(c<r.length)){e.next=18;break}return n=r[c],e.next=13,g.a.delete("https://60d5a9d3943aa60017768b17.mockapi.io/cartItem/".concat(n.id));case 13:return e.next=15,N(2e3);case 15:c++,e.next=9;break;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0438 \u0437\u0430\u043a\u0430\u0437\u0430 :(  \u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.t0));case 23:case"end":return e.stop()}}),e,null,[[0,20]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"".concat(_.a.overlay," ").concat(n?_.a.overlayVisible:""," "),children:Object(p.jsxs)("div",{className:_.a.drawer,children:[Object(p.jsxs)("h2",{className:"d-flex justify-between mb-30",children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430 ",Object(p.jsx)("img",{className:"cu-p",src:"img/btn-remove.svg",alt:"Remove",onClick:t})]}),r.length>0?Object(p.jsxs)("div",{className:_.a.cartBlock,children:[Object(p.jsx)("div",{className:_.a.items,children:r.map((function(e,t){return Object(p.jsxs)("div",{className:"".concat(_.a.cartItem," d-flex align-center"),children:[Object(p.jsx)("div",{style:{backgroundImage:"url(".concat(e.url,")")},className:_.a.cartItemImg}),Object(p.jsxs)("div",{className:"mr-20 flex",children:[Object(p.jsx)("p",{className:"mb-5",children:e.title}),Object(p.jsxs)("b",{children:[e.price," \u0440\u0443\u0431."]})]}),Object(p.jsx)("img",{onClick:function(){return a(e.id)},className:_.a.removeBtn,src:"img/btn-remove.svg",alt:"Remove"})]},t)}))}),Object(p.jsxs)("div",{className:_.a.cartTotalBlock,children:[Object(p.jsxs)("ul",{children:[Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e:"}),Object(p.jsx)("div",{}),Object(p.jsxs)("b",{children:[i," \u0440\u0443\u0431. "]})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{children:"\u041d\u0430\u043b\u043e\u0433 5%:"}),Object(p.jsx)("div",{}),Object(p.jsxs)("b",{children:[o," \u0440\u0443\u0431. "]})]})]}),Object(p.jsxs)("button",{onClick:I,className:_.a.greenButton,children:["\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437 ",Object(p.jsx)("img",{src:"img/arrow.svg",alt:"Arrow"})]})]})]}):Object(p.jsx)(w,{image:x?"img/order-active.jpg":"img/empty-curtain.jpg",title:x?"\u0417\u0430\u043a\u0430\u0437 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d!":"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f",description:x?"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 \u2116".concat(y.id," \u0441\u043a\u043e\u0440\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043a\u0443\u0440\u044c\u0435\u0440\u0441\u043a\u043e\u0439 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0435"):"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0443 \u043f\u0430\u0440\u0443 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437"})]})})},C=a(21),I=a.n(C),S=a(38);var B=function(e){var t=e.id,a=e.url,r=e.title,n=e.price,s=e.onPlus,i=e.onFavorites,o=e.isLoading,l=void 0!==o&&o,d=e.favorited,j=void 0!==d&&d,u=c.a.useContext(h).changeActiveAddToCart,m=c.a.useState(j),x=Object(b.a)(m,2),f=x[0],v=x[1],O={url:a,title:r,price:n,id:t,parentId:t};return Object(p.jsx)("div",{className:I.a.card,children:l?Object(p.jsxs)(S.a,{speed:2,width:155,height:240,viewBox:"0 0 150 240",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(p.jsx)("rect",{x:"0",y:"0",rx:"10",ry:"10",width:"150",height:"135"}),Object(p.jsx)("rect",{x:"0",y:"150",rx:"7",ry:"7",width:"150",height:"15"}),Object(p.jsx)("rect",{x:"0",y:"173",rx:"7",ry:"7",width:"90",height:"15"}),Object(p.jsx)("rect",{x:"-1",y:"212",rx:"7",ry:"7",width:"80",height:"24"}),Object(p.jsx)("rect",{x:"117",y:"205",rx:"7",ry:"7",width:"32",height:"32"})]}):Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:I.a.favorite,children:i&&Object(p.jsx)("img",{onClick:function(){i(O),v(!f)},src:f?"img/heart-liked.svg":"img/heart-unliked.svg",alt:"favorite"})}),Object(p.jsx)("img",{width:133,height:112,src:"img/sneakers/1.jpg",alt:"Sneakers"}),Object(p.jsx)("h5",{children:r}),Object(p.jsxs)("div",{className:"d-flex justify-between align-center",children:[Object(p.jsxs)("div",{className:"d-flex flex-column",children:[Object(p.jsx)("span",{children:"\u0426\u0435\u043d\u0430:"}),Object(p.jsxs)("b",{children:[n," \u0440\u0443\u0431."]})]}),s&&Object(p.jsx)("button",{className:I.a.button,onClick:function(){s(O)},children:Object(p.jsx)("img",{src:u(t)?"img/btn-checked.svg":"img/plus.svg",alt:"Plus"})})]})]})})};var T=function(e){var t=c.a.useContext(h).favorites;return Object(p.jsxs)("div",{className:"content p-40 justify-center",children:[Object(p.jsxs)("div",{className:"d-flex align-center",children:[Object(p.jsx)(i.b,{to:"",children:Object(p.jsx)("img",{src:"img/come-back.svg",alt:"comeBack"})}),Object(p.jsx)("h1",{className:"search-title justify-start ml-20",children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})]}),Object(p.jsx)("div",{className:"d-flex flex-wrap",children:t.map((function(t,a){return Object(r.createElement)(B,Object(o.a)(Object(o.a)({},t),{},{favorited:!0,key:a,onFavorites:function(t){return e.addInToFavorites(t)},onPlus:function(t){return e.addItemToCart(t)}}))}))})]})};var A=function(e){var t=e.items,a=e.searchText,c=e.setSearchText,n=e.addItemToCart,s=e.addInToFavorites,i=e.searchItems,d=e.isLoading;return Object(p.jsxs)("div",{className:"content p-40",children:[Object(p.jsxs)("div",{className:"d-flex align-center justify-between mb-40",children:[Object(p.jsx)("h1",{className:"search-title",children:a?"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443: '".concat(a,"'"):"\u0412\u0441\u0435 \u043a\u0440\u043e\u0441\u043e\u0432\u043a\u0438"}),Object(p.jsxs)("div",{className:"search-block d-flex",children:[Object(p.jsx)("img",{src:"img/search.svg",alt:"Search"}),Object(p.jsx)("input",{onChange:i,value:a,placeholder:"\u041f\u043e\u0438\u0441\u043a..."}),a&&Object(p.jsx)("img",{onClick:function(){return c("")},className:"clear-input cu-p",src:"img/clear-input.svg",alt:"Remove"})]})]}),Object(p.jsx)("div",{className:"d-flex flex-wrap justify-start",children:function(){var e=t.filter((function(e){return e.title.toLowerCase().includes(a.toLowerCase())}));return console.log(e),(d?Object(l.a)(Array(8)):e).map((function(e,t){return Object(r.createElement)(B,Object(o.a)(Object(o.a)({},e),{},{key:t,onPlus:function(e){return n(e)},onFavorites:function(e){return s(e)},isLoading:d}))}))}()})]})},D=a(26),P=a.n(D),L=function(e){return Object(p.jsxs)("div",{className:"content p-40 justify-center",children:[Object(p.jsx)("span",{className:P.a.title,children:"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 \u2116".concat(e.orderId)}),Object(p.jsx)("div",{className:"d-flex flex-wrap ".concat(P.a.parent),children:e.items.slice(1).map((function(t,a){return Object(r.createElement)(B,Object(o.a)(Object(o.a)({},t),{},{key:a,isLoading:e.isLoading}))}))})]})},F=function(){var e=c.a.useState([]),t=Object(b.a)(e,2),a=t[0],r=t[1],n=c.a.useState(!0),s=Object(b.a)(n,2),o=s[0],d=s[1];return c.a.useEffect((function(){Object(u.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("https://60d5a9d3943aa60017768b17.mockapi.io/orders");case 3:t=e.sent,a=t.data,r(a.map((function(e){return[].concat(Object(l.a)(e.id),Object(l.a)(e.items))}))),d(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0437\u0430\u043a\u0430\u0437\u0430! \u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[]),Object(p.jsxs)("div",{className:"content p-40 justify-center",children:[Object(p.jsxs)("div",{className:"d-flex align-center",children:[Object(p.jsx)(i.b,{to:"",children:Object(p.jsx)("img",{src:"img/come-back.svg",alt:"comeBack"})}),Object(p.jsx)("h1",{className:"search-title justify-start ml-20",children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b"})]}),a.map((function(e,t){return Object(p.jsx)(L,{items:e,isLoading:o,orderId:e[0]},t)}))]})},E=a(2);var R=function(){var e=c.a.useState([]),t=Object(b.a)(e,2),a=t[0],r=t[1],n=c.a.useState([]),s=Object(b.a)(n,2),i=s[0],d=s[1],m=c.a.useState(""),x=Object(b.a)(m,2),f=x[0],O=x[1],k=c.a.useState([]),_=Object(b.a)(k,2),w=_[0],N=_[1],C=c.a.useState(!1),I=Object(b.a)(C,2),S=I[0],B=I[1],D=c.a.useState(!0),P=Object(b.a)(D,2),L=P[0],R=P[1];c.a.useEffect((function(){function e(){return(e=Object(u.a)(j.a.mark((function e(){var t,a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("https://60d5a9d3943aa60017768b17.mockapi.io/cartItem");case 3:return t=e.sent,e.next=6,g.a.get("https://60d5a9d3943aa60017768b17.mockapi.io/favorites");case 6:return a=e.sent,e.next=9,g.a.get("https://60d5a9d3943aa60017768b17.mockapi.io/items");case 9:c=e.sent,R(!1),d(t.data),N(a.data),r(c.data),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435! \u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.t0));case 19:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var H=function(){var e=Object(u.a)(j.a.mark((function e(t){var a,r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(a=i.find((function(e){return e.parentId===t.id})))){e.next=8;break}return d((function(e){return e.filter((function(e){return Number(e.parentId)!==Number(t.id)}))})),e.next=6,g.a.delete("https://60d5a9d3943aa60017768b17.mockapi.io/cartItem/".concat(a.id));case 6:e.next=14;break;case 8:return d((function(e){return[].concat(Object(l.a)(e),[t])})),e.next=11,g.a.post("https://60d5a9d3943aa60017768b17.mockapi.io/cartItem",t);case 11:r=e.sent,c=r.data,d((function(e){return e.map((function(e){return e.parentId===c.parentId?Object(o.a)(Object(o.a)({},e),{},{id:c.id}):e}))}));case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(u.a)(j.a.mark((function e(t){var a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!w.find((function(e){return e.id===t.id}))){e.next=6;break}N((function(e){return e.filter((function(e){return e.id!==t.id}))})),g.a.delete("https://60d5a9d3943aa60017768b17.mockapi.io/favorites/".concat(t.id)),e.next=11;break;case 6:return e.next=8,g.a.post("https://60d5a9d3943aa60017768b17.mockapi.io/favorites",t);case 8:a=e.sent,r=a.data,N((function(e){return[].concat(Object(l.a)(e),[r])}));case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438/\u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)(h.Provider,{value:{items:a,cartItems:i,favorites:w,isLoading:L,setCartItems:d,changeActiveAddToCart:function(e){return i.some((function(t){return t.parentId===e}))},setCart:B},children:Object(p.jsxs)("div",{className:"wrapper clear",children:[Object(p.jsx)(v,{onShowCart:function(){return B(!0)}}),Object(p.jsx)(y,{onCloseCart:function(){return B(!1)},isCart:S,removeCard:function(e){g.a.delete("https://60d5a9d3943aa60017768b17.mockapi.io/cartItem/".concat(e)),d((function(t){return t.filter((function(t){return t.id!==e}))}))},cartItems:i}),Object(p.jsx)(E.a,{path:"favorites",exact:!0,children:Object(p.jsx)(T,{addInToFavorites:J,addItemToCart:H})}),Object(p.jsx)(E.a,{path:"",exact:!0,children:Object(p.jsx)(A,{items:a,cartItems:i,setSearchText:O,searchText:f,addItemToCart:H,addInToFavorites:J,searchItems:function(e){var t=e.target.value;O(t)},isLoading:L})}),Object(p.jsx)(E.a,{path:"orders",exact:!0,children:Object(p.jsx)(F,{})})]})})};s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(i.a,{children:Object(p.jsx)(R,{})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.c8adfa8e.chunk.js.map
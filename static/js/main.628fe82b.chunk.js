(this["webpackJsonpreact-sneakers"]=this["webpackJsonpreact-sneakers"]||[]).push([[0],{17:function(e,t,a){e.exports={cartStyle:"Header_cartStyle__3dcIv",price:"Header_price__jlPqF",favorites:"Header_favorites__3s7wg"}},21:function(e,t,a){e.exports={card:"Card_card__2BJBv",favorite:"Card_favorite__2Prhu",button:"Card_button__1f_Ux"}},26:function(e,t,a){e.exports={parent:"Order_parent__BWZtz",title:"Order_title__Ib8M4"}},43:function(e,t,a){},5:function(e,t,a){e.exports={overlay:"Drawer_overlay__s7vX3",overlayVisible:"Drawer_overlayVisible__3dvwE",drawer:"Drawer_drawer__Ub6NR",items:"Drawer_items__3r7sJ",cartBlock:"Drawer_cartBlock__2jAo8",emptyCart:"Drawer_emptyCart__DfMpb",greenButton:"Drawer_greenButton__2dXdU",emptyArrow:"Drawer_emptyArrow__2X9ed",cartTotalBlock:"Drawer_cartTotalBlock__3tMHp",cartItem:"Drawer_cartItem__W3vZd",cartItemImg:"Drawer_cartItemImg__2WzBF",removeBtn:"Drawer_removeBtn__24ngi"}},70:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),s=a(36),n=a.n(s),i=a(13),o=(a(43),a(44),a(11)),d=a(14),l=a(8),j=a.n(l),b=a(15),u=a(4),x=a(17),m=a.n(x),f=r.a.createContext(),h=function(){var e=r.a.useContext(f).cartItems,t=e.reduce((function(e,t){return Number(t.price)+Number(e)}),0),a=e.reduce((function(e,t){return[].concat(Object(d.a)(e),[t])}),[]);return{totalPrice:t,percentPrice:Math.floor(t/100*5),orders:a}},O=a.p+"static/media/favorites.09e7654e.svg",p=a.p+"static/media/user.a2d7f9ab.svg",v=a.p+"static/media/cart.896ad80a.svg",g=a(1);var w=function(e){var t=h().totalPrice;return Object(g.jsxs)("header",{className:"d-flex justify-between align-center p-30 ".concat(m.a.header),children:[Object(g.jsxs)(i.b,{to:"/react-sneackers/",className:"d-flex align-center",children:[Object(g.jsx)("img",{width:40,height:40,src:"data:image/png;base64,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",alt:"logo"}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h3",{className:"text-uppercase",children:"React Sneakers"}),Object(g.jsx)("p",{className:"opacity-5",children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u043b\u0443\u0447\u0448\u0438\u0445 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a"})]})]}),Object(g.jsxs)("ul",{className:"d-flex",children:[Object(g.jsxs)("li",{className:m.a.cartStyle,onClick:e.onShowCart,children:[Object(g.jsx)("img",{width:18,height:18,src:v,alt:"cart"}),Object(g.jsxs)("span",{className:m.a.price,children:[t," \u0440\u0443\u0431."]})]}),Object(g.jsx)(i.b,{to:"favorites",className:m.a.favorites,children:Object(g.jsx)("img",{width:18,src:O,alt:"favorites"})}),Object(g.jsx)(i.b,{to:"orders",className:m.a.favorites,children:Object(g.jsx)("img",{width:18,src:p,alt:"user"})})]})]})},I=a(6),k=a.n(I),y=a(5),C=a.n(y),N=a.p+"static/media/back-main.566fdd2a.svg",A=function(e){var t=e.image,a=e.title,c=e.description,s=r.a.useContext(f).setCart;return Object(g.jsxs)("div",{className:C.a.emptyCart,children:[Object(g.jsx)("img",{src:t,alt:"empty-cart"}),Object(g.jsx)("strong",{children:a}),Object(g.jsx)("p",{children:c}),Object(g.jsx)("div",{children:Object(g.jsxs)("button",{onClick:function(){return s(!1)},className:C.a.greenButton,children:[Object(g.jsx)("img",{className:C.a.emptyArrow,src:N,alt:"back"}),"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"]})})]})},D=a.p+"static/media/btn-remove.845f3635.svg",F=a.p+"static/media/order-active.0d1b5f4c.jpg",G=a.p+"static/media/empty-curtain.7d4fd6e1.jpg",S=a.p+"static/media/arrow.166e2db0.svg",Y=function(e){return new Promise((function(t){return setTimeout(t,e)}))};var T=function(e){var t=e.onCloseCart,a=e.removeCard,c=e.cartItems,s=e.isCart,n=h(),i=n.totalPrice,o=n.percentPrice,d=r.a.useContext(f).setCartItems,l=r.a.useState(!1),x=Object(u.a)(l,2),m=x[0],O=x[1],p=r.a.useState([]),v=Object(u.a)(p,2),w=v[0],I=v[1],y=function(){var e=Object(b.a)(j.a.mark((function e(){var t,a,r,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.post("https://60d5a9d3943aa60017768b17.mockapi.io/orders",{items:c});case 3:t=e.sent,a=t.data,I(a),O(!0),d([]),r=0;case 9:if(!(r<c.length)){e.next=18;break}return s=c[r],e.next=13,k.a.delete("https://60d5a9d3943aa60017768b17.mockapi.io/cartItem/".concat(s.id));case 13:return e.next=15,Y(2e3);case 15:r++,e.next=9;break;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0438 \u0437\u0430\u043a\u0430\u0437\u0430 :(  \u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.t0));case 23:case"end":return e.stop()}}),e,null,[[0,20]])})));return function(){return e.apply(this,arguments)}}();return Object(g.jsx)("div",{className:"".concat(C.a.overlay," ").concat(s?C.a.overlayVisible:""," "),children:Object(g.jsxs)("div",{className:C.a.drawer,children:[Object(g.jsxs)("h2",{className:"d-flex justify-between mb-30",children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430 ",Object(g.jsx)("img",{className:"cu-p",src:D,alt:"Remove",onClick:t})]}),c.length>0?Object(g.jsxs)("div",{className:C.a.cartBlock,children:[Object(g.jsx)("div",{className:C.a.items,children:c.map((function(e,t){return Object(g.jsxs)("div",{className:"".concat(C.a.cartItem," d-flex align-center"),children:[Object(g.jsx)("div",{style:{backgroundImage:"url(".concat(e.url,")")},className:C.a.cartItemImg}),Object(g.jsxs)("div",{className:"mr-20 flex",children:[Object(g.jsx)("p",{className:"mb-5",children:e.title}),Object(g.jsxs)("b",{children:[e.price," \u0440\u0443\u0431."]})]}),Object(g.jsx)("img",{onClick:function(){return a(e.id)},className:C.a.removeBtn,src:D,alt:"Remove"})]},t)}))}),Object(g.jsxs)("div",{className:C.a.cartTotalBlock,children:[Object(g.jsxs)("ul",{children:[Object(g.jsxs)("li",{children:[Object(g.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e:"}),Object(g.jsx)("div",{}),Object(g.jsxs)("b",{children:[i," \u0440\u0443\u0431. "]})]}),Object(g.jsxs)("li",{children:[Object(g.jsx)("span",{children:"\u041d\u0430\u043b\u043e\u0433 5%:"}),Object(g.jsx)("div",{}),Object(g.jsxs)("b",{children:[o," \u0440\u0443\u0431. "]})]})]}),Object(g.jsxs)("button",{onClick:y,className:C.a.greenButton,children:["\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437 ",Object(g.jsx)("img",{src:S,alt:"Arrow"})]})]})]}):Object(g.jsx)(A,{image:m?F:G,title:m?"\u0417\u0430\u043a\u0430\u0437 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d!":"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f",description:m?"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 \u2116".concat(w.id," \u0441\u043a\u043e\u0440\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043a\u0443\u0440\u044c\u0435\u0440\u0441\u043a\u043e\u0439 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0435"):"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0443 \u043f\u0430\u0440\u0443 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437"})]})})},J=a(21),U=a.n(J),B=a(38),R=a.p+"static/media/heart-liked.bfa36d4d.svg",E=a.p+"static/media/heart-unliked.4752529a.svg",M=a.p+"static/media/btn-checked.0c4d8afb.svg",z=a.p+"static/media/plus.87a14d68.svg";var q=function(e,t){var a=e.id,c=e.url,s=e.title,n=e.price,i=e.onPlus,o=e.onFavorites,d=e.isLoading,l=void 0!==d&&d,j=e.favorited,b=void 0!==j&&j,x=r.a.useContext(f).changeActiveAddToCart,m=r.a.useState(b),h=Object(u.a)(m,2),O=h[0],p=h[1],v={url:c,title:s,price:n,id:a,parentId:a};return console.log(t.url),Object(g.jsx)("div",{className:U.a.card,children:l?Object(g.jsxs)(B.a,{speed:2,width:155,height:240,viewBox:"0 0 150 240",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(g.jsx)("rect",{x:"0",y:"0",rx:"10",ry:"10",width:"150",height:"135"}),Object(g.jsx)("rect",{x:"0",y:"150",rx:"7",ry:"7",width:"150",height:"15"}),Object(g.jsx)("rect",{x:"0",y:"173",rx:"7",ry:"7",width:"90",height:"15"}),Object(g.jsx)("rect",{x:"-1",y:"212",rx:"7",ry:"7",width:"80",height:"24"}),Object(g.jsx)("rect",{x:"117",y:"205",rx:"7",ry:"7",width:"32",height:"32"})]}):Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{className:U.a.favorite,children:o&&Object(g.jsx)("img",{onClick:function(){o(v),p(!O)},src:O?R:E,alt:"favorite"})}),Object(g.jsx)("img",{width:133,height:112,src:c,alt:"Sneakers"}),Object(g.jsx)("h5",{children:s}),Object(g.jsxs)("div",{className:"d-flex justify-between align-center",children:[Object(g.jsxs)("div",{className:"d-flex flex-column",children:[Object(g.jsx)("span",{children:"\u0426\u0435\u043d\u0430:"}),Object(g.jsxs)("b",{children:[n," \u0440\u0443\u0431."]})]}),i&&Object(g.jsx)("button",{className:U.a.button,onClick:function(){i(v)},children:Object(g.jsx)("img",{src:x(a)?M:z,alt:"Plus"})})]})]})})};var H=function(e){var t=r.a.useContext(f).favorites;return Object(g.jsxs)("div",{className:"content p-40 justify-center",children:[Object(g.jsxs)("div",{className:"d-flex align-center",children:[Object(g.jsx)(i.b,{to:"",children:Object(g.jsx)("img",{src:"img/come-back.svg",alt:"comeBack"})}),Object(g.jsx)("h1",{className:"search-title justify-start ml-20",children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})]}),Object(g.jsx)("div",{className:"d-flex flex-wrap",children:t.map((function(t,a){return Object(c.createElement)(q,Object(o.a)(Object(o.a)({},t),{},{favorited:!0,key:a,onFavorites:function(t){return e.addInToFavorites(t)},onPlus:function(t){return e.addItemToCart(t)}}))}))})]})},X=a.p+"static/media/search.b2233f92.svg",Z=a.p+"static/media/clear-input.95ccde10.svg";var P=function(e){var t=e.items,a=e.searchText,r=e.setSearchText,s=e.addItemToCart,n=e.addInToFavorites,i=e.searchItems,l=e.isLoading;return Object(g.jsxs)("div",{className:"content p-40",children:[Object(g.jsxs)("div",{className:"d-flex align-center justify-between mb-40",children:[Object(g.jsx)("h1",{className:"search-title",children:a?"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443: '".concat(a,"'"):"\u0412\u0441\u0435 \u043a\u0440\u043e\u0441\u043e\u0432\u043a\u0438"}),Object(g.jsxs)("div",{className:"search-block d-flex",children:[Object(g.jsx)("img",{src:X,alt:"Search"}),Object(g.jsx)("input",{onChange:i,value:a,placeholder:"\u041f\u043e\u0438\u0441\u043a..."}),a&&Object(g.jsx)("img",{onClick:function(){return r("")},className:"clear-input cu-p",src:Z,alt:"Remove"})]})]}),Object(g.jsx)("div",{className:"d-flex flex-wrap justify-start",children:function(){var e=t.filter((function(e){return e.title.toLowerCase().includes(a.toLowerCase())}));return console.log(e),(l?Object(d.a)(Array(8)):e).map((function(e,t){return Object(c.createElement)(q,Object(o.a)(Object(o.a)({},e),{},{key:t,onPlus:function(e){return s(e)},onFavorites:function(e){return n(e)},isLoading:l}))}))}()})]})},V=a(26),Q=a.n(V),W=function(e){return Object(g.jsxs)("div",{className:"content p-40 justify-center",children:[Object(g.jsx)("span",{className:Q.a.title,children:"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 \u2116".concat(e.orderId)}),Object(g.jsx)("div",{className:"d-flex flex-wrap ".concat(Q.a.parent),children:e.items.slice(1).map((function(t,a){return Object(c.createElement)(q,Object(o.a)(Object(o.a)({},t),{},{key:a,isLoading:e.isLoading}))}))})]})},L=function(){var e=r.a.useState([]),t=Object(u.a)(e,2),a=t[0],c=t[1],s=r.a.useState(!0),n=Object(u.a)(s,2),o=n[0],l=n[1];return r.a.useEffect((function(){Object(b.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("https://60d5a9d3943aa60017768b17.mockapi.io/orders");case 3:t=e.sent,a=t.data,c(a.map((function(e){return[].concat(Object(d.a)(e.id),Object(d.a)(e.items))}))),l(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0437\u0430\u043a\u0430\u0437\u0430! \u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[]),Object(g.jsxs)("div",{className:"content p-40 justify-center",children:[Object(g.jsxs)("div",{className:"d-flex align-center",children:[Object(g.jsx)(i.b,{to:"",children:Object(g.jsx)("img",{src:"img/come-back.svg",alt:"comeBack"})}),Object(g.jsx)("h1",{className:"search-title justify-start ml-20",children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b"})]}),a.map((function(e,t){return Object(g.jsx)(W,{items:e,isLoading:o,orderId:e[0]},t)}))]})},K=a(2);var _=function(){var e=r.a.useState([]),t=Object(u.a)(e,2),a=t[0],c=t[1],s=r.a.useState([]),n=Object(u.a)(s,2),i=n[0],l=n[1],x=r.a.useState(""),m=Object(u.a)(x,2),h=m[0],O=m[1],p=r.a.useState([]),v=Object(u.a)(p,2),I=v[0],y=v[1],C=r.a.useState(!1),N=Object(u.a)(C,2),A=N[0],D=N[1],F=r.a.useState(!0),G=Object(u.a)(F,2),S=G[0],Y=G[1];r.a.useEffect((function(){function e(){return(e=Object(b.a)(j.a.mark((function e(){var t,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("https://60d5a9d3943aa60017768b17.mockapi.io/cartItem");case 3:return t=e.sent,e.next=6,k.a.get("https://60d5a9d3943aa60017768b17.mockapi.io/favorites");case 6:return a=e.sent,e.next=9,k.a.get("https://60d5a9d3943aa60017768b17.mockapi.io/items");case 9:r=e.sent,Y(!1),l(t.data),y(a.data),c(r.data),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435! \u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.t0));case 19:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var J=function(){var e=Object(b.a)(j.a.mark((function e(t){var a,c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(a=i.find((function(e){return e.parentId===t.id})))){e.next=8;break}return l((function(e){return e.filter((function(e){return Number(e.parentId)!==Number(t.id)}))})),e.next=6,k.a.delete("https://60d5a9d3943aa60017768b17.mockapi.io/cartItem/".concat(a.id));case 6:e.next=14;break;case 8:return l((function(e){return[].concat(Object(d.a)(e),[t])})),e.next=11,k.a.post("https://60d5a9d3943aa60017768b17.mockapi.io/cartItem",t);case 11:c=e.sent,r=c.data,l((function(e){return e.map((function(e){return e.parentId===r.parentId?Object(o.a)(Object(o.a)({},e),{},{id:r.id}):e}))}));case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(b.a)(j.a.mark((function e(t){var a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!I.find((function(e){return e.id===t.id}))){e.next=6;break}y((function(e){return e.filter((function(e){return e.id!==t.id}))})),k.a.delete("https://60d5a9d3943aa60017768b17.mockapi.io/favorites/".concat(t.id)),e.next=11;break;case 6:return e.next=8,k.a.post("https://60d5a9d3943aa60017768b17.mockapi.io/favorites",t);case 8:a=e.sent,c=a.data,y((function(e){return[].concat(Object(d.a)(e),[c])}));case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438/\u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsx)(f.Provider,{value:{items:a,cartItems:i,favorites:I,isLoading:S,setCartItems:l,changeActiveAddToCart:function(e){return i.some((function(t){return t.parentId===e}))},setCart:D},children:Object(g.jsxs)("div",{className:"wrapper clear",children:[Object(g.jsx)(w,{onShowCart:function(){return D(!0)}}),Object(g.jsx)(T,{onCloseCart:function(){return D(!1)},isCart:A,removeCard:function(e){k.a.delete("https://60d5a9d3943aa60017768b17.mockapi.io/cartItem/".concat(e)),l((function(t){return t.filter((function(t){return t.id!==e}))}))},cartItems:i}),Object(g.jsx)(K.a,{path:"favorites",children:Object(g.jsx)(H,{addInToFavorites:U,addItemToCart:J})}),Object(g.jsx)(K.a,{path:"/react-sneackers/",exact:!0,children:Object(g.jsx)(P,{items:a,cartItems:i,setSearchText:O,searchText:h,addItemToCart:J,addInToFavorites:U,searchItems:function(e){var t=e.target.value;O(t)},isLoading:S})}),Object(g.jsx)(K.a,{path:"orders",children:Object(g.jsx)(L,{})})]})})};n.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(i.a,{children:Object(g.jsx)(_,{})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.628fe82b.chunk.js.map
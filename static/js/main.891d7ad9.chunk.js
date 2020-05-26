(this.webpackJsonpburgerbuilder=this.webpackJsonpburgerbuilder||[]).push([[0],[,function(e,t,a){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__3Z2OW",BreadTop:"BurgerIngredient_BreadTop__10eF-",Seeds1:"BurgerIngredient_Seeds1__M5s2L",Seeds2:"BurgerIngredient_Seeds2__6E_M5",Meat:"BurgerIngredient_Meat___p9AM",Cheese:"BurgerIngredient_Cheese__2YLEA",Salad:"BurgerIngredient_Salad__1jb_1",Bacon:"BurgerIngredient_Bacon__1eaMb",displayStyle:"BurgerIngredient_displayStyle__2PQWm"}},,,,,function(e,t,a){e.exports={BuildControl:"BuildControl_BuildControl__fI6b9",Label:"BuildControl_Label__JiFtF",Less:"BuildControl_Less__6fTq2",More:"BuildControl_More__1vc7a"}},function(e,t,a){e.exports={BuildControls:"BuildControls_BuildControls__pPg21",OrderButton:"BuildControls_OrderButton__2jeAr",enable:"BuildControls_enable__99Sdh"}},,,,function(e,t,a){e.exports={content:"Layout_content__181cP"}},function(e,t,a){e.exports={Burger:"Burger_Burger__2RmNS"}},function(e,t,a){e.exports={Modal:"Modal_Modal__q46cV"}},function(e,t,a){e.exports={backdrop1:"Backdrop_backdrop1__3hYQ6"}},,function(e,t,a){e.exports=a(23)},,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),c=a.n(l),s=(a(21),a(2)),i=a(3),o=a(5),d=a(4),u=function(e){return e.children},m=a(11),p=a.n(m),b=function(e){return r.a.createElement(u,null,r.a.createElement("div",null,"Toolbar , sidebar , Backdrop"),r.a.createElement("main",{className:p.a.content},e.children))},g=a(8),h=a(15),_=a(1),E=a.n(_),f=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:E.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:E.a.BreadTop},r.a.createElement("div",{className:E.a.Seeds1}),r.a.createElement("div",{className:E.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:E.a.Meat});break;case"cheese":e=r.a.createElement("div",{className:E.a.Cheese});break;case"salad":e=r.a.createElement("div",{className:E.a.Salad});break;case"bacon":e=r.a.createElement("div",{className:E.a.Bacon});break;default:e=null}return r.a.createElement("div",{className:E.a.displayStyle},e)}}]),a}(n.Component),v=a(12),B=a.n(v),y=function(e){console.log(Object.keys(e.ingredients)+" Object.keys(props.ingredients)");var t=Object.keys(e.ingredients).map((function(t){return Object(h.a)(Array(e.ingredients[t])).map((function(e,a){return r.a.createElement(f,{key:t+a,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please start adding ingredients !")),console.log(t),r.a.createElement("div",{className:B.a.Burger},r.a.createElement(f,{type:"bread-top"}),t,r.a.createElement(f,{type:"bread-bottom"}))},k=a(7),C=a.n(k),O=a(6),S=a.n(O),N=function(e){return r.a.createElement("div",{className:S.a.BuildControl},r.a.createElement("div",{className:S.a.Label},e.label),r.a.createElement("button",{className:S.a.Less,onClick:e.removed},"Less"),r.a.createElement("button",{className:S.a.More,onClick:e.added},"More"))},j=[{label:"Salad",type:"salad"},{label:"Meat",type:"meat"},{label:"Cheese",type:"cheese"},{label:"Bacon",type:"bacon"}],M=function(e){return r.a.createElement("div",{className:C.a.BuildControls},r.a.createElement("h3",null,"Current Price : ",e.price,"/-"),j.map((function(t){return r.a.createElement(N,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientsRemoved(t.type)}})})),r.a.createElement("button",{className:C.a.OrderButton,disabled:!e.purchasable,onClick:e.purchaseHandler},"ORDER NOW !"))},w=a(13),I=a.n(w),P=a(14),L=a.n(P),x=function(e){return e.show?r.a.createElement("div",{className:L.a.backdrop1,onClick:e.clicked}):null},H=function(e){return r.a.createElement(u,null,r.a.createElement(x,{show:e.show,clicked:e.modalClosed}),r.a.createElement("div",{className:I.a.Modal,style:{transform:e.show?"translateY(0)":"translateY(-100vh)"}},e.children))},T=function(e){var t=Object.keys(e.ingredients).map((function(t,a){return r.a.createElement("li",{key:a},r.a.createElement("span",{style:{textTransform:"capitalize"}},t," "),": ",e.ingredients[t])}));return r.a.createElement(u,null,r.a.createElement("h2",null,"Your Order"),r.a.createElement("p",null,"With following ingredients : "),r.a.createElement("ul",null,t))},A={salad:5,cheese:10,meat:15,bacon:10},W=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).updatePurchaseState=function(e){var t=Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),4);n.setState({purchasable:t>4})},n.addIngredientHandler=function(e){var t=n.state.ingredients[e]+1,a=Object(g.a)({},n.state.ingredients);a[e]=t;var r=A[e],l=n.state.totalPrice+r;n.setState({totalPrice:l,ingredients:a}),n.updatePurchaseState(a)},n.removeIngredientHandler=function(e){var t=n.state.ingredients[e],a=t>0?t-1:t,r=Object(g.a)({},n.state.ingredients);r[e]=a;var l=A[e],c=n.state.totalPrice,s=c>4?c-l:c;n.setState({totalPrice:s,ingredients:r}),n.updatePurchaseState(r)},n.purchaseHandler=function(){n.setState({purchasing:!0})},n.modalClosed=function(){n.setState({purchasing:!1})},n.state={ingredients:{salad:0,meat:0,bacon:0,cheese:0},totalPrice:4,purchasable:!1,purchasing:!1},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.ingredients;return r.a.createElement(u,null,r.a.createElement(y,{ingredients:e}),r.a.createElement(M,{ingredientAdded:this.addIngredientHandler,ingredientsRemoved:this.removeIngredientHandler,price:this.state.totalPrice,purchasable:this.state.purchasable,purchaseHandler:this.purchaseHandler}),r.a.createElement(H,{show:this.state.purchasing,modalClosed:this.modalClosed},r.a.createElement(T,{ingredients:this.state.ingredients})))}}]),a}(n.Component),R=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(b,null,r.a.createElement("p",null,"Hello Testing"),r.a.createElement("p",null,r.a.createElement("button",{className:"btn btn-primary"},"Click")),r.a.createElement(W,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(22);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[16,1,2]]]);
//# sourceMappingURL=main.891d7ad9.chunk.js.map
(this["webpackJsonparound-react"]=this["webpackJsonparound-react"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(7),s=a.n(c),o=(a(14),a(2)),i=a(0);var l=function(){return Object(i.jsx)("header",{className:"header",children:Object(i.jsx)("div",{className:"header__logo"})})},d=a(6),u=a(8),m=a(9),j=new(function(){function e(t){var a=t.baseUrl,n=t.headers;Object(u.a)(this,e),this._baseUrl=a,this._headers=n}return Object(m.a)(e,[{key:"getAppInfo",value:function(){return Promise.all([this.getInitialCards(),this.getUserInfo()])}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:e.imageLink})}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}},{key:"changeUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers,method:"PATCH",body:JSON.stringify({name:e.name,about:e.job})}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}},{key:"addCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers,method:"POST",body:JSON.stringify({name:e.title,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{headers:this._headers,method:"DELETE"}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}},{key:"updateLike",value:function(e,t){return e?fetch("".concat(this._baseUrl,"/cards/likes/").concat(t),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))})):fetch("".concat(this._baseUrl,"/cards/likes/").concat(t),{method:"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}}]),e}())({baseUrl:"https://around.nomoreparties.co/v1/group-7",headers:{Authorization:"7fda3d54-cdd7-4a60-96d1-9efeeab5176a","Content-Type":"application/json"}});var b=function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("li",{className:"card",children:[Object(i.jsx)("button",{className:"card__delete-button","aria-label":"delete-card",type:"button"}),Object(i.jsx)("div",{className:"card__image",style:{backgroundImage:"url(".concat(e.card.link,")")},onClick:function(){e.onCardClick(e.card)}}),Object(i.jsxs)("div",{className:"card__text",children:[Object(i.jsx)("h2",{className:"card__title",children:e.card.name}),Object(i.jsxs)("div",{className:"card__like-container",children:[Object(i.jsx)("button",{className:"card__like-button","aria-label":"like-card",type:"button"}),Object(i.jsx)("p",{className:"card__like-counter",children:e.card.likes.length})]})]})]},e.card._id)})};var _=function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("section",{className:"modal modal_type_".concat(e.name," ").concat(e.isOpen?"modal_opened":""),children:Object(i.jsxs)("div",{className:"modal__container modal__".concat(e.name),children:[Object(i.jsx)("h3",{className:"modal__header",children:e.title}),Object(i.jsxs)("form",{className:"form",name:"form__".concat(e.name),action:"#",noValidate:!0,children:[e.children,Object(i.jsx)("button",{className:"form__submit-button form__submit-button_inactive",type:"submit","data-text":"Save",children:e.buttonText})]}),Object(i.jsx)("button",{className:"modal__reset-button",type:"reset","aria-label":"Close button",onClick:e.onClose})]})})})};var h=function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"modal modal_type_image"+(e.card?" modal_opened":""),children:Object(i.jsxs)("figure",{className:"modal__container modal__open-image",children:[Object(i.jsx)("button",{className:"modal__reset-button",type:"reset","aria-label":"Close button",onClick:e.onClose}),Object(i.jsx)("img",{className:"modal__image",src:e.card?e.card.link:"#",alt:e.card?e.card.name:""}),Object(i.jsx)("figcaption",{className:"modal__image-caption",children:e.card?e.card.name:""})]})})})};var p=function(e){var t=r.a.useState(""),a=Object(o.a)(t,2),n=a[0],c=a[1],s=r.a.useState(""),l=Object(o.a)(s,2),u=l[0],m=l[1],p=r.a.useState(""),f=Object(o.a)(p,2),O=f[0],x=f[1],g=r.a.useState([]),v=Object(o.a)(g,2),N=v[0],k=v[1];return r.a.useEffect((function(){j.getUserInfo().then((function(e){c(e.name),m(e.about),x(e.avatar)})).catch((function(e){console.log(e)}))}),[]),r.a.useEffect((function(){j.getInitialCards().then((function(e){k((function(t){return[].concat(Object(d.a)(t),Object(d.a)(e))}))})).catch((function(e){console.log(e)}))}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("section",{className:"profile",children:[Object(i.jsxs)("div",{className:"profile__container",children:[Object(i.jsxs)("div",{className:"profile__image-container",children:[Object(i.jsx)("img",{className:"profile__avatar",src:O,style:{backgroundImage:"url(".concat(O,")")},alt:"profile avatar"}),Object(i.jsx)("button",{className:"profile__button profile__button_edit-avatar profile__button_hoverable","aria-label":"edit-avatar",type:"button",onClick:e.onEditAvatar})]}),Object(i.jsxs)("div",{className:"profile__info",children:[Object(i.jsxs)("div",{className:"profile__text",children:[Object(i.jsx)("h1",{className:"profile__name",children:n}),Object(i.jsx)("p",{className:"profile__title",children:u})]}),Object(i.jsx)("button",{className:"button profile__edit-button","aria-label":"edit",type:"button",onClick:e.onEditProfile})]})]}),Object(i.jsx)("button",{className:"button profile__add-button","aria-label":"add",type:"button",onClick:e.onAddPlace})]}),Object(i.jsxs)(_,{name:"edit-profile",title:"Edit profile",buttonText:"Save",isOpen:e.isEditProfilePopupOpen,onClose:e.onClose,children:[Object(i.jsx)("input",{id:"nameInput",type:"text",name:"name",placeholder:"Name",className:"form__input form__input_type_name",minLength:"2",maxLength:"40",required:!0}),Object(i.jsx)("span",{id:"nameInput-error",className:"form__input-error"}),Object(i.jsx)("input",{id:"titleInput",type:"text",name:"job",placeholder:"About me",className:"form__input form__input_type_title",minLength:"2",maxLength:"200",required:!0}),Object(i.jsx)("span",{id:"titleInput-error",className:"form__input-error"})]}),Object(i.jsxs)(_,{name:"add-card",title:"New place",buttonText:"Create",isOpen:e.isAddPlacePopupOpen,onClose:e.onClose,children:[Object(i.jsx)("input",{id:"name-input",type:"text",name:"title",placeholder:"Title",className:"form__input form__input_type_card-title",minLength:"1",maxLength:"30",required:!0}),Object(i.jsx)("span",{id:"name-input-error",className:"form__input-error"}),Object(i.jsx)("input",{id:"link-input",type:"url",name:"link",placeholder:"Image link",className:"form__input form__input_type_url",required:!0}),Object(i.jsx)("span",{id:"link-input-error",className:"form__input-error"})]}),Object(i.jsx)(h,{onClose:e.onClose,card:e.selectedCard}),Object(i.jsx)(_,{name:"delete-card",title:"Are you sure?",buttonText:"Yes",isOpen:!1,onClose:e.onClose}),Object(i.jsxs)(_,{name:"change-avatar",title:"Change profile picture",buttonText:"Save",isOpen:e.isEditAvatarPopupOpen,onClose:e.onClose,children:[Object(i.jsx)("input",{id:"avatar-input",type:"url",name:"imageLink",placeholder:"Profile image link",className:"form__input form__input_type_url",required:!0}),Object(i.jsx)("span",{id:"avatar-input-error",className:"form__input-error"})]}),Object(i.jsx)("section",{className:"cards",children:Object(i.jsx)("ul",{className:"cards__list",children:N.map((function(t){return Object(i.jsx)(b,{card:t,onCardClick:e.onCardClick},t._id)}))})})]})};var f=function(){return Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)("p",{className:"footer__copyright",children:"\xa9 2021 Gabriela Baranciuc - Around The U.S."})})};var O=function(e){var t=r.a.useState(!1),a=Object(o.a)(t,2),n=a[0],c=a[1],s=r.a.useState(!1),d=Object(o.a)(s,2),u=d[0],m=d[1],j=r.a.useState(!1),b=Object(o.a)(j,2),_=b[0],h=b[1],O=r.a.useState(null),x=Object(o.a)(O,2),g=x[0],v=x[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l,{}),Object(i.jsx)(p,{onEditProfile:function(){c(!0)},onAddPlace:function(){m(!0)},onEditAvatar:function(){h(!0)},onCardClick:function(e){v(e)},onClose:function(){m(!1),c(!1),h(!1),v(null)},isEditProfilePopupOpen:n,isAddPlacePopupOpen:u,isEditAvatarPopupOpen:_,selectedCard:g}),Object(i.jsx)(f,{})]})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(O,{})}),document.getElementById("root")),x()}},[[16,1,2]]]);
//# sourceMappingURL=main.60ada47e.chunk.js.map
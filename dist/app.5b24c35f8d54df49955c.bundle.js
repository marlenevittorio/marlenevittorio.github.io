!function(e){function n(n){for(var a,o,l=n[0],c=n[1],_=n[2],d=0,m=[];d<l.length;d++)o=l[d],i[o]&&m.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(s&&s(n);m.length;)m.shift()();return r.push.apply(r,_||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],a=!0,l=1;l<t.length;l++){var c=t[l];0!==i[c]&&(a=!1)}a&&(r.splice(n--,1),e=o(o.s=t[0]))}return e}var a={},i={0:0},r=[];function o(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=a,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)o.d(t,a,function(n){return e[n]}.bind(null,a));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=n,l=l.slice();for(var _=0;_<l.length;_++)n(l[_]);var s=c;r.push([31,1]),t()}([,,,,,,,,,,,,function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),i=t(26);n.TranslateComponent=function(e){return a.createElement(i.Translation,null,function(n){return n(e.t,e.tV)})}},,function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(19),i=t(72);!function(e){e[e.None=0]="None",e[e.Wedding=1]="Wedding",e[e.Registry=2]="Registry"}(n.SelectedPage||(n.SelectedPage={})),n.store=a.createStore(a.combineReducers({selectedPage:i.default}))},,function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e){e.NONE="NONE",e.WEDDING="WEDDING",e.REGISTRY="REGISTRY"}(n.SELECTED_ACTION_TYPE||(n.SELECTED_ACTION_TYPE={}))},,,,,,,,,function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),i=t(17),r=t(16),o=t(0);n.default=i.connect(function(e){return{selected:e.selectedPage}})(function(e){var n=a.useRef(null);return a.useEffect(function(){e.selected===e.selectedPage&&(n.current.scrollIntoView({behavior:"smooth",inline:"center"}),e.dispatch({type:r.SELECTED_ACTION_TYPE.NONE}))},[e.selected]),o.createElement("div",{ref:n},e.children)})},,,,,,function(e,n,t){e.exports=t(32)},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),i=t(15),r=t(37);t(77),t(83);var o=t(95),l=t(14),c=t(17);i.render(a.createElement(a.Suspense,{fallback:a.createElement(o.Loading,null)},a.createElement(c.Provider,{store:l.store},a.createElement(r.App,null))),document.getElementById("app"))},,,,,function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),i=t(38),r=t(51),o=t(54),l=t(61),c=t(64),_=t(68),s=t(74);n.App=function(){return a.createElement("div",{className:r.container},a.createElement("div",{className:r.background},a.createElement("div",{className:r.title},a.createElement(i.Title,null)),a.createElement("div",{className:r.menu},a.createElement(o.default,null)),a.createElement("div",{className:r.timer},a.createElement(c.Timer,null)),a.createElement("div",{className:r.image},a.createElement(l.ImageCouple,null)),a.createElement("div",{className:r.intro},a.createElement(_.Wedding,null)),a.createElement("div",{className:r.gifts},a.createElement(s.Gift,null))))}},function(e,n,t){"use strict";var a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e}).apply(this,arguments)};Object.defineProperty(n,"__esModule",{value:!0});var i=t(0),r=t(12),o=t(48);n.Title=function(){return i.createElement("div",null,i.createElement("h1",{className:o.title},i.createElement(r.TranslateComponent,a({},{t:"app.title"}))))}},,,,,,,,,,function(e,n,t){var a=t(49);"string"==typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(8)(a,i);a.locals&&(e.exports=a.locals)},function(e,n,t){(n=e.exports=t(7)(!1)).push([e.i,'.title__title___1WeO9 {\n  text-align: center;\n  color: #373737;\n  font-family: "Garamond-Regular";\n  font-size: 50px; }\n',""]),n.locals={title:"title__title___1WeO9"}},,function(e,n,t){var a=t(52);"string"==typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(8)(a,i);a.locals&&(e.exports=a.locals)},function(e,n,t){n=e.exports=t(7)(!1);var a=t(24)(t(53));n.push([e.i,".app__container___841tp {\n  background-image: url("+a+");\n  background-size: cover;\n  background-color: #f5f5f5; }\n  @media screen and (min-width: 1024px) {\n    .app__container___841tp {\n      padding: 100px; } }\n\n.app__background___3koFW {\n  height: auto;\n  border: 1px solid #E2E2E2;\n  background-color: white;\n  padding: 10px 40px; }\n  @media screen and (min-width: 640px) {\n    .app__background___3koFW {\n      padding: 20px 80px; } }\n  @media screen and (min-width: 1024px) {\n    .app__background___3koFW {\n      padding: 20px 100px; } }\n\n.app__menu___QCZZI {\n  margin-top: 20px; }\n  @media screen and (min-width: 640px) {\n    .app__menu___QCZZI {\n      margin-top: 40px; } }\n\n.app__timer___-n3NG {\n  margin-top: 20px; }\n  @media screen and (min-width: 640px) {\n    .app__timer___-n3NG {\n      margin-top: 30px; } }\n\n.app__image___31Jpd {\n  margin-top: 20px; }\n\n.app__intro___1M75f {\n  margin-top: 10px; }\n  @media screen and (min-width: 640px) {\n    .app__intro___1M75f {\n      margin-top: 50px; } }\n\n.app__gifts___1NTr4 {\n  margin-top: 10px; }\n",""]),n.locals={container:"app__container___841tp",background:"app__background___3koFW",menu:"app__menu___QCZZI",timer:"app__timer___-n3NG",image:"app__image___31Jpd",intro:"app__intro___1M75f",gifts:"app__gifts___1NTr4"}},function(e,n,t){e.exports=t.p+"63ccf25432be4eb3c26e37e3aeb3f6b8.png"},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(55),i=t(0),r=t(17),o=t(16),l=t(12);function c(e){return i.createElement("div",{className:a.container},i.createElement("div",{className:a.line}),i.createElement("div",{className:a.link},i.createElement(l.TranslateComponent,{t:"menu.home"})),i.createElement("div",{onClick:function(){e.dispatch({type:o.SELECTED_ACTION_TYPE.WEDDING})},className:a.link},i.createElement(l.TranslateComponent,{t:"menu.wedding"})),i.createElement("div",{onClick:function(){e.dispatch({type:o.SELECTED_ACTION_TYPE.REGISTRY})},className:a.link},i.createElement(l.TranslateComponent,{t:"menu.registry"})),i.createElement("div",{className:a.line}))}n.Menu=c,n.default=r.connect()(c)},function(e,n,t){var a=t(56);"string"==typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(8)(a,i);a.locals&&(e.exports=a.locals)},function(e,n,t){(n=e.exports=t(7)(!1)).push([e.i,".menu__container___1zGJl {\n  display: flex;\n  align-items: center; }\n\n.menu__line___RGyuk {\n  height: 2px;\n  background-color: #E2E2E2;\n  width: 40px;\n  box-sizing: border-box;\n  padding: 0 20px; }\n  @media screen and (min-width: 640px) {\n    .menu__line___RGyuk {\n      flex: 1; } }\n  @media screen and (min-width: 1024px) {\n    .menu__line___RGyuk {\n      padding: 0;\n      flex: 2; } }\n\n.menu__link___1ikeV {\n  cursor: pointer;\n  font-family: 'Roboto-Medium';\n  font-size: 14px;\n  color: #535353;\n  text-align: center;\n  text-transform: uppercase;\n  flex: 1; }\n  @media screen and (min-width: 640px) {\n    .menu__link___1ikeV {\n      font-size: 16px; } }\n  @media screen and (min-width: 1024px) {\n    .menu__link___1ikeV {\n      font-size: 18px; } }\n",""]),n.locals={container:"menu__container___1zGJl",line:"menu__line___RGyuk",link:"menu__link___1ikeV"}},,,,,function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),i=t(62);n.ImageCouple=function(){return a.createElement("div",{className:i.container},a.createElement("img",{width:"100%",src:"resources/images/couple.jpg",alt:"Vittorio & marlene in a park"}))}},function(e,n,t){var a=t(63);"string"==typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(8)(a,i);a.locals&&(e.exports=a.locals)},function(e,n,t){(n=e.exports=t(7)(!1)).push([e.i,".imageCouple__container___3e8Ij {\n  width: 100%;\n  position: relative; }\n\n.imageCouple__image___20f9H {\n  width: 100%;\n  height: 100%; }\n",""]),n.locals={container:"imageCouple__container___3e8Ij",image:"imageCouple__image___20f9H"}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),i=t(65),r=t(0),o=t(12),l=t(67);function c(){var e,n=new Date(l.WEDDING_DATE).getTime(),t=(new Date).getTime(),a=n>t?n-t:t-n;return{days:(e=a,Math.floor(e/864e5)),hours:_(a),minutes:s(a),seconds:d(a)}}function _(e){return Math.floor(e%864e5/36e5)}function s(e){return Math.floor(e%36e5/6e4)}function d(e){return Math.floor(e%6e4/1e3)}n.Timer=function(){var e=r.useState(c()),n=e[0],t=e[1];return r.useEffect(function(){var e=setInterval(function(){t(c())},1e3);return function(){clearInterval(e)}},[]),a.createElement("div",{className:i.timer},a.createElement("div",{className:i.header},a.createElement("div",null,a.createElement(o.TranslateComponent,{t:"timer.days"})),a.createElement("div",null,a.createElement(o.TranslateComponent,{t:"timer.hours"})),a.createElement("div",null,a.createElement(o.TranslateComponent,{t:"timer.minutes"})),a.createElement("div",null,a.createElement(o.TranslateComponent,{t:"timer.seconds"}))),a.createElement("div",{className:i.time},a.createElement("div",null,n.days),a.createElement("div",null,n.hours),a.createElement("div",null,n.minutes),a.createElement("div",null,n.seconds)))}},function(e,n,t){var a=t(66);"string"==typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(8)(a,i);a.locals&&(e.exports=a.locals)},function(e,n,t){(n=e.exports=t(7)(!1)).push([e.i,'.timer__timer___1kyaV {\n  font-family: "Roboto-light";\n  color: #535353; }\n\n.timer__header___2NfC4, .timer__time___3jl-F {\n  justify-content: center;\n  display: flex; }\n  .timer__header___2NfC4 div, .timer__time___3jl-F div {\n    text-align: center;\n    flex: 1; }\n\n.timer__header___2NfC4 {\n  font-size: 16px; }\n  @media screen and (min-width: 640px) {\n    .timer__header___2NfC4 {\n      font-size: 22px; } }\n  @media screen and (min-width: 1024px) {\n    .timer__header___2NfC4 {\n      font-size: 30px; } }\n\n.timer__time___3jl-F {\n  margin-top: 5px;\n  font-size: 30px; }\n  @media screen and (min-width: 640px) {\n    .timer__time___3jl-F {\n      margin-top: 10px;\n      font-size: 50px; } }\n  @media screen and (min-width: 1024px) {\n    .timer__time___3jl-F {\n      font-size: 60px; } }\n',""]),n.locals={timer:"timer__timer___1kyaV",header:"timer__header___2NfC4",time:"timer__time___3jl-F"}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.WEDDING_DATE="Aug 30, 2019 15:30:00"},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),i=t(69),r=t(12),o=t(71),l=t(14),c=t(25),_=t(73);n.Wedding=function(){return a.createElement(c.default,{selectedPage:l.SelectedPage.Wedding},a.createElement("div",{className:i.text},a.createElement(r.TranslateComponent,{t:"wedding.celebrate"})),a.createElement("div",{className:i.line}),a.createElement("div",{className:i.text},a.createElement(r.TranslateComponent,{t:"wedding.when"})),a.createElement("div",{className:i.place},a.createElement("div",{className:i.church},a.createElement("div",{className:i.textPlace},a.createElement(r.TranslateComponent,{t:"wedding.where.churchTitle"})),a.createElement("div",{className:i.textPlace},a.createElement(r.TranslateComponent,{t:"wedding.where.church"})),a.createElement("div",{className:i.map},a.createElement(o.GoogleMap,{url:_.Maps.church}))),a.createElement("div",{className:i.reception},a.createElement("div",{className:i.textPlace},a.createElement(r.TranslateComponent,{t:"wedding.where.receptionTitle"})),a.createElement("div",{className:i.textPlace},a.createElement(r.TranslateComponent,{t:"wedding.where.reception"})),a.createElement("div",{className:i.map},a.createElement(o.GoogleMap,{url:_.Maps.reception})))))}},function(e,n,t){var a=t(70);"string"==typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(8)(a,i);a.locals&&(e.exports=a.locals)},function(e,n,t){(n=e.exports=t(7)(!1)).push([e.i,".wedding__line___UjtVp {\n  height: 2px;\n  background-color: #E2E2E2; }\n\n.wedding__text___29E5x, .wedding__textPlace___3Fmbt {\n  font-family: 'Roboto-light';\n  color: #535353;\n  padding: 15px 0;\n  text-align: center;\n  text-transform: uppercase; }\n  @media screen and (min-width: 640px) {\n    .wedding__text___29E5x, .wedding__textPlace___3Fmbt {\n      padding: 20px 0; } }\n\n.wedding__textPlace___3Fmbt {\n  font-size: 18px; }\n  @media screen and (min-width: 640px) {\n    .wedding__textPlace___3Fmbt {\n      font-size: 20px; } }\n\n.wedding__text___29E5x {\n  font-size: 18px; }\n  @media screen and (min-width: 640px) {\n    .wedding__text___29E5x {\n      font-size: 24px; } }\n\n@media screen and (min-width: 640px) {\n  .wedding__place___2O4W1 {\n    display: flex;\n    justify-content: space-around; }\n    .wedding__place___2O4W1 > div {\n      flex: 1; } }\n\n.wedding__place___2O4W1 > div {\n  padding: 10px; }\n\n.wedding__map___1z1lX {\n  height: 300px; }\n  @media screen and (min-width: 640px) {\n    .wedding__map___1z1lX {\n      height: 400px; } }\n",""]),n.locals={line:"wedding__line___UjtVp",text:"wedding__text___29E5x",textPlace:"wedding__textPlace___3Fmbt",place:"wedding__place___2O4W1",map:"wedding__map___1z1lX"}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0);n.GoogleMap=function(e){return a.createElement("iframe",{src:e.url,height:"100%",width:"100%",frameBorder:"0",style:{border:0},allowFullScreen:!0})}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(14),i=t(16);function r(){return a.SelectedPage.None}n.getDefaultState=r,n.default=function(e,n){switch(void 0===e&&(e=r()),n.type){case i.SELECTED_ACTION_TYPE.WEDDING:return a.SelectedPage.Wedding;case i.SELECTED_ACTION_TYPE.REGISTRY:return a.SelectedPage.Registry;case i.SELECTED_ACTION_TYPE.NONE:return a.SelectedPage.None;default:return e}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.Maps={church:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.2120753181193!2d11.123048939169369!3d43.97002999518185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132af056347cb95f%3A0x4920c801b497c74b!2sBadia+di+San+Salvatore!5e0!3m2!1sen!2suk!4v1554542995955!5m2!1sen!2suk",reception:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2871.977640902132!2d11.116619750413772!3d43.959828040465204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132af0e2da7231e7%3A0xffa861b81336e931!2sVilla+Il+Mulinaccio!5e0!3m2!1sen!2suk!4v1554543513147!5m2!1sen!2suk"}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),i=t(75),r=t(12),o=t(25),l=t(14);n.Gift=function(){return a.createElement(o.default,{selectedPage:l.SelectedPage.Registry},a.createElement("div",{className:i.line}),a.createElement("div",{className:i.container},a.createElement("div",{className:i.title},a.createElement(r.TranslateComponent,{t:"gift.title"})),a.createElement("div",{className:i.text},a.createElement(r.TranslateComponent,{t:"gift.text"})),a.createElement("div",{className:i.detailsContainer},a.createElement("div",{className:i.details},a.createElement("div",{className:i.account},a.createElement("span",{className:i.accountTitle},a.createElement(r.TranslateComponent,{t:"gift.account.name"})),a.createElement("span",{className:i.accountValue},a.createElement(r.TranslateComponent,{t:"gift.account.value"}))),a.createElement("div",{className:i.account},a.createElement("span",{className:i.accountTitle},a.createElement(r.TranslateComponent,{t:"gift.sortCode.name"})),a.createElement("span",{className:i.accountValue},a.createElement(r.TranslateComponent,{t:"gift.sortCode.value"}))),a.createElement("div",{className:i.account},a.createElement("span",{className:i.accountTitle},a.createElement(r.TranslateComponent,{t:"gift.bic.name"})),a.createElement("span",{className:i.accountValue},a.createElement(r.TranslateComponent,{t:"gift.bic.value"}))),a.createElement("div",{className:i.account},a.createElement("span",{className:i.accountTitle},a.createElement(r.TranslateComponent,{t:"gift.iban.name"})),a.createElement("span",{className:i.accountValue},a.createElement(r.TranslateComponent,{t:"gift.iban.value"})))))))}},function(e,n,t){var a=t(76);"string"==typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(8)(a,i);a.locals&&(e.exports=a.locals)},function(e,n,t){(n=e.exports=t(7)(!1)).push([e.i,'.gift__commonCenteredText___1NdO8 {\n  font-family: "Roboto-light";\n  text-align: center;\n  color: #535353; }\n\n.gift__line___2ZXPn {\n  height: 2px;\n  background-color: #E2E2E2; }\n\n.gift__container___2CvGR {\n  padding: 20px; }\n\n.gift__text___3rfDf {\n  margin-top: 10px;\n  font-size: 16px; }\n\n.gift__title___Hb0bX {\n  font-size: 18px;\n  text-transform: uppercase; }\n\n.gift__detailsContainer___vOWkR {\n  margin-top: 10px; }\n\n.gift__account___2FkW4 {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  padding: 10px; }\n\n.gift__details___OLubx {\n  margin-top: 20px;\n  display: flex;\n  flex-wrap: wrap; }\n\n.gift__accountTitle___3K9H2 {\n  font-size: 16px;\n  text-transform: uppercase; }\n\n.gift__accountValue___2Sw05 {\n  font-size: 16px;\n  font-style: italic; }\n\n.gift__detailsTitle___3SAXt {\n  width: 100%;\n  font-size: 14px;\n  text-transform: uppercase; }\n',""]),n.locals={commonCenteredText:"gift__commonCenteredText___1NdO8",line:"gift__line___2ZXPn",container:"gift__container___2CvGR",text:"gift__text___3rfDf gift__commonCenteredText___1NdO8",title:"gift__title___Hb0bX gift__commonCenteredText___1NdO8",detailsContainer:"gift__detailsContainer___vOWkR",account:"gift__account___2FkW4",details:"gift__details___OLubx",accountTitle:"gift__accountTitle___3K9H2 gift__commonCenteredText___1NdO8",accountValue:"gift__accountValue___2Sw05 gift__commonCenteredText___1NdO8",detailsTitle:"gift__detailsTitle___3SAXt gift__commonCenteredText___1NdO8"}},function(e,n,t){var a=t(78);"string"==typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(8)(a,i);a.locals&&(e.exports=a.locals)},function(e,n,t){n=e.exports=t(7)(!1);var a=t(24),i=a(t(79)),r=a(t(80)),o=a(t(81)),l=a(t(82));n.push([e.i,"@font-face {\n  font-family: 'Roboto';\n  src: url("+i+") format(\"truetype\"); }\n\n@font-face {\n  font-family: 'Roboto-light';\n  src: url("+r+") format(\"truetype\"); }\n\n@font-face {\n  font-family: 'Roboto-medium';\n  src: url("+o+") format(\"truetype\"); }\n\n@font-face {\n  font-family: 'Garamond-Regular';\n  src: url("+l+") format(\"truetype\"); }\n\nbody {\n  margin: 0;\n  font-family: 'Roboto';\n  padding: 0; }\n",""])},function(e,n,t){e.exports=t.p+"4312f1fbdcf4d54af4506dabdce08010.ttf"},function(e,n,t){e.exports=t.p+"2382fa8a8afcdbe3124c840bd6ef7024.ttf"},function(e,n,t){e.exports=t.p+"b2bcaa52d04bde9a494fd954ef7e7e7b.ttf"},function(e,n,t){e.exports=t.p+"4ae6bf0ed4e281d93844e6663aefe2df.ttf"},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(96),i=t(84),r=t(26),o=t(85);a.default.use(r.initReactI18next).use(i.default).use(o.default).init({backend:{loadPath:"i18n/{{lng}}.json"},fallbackLng:"en"}),n.default=a.default},,,,,,,,,,,,function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0);n.Loading=function(){return a.createElement("div",null,"Loading...")}}]);
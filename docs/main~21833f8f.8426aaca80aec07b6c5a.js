!function(e){function n(n){for(var r,i,l=n[0],c=n[1],u=n[2],f=0,d=[];f<l.length;f++)i=l[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(s&&s(n);d.length;)d.shift()();return a.push.apply(a,u||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,l=1;l<t.length;l++){var c=t[l];0!==o[c]&&(r=!1)}r&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={4:0},a=[];function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=o[e]=[n,r]}));n.push(t[2]=r);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=function(e){return i.p+""+({}[e]||e)+".8426aaca80aec07b6c5a.js"}(e);var c=new Error;a=function(n){l.onerror=l.onload=null,clearTimeout(u);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,t[1](c)}o[e]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:l})}),12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="./",i.oe=function(e){throw console.error(e),e};var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=n,l=l.slice();for(var u=0;u<l.length;u++)n(l[u]);var s=c;a.push([621,6,5,10,14,11,3,9,13,8,15,7,12]),t()}({190:function(e,n,t){"use strict";var r=t(196),o=t.n(r)()((function(e){return e[1]}));o.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap);"]),o.push([e.i,".PageTitle_OrangeU {\r\n    display: block;\r\n    color: #01003c;\r\n    font-size: 6vw;\r\n    text-decoration: underline;\r\n    text-decoration-color: rgb(255, 166, 0);\r\n    text-underline-offset: 0.6vh;\r\n    font-weight: 600;\r\n    text-align: center;\r\n}\r\n\r\n.PageTitle_U {\r\n    display: block;\r\n    color: #01003c;\r\n    font-size: 6vw;\r\n    text-decoration: underline;\r\n    text-underline-offset: 0.6vh;\r\n    font-weight: 600;\r\n    text-align: center;\r\n}\r\n\r\n.bgimgtop {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    z-index: 0;\r\n    height: 41vh;\r\n}\r\n\r\n.bgbottombluebar {\r\n    background-color: #00253a;\r\n    height: 11vh;\r\n}\r\n\r\n.pageDescription_Text {\r\n    display: block;\r\n    color: #01003c;\r\n    font-size: 4.6vw;\r\n    text-align: center;\r\n    font-weight: 500;\r\n    margin-top: 5%;\r\n    width: 80%;\r\n    margin: 5% 10%;\r\n}\r\n\r\n/* popUp Style */\r\n\r\n.popup_Title {\r\n    font-size: 3vh;\r\n    text-align: center;\r\n    padding: 2vh 0;\r\n    font-weight: 600;\r\n}\r\n\r\n.popup_Text {\r\n    font-size: 2.4vh;\r\n    text-align: center;\r\n    padding: 3vh 0;\r\n    font-weight: 500;\r\n    padding-bottom: 2vh;\r\n    color: #01003c;\r\n}\r\n\r\n.popup_source {\r\n    font-size: 2.1vh;\r\n    text-align: center;\r\n    font-weight: 500;\r\n    color: #f7941d;\r\n}\r\n\r\n.popup {\r\n    background-color: #f1fdfd;\r\n    z-index: 200;\r\n    padding: 3vh 5vw;\r\n    border-radius: 2vw;\r\n    border-color: #f7941d;\r\n    border-width: 1vw;\r\n    border-style: solid;\r\n}\r\n\r\n.popup_bg {\r\n    height: 100vh;\r\n    width: 100vw;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #000000df;\r\n    z-index: 200;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.button_container {\r\n    align-self: center;\r\n}\r\n\r\n.button_text {\r\n    font-size: 2.5vh;\r\n    text-align: center;\r\n    font-weight: 500;\r\n    color: #01003c;\r\n}\r\n\r\n/* Continue Button Style */\r\n\r\n.continue_button_Orange {\r\n    padding: 1.5vh;\r\n    justify-self: center;\r\n    background-color: #f7941d;\r\n    border-radius: 2vw;\r\n    border-color: transparent;\r\n}\r\n\r\n.continue_button_Green {\r\n    padding: 1.5vh;\r\n    justify-self: center;\r\n    background-color: rgb(5, 138, 27);\r\n    border-radius: 2vw;\r\n    border-color: transparent;\r\n}\r\n\r\n.popup_continue_buttonContainer {\r\n    display: grid;\r\n    padding: 4.2vh 0;\r\n}\r\n\r\n/* Options Button Style */\r\n\r\n.option_button_Orange {\r\n    background-color: #f7941d;\r\n    width: 60vw;\r\n    font-size: 4vw;\r\n    font-weight: 500;\r\n    padding: 2vh 0;\r\n    border-radius: 1.5vw;\r\n    margin: 1vh 0;\r\n    text-align: center;\r\n}\r\n\r\n.option_button_Green {\r\n    background-color: #72c84c;\r\n    width: 60vw;\r\n    font-size: 4vw;\r\n    font-weight: 500;\r\n    padding: 2vh 0;\r\n    border-radius: 1.5vw;\r\n    margin: 1vh 0;\r\n    text-align: center;\r\n}",""]),n.a=o},277:function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return i}));var r=t(285),o=t.n(r).a.create({baseURL:"http://3.6.218.156:7000"}),a=function(e,n){o.post("/auth/social/signup/",n,{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}}).then((function(n){e(n,"sucess")})).catch((function(n){return e(n,n.response)}))},i=function(e,n){o.post("/api/events/upload/file/",n,{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}}).then((function(n){e(n,"sucess")})).catch((function(n){return e(n,n.response)}))}},621:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(110),i=t.n(a),l=(t(298),t(528),t(16)),c="#0062ff",u=l.default.div.withConfig({displayName:"Loader__Wrapper",componentId:"sc-132zml8-0"})(["display:flex;justify-content:center;align-items:center;height:",";margin:0 auto;"],(function(e){return"none"===e.height?"none":"98vh"})),s=l.default.svg.withConfig({displayName:"Loader__Svg",componentId:"sc-132zml8-1"})(["@keyframes rotate{0%{transform:rotate(0deg);}100%{transform:rotate(270deg);}}animation:rotate 1.4s linear infinite;"]),f=l.default.circle.withConfig({displayName:"Loader__Circle",componentId:"sc-132zml8-2"})(["@keyframes colors{0%{stroke:",";}100%{stroke:",";}}@keyframes dash{0%{stroke-dashoffset:187;}50%{stroke-dashoffset:46.75;transform:rotate(135deg);}100%{stroke-dashoffset:187;transform:rotate(450deg);}}stroke-dasharray:187;stroke-dashoffset:0;transform-origin:center;animation:dash 1.4s ease-in-out infinite,colors 5.6s ease-in-out infinite;"],c,c),d=function(e){return o.a.createElement(u,e,o.a.createElement(s,{width:"30px",height:"30px",viewBox:"0 0 66 66",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement(f,{fill:"none",strokeWidth:"6",strokeLinecap:"round",cx:"33",cy:"33",r:"30"})))},p=t(280),m=t.n(p),h=t(281),g=t.n(h);function b(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n  @font-face {\n  font-family: 'Poppins';\n  src: url('","') format('woff');\n  font-weight: 600;\n  font-style: normal;\n  }\n  @font-face {\n  font-family: 'Roboto';\n  src: url('","') format('woff');\n  font-weight: 600;\n  font-style: normal;\n}\n  body {\n  font-family: 'Poppins', sans-serif;\n}\n"]);return b=function(){return e},e}var y=Object(l.createGlobalStyle)(b(),g.a,m.a),v=t(46),w=t(15),x=t(282),E=t(629),C=t(630),k=t(195),O=t.n(k),S=t(190),_={insert:"head",singleton:!1},j=(O()(S.a,_),S.a.locals,t(85)),P=function(e){return{type:"AUTH",payload:e}},z=function(){return o.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("mask",{id:"mask0",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"16",height:"16"},o.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.814 6.54545H8.18605V9.63636H12.5767C12.1674 11.6 10.4558 12.7273 8.18605 12.7273C5.50698 12.7273 3.34884 10.6182 3.34884 8C3.34884 5.38182 5.50698 3.27273 8.18605 3.27273C9.33953 3.27273 10.3814 3.67273 11.2 4.32727L13.5814 2C12.1302 0.763636 10.2698 0 8.18605 0C3.64651 0 0 3.56364 0 8C0 12.4364 3.64651 16 8.18605 16C12.2791 16 16 13.0909 16 8C16 7.52727 15.9256 7.01818 15.814 6.54545Z",fill:"white"})),o.a.createElement("g",{mask:"url(#mask0)"},o.a.createElement("path",{d:"M-0.744141 12.7275V3.27295L5.58144 8.00022L-0.744141 12.7275Z",fill:"white"})),o.a.createElement("mask",{id:"mask1",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"16",height:"16"},o.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.814 6.54545H8.18605V9.63636H12.5767C12.1674 11.6 10.4558 12.7273 8.18605 12.7273C5.50698 12.7273 3.34884 10.6182 3.34884 8C3.34884 5.38182 5.50698 3.27273 8.18605 3.27273C9.33953 3.27273 10.3814 3.67273 11.2 4.32727L13.5814 2C12.1302 0.763636 10.2698 0 8.18605 0C3.64651 0 0 3.56364 0 8C0 12.4364 3.64651 16 8.18605 16C12.2791 16 16 13.0909 16 8C16 7.52727 15.9256 7.01818 15.814 6.54545Z",fill:"white"})),o.a.createElement("g",{mask:"url(#mask1)"},o.a.createElement("path",{d:"M-0.744141 3.27295L5.58144 8.00022L8.18609 5.78204L17.1163 4.36386V-0.727051H-0.744141V3.27295Z",fill:"white"})),o.a.createElement("mask",{id:"mask2",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"16",height:"16"},o.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.814 6.54545H8.18605V9.63636H12.5767C12.1674 11.6 10.4558 12.7273 8.18605 12.7273C5.50698 12.7273 3.34884 10.6182 3.34884 8C3.34884 5.38182 5.50698 3.27273 8.18605 3.27273C9.33953 3.27273 10.3814 3.67273 11.2 4.32727L13.5814 2C12.1302 0.763636 10.2698 0 8.18605 0C3.64651 0 0 3.56364 0 8C0 12.4364 3.64651 16 8.18605 16C12.2791 16 16 13.0909 16 8C16 7.52727 15.9256 7.01818 15.814 6.54545Z",fill:"white"})),o.a.createElement("g",{mask:"url(#mask2)"},o.a.createElement("path",{d:"M-0.744141 12.7275L10.4186 4.36386L13.3582 4.72749L17.1163 -0.727051V16.7275H-0.744141V12.7275Z",fill:"white"})),o.a.createElement("mask",{id:"mask3",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"16",height:"16"},o.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.814 6.54545H8.18605V9.63636H12.5767C12.1674 11.6 10.4558 12.7273 8.18605 12.7273C5.50698 12.7273 3.34884 10.6182 3.34884 8C3.34884 5.38182 5.50698 3.27273 8.18605 3.27273C9.33953 3.27273 10.3814 3.67273 11.2 4.32727L13.5814 2C12.1302 0.763636 10.2698 0 8.18605 0C3.64651 0 0 3.56364 0 8C0 12.4364 3.64651 16 8.18605 16C12.2791 16 16 13.0909 16 8C16 7.52727 15.9256 7.01818 15.814 6.54545Z",fill:"white"})),o.a.createElement("g",{mask:"url(#mask3)"},o.a.createElement("path",{d:"M17.116 16.7275L5.58115 8.00022L4.09277 6.90931L17.116 3.27295V16.7275Z",fill:"white"})))},L=function(){return o.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M15.0782 15.957C15.5634 15.957 15.9569 15.5635 15.9569 15.0782V0.914836C15.9569 0.429461 15.5635 0.0361328 15.0782 0.0361328H0.914836C0.429461 0.0361328 0.0361328 0.429461 0.0361328 0.914836V15.0782C0.0361328 15.5635 0.429399 15.957 0.914836 15.957H15.0782Z",fill:"white"}),o.a.createElement("path",{d:"M11.0219 15.9572V9.79178H13.0913L13.4012 7.389H11.0219V5.85497C11.0219 5.15931 11.215 4.68524 12.2126 4.68524L13.4849 4.68469V2.53562C13.2649 2.50634 12.5096 2.44092 11.6309 2.44092C9.79648 2.44092 8.54057 3.56067 8.54057 5.61701V7.389H6.46582V9.79178H8.54057V15.9572H11.0219Z",fill:"#50B5FF"}))},A=t(284),I=t(192),T=t.n(I),V=t(277);function H(e,n,t,r,o,a,i){try{var l=e[a](i),c=l.value}catch(e){return void t(e)}l.done?n(c):Promise.resolve(c).then(r,o)}function M(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return t}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return N(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return N(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var R=l.default.div.withConfig({displayName:"Social__Wrapper",componentId:"sc-1o22sf9-0"})(["display:flex;flex-direction:column;align-items:center;"]),U=l.default.span.withConfig({displayName:"Social__Text",componentId:"sc-1o22sf9-1"})(["margin:15px 0;color:#92929d;font-size:12px;text-transform:uppercase;"]),Z=l.default.button.withConfig({displayName:"Social__ButtonGoogle",componentId:"sc-1o22sf9-2"})(["display:flex;align-items:center;justify-content:center;width:320px;height:38px;border:none;background:#fc5a5a;border-radius:10px;:focus{outline:none;}span{margin-left:10px;color:white;font-size:12px;}"]),q=Object(l.default)(Z).withConfig({displayName:"Social__ButtonFacebook",componentId:"sc-1o22sf9-3"})(["background:#50b5ff;margin-top:10px;"]),B={checkAuth:P},F=Object(j.b)(null,B)((function(e){var n=e.checkAuth,t=M(o.a.useState(!1),2),r=t[0],a=t[1],i=function(){var e,t=(e=regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:200===t.status?(n({login:" ",password:" "}),a(!0),console.log("Log in respnse :",t.data.result)):(console.log("error "+JSON.stringify(t)),console.log("error "+JSON.stringify(r)));case 1:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,o){var a=e.apply(n,t);function i(e){H(a,r,o,i,l,"next",e)}function l(e){H(a,r,o,i,l,"throw",e)}i(void 0)}))});return function(e,n){return t.apply(this,arguments)}}();return o.a.createElement(R,null,o.a.createElement(A.GoogleLogin,{clientId:"581422038025-rte3a06d7kumasu887n64uikerfigmiv.apps.googleusercontent.com",render:function(e){return o.a.createElement(Z,{onClick:e.onClick,disabled:e.disabled},o.a.createElement(z,null),o.a.createElement("span",null,"Continue with Google"))},buttonText:"Login",onSuccess:function(e){console.log(e);var n=new FormData,t=e.profileObj;n.append("username",t.googleId),n.append("lastname",t.familyName),n.append("firstname",t.givenName),n.append("photo_url",t.imageUrl),n.append("auth_provider","google"),n.append("email",t.email),n.append("fcm_token","fcmtoken"),n.append("code",String("Referrerid")),Object(V.a)(i,n)},onFailure:function(e){console.log(e)},cookiePolicy:"single_host_origin"}),o.a.createElement(T.a,{appId:"976961256166749"},o.a.createElement(I.Login,{scope:"email",onResponse:function(e){console.log(e)},onError:function(e){console.log(e)}},o.a.createElement(q,null,o.a.createElement(L,null),o.a.createElement("span",null,"Continue with Facebook")))),o.a.createElement(U,null,"or"),function(){if(r)return o.a.createElement(w.a,{to:"/"})}())}));function D(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function G(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?D(Object(t),!0).forEach((function(n){W(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):D(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function W(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function J(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return t}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return $(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return $(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var Q=l.default.div.withConfig({displayName:"Submit__Wrapper",componentId:"qyqht5-0"})(["display:flex;position:relative;"]),K=l.default.label.withConfig({displayName:"Submit__InputLabel",componentId:"qyqht5-1"})(["position:absolute;top:0;padding:0 0 1px 20px;transition:all 200ms;opacity:0.5;color:#92929d;"]),X=l.default.input.withConfig({displayName:"Submit__InputText",componentId:"qyqht5-2"})(["z-index:1;width:320px;height:38px;border:1px solid #f1f1f5;box-sizing:border-box;border-radius:15px;background:#fafafb;padding:0 20px;margin-bottom:15px;font-size:12px;color:#92929d;:focus{outline:none;::placeholder{opacity:0;}}:focus + ","{font-size:75%;transform:translate3d(0,-100%,0);opacity:1;color:#fc5a5a;}"],K),Y=l.default.input.withConfig({displayName:"Submit__InputSubmit",componentId:"qyqht5-3"})(["width:320px;height:38px;background:#0062ff;border-radius:10px;border:none;color:white;font-size:12px;text-align:center;cursor:pointer;:focus{outline:none;}:disabled{opacity:0.7;cursor:not-allowed;}"]),ee={checkAuth:P},ne=Object(j.b)(null,ee)((function(e){var n=e.checkAuth,t=J(o.a.useState({login:"",password:""}),2),r=t[0],a=t[1],i=J(o.a.useState(!1),2),l=i[0],c=i[1],u=J(o.a.useState(!1),2),s=u[0],f=u[1],d=function(){if(l)return o.a.createElement(w.a,{to:"/"})},p=function(e){e.preventDefault(),s?(n({login:r.login,password:r.password}),c(!0)):(a((function(e){return G(G({},e),{},{login:""})})),f(!0))},m=function(e){var n=e.target,t=n.name,r=n.value;a("login"===t?function(e){return G(G({},e),{},{login:r})}:function(e){return G(G({},e),{},{password:r})})};return o.a.createElement(o.a.Fragment,null,s?o.a.createElement("form",{onSubmit:p},o.a.createElement(Q,null,o.a.createElement(X,{type:"text",placeholder:"Enter OTP",name:"login",onChange:m,value:r.login})),o.a.createElement(Y,{type:"submit",value:"Validate"}),d()):o.a.createElement("form",{onSubmit:p},o.a.createElement(Q,null,o.a.createElement(X,{type:"text",placeholder:"Enter Email",name:"login",onChange:m,value:r.login})),o.a.createElement(Y,{type:"submit",value:"Continue"}),d()))})),te=l.default.section.withConfig({displayName:"Form__Section",componentId:"sc-1mtznlo-0"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;width:360px;min-width:320px;height:365px;background-color:white;border-radius:20px;margin:35px 10px 25px 10px;"]),re=function(){return o.a.createElement(te,null,o.a.createElement(F,null),o.a.createElement(ne,null))},oe=l.default.div.withConfig({displayName:"Menu__Wrapper",componentId:"nljoby-0"})(["font-size:12px;color:white;a{color:white;text-decoration:none;:hover{text-decoration:underline;}}"]),ae=function(){return o.a.createElement(oe,null,o.a.createElement(v.c,{to:"#"},"Privacy policy")," • ",o.a.createElement(v.c,{to:"#"},"Terms of use"))},ie=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(re,null),o.a.createElement(ae,null))},le=o.a.lazy((function(){return Promise.all([t.e(0),t.e(20)]).then(t.bind(null,809))})),ce=o.a.lazy((function(){return Promise.all([t.e(1),t.e(25),t.e(31),t.e(0),t.e(2),t.e(28)]).then(t.bind(null,810))})),ue=o.a.lazy((function(){return Promise.all([t.e(1),t.e(0),t.e(2),t.e(19)]).then(t.bind(null,811))})),se=o.a.lazy((function(){return Promise.all([t.e(1),t.e(0),t.e(2),t.e(26)]).then(t.bind(null,812))})),fe=o.a.lazy((function(){return Promise.all([t.e(1),t.e(0),t.e(2),t.e(27)]).then(t.bind(null,813))})),de=o.a.lazy((function(){return Promise.all([t.e(0),t.e(18)]).then(t.bind(null,807))})),pe=o.a.lazy((function(){return Promise.all([t.e(1),t.e(16),t.e(21),t.e(24),t.e(0),t.e(2),t.e(22)]).then(t.bind(null,806))})),me=o.a.lazy((function(){return Promise.all([t.e(0),t.e(30)]).then(t.bind(null,814))})),he=o.a.lazy((function(){return Promise.all([t.e(1),t.e(0),t.e(2),t.e(23)]).then(t.bind(null,815))})),ge=o.a.lazy((function(){return Promise.all([t.e(1),t.e(0),t.e(17)]).then(t.bind(null,808))})),be=o.a.lazy((function(){return Promise.all([t.e(0),t.e(29)]).then(t.bind(null,816))})),ye=function(){return o.a.createElement(o.a.Suspense,{fallback:o.a.createElement(d,null)},o.a.createElement(v.b,null,o.a.createElement(w.d,null,o.a.createElement(w.b,{exact:!0,path:"/"},o.a.createElement(de,null)),o.a.createElement(w.b,{exact:!0,path:"/ActivityScreen/:id"},o.a.createElement(pe,null)),o.a.createElement(w.b,{exact:!0,path:"/ClueListScreen"},o.a.createElement(fe,null)),o.a.createElement(w.b,{exact:!0,path:"/TaskScreen/:id"},o.a.createElement(le,null)),o.a.createElement(w.b,{exact:!0,path:"/QuizScreen/:id"},o.a.createElement(se,null)),o.a.createElement(w.b,{exact:!0,path:"/CluesScreen/:id"},o.a.createElement(ce,null)),o.a.createElement(w.b,{exact:!0,path:"/Rewardscreen/:id"},o.a.createElement(ue,null)),o.a.createElement(w.b,{exact:!0,path:"/StartScreen"},o.a.createElement(me,null)),o.a.createElement(w.b,{exact:!0,path:"/CompletionScreen"},o.a.createElement(be,null)),o.a.createElement(w.b,{exact:!0,path:"/VideoScreen/:id"},o.a.createElement(ge,null)),o.a.createElement(w.b,{exact:!0,path:"/Login"},o.a.createElement(ie,null)),o.a.createElement(w.b,{exact:!0,path:"/TaskListScreen"},o.a.createElement(E.a,{theme:Object(C.a)(x.blue)},o.a.createElement(he,null))))),o.a.createElement(y,null))},ve=t(288),we={isAuth:!1,login:"",password:""};var xe=t(75),Ee=t(289),Ce=Object(xe.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"AUTH":return Object.assign({},{isAuth:!0,login:n.payload.login,password:n.payload.password});default:return e}}});var ke,Oe,Se=t(290),_e=(ke=[ve.a],Oe=xe.applyMiddleware.apply(void 0,ke),Object(xe.createStore)(Ce,Object(Ee.composeWithDevTools)(Oe)));i.a.render(o.a.createElement(v.a,{forceRefresh:!0},o.a.createElement(j.a,{store:_e},o.a.createElement(Se.Normalize,null),o.a.createElement(ye,null))),document.getElementById("root"))}});
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{637:function(n,e,t){"use strict";var r=t(0),a=t.n(r),i=(t(648),t(695)),s=t(696),c=t(697),o=t(644),l=t(650),m=t(651),d=t(652),g=t(653),f=t(654),h=t(800),p=t(801),u=t(802),v=t(803),b=t(804),w=t(805),_=t(640),x=t(643),E=t(15),N=t(632);function y(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var t=[],r=!0,a=!1,i=void 0;try{for(var s,c=n[Symbol.iterator]();!(r=(s=c.next()).done)&&(t.push(s.value),!e||t.length!==e);r=!0);}catch(n){a=!0,i=n}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return t}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return k(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return k(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}e.a=function(){var n=function(n){var e=y(Object(r.useState)(new Audio(n)),1)[0],t=y(Object(r.useState)(!1),2),a=t[0],i=t[1];return Object(r.useEffect)((function(){a?e.play():e.pause()}),[a]),Object(r.useEffect)((function(){return e.addEventListener("ended",(function(){return i(!1)})),function(){e.removeEventListener("ended",(function(){return i(!1)}))}}),[]),[a,function(){return i(!a)}]}("https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3"),e=y(n,2),t=e[0],k=e[1],z=y(Object(r.useState)(!1),2),S=z[0],j=z[1],O=y(Object(r.useState)(!1),2),T=O[0],A=O[1],C=y(Object(r.useState)(!1),2),I=C[0],L=C[1],R=Object(E.g)(),G=y(Object(r.useState)(!1),2),H=G[0],U=G[1];return a.a.createElement("div",{className:"tasktopcontainer"},a.a.createElement("div",{className:"tasklogoposition"},a.a.createElement("img",{onClick:function(){R.replace("/TaskListScreen/"),j(!1),L(!1),U(!1)},className:"tasklogoicon",src:x})),a.a.createElement(a.a.Fragment,null,S?a.a.createElement("div",{className:"share_popupfullscreen"},a.a.createElement("img",{className:"share_popupfullscreen",src:_}),I?a.a.createElement("div",{className:"share_mainwindow"},a.a.createElement("div",{className:"titletext"},"SHARE"),a.a.createElement("div",{className:"share_fb"},a.a.createElement("div",{className:"fb1"},a.a.createElement(h.a,{url:"https://thesearch.bengalurusustainabilityforum.org"},a.a.createElement(p.a,{size:"16vw",round:!0}))),a.a.createElement("div",{className:"fb2main"},a.a.createElement("div",{className:"fb2"},a.a.createElement(u.a,{className:"fbicon",url:"https://thesearch.bengalurusustainabilityforum.org"},a.a.createElement(v.a,{size:"16vw",round:!0}))),a.a.createElement("div",{className:"fb2"},a.a.createElement(b.a,{className:"fbicon",url:"https://thesearch.bengalurusustainabilityforum.org"},a.a.createElement(w.a,{size:"16vw",round:!0})))),a.a.createElement("div",{className:"fb3"},a.a.createElement("img",{onClick:function(){window.confirm("The text has been copied to clipboard whould you like to continue with instagram")&&(window.location.href="https://www.instagram.com/?hl=en",navigator.clipboard.writeText("https://thesearch.bengalurusustainabilityforum.org"))},className:"share_instaicon",src:o}))),a.a.createElement("div",{className:"share_container"},a.a.createElement("div",{className:"share_TextTitle"},"Enjoyed the game?"),a.a.createElement("div",{className:"share_TextTitle"},"Let others know!"))):a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"titletext"},"SETTINGS"),a.a.createElement("div",{className:"settings_listitem_container"},a.a.createElement("div",{onClick:function(){A(!T),window.navigator.vibrate([100,30,100,30,100,30,200,30,200,30,200,30,100,30,100,30,100])},className:"settings_listitem"},a.a.createElement("div",{className:"settings_list_starting_semicircle"}),a.a.createElement("div",{className:"settings_listtext"},"PHONE VIBRATION"),T?a.a.createElement("img",{className:"settings_buttons",src:d}):a.a.createElement("img",{className:"settings_buttons",src:g})),a.a.createElement("div",{onClick:k,className:"settings_listitem"},a.a.createElement("div",{className:"settings_list_starting_semicircle"}),a.a.createElement("div",{className:"settings_listtext"},"BUTTON AUDIO"),t?a.a.createElement("img",{className:"settings_buttons",src:l}):a.a.createElement("img",{className:"settings_buttons",src:m})),a.a.createElement("div",{onClick:function(){window.confirm("would you like to reset the game?")&&Object(N.a)()},className:"settings_listitem"},a.a.createElement("div",{className:"settings_list_starting_semicircle"}),a.a.createElement("div",{className:"settings_listtext"},"Reset Data"),a.a.createElement("img",{className:"settings_buttons",src:f}))))):null,H?a.a.createElement("div",{className:"login_popupfullscreen"},a.a.createElement("img",{className:"login_popupfullscreen",src:_}),a.a.createElement("div",{className:"login_mainwindow"},a.a.createElement("div",{className:"login_titletext"},"LOGIN"),a.a.createElement("div",{className:"login_popupformcontainer"}))):null,a.a.createElement("div",{className:"share_icons"},a.a.createElement("div",{className:"share_iconset",onClick:function(){j(!S||!I),L(!0)}},a.a.createElement("div",{className:"share_setimg"},a.a.createElement("img",{className:"share_icon",src:i})),a.a.createElement("div",{className:"share_iconText"},"SHARE")),a.a.createElement("div",{className:"share_iconset",onClick:function(){U(!H)}},a.a.createElement("div",{className:"share_setimg"},a.a.createElement("img",{className:"share_icon",src:c})),a.a.createElement("div",{className:"share_iconText"},"SAVE")),a.a.createElement("div",{className:"share_iconset",onClick:function(){j(!(S&&!I)),L(!1)}},a.a.createElement("div",{className:"share_setimg"},a.a.createElement("img",{className:"share_icon",src:s})),a.a.createElement("div",{className:"share_iconText"},"SETTINGS")))))}},640:function(n,e,t){n.exports=t.p+"486855111f7240cd5da98b5a63113571.jpg"},644:function(n,e,t){n.exports=t.p+"8290266a5fb402a34b96f890bbdb2d60.png"},648:function(n,e,t){"use strict";var r=t(195),a=t.n(r),i=t(649),s={insert:"head",singleton:!1};a()(i.a,s),i.a.locals},649:function(n,e,t){"use strict";var r=t(196),a=t.n(r)()((function(n){return n[1]}));a.push([n.i,'      .tasktopcontainer {\r\n          width: 100vw;\r\n          position: relative;\r\n          height: 25vh;\r\n      }\r\n\r\n      .share_popupfullscreen {\r\n          width: 100%;\r\n          height: 100vh;\r\n          position: absolute;\r\n          top: 0;\r\n          left: 0;\r\n          z-index: 100;\r\n      }\r\n\r\n      .share_logoposition_share {\r\n          z-index: 120;\r\n          display: inline-flex;\r\n          width: 40%;\r\n      }\r\n\r\n      .share_logoicon_share {\r\n          z-index: 120;\r\n          width: 23vw;\r\n          height: 22vh;\r\n          object-fit: contain;\r\n          margin-top: 15%;\r\n          margin-left: 22%;\r\n      }\r\n\r\n      .share_mainwindow {\r\n          text-align: center;\r\n      }\r\n\r\n      .share_container {\r\n          z-index: 120;\r\n          font-size: 5.2vw;\r\n          font-weight: bold;\r\n          position: relative;\r\n          text-align: center;\r\n          margin-top: 5%;\r\n      }\r\n\r\n      .share_TextTitle {\r\n          z-index: 120;\r\n          display: block;\r\n          color: #01003c;\r\n          font-size: 3.3vh;\r\n          text-align: center;\r\n          padding-top: 2vh;\r\n          font-weight: 500;\r\n          font-family: "Open Sans";\r\n      }\r\n\r\n      .settings_listitem {\r\n          z-index: 120;\r\n          position: relative;\r\n          display: flex;\r\n          width: 84vw;\r\n          justify-content: space-between;\r\n          align-items: center;\r\n      }\r\n\r\n      /* Login Styles */\r\n\r\n      .login_popupfullscreen {\r\n          width: 100%;\r\n          height: 100vh;\r\n          position: absolute;\r\n          top: 0;\r\n          left: 0;\r\n          z-index: 10;\r\n      }\r\n\r\n      .login_mainwindow {\r\n          text-align: center;\r\n      }\r\n\r\n      .login_titletext {\r\n          display: block;\r\n          color: #01003c;\r\n          font-size: 6vw;\r\n          text-decoration: underline;\r\n          text-decoration-color: #f7941d;\r\n          font-weight: 700;\r\n          font-family: "Open Sans";\r\n          text-align: center;\r\n          z-index: 120;\r\n          position: relative;\r\n          margin-top: 26vh;\r\n      }\r\n\r\n      .titletext {\r\n          display: block;\r\n          color: #01003c;\r\n          font-size: 6vw;\r\n          text-decoration: underline;\r\n          text-decoration-color: #f7941d;\r\n          font-weight: 700;\r\n          font-family: "Open Sans";\r\n          text-align: center;\r\n          z-index: 120;\r\n          position: relative;\r\n          margin-top: 26vh;\r\n      }\r\n\r\n      .share_tick1 {\r\n          z-index: 150;\r\n          width: 8%;\r\n          object-fit: contain;\r\n          position: absolute;\r\n          top: 18%;\r\n          right: 26%;\r\n      }\r\n\r\n      .share_icon {\r\n          text-align: center;\r\n          object-fit: contain;\r\n          width: 6vw;\r\n          height: 5vh;\r\n      }\r\n\r\n      .share_iconset {\r\n          text-align: center;\r\n          z-index: 130;\r\n          margin: 0 1vw 0 6vw;\r\n      }\r\n\r\n      .share_iconText {\r\n          color: white;\r\n          font-size: 2.6vw;\r\n          text-align: center;\r\n          font-family: "Open Sans";\r\n          padding-top: 0.1vh;\r\n      }\r\n\r\n      .share_fb {\r\n          padding: 6px;\r\n          position: relative;\r\n          z-index: 120;\r\n          margin: 7vh 0 5vh;\r\n      }\r\n\r\n      .fb1 {\r\n          box-sizing: border-box;\r\n          margin-top: -2%;\r\n      }\r\n\r\n      .fb2main {\r\n          width: 80%;\r\n          display: inline-block;\r\n      }\r\n\r\n      .fb2 {\r\n          display: inline-block;\r\n          width: 50%;\r\n      }\r\n\r\n      .smicon {\r\n          padding: 1px;\r\n      }\r\n\r\n      .share_instaicon {\r\n          width: 16vw;\r\n          height: 9vh;\r\n          object-fit: contain;\r\n      }\r\n\r\n      .share_icons {\r\n          display: inline-flex;\r\n          float: right;\r\n          z-index: 130;\r\n          margin-top: 7vh;\r\n          margin-right: 7vw;\r\n      }\r\n\r\n      .fb3 {\r\n          box-sizing: border-box;\r\n          margin-bottom: -2%;\r\n      }\r\n\r\n      .tasklist_listitem {\r\n          z-index: 120;\r\n          display: block;\r\n      }\r\n\r\n      .tasklist_maingm1u {\r\n          z-index: 120;\r\n          position: relative;\r\n      }\r\n\r\n      .tasklist_gm1u {\r\n          z-index: 120;\r\n          width: 70%;\r\n          margin-top: 5%;\r\n      }\r\n\r\n      .tasklist_tick1 {\r\n          z-index: 120;\r\n          width: 8%;\r\n          object-fit: contain;\r\n          position: absolute;\r\n          top: 18%;\r\n          right: 26%;\r\n      }\r\n\r\n      .tasklogoicon {\r\n          width: 24vw;\r\n          height: 12vh;\r\n          object-fit: contain;\r\n          z-index: 120;\r\n      }\r\n\r\n      .tasklogoposition {\r\n          display: inline-flex;\r\n          margin-top: 7vh;\r\n          margin-left: 7vw;\r\n      }\r\n\r\n      .login_popupformcontainer {\r\n          width: 100%;\r\n          height: 30vh;\r\n          z-index: 15;\r\n      }\r\n\r\n      .settings_listitem_container {\r\n        align-content: space-evenly;\r\n        height: 59%;\r\n        display: grid;\r\n        padding: 6vh 0;\r\n    }\r\n\r\n      .settings_list_starting_semicircle {\r\n          background-color: #00253a !important;\r\n          font-size: 5.4vw;\r\n          font-weight: 600;\r\n          color: white;\r\n          padding-left: 4vw;\r\n          width: 14vw;\r\n          height: 6vh;\r\n          border-radius: 0 60px 60px 0;\r\n          z-index: 1;\r\n          align-items: center;\r\n          display: flex;\r\n      }\r\n\r\n      .settings_listtext {\r\n          background-color: #3998ac !important;\r\n          font-size: 4.4vw;\r\n          font-weight: 600;\r\n          width: 100%;\r\n          height: calc(5vh + 1vh);\r\n          margin-left: -11vw;\r\n          padding-left: 15vw;\r\n          align-items: center;\r\n          display: flex;\r\n      }\r\n\r\n      .settings_buttons {\r\n        width: 28vw;\r\n        height: 9vh;\r\n        object-fit: contain;\r\n        margin-left: -10vw;\r\n    }\r\n',""]),e.a=a},650:function(n,e,t){n.exports=t.p+"1b5245f0e2c46c8a145524ce870c76b9.png"},651:function(n,e,t){n.exports=t.p+"f495f5e0a7dfc701f263e6f81aa35c47.png"},652:function(n,e,t){n.exports=t.p+"3f995dc615f2c7b66ab71e4987246b82.png"},653:function(n,e,t){n.exports=t.p+"a5fc53e453ca043f41325f1f270cf192.png"},654:function(n,e,t){n.exports=t.p+"dd37bdfb57d5f8780757336f15c23019.png"},695:function(n,e,t){n.exports=t.p+"f382bced3d3cc0b8eafcd815edee8673.svg"},696:function(n,e,t){n.exports=t.p+"0af4803da61c5ca683882a379cdb30a3.svg"},697:function(n,e,t){n.exports=t.p+"699ac5002ca1d3b6d00e27878a746299.svg"}}]);
(this["webpackJsonpportfolio-react"]=this["webpackJsonpportfolio-react"]||[]).push([[5],{17:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},18:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))},19:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(t){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return s}));var a=n(25);function c(t,e){return!e||"object"!==o(e)&&"function"!==typeof e?Object(a.a)(t):e}function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=r(t);if(e){var a=r(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return c(this,n)}}},20:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return o}))},25:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},33:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(0),o=n(17),a=n(18),c=n(20),s=n(19),i=n(1),u=function(t){Object(c.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={src:t.props.src,loaded:!1},t.onImageLoaded=function(){t.setState({loaded:!0})},t}return Object(a.a)(n,[{key:"render",value:function(){var t=this.state,e=t.src,n=t.loaded;return Object(r.jsxs)(i.Fragment,{children:[Object(r.jsx)("img",{src:e,onLoad:this.onImageLoaded,className:n?this.props.className:"no-display",width:this.props.width,height:this.props.height,style:this.props.style}),!n&&Object(r.jsx)("span",{"data-uk-spinner":this.props.size?this.props.size:"ratio: 4;",className:"custom-color"})]})}}]),n}(i.Component)},335:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return p}));var r=n(0),o=n(17),a=n(18),c=n(20),s=n(19),i=n(1),u=(n(91),n(33)),l=n.p+"static/media/profile.f41d9aec.jpg",p=function(t){Object(c.a)(n,t);var e=Object(s.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"uk-section uk-section-default uk-text-center uk-margin-small-top",id:"AboutMe",children:[Object(r.jsxs)("div",{className:"uk-container uk-container-xlarge",children:[Object(r.jsx)("h2",{className:"uk-margin-small-top",children:"\xbfQui\xe9n soy?"}),Object(r.jsx)("div",{className:"uk-card uk-card-body uk-width-1@m",children:Object(r.jsxs)("div",{className:"uk-column-1-2@s",children:[Object(r.jsx)("div",{children:Object(r.jsx)(u.a,{src:l,className:"uk-border-rounded img-about-me",size:"ratio: 8;"})}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{className:"uk-card-title uk-margin-medium-top",children:"ACERCA DE M\xcd"}),Object(r.jsxs)("p",{children:["\xa1Hola! Soy ",Object(r.jsx)("span",{className:"uk-text-bold uk-text-emphasis",children:"Nicol\xe1s"}),", entusiasta y apasionado por la programaci\xf3n, la tecnolog\xeda y los veh\xedculos. Actualmente tengo veintid\xf3s a\xf1os y soy egresado del ",Object(r.jsx)("span",{className:"uk-text-bold uk-text-emphasis",children:"Instituto Tecnol\xf3gic de Estudios Superiores de Zamora "})," en la carrera de ",Object(r.jsx)("span",{className:"uk-text-bold uk-text-emphasis",children:"ingenier\xeda en sistemas computacionales"}),"."]}),Object(r.jsxs)("a",{className:"uk-button uk-button-primary uk-button-medium uk-border-rounded",href:"https://nicolasgl.stdcdn.com/portfolio/CV_Nicolas_Garcia_Lira.pdf",children:["VER C.V.",Object(r.jsx)("span",{"data-uk-icon":"icon: file-text; ratio: 1",className:"uk-margin-small-left"})]}),Object(r.jsx)("br",{}),Object(r.jsxs)("a",{className:"uk-button uk-button-primary uk-button-medium uk-border-rounded uk-margin-top",href:"https://api.whatsapp.com/send?phone=523511217355&text=\xbfHola,%20\xbfqu\xe9%20tal?%0aNecesito de tus servicios,%20me%20gustar\xeda%20hablar%20sobre%20ello.",children:["\xa1Cont\xe1ctame!",Object(r.jsx)("span",{"data-uk-icon":"icon: whatsapp; ratio: 0.8",className:"uk-margin-small-left"})]})]})]})})]}),Object(r.jsx)("span",{id:"Habilities"})]})}}]),n}(i.Component)},91:function(t,e,n){}}]);
//# sourceMappingURL=5.95ecdd13.chunk.js.map
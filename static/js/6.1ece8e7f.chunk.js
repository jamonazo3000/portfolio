(this["webpackJsonpportfolio-react"]=this["webpackJsonpportfolio-react"]||[]).push([[6],{17:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},18:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))},20:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(t){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return s}));var i=n(25);function c(t,e){return!e||"object"!==o(e)&&"function"!==typeof e?Object(i.a)(t):e}function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=r(t);if(e){var i=r(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return c(this,n)}}},21:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return o}))},25:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},334:function(t,e,n){"use strict";n.r(e),n.d(e,"ParticlesJS",(function(){return d}));var r=n(0),o=n(17),i=n(18),c=n(21),s=n(20),a=n(1),u=n.n(a),l=n(36),p=(n(89),n.p+"static/media/profileb.f71d068d.png"),f=u.a.lazy((function(){return n.e(2).then(n.t.bind(null,327,7))})),d=function(t){Object(c.a)(n,t);var e=Object(s.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(r.jsxs)(a.Suspense,{fallback:Object(r.jsx)("div",{className:"uk-section uk-text-center uk-section-default",style:{width:"100vw",height:"100vh",position:"fixed",zIndex:"998",top:"0",left:"0"},children:Object(r.jsx)("div",{className:"uk-container uk-container-xlarge uk-margin-xlarge-top",children:Object(r.jsx)("span",{"data-uk-spinner":"ratio: 8;",className:"custom-color"})})}),children:[Object(r.jsx)("div",{className:"home-container",children:Object(r.jsx)("div",{className:"uk-section uk-text-center",children:Object(r.jsxs)("div",{className:"uk-container uk-container-xlarge uk-margin-xlarge-top",children:[Object(r.jsx)("h1",{children:"Nicol\xe1s Garc\xeda Lira"}),Object(r.jsxs)("div",{className:"uk-card uk-card-body uk-width-1@m",children:[Object(r.jsx)("h2",{className:"uk-card-title",children:"Ingeniero en sistemas computacionales"}),Object(r.jsx)(l.a,{src:p,className:"uk-border-rounded"})]}),Object(r.jsx)("div",{className:"uk-position-bottom-center uk-overlay uk-margin-medium-bottom uk-text-center",children:Object(r.jsx)("a",{className:"uk-link-reset",href:"#AboutMe","data-uk-icon":"icon: arrow-down; ratio: 1.8",children:"M\xe1s sobre m\xed"})})]})})}),Object(r.jsx)(f,{className:"particles-js",id:"Home",params:{fps_limit:90,particles:{number:{value:30,density:{enable:!0,value_area:800}},line_linked:{enable:!1},move:{random:!0,speed:3,direction:"bottom",out_mode:"bounce"},shape:{type:["image"],image:[{src:this.props.CsLogo,height:20,width:20},{src:this.props.JavaLogo,height:25,width:25},{src:this.props.JsLogo,height:25,width:25},{src:this.props.SQLServerLogo,height:30,width:40},{src:this.props.GitLogo,height:25,width:25}]},opacity:{anim:{enable:!0,opacity_min:.4,speed:1,sync:!1},value:.9},size:{value:30,random:!0,anim:{enable:!0,speed:4,size_min:10,sync:!1}}},retina_detect:!1}})]})}}]),n}(a.Component);e.default=d},36:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(0),o=n(17),i=n(18),c=n(21),s=n(20),a=n(1),u=function(t){Object(c.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={src:t.props.src,loaded:!1},t.onImageLoaded=function(){t.setState({loaded:!0})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state,e=t.src,n=t.loaded;return Object(r.jsxs)(a.Fragment,{children:[Object(r.jsx)("img",{src:e,alt:"",onLoad:this.onImageLoaded,className:n?this.props.className:"no-display",width:this.props.width,height:this.props.height,style:this.props.style}),!n&&Object(r.jsx)("span",{"data-uk-spinner":this.props.size?this.props.size:"ratio: 4;",className:"custom-color"})]})}}]),n}(a.Component)},89:function(t,e,n){}}]);
//# sourceMappingURL=6.1ece8e7f.chunk.js.map
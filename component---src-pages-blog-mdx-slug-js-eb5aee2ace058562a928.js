(self.webpackChunkdolevoper_github_io=self.webpackChunkdolevoper_github_io||[]).push([[853],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},9100:function(e,t,r){var n=r(9489),o=r(7067);function l(t,r,a){return o()?(e.exports=l=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=l=function(e,t,r){var o=[null];o.push.apply(o,t);var l=new(Function.bind.apply(e,o));return r&&n(l,r.prototype),l},e.exports.default=e.exports,e.exports.__esModule=!0),l.apply(null,arguments)}e.exports=l,e.exports.default=e.exports,e.exports.__esModule=!0},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,r){var n=r(3646),o=r(6860),l=r(379),a=r(8206);e.exports=function(e){return n(e)||o(e)||l(e)||a()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},6725:function(e,t,r){var n=r(3395);e.exports={MDXRenderer:n}},3395:function(e,t,r){var n=r(9100),o=r(319),l=r(9713),a=r(7316),u=["scope","children"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i=r(7294),p=r(4983).mdx,f=r(9480).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,l=a(e,u),c=f(t),d=i.useMemo((function(){if(!r)return null;var e=s({React:i,mdx:p},c),t=Object.keys(e),l=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(l)))}),[r,t]);return i.createElement(d,s({},l))}},8962:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var n={};r.r(n),r.d(n,{nC:function(){return i},qH:function(){return f},Ok:function(){return d},v_:function(){return p}});var o=r(7294),l=r(5444),a=r(6725),u=r(2359),c=r(8226),s=r(6116),i="post-module--container--v5mcV",p="post-module--post--3ynGV",f="post-module--hero-image--1TltX",d="post-module--links--1NCTa",m=function(e){var t,r=e.data,m=e.location,x=r.mdx,y=x.frontmatter,_=x.body,b=x.slug,v=(0,u.d)(y.hero_image),g=r.allMdx.nodes.findIndex((function(e){return e.slug===b})),h=r.allMdx.nodes[g+1],E=r.allMdx.nodes[g-1];return o.createElement(c.Z,{title:y.title,path:m.pathname,description:y.description,image:null===(t=y.hero_image)||void 0===t?void 0:t.childImageSharp.fixed.src,type:"article"},o.createElement("main",{className:i},o.createElement("article",{className:p},o.createElement("h2",null,y.title),o.createElement("small",null,y.date),o.createElement("p",null,y.description),v&&o.createElement("figure",null,o.createElement(u.G,{image:v,alt:y.hero_image_alt,className:f}),o.createElement("figcaption",null,"Photo by"," ",o.createElement(s.Z,{href:y.hero_image_credit_link},y.hero_image_credit_text))),o.createElement(a.MDXRenderer,null,_)),o.createElement("nav",{className:d},o.createElement("ul",null,h&&o.createElement("li",{className:n.next},o.createElement(l.rU,{to:"/blog/"+h.slug},h.frontmatter.title," →")),o.createElement("li",{className:n.top},o.createElement(l.rU,{to:"#"},"Back to top")),E&&o.createElement("li",{className:n.prev},o.createElement(l.rU,{to:"/blog/"+E.slug},"← ",E.frontmatter.title))))))}}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-slug-js-eb5aee2ace058562a928.js.map
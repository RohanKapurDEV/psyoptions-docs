(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{93:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(3),c=r(7),a=(r(0),r(96)),o={id:"arch-put-call",title:"\u770b\u6f32 vs \u770b\u8dcc",sidebar_label:"\u770b\u6f32 vs \u770b\u8dcc",slug:"/architecture/call-put"},i={unversionedId:"arch-put-call",id:"arch-put-call",isDocsHomePage:!1,title:"\u770b\u6f32 vs \u770b\u8dcc",description:"\u5169\u7a2e\u671f\u6b0a\u5408\u7d04\u985e\u578b\uff08\u975e\u6a23\u5f0f\uff09\u662f\u770b\u6f32\u671f\u6b0a\u548c\u770b\u8dcc\u671f\u6b0a\u3002 \u770b\u6f32\u671f\u6b0a\u8ce6\u4e88\u671f\u6b0a\u6301\u6709\u4eba\u5728\u7279\u5b9a\u65e5\u671f\u4e4b\u524d\u6216\u5728\u7279\u5b9a\u65e5\u671f\u4ee5\u6307\u5b9a\u50f9\u683c\u8cfc\u8cb7\u6a19\u7684\u8cc7\u7522\u7684\u6b0a\u5229\uff0c\u4f46\u6c92\u6709\u7fa9\u52d9\u3002 \u770b\u8dcc\u671f\u6b0a\u8ce6\u4e88\u671f\u6b0a\u6301\u6709\u4eba\u5728\u7279\u5b9a\u65e5\u671f\u4e4b\u524d\u6216\u5728\u7279\u5b9a\u65e5\u671f\u4ee5\u6307\u5b9a\u50f9\u683c\u51fa\u552e\u6a19\u7684\u8cc7\u7522\u7684\u6b0a\u5229\uff0c\u4f46\u6c92\u6709\u7fa9\u52d9\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/arch-put-call.md",slug:"/architecture/call-put",permalink:"/zh/architecture/call-put",editUrl:"https://github.com/mithraiclabs/psyoptions-docs/tree/master/docs/arch-put-call.md",version:"current",sidebar_label:"\u770b\u6f32 vs \u770b\u8dcc",sidebar:"someSidebar",previous:{title:"\u671f\u6b0a\u985e\u578b",permalink:"/zh/architecture/option-types"},next:{title:"\u7f8e\u5f0f\u671f\u6b0a v1 - \u904b\u4f5c\u65b9\u5f0f",permalink:"/zh/american-v1/how-it-works"}},u=[{value:"\u93c8\u4e0a\u671f\u6b0a\u7684\u5167\u5e55",id:"\u93c8\u4e0a\u671f\u6b0a\u7684\u5167\u5e55",children:[]}],l={toc:u};function p(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u5169\u7a2e\u671f\u6b0a\u5408\u7d04\u985e\u578b\uff08\u975e\u6a23\u5f0f\uff09\u662f\u770b\u6f32\u671f\u6b0a\u548c\u770b\u8dcc\u671f\u6b0a\u3002 \u770b\u6f32\u671f\u6b0a\u8ce6\u4e88\u671f\u6b0a\u6301\u6709\u4eba\u5728\u7279\u5b9a\u65e5\u671f\u4e4b\u524d\u6216\u5728\u7279\u5b9a\u65e5\u671f\u4ee5\u6307\u5b9a\u50f9\u683c\u8cfc\u8cb7\u6a19\u7684\u8cc7\u7522\u7684\u6b0a\u5229\uff0c\u4f46\u6c92\u6709\u7fa9\u52d9\u3002 \u770b\u8dcc\u671f\u6b0a\u8ce6\u4e88\u671f\u6b0a\u6301\u6709\u4eba\u5728\u7279\u5b9a\u65e5\u671f\u4e4b\u524d\u6216\u5728\u7279\u5b9a\u65e5\u671f\u4ee5\u6307\u5b9a\u50f9\u683c\u51fa\u552e\u6a19\u7684\u8cc7\u7522\u7684\u6b0a\u5229\uff0c\u4f46\u6c92\u6709\u7fa9\u52d9\u3002"),Object(a.b)("p",null,"PsyOption \u671f\u6b0a\u5009\u4f4d\u662f\u5b8c\u5168\u62b5\u62bc\u7684\uff0c\u9019\u610f\u5473\u8457\u50c5\u652f\u6301\u63a9\u8b77\u6027\u770b\u6f32\u671f\u6b0a(Covered Call) \u548c\u64d4\u4fdd\u770b\u8dcc\u671f\u6b0a (Secured Put)\u3002 \u70ba\u4e86\u8ce3\u51fa\u770b\u6f32\u671f\u6b0a\uff0c\u671f\u6b0a\u8ce3\u5bb6\u9396\u5b9a\u6a19\u7684\u8cc7\u7522\u3002 \u540c\u6a23\u5730\uff0c\u70ba\u4e86\u8ce3\u51fa\u4e00\u500b\u770b\u8dcc\u671f\u6b0a\uff0c\u671f\u6b0a\u8ce3\u5bb6\u9396\u5b9a\u5f15\u7528\u8cc7\u7522\u3002"),Object(a.b)("h3",{id:"\u93c8\u4e0a\u671f\u6b0a\u7684\u5167\u5e55"},"\u93c8\u4e0a\u671f\u6b0a\u7684\u5167\u5e55"),Object(a.b)("p",null,"\u5728\u5354\u8b70\u5c64\u9762\uff0c\u6c92\u6709 \u770b\u6f32\u671f\u6b0a vs \u770b\u8dcc\u671f\u6b0a \u7684\u6982\u5ff5\u3002 \u7cbe\u660e\u7684\u8b80\u8005\u6703\u610f\u8b58\u5230\uff0c\u5982\u679c\u4f60\u5c07\u671f\u6b0a\u7684\u6a19\u7684\u8cc7\u7522\u548c\u5f15\u7528\u8cc7\u7522\u53c3\u6578\u5316\uff0c\u5247\u770b\u6f32\u671f\u6b0a\u548c\u770b\u8dcc\u671f\u6b0a\u7684\u529f\u80fd\u6703\u8207\u8cc7\u7522\u6210\u53cd\u5411\u95dc\u4fc2\u3002 \u66f4\u7c21\u55ae\u5730\u8aaa\uff0c\u5354\u8b70\u6c92\u6709\u9444\u9020\u770b\u8dcc\u7684\u6307\u4ee4\uff0c\u53ea\u6709\u9444\u9020\u770b\u6f32\u7684\u6307\u4ee4\u3002"),Object(a.b)("p",null,"\u770b\u8dcc\u662f\u901a\u904e\u4f7f\u7528\u76f8\u53cd\u7684\u8cc7\u7522\u5c0d\u4f86\u9444\u9020\u7684\u3002 \u56e0\u6b64\u770b\u8dcc SOL/USDC \u53ef\u4ee5\u9593\u55ae\u60f3\u6210\u770b\u6f32 USDC/SOL\u3002"))}p.isMDXComponent=!0},96:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),c=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var l=c.a.createContext({}),p=function(e){var t=c.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},b=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(r),b=n,d=s["".concat(o,".").concat(b)]||s[b]||f[b]||a;return r?c.a.createElement(d,i(i({ref:t},l),{},{components:r})):c.a.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<a;l++)o[l]=r[l];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);
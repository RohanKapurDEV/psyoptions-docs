(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{86:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),c=(r(0),r(96)),a={id:"arch-option-types",title:"\u671f\u6b0a\u985e\u578b",sidebar_label:"\u671f\u6b0a\u985e\u578b",slug:"/architecture/option-types"},i={unversionedId:"arch-option-types",id:"arch-option-types",isDocsHomePage:!1,title:"\u671f\u6b0a\u985e\u578b",description:"\u6709\u5169\u7a2e\u4e3b\u8981\u985e\u578b\u7684\u666e\u901a\u671f\u6b0a\u5408\u7d04\uff0c\u7f8e\u5f0f\u548c\u6b50\u5f0f\u3002 \u9019\u4e00\u6bb5\u6703\u5206\u89e3\u6bcf\u7a2e\u985e\u578b\u7684\u512a\u7f3a\u9ede\uff0c\u4e26\u89e3\u91cb\u6211\u5011\u73fe\u6709\u67b6\u69cb\u80cc\u5f8c\u7684\u4e00\u4e9b\u60f3\u6cd5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/arch-option-types.md",slug:"/architecture/option-types",permalink:"/zh/architecture/option-types",editUrl:"https://github.com/mithraiclabs/psyoptions-docs/tree/master/docs/arch-option-types.md",version:"current",sidebar_label:"\u671f\u6b0a\u985e\u578b",sidebar:"someSidebar",previous:{title:"\u671f\u6b0a\u7b56\u7565",permalink:"/zh/options-strategies"},next:{title:"\u770b\u6f32 vs \u770b\u8dcc",permalink:"/zh/architecture/call-put"}},p=[{value:"\u671f\u6b0a\u985e\u578b",id:"\u671f\u6b0a\u985e\u578b",children:[]}],u={toc:p};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u6709\u5169\u7a2e\u4e3b\u8981\u985e\u578b\u7684\u666e\u901a\u671f\u6b0a\u5408\u7d04\uff0c\u7f8e\u5f0f\u548c\u6b50\u5f0f\u3002 \u9019\u4e00\u6bb5\u6703\u5206\u89e3\u6bcf\u7a2e\u985e\u578b\u7684\u512a\u7f3a\u9ede\uff0c\u4e26\u89e3\u91cb\u6211\u5011\u73fe\u6709\u67b6\u69cb\u80cc\u5f8c\u7684\u4e00\u4e9b\u60f3\u6cd5\u3002"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"\u57fa\u790e")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"\u7f8e\u5f0f\u671f\u6b0a\u8ce6\u4e88\u6301\u6709\u8005\u6b0a\u5229\uff0c\u4f46\u6c92\u6709\u7fa9\u52d9\u5728\u5230\u671f\u65e5\u4e4b\u524d\u884c\u4f7f\u3002\n\n\u6b50\u5f0f\u671f\u6b0a\u8ce6\u4e88\u6301\u6709\u8005\u6b0a\u5229\uff0c\u4f46\u6c92\u6709\u5728\u5230\u671f\u6642\u884c\u4f7f\u7684\u7fa9\u52d9\u3002\n")),Object(c.b)("p",null,"\u5728\u8a0e\u8ad6\u671f\u6b0a\u5982\u4f55\u5728 Solana \u4e0a\u904b\u4f5c\u6642\uff0c\u6211\u5011\u8a55\u4f30\u4e86\u9019\u5169\u7a2e\u985e\u578b\u3002 \u7531\u65bc\u53ef\u884c\u6b0a\u6642\u9593\u7684\u5dee\u7570\uff0c\u5b58\u5728\u5404\u7a2e\u6280\u8853\u4e0a\u4ee5\u53ca\u91d1\u878d\u65b9\u9762\u7684\u59a5\u5354\u3002"),Object(c.b)("h3",{id:"\u671f\u6b0a\u985e\u578b"},"\u671f\u6b0a\u985e\u578b"),Object(c.b)("h5",{id:"\u7f8e\u5f0f"},"\u7f8e\u5f0f"),Object(c.b)("p",null,"\u7f8e\u5f0f\u671f\u6b0a\u70ba\u671f\u6b0a\u6301\u6709\u8005\u63d0\u4f9b\u4e86\u9748\u6d3b\u6027\uff0c\u56e0\u70ba\u4ed6\u5011\u53ef\u4ee5\u5728\u5230\u671f\u65e5\u4e4b\u524d\u7684\u4efb\u4f55\u6642\u5019\u884c\u4f7f\u671f\u6b0a\u3002 \u9019\u5c0d\u53ef\u80fd\u8cfc\u8cb7\u671f\u6b0a\u9032\u884c\u6295\u6a5f\u7684\u6563\u6236\u6295\u8cc7\u8005\u6709\u5229\u3002 \u96d6\u7136\u671f\u6b0a\u6301\u6709\u8005\u7684\u9748\u6d3b\u6027\u5f88\u5927\uff0c\u4f46\u9019\u4f7f\u5f97\u70ba",Object(c.b)("strong",{parentName:"p"},"\u671f\u6b0a\u5b9a\u50f9\u8b8a\u5f97\u56f0\u96e3\u5f88\u591a"),"\u3002 \u6a5f\u69cb\u548c\u505a\u5e02\u5546\u9996\u5148\u5efa\u8b70\u8f49\u5411\u6b50\u5f0f\uff0c\u56e0\u70ba\u66f4\u6a19\u6e96\u7684\u50f9\u683c\u516c\u5f0f\u53ef\u4ee5\u4f7f\u505a\u5e02\u66f4\u76f4\u63a5\u3002"),Object(c.b)("p",null,"\u5f9e\u93c8\u4e0a\u7d50\u7b97\u7684\u89d2\u5ea6\u4f86\u770b\uff0c\u7f8e\u5f0f\u671f\u6b0a\u7684\u7d50\u7b97\u975e\u5e38\u7c21\u55ae\u3002 \u5982\u679c\u671f\u6b0a\u6c92\u6709\u5230\u671f\uff0c\u6301\u6709\u4eba\u53ef\u4ee5\u884c\u6b0a\u3002"),Object(c.b)("h5",{id:"\u6b50\u5f0f"},"\u6b50\u5f0f"),Object(c.b)("p",null,"\u6b50\u5f0f\u671f\u6b0a\u7f3a\u4e4f\u7f8e\u5f0f\u671f\u6b0a\u7684\u9748\u6d3b\u6027\uff0c\u4f46\u66f4\u5bb9\u6613\u5b9a\u50f9\uff0c\u56e0\u70ba\u671f\u6b0a\u6301\u6709\u8005\u53ea\u80fd\u5728\u5230\u671f\u65e5\u884c\u6b0a\u3002 \u53ef\u4ee5\u80af\u5b9a\u7684\u662f\uff0c\u671f\u6b0a\u5b9a\u50f9\u8d8a\u5bb9\u6613\uff0c\u6a5f\u69cb\u548c\u505a\u5e02\u5546\u5c31\u8d8a\u6709\u53ef\u80fd\u8ce3\u51fa\u671f\u6b0a\u3002 \u5728\u7406\u60f3\u60c5\u6cc1\u4e0b\uff0c\u5982\u679c\u671f\u6b0a\u5728\u50f9\u5167\uff0c\u7a0b\u5f0f\u5c07\u80fd\u5920\u5728\u5230\u671f\u6642\u884c\u6b0a\uff0c \u4f46\u662f\u6211\u5011\u662f\u5728\u6c92\u6709\u9019\u4e9b\u80cc\u5f8c\u6a5f\u5236\u7684\u5340\u584a\u93c8\u4e0a\u8655\u7406\u6b64\u985e\u529f\u80fd\u3002 \u56e0\u6b64\u9019\u4f7f\u5f97\u6b50\u5f0f\u671f\u6b0a\u7684\u7d50\u7b97\u8b8a\u5f97\u7a0d\u5fae\u68d8\u624b\u3002"),Object(c.b)("p",null,"\u671f\u6b0a\u6301\u6709\u8005\u5728\u5230\u671f\u65e5\u4e4b\u524d\u4e0d\u80fd\u884c\u6b0a\uff0c\u4f46\u5728\u67d0\u500b\u6642\u5019\uff0c\u6211\u5011\u5fc5\u9808\u8b93\u671f\u6b0a\u8ce3\u65b9\u6536\u96c6\u5176\u6a19\u7684\u8cc7\u7522\uff08\u672a\u884c\u6b0a\u5408\u7d04\uff09\u6216\u63a5\u6536\u5f15\u7528\u8cc7\u7522\uff08\u5df2\u884c\u6b0a\u5408\u7d04\uff09\u3002 \u9019\u610f\u5473\u8457\u5fc5\u9808\u8981\u6709\u4e00\u6bb5\u6642\u9593\u53ef\u4ee5\u8b93\u671f\u6b0a\u6301\u6709\u8005\u884c\u6b0a\uff0c\u800c\u671f\u6b0a\u8ce3\u65b9\u4e0d\u80fd\u9818\u56de\u90a3\u4e9b\u8cc7\u7522\u3002 \u660e\u78ba\u4f86\u8aaa\uff0c\u5982\u679c\u671f\u6b0a\u8ce3\u65b9\u80fd\u5920\u540c\u6642\u8a8d\u9818\u4ed6\u5011\u7684\u8cc7\u7522\u7684\u8a71\uff0c\u90a3\u9ebc\u5c31\u6703\u7522\u751f\u6240\u6709\u671f\u6b0a\u8ce3\u65b9\u8a8d\u9818\u4e86\u4ed6\u5011\u7684\u6a19\u7684\u8cc7\u7522\u800c\u671f\u6b0a\u6301\u6709\u8005\u6c92\u6709\u8fa6\u6cd5\u884c\u6b0a\u7684\u72c0\u6cc1\u3002 \u56e0\u6b64\u7a0b\u5f0f\u53ef\u80fd\u9700\u8981\u4e00\u6bb5\u8db3\u5920\u9577\u7684\u6642\u9593\u4f86\u8b93\u6240\u6709\u671f\u6b0a\u6301\u6709\u8005\u6709\u516c\u5e73\u7684\u6a5f\u6703\u884c\u6b0a\uff0c\u4f46\u53c8\u8981\u8db3\u5920\u77ed\u4ee5\u81f3\u65bc\u671f\u6b0a\u8ce3\u5bb6\u4e0d\u6703\u89ba\u5f97\u5c07\u5176\u8cc7\u7522\u9396\u5b9a\u5230\u671f\u6b0a\u5408\u7d04\u7684\u6a5f\u6703\u6210\u672c\u592a\u9ad8\u7684\u7a0b\u5ea6\u3002"),Object(c.b)("p",null,"\u5728\u50b3\u7d71\u7684\u7f8e\u570b\u80a1\u7968\u5e02\u5834\u4e2d\uff0c\u671f\u6b0a\u6703\u5728 1 \u5929\u5167\u7d50\u7b97\u3002 \u5982\u679c\u6211\u5011\u63db\u6210\u93c8\u4e0a\u7684\u8a71\uff0c\u90a3\u9ebc\u5408\u7d04\u6301\u6709\u8005\u5fc5\u9808\u5728 24 \u5c0f\u6642\u5167\u57f7\u884c\u4ed6\u5011\u7684\u5408\u7d04\u3002 \u7406\u8ad6\u4e0a\uff0c\u5728\u90a3\u500b\u7d50\u7b97\u671f\u4e4b\u5f8c\uff0c\u90a3\u4e9b\u8868\u793a\u5408\u7d04\u7684\u4ee3\u5e63\u5c07\u8b8a\u5f97\u5b8c\u5168\u6c92\u6709\u50f9\u503c\u3002"),Object(c.b)("p",null,"\u76ee\u524d\u9019\u6bb5\u6642\u9593\u7684\u9593\u9694\u5c0d\u6211\u5011\u7684\u5718\u968a\u4f86\u8aaa\u4e26\u4e0d\u660e\u986f\uff0c\u9019\u4e5f\u662f\u6211\u5011\u5f9e\u7f8e\u5f0f\u671f\u6b0a\u958b\u59cb\u7684\u90e8\u5206\u539f\u56e0\u3002 \u96a8\u8457\u6211\u5011\u7e7c\u7e8c\u6536\u96c6\u53cd\u994b\u610f\u898b\uff0c\u6211\u5011\u5f88\u60f3\u807d\u807d\u793e\u7fa4\u5c0d\u6b64\u4e3b\u984c\u7684\u770b\u6cd5\u3002"))}l.isMDXComponent=!0},96:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),b=l(r),f=n,d=b["".concat(a,".").concat(f)]||b[f]||s[f]||c;return r?o.a.createElement(d,i(i({ref:t},u),{},{components:r})):o.a.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var u=2;u<c;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);
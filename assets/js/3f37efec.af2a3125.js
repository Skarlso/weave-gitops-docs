(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[2860],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=c(n),p=i,v=d["".concat(s,".").concat(p)]||d[p]||f[p]||o;return n?r.createElement(v,a(a({ref:t},l),{},{components:n})):r.createElement(v,a({ref:t},l))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6742:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(9756),i=n(7294),o=n(3727),a=n(2263),u=n(3919),s=n(412),c=(0,i.createContext)({collectLink:function(){}}),l=n(4996),f=n(8780);var d=function(e){var t,n,d=e.isNavLink,p=e.to,v=e.href,m=e.activeClassName,g=e.isActive,b=e["data-noBrokenLinkCheck"],h=e.autoAddBaseUrl,y=void 0===h||h,w=(0,r.Z)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),O=(0,a.Z)().siteConfig,k=O.trailingSlash,P=O.baseUrl,j=(0,l.C)().withBaseUrl,C=(0,i.useContext)(c),E=p||v,_=(0,u.Z)(E),x=null==E?void 0:E.replace("pathname://",""),D=void 0!==x?(n=x,y&&function(e){return e.startsWith("/")}(n)?j(n):n):void 0;D&&_&&(D=(0,f.applyTrailingSlash)(D,{trailingSlash:k,baseUrl:P}));var T,Z=(0,i.useRef)(!1),S=d?o.OL:o.rU,U=s.Z.canUseIntersectionObserver;(0,i.useEffect)((function(){return!U&&_&&null!=D&&window.docusaurus.prefetch(D),function(){U&&T&&T.disconnect()}}),[D,U,_]);var I=null!==(t=null==D?void 0:D.startsWith("#"))&&void 0!==t&&t,L=!D||!_||I;return D&&_&&!I&&!b&&C.collectLink(D),L?i.createElement("a",Object.assign({href:D},E&&!_&&{target:"_blank",rel:"noopener noreferrer"},w)):i.createElement(S,Object.assign({},w,{onMouseEnter:function(){Z.current||null==D||(window.docusaurus.preload(D),Z.current=!0)},innerRef:function(e){var t,n;U&&e&&_&&(t=e,n=function(){null!=D&&window.docusaurus.prefetch(D)},(T=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(T.unobserve(t),T.disconnect(),n())}))}))).observe(t))},to:D||""},d&&{isActive:g,activeClassName:m}))}},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return a}});var r=n(2263),i=n(3919);function o(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,a=o.forcePrependBaseUrl,u=void 0!==a&&a,s=o.absolute,c=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(u)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+l:l}(o,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},8084:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i},useAllPluginInstancesData:function(){return o},usePluginData:function(){return a}});var r=n(2263);function i(){var e=(0,r.Z)().globalData;if(!e)throw new Error("Docusaurus global data not found.");return e}function o(e){var t=i()[e];if(!t)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin.');return t}function a(e,t){void 0===t&&(t="default");var n=o(e)[t];if(!n)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin with id "'+t+'".');return n}},8802:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var i,o=e.split(/[#?]/)[0],a="/"===o||o===r?o:(i=o,n?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(o,a)}},8780:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var o=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(o).default}})},9964:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},6828:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7294),i=n(6742),o=n(8084),a={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function u(e){var t,n,u,s,c=e.tiers;return r.createElement(i.Z,{to:(u=(0,o.default)()["docusaurus-plugin-content-docs"],s=null==u||null==(t=u.default)||null==(n=t.versions)?void 0:n.find((function(e){return"current"===e.name})),((null==s?void 0:s.path)||"/docs")+"/enterprise/intro"),title:"This feature is a available on "+c,style:a},c)}},3365:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a=n(6828),u={title:"Introduction",sidebar_position:0},s="Introduction",c={unversionedId:"cluster-management/intro",id:"version-0.3.0/cluster-management/intro",isDocsHomePage:!1,title:"Introduction",description:"Cluster management",source:"@site/versioned_docs/version-0.3.0/cluster-management/intro.mdx",sourceDirName:"cluster-management",slug:"/cluster-management/intro",permalink:"/docs/cluster-management/intro",editUrl:"https://github.com/weaveworks/weave-gitops-docs/edit/main/versioned_docs/version-0.3.0/cluster-management/intro.mdx",version:"0.3.0",sidebarPosition:0,frontMatter:{title:"Introduction",sidebar_position:0},sidebar:"version-0.3.0/tutorialSidebar",previous:{title:"GitOps Automation Configuration",permalink:"/docs/gitops-automation"},next:{title:"Managing existing clusters",permalink:"/docs/cluster-management/managing-existing-clusters"}},l=[{value:'Cluster management <TierLabel tiers="enterprise" />',id:"cluster-management",children:[]}],f={toc:l};function d(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("h2",{id:"cluster-management"},"Cluster management ",(0,o.kt)(a.Z,{tiers:"enterprise",mdxType:"TierLabel"})),(0,o.kt)("p",null,"Weave Gitops Enterprise (WGE) provides ops teams with an easy way to assess the\nhealth of multiple clusters in a single place. It shows cluster information such as\nKubernetes version and number of nodes and provides details about the GitOps operations\non those clusters, such as Git repositories and recent commits. Additionally, it\naggregates Prometheus alerts to assist with troubleshooting."))}d.isMDXComponent=!0}}]);
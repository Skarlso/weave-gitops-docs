(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[3180],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7976:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var r=t(2122),o=t(9756),i=(t(7294),t(3905)),a={sidebar_position:1},l="Installing the CLI",c={unversionedId:"installation",id:"version-0.2.5/installation",isDocsHomePage:!1,title:"Installing the CLI",description:"The wego command-line interface is currently supported on Mac (x86 and Arm), and Linux.",source:"@site/versioned_docs/version-0.2.5/installation.md",sourceDirName:".",slug:"/installation",permalink:"/docs/installation",editUrl:"https://github.com/weaveworks/weave-gitops-docs/edit/main/versioned_docs/version-0.2.5/installation.md",version:"0.2.5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"version-0.2.5/tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Getting Started",permalink:"/docs/getting-started"}},s=[],u={toc:s};function p(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installing-the-cli"},"Installing the CLI"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"wego")," command-line interface is currently supported on Mac (x86 and Arm), and Linux.\nTo install the ",(0,i.kt)("inlineCode",{parentName:"p"},"wego")," CLI, please follow the following steps:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'curl -L "https://github.com/weaveworks/weave-gitops/releases/download/v0.2.5/wego-$(uname)-$(uname -m)" -o wego\nchmod +x wego\nsudo mv ./wego /usr/local/bin/wego\nwego version\n')),(0,i.kt)("p",null,"You should see:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"Current Version: 0.2.5\nGitCommit: 00a5e5bb3307a1e8f01cc66b6c514850f2a10e9a\nBuildTime: 2021-09-08T23:56:57Z\nBranch: HEAD\nFlux Version: v0.16.0\n")))}p.isMDXComponent=!0}}]);
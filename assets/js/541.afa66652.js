(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[541],{3541:function(e,t,n){"use strict";n.d(t,{Z:function(){return I}});var o=n(7294),r=n(6742),l=n(2122),a=n(6010),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},c={Prism:n(7410).Z,theme:s};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var u=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},y=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},h=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=p({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=p({},n,{backgroundColor:null}),r};function m(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var g=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?h(e.theme,e.language):void 0;return t.themeDict=n})),i(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,l=p({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),a=t.getThemeDict(t.props);return void 0!==a&&(l.style=a.plain),void 0!==r&&(l.style=void 0!==l.style?p({},l.style,r):r),void 0!==n&&(l.key=n),o&&(l.className+=" "+o),l})),i(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return l[n[0]];var a=o?{display:"inline-block"}:{},s=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[a].concat(s))}})),i(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,l=e.token,a=p({},m(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==r&&(a.style=void 0!==a.style?p({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),i(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var l=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,l=this.getThemeDict(this.props),a=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],l=0,a=0,s=[],c=[s];a>-1;){for(;(l=o[a]++)<r[a];){var i=void 0,p=t[a],h=n[a][l];if("string"==typeof h?(p=a>0?p:["plain"],i=h):(p=y(p,h.type),h.alias&&(p=y(p,h.alias)),i=h.content),"string"==typeof i){var m=i.split(u),g=m.length;s.push({types:p,content:m[0]});for(var f=1;f<g;f++)d(s),c.push(s=[]),s.push({types:p,content:m[f]})}else a++,t.push(p),n.push(i),o.push(0),r.push(i.length)}a--,t.pop(),n.pop(),o.pop(),r.pop()}return d(s),c}(void 0!==a?this.tokenize(t,o,a,n):[o]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);var f=n(7594),v=n.n(f),k={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},b=n(5350),j=n(6700),E=function(){var e=(0,j.LU)().prism,t=(0,b.Z)().isDarkTheme,n=e.theme||k,o=e.darkTheme||n;return t?o:n},N=n(4973),T="codeBlockContainer_K1bP",x="codeBlockContent_hGly",C="codeBlockTitle_eoMF",L="codeBlock_23N8",B="codeBlockWithTitle_2JqI",_="copyButton_Ue-o",Z="codeBlockLines_39YC",P=/{([\d,-]+)}/,S=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),o=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+o+")\\s*$")};function w(e){var t=e.children,n=e.className,r=e.metastring,s=e.title,i=(0,j.LU)().prism,p=(0,o.useState)(!1),u=p[0],d=p[1],y=(0,o.useState)(!1),h=y[0],m=y[1];(0,o.useEffect)((function(){m(!0)}),[]);var f=(0,j.bc)(r)||s,k=(0,o.useRef)(null),b=[],w=E(),O=Array.isArray(t)?t.join(""):t;if(r&&P.test(r)){var D=r.match(P)[1];b=v()(D).filter((function(e){return e>0}))}var A=n&&n.replace(/language-/,"");!A&&i.defaultLanguage&&(A=i.defaultLanguage);var I=O.replace(/\n$/,"");if(0===b.length&&void 0!==A){for(var z,R="",$=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return S(["js","jsBlock"]);case"jsx":case"tsx":return S(["js","jsBlock","jsx"]);case"html":return S(["js","jsBlock","html"]);case"python":case"py":return S(["python"]);default:return S()}}(A),F=O.replace(/\n$/,"").split("\n"),U=0;U<F.length;){var V=U+1,W=F[U].match($);if(null!==W){switch(W.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":R+=V+",";break;case"highlight-start":z=V;break;case"highlight-end":R+=z+"-"+(V-1)+","}F.splice(U,1)}else U+=1}b=v()(R),I=F.join("\n")}var q=function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),o=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let l=!1;r.rangeCount>0&&(l=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let a=!1;try{a=document.execCommand("copy")}catch{}n.remove(),l&&(r.removeAllRanges(),r.addRange(l)),o&&o.focus()}(I),d(!0),setTimeout((function(){return d(!1)}),2e3)};return o.createElement(g,(0,l.Z)({},c,{key:String(h),theme:w,code:I,language:A}),(function(e){var t,n=e.className,r=e.style,s=e.tokens,c=e.getLineProps,i=e.getTokenProps;return o.createElement("div",{className:T},f&&o.createElement("div",{style:r,className:C},f),o.createElement("div",{className:(0,a.Z)(x,A)},o.createElement("div",{tabIndex:0,className:(0,a.Z)(n,L,"thin-scrollbar",(t={},t[B]=f,t))},o.createElement("div",{className:Z,style:r},s.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=c({line:e,key:t});return b.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),o.createElement("div",(0,l.Z)({key:t},n),e.map((function(e,t){return o.createElement("span",(0,l.Z)({key:t},i({token:e,key:t})))})))})))),o.createElement("button",{ref:k,type:"button","aria-label":(0,N.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,a.Z)(_),onClick:q},u?o.createElement(N.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):o.createElement(N.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var O=n(9756),D="enhancedAnchor_2LWZ",A=function(e){return function(t){var n,r=t.id,l=(0,O.Z)(t,["id"]),s=(0,j.LU)().navbar.hideOnScroll;return r?o.createElement(e,l,o.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,a.Z)("anchor",(n={},n[D]=!s,n)),id:r}),l.children,o.createElement("a",{className:"hash-link",href:"#"+r,title:(0,N.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):o.createElement(e,l)}},I={code:function(e){var t=e.children;return(0,o.isValidElement)(t)?t:t.includes("\n")?o.createElement(w,e):o.createElement("code",e)},a:function(e){return o.createElement(r.Z,e)},pre:function(e){var t,n=e.children;return(0,o.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:o.createElement(w,(0,o.isValidElement)(n)?null==n?void 0:n.props:{children:n})},h1:A("h1"),h2:A("h2"),h3:A("h3"),h4:A("h4"),h5:A("h5"),h6:A("h6")}},7594:function(e,t){function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,r,l]=t;if(o&&l){o=parseInt(o),l=parseInt(l);const e=o<l?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(l+=e);for(let t=o;t!==l;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);
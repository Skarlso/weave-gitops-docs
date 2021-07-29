(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[2684],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return d}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),i=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=i(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),g=i(t),d=o,m=g["".concat(p,".").concat(d)]||g[d]||c[d]||s;return t?a.createElement(m,l(l({ref:n},u),{},{components:t})):a.createElement(m,l({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,l=new Array(s);l[0]=g;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var i=2;i<s;i++)l[i]=t[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},3598:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return r},metadata:function(){return p},toc:function(){return i},default:function(){return c}});var a=t(2122),o=t(9756),s=(t(7294),t(3905)),l={sidebar_position:3},r="CLI Reference",p={unversionedId:"cli-reference",id:"cli-reference",isDocsHomePage:!1,title:"CLI Reference",description:"wego",source:"@site/docs/cli-reference.md",sourceDirName:".",slug:"/cli-reference",permalink:"/docs/next/cli-reference",editUrl:"https://github.com/weaveworks/weave-gitops-docs/edit/main/docs/cli-reference.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/next/getting-started"},next:{title:"Architecture",permalink:"/docs/next/architecture"}},i=[{value:"<code>wego</code>",id:"wego",children:[]},{value:"<code>wego gitops</code>",id:"wego-gitops",children:[{value:"<code>wego gitops install</code>",id:"wego-gitops-install",children:[]},{value:"<code>wego gitops uninstall</code>",id:"wego-gitops-uninstall",children:[]}]},{value:"<code>wego app</code>",id:"wego-app",children:[{value:"<code>wego app add</code>",id:"wego-app-add",children:[]},{value:"<code>wego app status</code>",id:"wego-app-status",children:[]},{value:"<code>wego app list</code>",id:"wego-app-list",children:[]},{value:"<code>wego app pause</code>",id:"wego-app-pause",children:[]},{value:"<code>wego app unpause</code>",id:"wego-app-unpause",children:[]}]},{value:"<code>wego flux</code>",id:"wego-flux",children:[]},{value:"<code>wego version</code>",id:"wego-version",children:[]}],u={toc:i};function c(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"cli-reference"},"CLI Reference"),(0,s.kt)("h2",{id:"wego"},(0,s.kt)("inlineCode",{parentName:"h2"},"wego")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"wego")," is the command-line interface for installing and controlling the Weave GitOps infrastructure"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},'Weave GitOps\n\nUsage:\n  wego [command]\n\nAvailable Commands:\n  app\n  flux        Use flux commands\n  gitops      Manages your wego installation\n  help        Help about any command\n  version     Display wego version\n\nFlags:\n  -h, --help               help for wego\n      --namespace string   gitops runtime namespace (default "wego-system")\n  -v, --verbose            Enable verbose output\n\nUse "wego [command] --help" for more information about a command.\n')),(0,s.kt)("h2",{id:"wego-gitops"},(0,s.kt)("inlineCode",{parentName:"h2"},"wego gitops")),(0,s.kt)("p",null,"The gitops sub-command manages the installation and uninstallation of the Weave GitOps system into clusters."),(0,s.kt)("h3",{id:"wego-gitops-install"},(0,s.kt)("inlineCode",{parentName:"h3"},"wego gitops install")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"wego install")," will install Weave GitOps into the current Kubernetes cluster. By default it will use the ",(0,s.kt)("inlineCode",{parentName:"p"},"wego-system")," namespace, but you can change this."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},'The install command deploys Wego in the specified namespace.\nIf a previous version is installed, then an in-place upgrade will be performed.\n\nUsage:\n  wego gitops install [flags]\n\nExamples:\n  # Install wego in the wego-system namespace\n  wego gitops install\n\nFlags:\n  -h, --help   help for install\n\nGlobal Flags:\n      --dry-run            outputs all the manifests that would be installed\n  -n, --namespace string   the namespace scope for this operation (default "wego-system")\n  -v, --verbose            Enable verbose output\n')),(0,s.kt)("h3",{id:"wego-gitops-uninstall"},(0,s.kt)("inlineCode",{parentName:"h3"},"wego gitops uninstall")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"wego gitops uninstall")," removes the Weave GitOps controllers from the current Kubernetes cluster."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},'The uninstall command removes Wego components from the cluster.\n\nUsage:\n  wego gitops uninstall [flags]\n\nExamples:\n  # Uninstall wego in the wego-system namespace\n  wego uninstall\n\nFlags:\n  -h, --help   help for uninstall\n\nGlobal Flags:\n      --dry-run            outputs all the manifests that would be installed\n  -n, --namespace string   the namespace scope for this operation (default "wego-system")\n  -v, --verbose            Enable verbose output\n')),(0,s.kt)("h2",{id:"wego-app"},(0,s.kt)("inlineCode",{parentName:"h2"},"wego app")),(0,s.kt)("p",null,'Weave GitOps enables continuous deployment of workloads to Kubernetes targets. An "app" is a workload that can be deployed.'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},'Usage:\n  wego app [command]\n\nExamples:\n\n  # Add an application to wego from local git repository\n  wego app add . --name <app-name>\n\n  # Status an application under wego control\n  wego app status <app-name>\n\n  # List applications under wego control\n  wego app list\n\n  # Pause gitops automation\n  wego app pause <app-name>\n\n  # Unpause gitops automation\n  wego app unpause <app-name>\n\nAvailable Commands:\n  add         Add a workload repository to a wego cluster\n  list        List applications under wego control\n  pause       Pause an application\n  status      Get status of a workload under wego control\n  unpause     Unpause an application\n\nFlags:\n  -h, --help   help for app\n\nGlobal Flags:\n      --namespace string   gitops runtime namespace (default "wego-system")\n  -v, --verbose            Enable verbose output\n\nUse "wego app [command] --help" for more information about a command.\n')),(0,s.kt)("h3",{id:"wego-app-add"},(0,s.kt)("inlineCode",{parentName:"h3"},"wego app add")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"wego app add")," adds an application workload to the GitOps workflow. The simplest way to use this is to set the current directory to\npoint to a repository that you want GitOps'ed into the cluster and use ",(0,s.kt)("inlineCode",{parentName:"p"},"wego app add ."),". By default, this will create a pull request for the repository containing the requisite GitOps machinery to manage your application. Once the pull request is approved and merged, your application will be managed by GitOps. Alternatively, if --auto-merge=true is specified, the GitOps support will be directly added to the Git repository, skipping the pull request."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},'Associates an additional application in a git repository with a wego cluster so that its contents may be managed via GitOps\n\nUsage:\n  wego app add [--name <name>] [--url <url>] [--branch <branch>] [--path <path within repository>] [--private-key <keyfile>] <repository directory> [flags]\n\nExamples:\nwego app add .\n\nFlags:\n      --app-config-url string    URL of external repository (if any) which will hold automation manifests; NONE to store only in the cluster\n      --branch string            Branch to watch within git repository (default "main")\n      --chart string             Specify chart for helm source\n      --deployment-type string   deployment type [kustomize, helm] (default "kustomize")\n      --dry-run                  If set, \'wego add\' will not make any changes to the system; it will just display the actions that would have been taken\n  -h, --help                     help for add\n      --name string              Name of remote git repository\n      --path string              Path of files within git repository (default "./")\n      --private-key string       Private key to access git repository over ssh\n      --url string               URL of remote repository\n      --auto-merge               If set, \'wego add\' will merge automatically into the specified --branch (default false)\n\nGlobal Flags:\n      --namespace string   gitops runtime namespace (default "wego-system")\n  -v, --verbose            Enable verbose output\n')),(0,s.kt)("h3",{id:"wego-app-status"},(0,s.kt)("inlineCode",{parentName:"h3"},"wego app status")),(0,s.kt)("p",null,"Get the status of a GitOps'ed app"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},'Usage:\n  wego app status <app-name> [flags]\n\nExamples:\nwego app status podinfo\n\nFlags:\n  -h, --help   help for status\n\nGlobal Flags:\n      --namespace string   gitops runtime namespace (default "wego-system")\n  -v, --verbose            Enable verbose output\n')),(0,s.kt)("h3",{id:"wego-app-list"},(0,s.kt)("inlineCode",{parentName:"h3"},"wego app list")),(0,s.kt)("p",null,"List the weave-gitops apps currently deployed in the cluster"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},'Usage:\n  wego app list [flags]\n\nExamples:\nwego app list\n\nFlags:\n  -h, --help   help for list\n\nGlobal Flags:\n      --namespace string   gitops runtime namespace (default "wego-system")\n  -v, --verbose            Enable verbose output\n')),(0,s.kt)("h3",{id:"wego-app-pause"},(0,s.kt)("inlineCode",{parentName:"h3"},"wego app pause")),(0,s.kt)("p",null,"Pause an application"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},'Usage:\n  wego app pause <app-name> [flags]\n\nExamples:\nwego app pause podinfo\n\nFlags:\n  -h, --help   help for pause\n\nGlobal Flags:\n      --namespace string   gitops runtime namespace (default "wego-system")\n  -v, --verbose            Enable verbose output\n')),(0,s.kt)("h3",{id:"wego-app-unpause"},(0,s.kt)("inlineCode",{parentName:"h3"},"wego app unpause")),(0,s.kt)("p",null,"Unpause an application"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},'Usage:\n  wego app unpause <app-name> [flags]\n\nExamples:\nwego app unpause podinfo\n\nFlags:\n  -h, --help   help for unpause\n\nGlobal Flags:\n      --namespace string   gitops runtime namespace (default "wego-system")\n  -v, --verbose            Enable verbose output\n')),(0,s.kt)("h2",{id:"wego-flux"},(0,s.kt)("inlineCode",{parentName:"h2"},"wego flux")),(0,s.kt)("p",null,"This command enables access to and control of the underlying Flux runtime."),(0,s.kt)("p",null,"Please see ",(0,s.kt)("a",{parentName:"p",href:"https://fluxcd.io/docs/cmd/flux/"},"flux documentation")),(0,s.kt)("h2",{id:"wego-version"},(0,s.kt)("inlineCode",{parentName:"h2"},"wego version")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},'Display wego version\n\nUsage:\n  wego version [flags]\n\nFlags:\n  -h, --help   help for version\n\nGlobal Flags:\n      --namespace string   gitops runtime namespace (default "wego-system")\n  -v, --verbose            Enable verbose output\n')))}c.isMDXComponent=!0}}]);
(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[8904],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),r=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=r(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=r(n),d=o,m=g["".concat(l,".").concat(d)]||g[d]||c[d]||s;return n?a.createElement(m,p(p({ref:t},u),{},{components:n})):a.createElement(m,p({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,p=new Array(s);p[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var r=2;r<s;r++)p[r]=n[r];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4568:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return r},default:function(){return c}});var a=n(2122),o=n(9756),s=(n(7294),n(3905)),p={sidebar_position:3},i="CLI Reference",l={unversionedId:"cli-reference",id:"version-0.3.0/cli-reference",isDocsHomePage:!1,title:"CLI Reference",description:"gitops",source:"@site/versioned_docs/version-0.3.0/cli-reference.md",sourceDirName:".",slug:"/cli-reference",permalink:"/docs/cli-reference",editUrl:"https://github.com/weaveworks/weave-gitops-docs/edit/main/versioned_docs/version-0.3.0/cli-reference.md",version:"0.3.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"version-0.3.0/tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/getting-started"},next:{title:"Architecture",permalink:"/docs/architecture"}},r=[{value:"<code>gitops</code>",id:"gitops",children:[{value:"<code>gitops install</code>",id:"gitops-install",children:[]},{value:"<code>gitops uninstall</code>",id:"gitops-uninstall",children:[]}]},{value:"<code>gitops app</code>",id:"gitops-app",children:[{value:"<code>gitops app add</code>",id:"gitops-app-add",children:[]},{value:"<code>gitops app status</code>",id:"gitops-app-status",children:[]},{value:"<code>gitops app list</code>",id:"gitops-app-list",children:[]},{value:"<code>gitops app pause</code>",id:"gitops-app-pause",children:[]},{value:"<code>gitops app unpause</code>",id:"gitops-app-unpause",children:[]},{value:"<code>gitops app remove</code>",id:"gitops-app-remove",children:[]}]},{value:"<code>gitops flux</code>",id:"gitops-flux",children:[]},{value:"<code>gitops version</code>",id:"gitops-version",children:[]}],u={toc:r};function c(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"cli-reference"},"CLI Reference"),(0,s.kt)("h2",{id:"gitops"},(0,s.kt)("inlineCode",{parentName:"h2"},"gitops")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"gitops")," is the command-line interface for installing and controlling the Weave GitOps infrastructure"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},'Weave GitOps\n\nUsage:\n  gitops [command]\n\nAvailable Commands:\n  app\n  flux        Use flux commands\n  help        Help about any command\n  install     Install or upgrade GitOps\n  uninstall   Uninstall GitOps\n  version     Display wego version\n\nFlags:\n  -h, --help               help for wego\n      --namespace string   gitops runtime namespace (default "wego-system")\n  -v, --verbose            Enable verbose output\n\nUse "gitops [command] --help" for more information about a command.\n')),(0,s.kt)("h3",{id:"gitops-install"},(0,s.kt)("inlineCode",{parentName:"h3"},"gitops install")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"gitops install")," will install Weave GitOps into the current Kubernetes cluster. By default it will use the ",(0,s.kt)("inlineCode",{parentName:"p"},"wego-system")," namespace, but you can change this."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},'The install command deploys GitOps in the specified namespace.\nIf a previous version is installed, then an in-place upgrade will be performed.\n\nUsage:\n  gitops install [flags]\n\nExamples:\n  # Install GitOps in the wego-system namespace\n  gitops install\n\nFlags:\n      --dry-run   outputs all the manifests that would be installed\n  -h, --help      help for install\n\nGlobal Flags:\n      --namespace string   gitops runtime namespace (default "wego-system")\n  -v, --verbose            Enable verbose output\n')),(0,s.kt)("h3",{id:"gitops-uninstall"},(0,s.kt)("inlineCode",{parentName:"h3"},"gitops uninstall")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"gitops uninstall")," removes the Weave GitOps controllers from the current Kubernetes cluster."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},'The uninstall command removes GitOps components from the cluster.\n\nUsage:\n  gitops uninstall [flags]\n\nExamples:\n  # Uninstall GitOps from the wego-system namespace\n  gitops uninstall\n\nFlags:\n      --dry-run   outputs all the manifests that would be uninstalled\n  -h, --help      help for uninstall\n\nGlobal Flags:\n      --namespace string   gitops runtime namespace (default "wego-system")\n  -v, --verbose            Enable verbose output\n')),(0,s.kt)("h2",{id:"gitops-app"},(0,s.kt)("inlineCode",{parentName:"h2"},"gitops app")),(0,s.kt)("p",null,'Weave GitOps enables continuous deployment of workloads to Kubernetes targets. An "app" is a workload that can be deployed.'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},'Usage:\n  gitops app [flags]\n  gitops app [command]\n\nExamples:\n\n  # Get last 10 commits for an application\n  gitops app <app-name> get commits\n\n  # Add an application to gitops from local git repository\n  gitops app add . --name <app-name>\n\n  # Remove an application from gitops\n  gitops app remove <app-name>\n\n  # Status an application under gitops control\n  gitops app status <app-name>\n\n  # List applications under gitops control\n  gitops app list\n\n  # Pause gitops automation\n  gitops app pause <app-name>\n\n  # Unpause gitops automation\n  gitops app unpause <app-name>\n\nAvailable Commands:\n  add         Add a workload repository to a gitops cluster\n  list        List applications under wego control\n  pause       Pause an application\n  remove      Remove an app from a gitops cluster\n  status      Get status of a workload under wego control\n  unpause     Unpause an application\n\nFlags:\n  -h, --help   help for app\n\nGlobal Flags:\n      --namespace string   gitops runtime namespace (default "wego-system")\n  -v, --verbose            Enable verbose output\n\nUse "gitops app [command] --help" for more information about a command.\n')),(0,s.kt)("h3",{id:"gitops-app-add"},(0,s.kt)("inlineCode",{parentName:"h3"},"gitops app add")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"gitops app add")," adds an application workload to the GitOps workflow. The simplest way to use this is to set the current directory to\npoint to a repository that you want GitOps'ed into the cluster and use ",(0,s.kt)("inlineCode",{parentName:"p"},"gitops app add ."),". By default, this will create a pull request for the repository containing the requisite GitOps machinery to manage your application. Once the pull request is approved and merged, your application will be managed by GitOps. Alternatively, if --auto-merge=true is specified, the GitOps support will be directly added to the Git repository, skipping the pull request."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},'Associates an additional application in a git repository with a cluster so that its contents may be managed via GitOps\n\nUsage:\n  gitops app add [--name <name>] [--url <url>] [--branch <branch>] [--path <path within repository>] [--private-key <keyfile>] <repository directory> [flags]\n\nExamples:\ngitops app add .\n\nFlags:\n      --app-config-url string    URL of external repository (if any) which will hold automation manifests; NONE to store only in the cluster\n      --branch string            Branch to watch within git repository (default "main")\n      --chart string             Specify chart for helm source\n      --deployment-type string   deployment type [kustomize, helm] (default "kustomize")\n      --dry-run                  If set, \'gitops app add\' will not make any changes to the system; it will just display the actions that would have been taken\n  -h, --help                     help for add\n      --name string              Name of remote git repository\n      --path string              Path of files within git repository (default "./")\n      --private-key string       Private key to access git repository over ssh\n      --url string               URL of remote repository\n      --auto-merge               If set, \'gitops app add\' will merge automatically into the specified --branch (default false)\n\nGlobal Flags:\n      --namespace string   gitops runtime namespace (default "wego-system")\n  -v, --verbose            Enable verbose output\n')),(0,s.kt)("h3",{id:"gitops-app-status"},(0,s.kt)("inlineCode",{parentName:"h3"},"gitops app status")),(0,s.kt)("p",null,"Get the status of a GitOps'ed app"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},'Usage:\n  gitops app status <app-name> [flags]\n\nExamples:\ngitops app status podinfo\n\nFlags:\n  -h, --help   help for status\n\nGlobal Flags:\n      --namespace string   gitops runtime namespace (default "wego-system")\n  -v, --verbose            Enable verbose output\n')),(0,s.kt)("h3",{id:"gitops-app-list"},(0,s.kt)("inlineCode",{parentName:"h3"},"gitops app list")),(0,s.kt)("p",null,"List the weave-gitops apps currently deployed in the cluster"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},'Usage:\n  gitops app list [flags]\n\nExamples:\ngitops app list\n\nFlags:\n  -h, --help   help for list\n\nGlobal Flags:\n      --namespace string   gitops runtime namespace (default "wego-system")\n  -v, --verbose            Enable verbose output\n')),(0,s.kt)("h3",{id:"gitops-app-pause"},(0,s.kt)("inlineCode",{parentName:"h3"},"gitops app pause")),(0,s.kt)("p",null,"Pause an application"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},'Usage:\n  gitops app pause <app-name> [flags]\n\nExamples:\ngitops app pause podinfo\n\nFlags:\n  -h, --help   help for pause\n\nGlobal Flags:\n      --namespace string   gitops runtime namespace (default "wego-system")\n  -v, --verbose            Enable verbose output\n')),(0,s.kt)("h3",{id:"gitops-app-unpause"},(0,s.kt)("inlineCode",{parentName:"h3"},"gitops app unpause")),(0,s.kt)("p",null,"Unpause an application"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},'Usage:\n  gitops app unpause <app-name> [flags]\n\nExamples:\ngitops app unpause podinfo\n\nFlags:\n  -h, --help   help for unpause\n\nGlobal Flags:\n      --namespace string   gitops runtime namespace (default "wego-system")\n  -v, --verbose            Enable verbose output\n')),(0,s.kt)("h3",{id:"gitops-app-remove"},(0,s.kt)("inlineCode",{parentName:"h3"},"gitops app remove")),(0,s.kt)("p",null,"Remove an application from a gitops cluster so it will no longer be managed via GitOps"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"Usage:\n  gitops app remove [--private-key <keyfile>] <app name> [flags]\n\nExamples:\n\n  # Remove application from gitops control via immediate commit\n  gitops app remove podinfo\n\n\nFlags:\n      --dry-run              If set, 'gitops app remove' will not make any changes to the system; it will just display the actions that would have been taken\n  -h, --help                 help for remove\n      --name string          Name of application\n      --private-key string   Private key to access git repository over ssh\n\nGlobal Flags:\n      --namespace string   gitops runtime namespace (default \"wego-system\")\n  -v, --verbose            Enable verbose output\n")),(0,s.kt)("h2",{id:"gitops-flux"},(0,s.kt)("inlineCode",{parentName:"h2"},"gitops flux")),(0,s.kt)("p",null,"This command enables access to and control of the underlying Flux runtime."),(0,s.kt)("p",null,"Please see ",(0,s.kt)("a",{parentName:"p",href:"https://fluxcd.io/docs/cmd/flux/"},"flux documentation")),(0,s.kt)("h2",{id:"gitops-version"},(0,s.kt)("inlineCode",{parentName:"h2"},"gitops version")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},'Display gitops version\n\nUsage:\n  gitops version [flags]\n\nFlags:\n  -h, --help   help for version\n\nGlobal Flags:\n      --namespace string   gitops runtime namespace (default "wego-system")\n  -v, --verbose            Enable verbose output\n')))}c.isMDXComponent=!0}}]);
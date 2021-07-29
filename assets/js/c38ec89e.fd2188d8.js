(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[8786],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?o.createElement(k,i(i({ref:t},c),{},{components:n})):o.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8383:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var o=n(2122),a=n(9756),r=(n(7294),n(3905)),i={sidebar_position:2},l="Getting Started",s={unversionedId:"getting-started",id:"version-0.2.1/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Let's get an app deployed with Weave GitOps.",source:"@site/versioned_docs/version-0.2.1/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/0.2.1/getting-started",editUrl:"https://github.com/weaveworks/weave-gitops-docs/edit/main/versioned_docs/version-0.2.1/getting-started.md",version:"0.2.1",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"version-0.2.1/tutorialSidebar",previous:{title:"Installing the CLI",permalink:"/docs/0.2.1/installation"},next:{title:"CLI Reference",permalink:"/docs/0.2.1/cli-reference"}},p=[{value:"Overview",id:"overview",children:[]},{value:"Pre-requisites",id:"pre-requisites",children:[{value:"Github Token",id:"github-token",children:[]}]},{value:"Install the CLI",id:"install-the-cli",children:[]},{value:"Getting Started with a Kind cluster and Podinfo workload",id:"getting-started-with-a-kind-cluster-and-podinfo-workload",children:[{value:"Create the cluster",id:"create-the-cluster",children:[]},{value:"Install Weave GitOps onto the cluster",id:"install-weave-gitops-onto-the-cluster",children:[]},{value:"Configure Weave GitOps to reconcile the workload automatically",id:"configure-weave-gitops-to-reconcile-the-workload-automatically",children:[]},{value:"See GitOps reconciliation",id:"see-gitops-reconciliation",children:[]}]}],c={toc:p};function d(e){var t=e.components,i=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"Let's get an app deployed with ",(0,r.kt)("strong",{parentName:"p"},"Weave GitOps"),"."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"This is Work In Progress")),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"In this short guide, we will see how to get a simple workload running in a cluster using GitOps, and then make a change to that deployment and see it updated automatically\nvia GitOps. Further guides will then show how to move that workload into staging and/or production."),(0,r.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,r.kt)("p",null,"This guide is for Mac and Linux only (so far!).\nAt the moment, Weave GitOps supports ",(0,r.kt)("a",{parentName:"p",href:"https://github.com"},"Github"),"."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://gitlab.com"},"Gitlab")," and other Git providers are coming soon.")),(0,r.kt)("p",null,"To get this working you need:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A Github account"),(0,r.kt)("li",{parentName:"ol"},"A Github token"),(0,r.kt)("li",{parentName:"ol"},"kubectl installed ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},"instructions")),(0,r.kt)("li",{parentName:"ol"},"A development Kubernetes cluster (this guide uses ",(0,r.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/docs/user/quick-start/"},"kind"),")"),(0,r.kt)("li",{parentName:"ol"},"Kind requires ",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker"))),(0,r.kt)("h3",{id:"github-token"},"Github Token"),(0,r.kt)("p",null,"You need a Github Token with ",(0,r.kt)("inlineCode",{parentName:"p"},"repo")," access."),(0,r.kt)("p",null,"If you don't already have one, please follow the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token"},"Github guide")),(0,r.kt)("p",null,"Make sure that the token is in your environment as ",(0,r.kt)("inlineCode",{parentName:"p"},"GITHUB_TOKEN")),(0,r.kt)("h2",{id:"install-the-cli"},"Install the CLI"),(0,r.kt)("p",null,"Please follow the instructions in the  ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.2.1/installation"},"CLI installation page")," to install the command-line tool."),(0,r.kt)("h2",{id:"getting-started-with-a-kind-cluster-and-podinfo-workload"},"Getting Started with a Kind cluster and Podinfo workload"),(0,r.kt)("h3",{id:"create-the-cluster"},"Create the cluster"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a fresh ",(0,r.kt)("inlineCode",{parentName:"li"},"kind")," cluster:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"kind create cluster\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Creating cluster "kind" ...\n \u2713 Ensuring node image (kindest/node:v1.20.2) \ud83d\uddbc\n \u2713 Preparing nodes \ud83d\udce6\n \u2713 Writing configuration \ud83d\udcdc\n \u2713 Starting control-plane \ud83d\udd79\ufe0f\n \u2713 Installing CNI \ud83d\udd0c\n \u2713 Installing StorageClass \ud83d\udcbe\nSet kubectl context to "kind-kind"\nYou can now use your cluster with:\n\nkubectl cluster-info --context kind-kind\n\nHave a nice day! \ud83d\udc4b\n')),(0,r.kt)("p",null,"You now will have the right ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeconfig")," for the kind cluster."),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl cluster-info --context kind-kind")),(0,r.kt)("h3",{id:"install-weave-gitops-onto-the-cluster"},"Install Weave GitOps onto the cluster"),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Install Weave GitOps into the currently active Kubernetes cluster:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"wego gitops install\n")),(0,r.kt)("p",null,"You should see:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u271a generating manifests\n\u2714 manifests build completed\n\u25ba installing components in wego-system namespace\n\u25ce verifying installation\n\n")),(0,r.kt)("p",null,"The install will pause while the containers are loaded into the cluster. (",(0,r.kt)("em",{parentName:"p"},"roughly 1 to 2 minutes depending on your system"),")"),(0,r.kt)("p",null,"Once the system is verified you will see:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u2714 image-reflector-controller: deployment ready\n\u2714 image-automation-controller: deployment ready\n\u2714 source-controller: deployment ready\n\u2714 kustomize-controller: deployment ready\n\u2714 helm-controller: deployment ready\n\u2714 notification-controller: deployment ready\n\u2714 install finished\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"You can see what has been installed:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"kubectl get pods --namespace wego-system\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"NAME                                           READY   STATUS    RESTARTS   AGE\nhelm-controller-69667f94bc-ngpwv               1/1     Running   0          113s\nimage-automation-controller-6cd8b8fb95-ktgz7   1/1     Running   0          113s\nimage-reflector-controller-55fb577bf9-bhs2b    1/1     Running   0          113s\nkustomize-controller-6977b8cdd4-6p762          1/1     Running   0          113s\nnotification-controller-5c4d48f476-nwrkx       1/1     Running   0          112s\nsource-controller-b4b88948f-kz2lr              1/1     Running   0          112s\n")),(0,r.kt)("h3",{id:"configure-weave-gitops-to-reconcile-the-workload-automatically"},"Configure Weave GitOps to reconcile the workload automatically"),(0,r.kt)("p",null,"First we will fork a basic workload repository, then we will add the ",(0,r.kt)("inlineCode",{parentName:"p"},"wego")," GitOps automation to deploy into the cluster"),(0,r.kt)("h4",{id:"fork-and-clone-the-podinfo-repository"},"Fork and clone the Podinfo repository"),(0,r.kt)("p",null,"We are going to use a deployment of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stefanprodan/podinfo"},"podinfo")," sample Kubernetes app as the workload to test."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Please note that these instructions do not use the base podinfo repository, but a specific repository containing only the deployment YAML")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Fork the following repository on Github:")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/wego-example/podinfo-deploy"},"https://github.com/wego-example/podinfo-deploy")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"fork",src:n(9995).Z})),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Clone the fork ",(0,r.kt)("strong",{parentName:"li"},"using SSH")," (replacing ",(0,r.kt)("inlineCode",{parentName:"li"},"<yr-org-goes-here>"),")")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone git@github.com:<yr-org-goes-here>/podinfo-deploy.git\n")),(0,r.kt)("p",null,"(",(0,r.kt)("em",{parentName:"p"},"Note Weave GitOps doesn't support repositories that are cloned via HTTPS"),")"),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Change directory into the path where you cloned your fork of ",(0,r.kt)("inlineCode",{parentName:"li"},"podinfo-deploy")," - for example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"cd podinfo-deploy\n")),(0,r.kt)("p",null,"This repository only contains Kubernetes YAMLs (and a README):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 backend\n\u2502\xa0\xa0 \u251c\u2500\u2500 deployment.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 hpa.yaml\n\u2502\xa0\xa0 \u2514\u2500\u2500 service.yaml\n\u251c\u2500\u2500 frontend\n\u2502\xa0\xa0 \u251c\u2500\u2500 deployment.yaml\n\u2502\xa0\xa0 \u2514\u2500\u2500 service.yaml\n\u2514\u2500\u2500 namespace.yaml\n\n2 directories, 7 files\n")),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Let's enable GitOps for this workload")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"wego app add .\n")),(0,r.kt)("p",null,"You should see something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"Updating parameters from environment... using URL: 'ssh://git@github.com/pzfreo/podinfo-deploy.git' of origin from git config...\n\ndone\n\nChecking cluster status... WeGOInstalled\n\nGenerating deploy key for repo ssh://git@github.com/pzfreo/podinfo-deploy.git ...\nuploading deploy key\nGenerating Source manifest...\nGenerating GitOps automation manifests...\nGenerating Application spec manifest...\nApplying manifests to the cluster...\nWriting manifests to disk...\nPull Request created: <link to PR>\n")),(0,r.kt)("p",null,"(",(0,r.kt)("em",{parentName:"p"},"PLEASE NOTE: the 0.2.0 version does not print the link to the PR. However, it is creating the PR. "),")"),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"A Pull Request has been created against the git branch.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"PR",src:n(3785).Z})),(0,r.kt)("p",null,"Go to your Github fork and merge the Pull Request."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Merge",src:n(4381).Z})),(0,r.kt)("p",null,"Once you have merged the PR it should look like this:\n",(0,r.kt)("img",{alt:"Merge Complete",src:n(1132).Z})),(0,r.kt)("ol",{start:9},(0,r.kt)("li",{parentName:"ol"},"Once the PR is merged wait for the workload to show up in the cluster:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"kubectl get pods --namespace test\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"NAME                        READY   STATUS    RESTARTS   AGE\nbackend-66b5655895-ms79n    1/1     Running   0          42s\nfrontend-7fb9f4bf99-qmkqh   1/1     Running   0          42s\n")),(0,r.kt)("ol",{start:10},(0,r.kt)("li",{parentName:"ol"},"You can use the ",(0,r.kt)("inlineCode",{parentName:"li"},"wego app status")," command to see the reconciliation.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"wego app status podinfo-deploy\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Latest successful deployment time: 2021-06-29T14:41:14Z\nNAMESPACE   NAME                            READY   MESSAGE                                                         REVISION                                        SUSPENDED\nwego-system gitrepository/podinfo-deploy    True    Fetched revision: main/cb6fc97b304740347e1d98195bc3d972ee07d733 main/cb6fc97b304740347e1d98195bc3d972ee07d733   False\n\nNAMESPACE   NAME                            READY   MESSAGE                                                         REVISION                                        SUSPENDED\nwego-system kustomization/podinfo-deploy    True    Applied revision: main/cb6fc97b304740347e1d98195bc3d972ee07d733 main/cb6fc97b304740347e1d98195bc3d972ee07d733   False\n")),(0,r.kt)("p",null,"This shows you when the last deployment was as well as the specific SHA from Git that has been deployed."),(0,r.kt)("p",null,"You have successfully deployed the app!"),(0,r.kt)("ol",{start:11},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"wego app add")," will have created a ",(0,r.kt)("inlineCode",{parentName:"li"},".wego")," directory in your repository (you can configure where this goes - see ",(0,r.kt)("a",{parentName:"li",href:"/docs/0.2.1/gitops-automation"},"GitOps Automation configuration"),")")),(0,r.kt)("p",null,"This directory contains the GitOps Automation configuration."),(0,r.kt)("p",null,"If you do a tree inside this directory you should see something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ tree .wego/\n.wego/\n\u251c\u2500\u2500 apps\n\u2502\xa0\xa0 \u2514\u2500\u2500 podinfo-deploy\n\u2502\xa0\xa0     \u2514\u2500\u2500 app.yaml\n\u2514\u2500\u2500 targets\n    \u2514\u2500\u2500 kind-kind\n        \u2514\u2500\u2500 podinfo-deploy\n            \u2514\u2500\u2500 podinfo-deploy-gitops-runtime.yaml\n\n5 directories, 2 files\n")),(0,r.kt)("p",null,"You can find out more about these YAMLs and the ",(0,r.kt)("inlineCode",{parentName:"p"},".wego")," directory ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.2.1/gitops-automation"},"here"),"."),(0,r.kt)("p",null,"Notice that ",(0,r.kt)("inlineCode",{parentName:"p"},"wego")," has checked in this YAML into your fork (",(0,r.kt)("em",{parentName:"p"},"This will change in a future release to create a PR against your repository instead"),")."),(0,r.kt)("ol",{start:12},(0,r.kt)("li",{parentName:"ol"},"To access the ",(0,r.kt)("inlineCode",{parentName:"li"},"podinfo")," UI you can set up a port forward into the pod.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"kubectl port-forward service/frontend 9898:9898 --namespace test\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Forwarding from 127.0.0.1:9898 -> 9898\nForwarding from [::1]:9898 -> 9898\n")),(0,r.kt)("p",null,"NB: This command does not return"),(0,r.kt)("p",null,"Now you can browse ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:9898"},"http://localhost:9898")),(0,r.kt)("p",null,"You should see something like:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Podinfo",src:n(6134).Z})),(0,r.kt)("p",null,"Use CTRL+C to cancel the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl port-forward")," command to continue with your command prompt."),(0,r.kt)("h3",{id:"see-gitops-reconciliation"},"See GitOps reconciliation"),(0,r.kt)("ol",{start:13},(0,r.kt)("li",{parentName:"ol"},"The real aim of GitOps is not just to deploy once, but to reconcile as well. Let's test that out.\nEdit ",(0,r.kt)("inlineCode",{parentName:"li"},"frontend/deployment.yaml"))),(0,r.kt)("p",null,"Change the ",(0,r.kt)("inlineCode",{parentName:"p"},"PODINFO_UI_COLOR")," to grey:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'        env:\n        - name: PODINFO_UI_COLOR\n          value: "#888888"\n')),(0,r.kt)("ol",{start:14},(0,r.kt)("li",{parentName:"ol"},"Commit the change to your forked repository.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'git add .\ngit commit -m "change color"\ngit push\n')),(0,r.kt)("p",null,"(",(0,r.kt)("em",{parentName:"p"},"If you want an even better experience, create a PR and then merge!"),")"),(0,r.kt)("ol",{start:15},(0,r.kt)("li",{parentName:"ol"},"Wait for the reconciliation to take place")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"wego app status podinfo-deploy\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Latest successful deployment time: 2021-06-09T10:36:26Z\nNAMESPACE   NAME                            READY   MESSAGE                                                         REVISION                                        SUSPENDED\nwego-system gitrepository/podinfo-deploy    True    Fetched revision: main/0927f4649817186103f14612bd3a0426d21de601 main/0927f4649817186103f14612bd3a0426d21de601   False\n\nNAMESPACE   NAME                            READY   MESSAGE                                                         REVISION                                        SUSPENDED\nwego-system kustomization/podinfo-deploy    True    Applied revision: main/0927f4649817186103f14612bd3a0426d21de601 main/0927f4649817186103f14612bd3a0426d21de601   False\n")),(0,r.kt)("ol",{start:16},(0,r.kt)("li",{parentName:"ol"},"You should see the pods recycle")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"kubectl get pods --namespace test\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"NAME                       READY   STATUS              RESTARTS   AGE\nbackend-5cd878f8dd-rl64h   1/1     Running             0          33m\nfrontend-5c45876f-pnxrq    1/1     Running             0          6m51s\nfrontend-ff74574fc-7ntw4   0/1     ContainerCreating   0          1s\n")),(0,r.kt)("p",null,"And a little later:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"NAME                       READY   STATUS        RESTARTS   AGE\nbackend-5cd878f8dd-rl64h   1/1     Running       0          34m\nfrontend-5c45876f-pnxrq    0/1     Terminating   0          7m9s\nfrontend-ff74574fc-7ntw4   1/1     Running       0          19s\n")),(0,r.kt)("p",null,"Notice that the backend has not changed and so the backend pod is not affected."),(0,r.kt)("p",null,"Restart the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl port-forward")," and you will see the color has changed."),(0,r.kt)("p",null,"(",(0,r.kt)("em",{parentName:"p"},"If you use a real ingress then you wouldn't need to do this"),")."),(0,r.kt)("ol",{start:17},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Congratulations"))),(0,r.kt)("p",null,"You have successfully demonstrated GitOps using Weave GitOps! Well done."))}d.isMDXComponent=!0},9995:function(e,t,n){"use strict";t.Z=n.p+"assets/images/github-fork-57c2728ad86960ae6daf272d04c19190.png"},1132:function(e,t,n){"use strict";t.Z=n.p+"assets/images/podinfo-pr-merge-complete-371062cdab059f7b1b9705ebfebc4ba5.png"},4381:function(e,t,n){"use strict";t.Z=n.p+"assets/images/podinfo-pr-merge-6c2955c2761bb5b4bcabcbcec188e5d4.png"},3785:function(e,t,n){"use strict";t.Z=n.p+"assets/images/podinfo-pr-b4346a9ca79e5fc1773412ac9c717fe0.png"},6134:function(e,t,n){"use strict";t.Z=n.p+"assets/images/podinfo-web-9aa1b83a2dcefb280f1dd2594d582ee3.png"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{170:function(s,t,n){"use strict";n.r(t);var a=n(6),e=Object(a.a)({},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"github-pages-部署"}},[s._v("GitHub Pages 部署")]),s._v(" "),n("h2",{attrs:{id:"scripts-命令行部署"}},[s._v("Scripts 命令行部署")]),s._v(" "),n("p",[s._v("说明： 将dist目录推送至远程origin库的gh-pages分支，也可是其它远程库（如：github），script属性下配置下述deploy命令，其中：")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("echo aleyn.cn>>dist/CNAME , 表示在dist目录生成CNAME, 用于静态网页映射至自定义域名")])]),s._v(" "),n("li",[n("p",[s._v('gh-pages -d dist --remote origin , 表示将dist目录推送至远程origin库的gh-pages分支， 得安装本地 gh-pages包： "gh-pages": "^2.0.1"')])]),s._v(" "),n("li",[n("p",[s._v('rimraf dist , 表示删除dist目录，（此步骤可选，得安装本地 rimraf包： "rimraf": "^2.6.2" ）')])]),s._v(" "),n("li",[n("p",[s._v("关于gh-pages库，运行下述命令可以查看更多选项： gh-pages --help")])])]),s._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"deploy"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"echo aleyn.cn>>dist/CNAME && gh-pages -d dist --remote origin && rimraf dist"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),n("h2",{attrs:{id:"deploy-sh-部署"}},[s._v("deploy.sh 部署")]),s._v(" "),n("p",[s._v("在项目内部，创建具有以下内容的deploy.sh（对突出显示的行进行适当注释），并运行它进行部署：")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# abort on errors")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" -e\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编译项目输出至dist目录，如：我这里编译后输出至：www/@/.vuepress/dist/")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build:www\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd到编译输出目录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" www/@/.vuepress/dist/\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果您部署至自定义域名，则启用下述语句")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# echo 'www.example.com' > CNAME")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'aleyn.cn'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" CNAME\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 提交本次修改")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" add -A\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deploy'")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果您部署至： https://<USERNAME>.github.io/<REPO>")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -f https://github.com/aleynjs/aleyn.cn.git master:gh-pages\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果您部署至： https://<USERNAME>.github.io")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" -\n")])])])])},[],!1,null,null,null);e.options.__file="gh-pages.md";t.default=e.exports}}]);
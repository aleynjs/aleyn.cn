
# Pages 部署

GitHub Pages、GitLab Pages、Coding Pages


## GitHub Pages 部署

### Scripts 命令行部署

说明： 将dist目录推送至远程origin库的gh-pages分支，也可是其它远程库（如：github），script属性下配置下述deploy命令，其中：

1. echo aleyn.cn>>dist/CNAME , 表示在dist目录生成CNAME, 用于静态网页映射至自定义域名

2. gh-pages -d dist --remote origin , 表示将dist目录推送至远程origin库的gh-pages分支， 得安装本地 gh-pages包： "gh-pages": "^2.0.1" 

3. rimraf dist , 表示删除dist目录，（此步骤可选，得安装本地 rimraf包： "rimraf": "^2.6.2" ）

4. 关于gh-pages库，运行下述命令可以查看更多选项： gh-pages --help 

``` json
"scripts": {
  "deploy": "echo aleyn.cn>>dist/CNAME && gh-pages -d dist --remote origin && rimraf dist"
}
```

### deploy.sh 部署

在项目内部，创建具有以下内容的deploy.sh（对突出显示的行进行适当注释），并运行它进行部署：

``` bash
#!/bin/bash

# abort on errors
set -e

# 编译项目输出至dist目录，如：我这里编译后输出至：www/@/.vuepress/dist/
npm run build:www

# cd到编译输出目录
cd www/@/.vuepress/dist/

# 如果您部署至自定义域名，则启用下述语句
# echo 'www.example.com' > CNAME
echo 'aleyn.cn' > CNAME

# 提交本次修改
git init
git add -A
git commit -m 'deploy'

# 如果您部署至： https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
git push -f https://github.com/aleynjs/aleyn.cn.git master:gh-pages

# 如果您部署至： https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

cd -
```

## GitLab Pages 部署

1. 项目根目录创建要部署的文件夹：public

> 如果你打算发布到 https://< USERNAME or GROUP>.gitlab.io/
>
> 如果你打算发布到 https://< USERNAME or GROUP>.gitlab.io/< REPO >/（也就是说你的仓库在 https://gitlab.com/< USERNAME >/< REPO >）

2. 在你项目的根目录下创建一个名为 .gitlab-ci.yml 的文件，无论何时你提交了更改，它都会帮助你自动构建和部署：

``` yaml
image: node:9.11.1
pages:
 cache:
   paths:
   - node_modules/
 script:
 - npm install
 - npm run build
 artifacts:
   paths:
   - public
 only:
 - master
```
3. 相比于GitHub Pages服务，个人感觉比较慢
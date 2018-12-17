#!/bin/bash

# abort on errors
set -e

# 编译文件目录：www/@，编译后输出至：www/@/.vuepress/dist/
npm run build:www

# 切换至分支gh-pages
git checkout gh-pages

# 复制编译后文件至gh-pages分支根目录下
cp -r www/@/.vuepress/dist/* ./

# 部署至自定义域名
echo 'aleyn.cn' > CNAME

# 提交本次修改
git add -A
git commit -m 'deploy'

# push至远程仓库：github
git push -f github gh-pages

cd -
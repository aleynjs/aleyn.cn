#!/bin/bash

# abort on errors
set -e

# 编译文件目录：www/@
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
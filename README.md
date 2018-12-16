# ALEYN.CN


> ALEYN.CN

## Links
- [Home Page](https://aleyn.cn/)
- [Docs](https://aleyn.cn)

## Merge Update

``` javascript
  git checkout dev
  npm run build:www
  git checkout gh-pages
  cp -r ./www/@/.vuepress/dist/* ./
``` 
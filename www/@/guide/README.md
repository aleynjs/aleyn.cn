
[[toc]]

[Markdown 拓展文档](https://vuepress.vuejs.org/zh/guide/markdown.html)
[Markdown 插槽](https://vuepress.vuejs.org/zh/guide/markdown-slot.html)

## 常用md演示示例

### GitHub 风格的表格

| 学号        | 姓名           | 出生日期  |
| ------------- |:-------------:| -----:|
| 31001 | 张三 | 1988-10-01 |
| 31002 | 李四 | 1970-12-20 |
| 31003 | 王五 | 1998-02-23 |

### 表情

:tada: :100:


### 自定义容器

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::
#### 自定义块中的标题
::: danger STOP
Danger zone, do not proceed
:::

### 代码块中的行高亮

``` js
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
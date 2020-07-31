# alert.js

> 一个简单的网页提示，css完全借鉴bootstrap alert

## 如何使用

- 网页中引入js, css
- 引用示例
  
```js
  Alert.alert({
    type: 'primary',
    content: '一个超级简单的提示'
  })
```
or
```js
  Alert.success('hello, world', 4000)
```


## api

Alert.alert(option)

option:

|字段名称|类型|说明|
| -- | -- | -- |
|type|String|提示类型，备选'primary', 'secondary', 'success', 'danger', 'warning', 'info','error', 'light'|
|content|String|内容，可以为HTML|
|duration|Int|出现时间，单位毫秒，默认3000|

example:

```js
  Alert.alert({
    type: 'success',
    content: '操作成功',
    duration: 4000
  })
```

```
另提供Alert.success(content: String, duration: Int)（上述类型）等函数
```

## License

MIT
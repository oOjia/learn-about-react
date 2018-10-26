### 实现jsx解析器与渲染器
- 调试playground.js，看jsx编译后的结果。
- 实现一个数据结构，把jsx编译后的结构以嵌套形式保存在数据结构对象中（参考react渲染）。
- 实现render，解析这个嵌套对象，并且把解析结果渲染到页面上。
- 渲染可以调用dom.js里createElement函数。

#### 什么是JSX ?
即JavaScript XML ，基于JavaScript 融合了XML,我们可以在js中书写XML， 是一种标记语言,可以自定义属性，具有可扩展性。在react中如果想向页面输出一个标签，必须用到react内置的JSX语法，否则输出的只是普通的字符串。

JSX是一种像下面这样的语法：
```js
const element = <h1>Hello, world!</h1>;
```
它是一种JavaScript语法扩展，在React中可以方便地用来描述UI。

本质上，JSX为我们提供了创建React元素方法（React.createElement(component, props, ...children)）的语法糖（syntactic sugar）。上面的代码实质上等价于：
```js
var element = React.createElement(
  "h1",
  null,
  "Hello, world!"
);
```
#### createElement

document.createElement是创建一个指定的元素节点，其参数只有一个nodeName：document.createElement(nodeName)

React.createElement是创建指定类型的React元素节点，其参数有三个：React.createElement(type,props,children)
```
React.createElement(
    type,
    [props],
    [...children]
)
```

---
title: 变量声明
description: Go 语言变量声明的完整写法、类型推断、简写及多变量声明方式
---

# 变量声明 {#variable-declare}

> 作者: [小满zs](https://space.bilibili.com/99210573) 链接:https://go-docs.pages.dev/

## 内功心法(小无相功) {#inner-art}

Go 变量标准完整声明格式： `var 变量名 数据类型 = 初始值`

```go
package main

import "fmt"

func main() {
  //关键字 变量名 类型 = 值 // [!code focus:3]
  var name string = "小满"
  fmt.Println(name)
}
```

以上便是变量声明的规则，我们声明了一个字符串类型的变量name，并赋值为"小满"，那什么时候该用字符串呢？

你在网页中所看到大部分文本和文字都是字符串，比如：“你好，世界！"、“Hello, World!"、“こんにちは、世界！“等。

所以，当你需要存储文本、文字或任何字符序列时，就可以使用字符串类型。

### 类型推断 {#type-inference}

类型推断是Go语言的一种特性，它可以根据变量的值自动推断变量的类型。比如：

```go
package main

import "fmt"

func main() {
  //关键字 变量名 类型 = 值 // [!code focus:4]
  var name = "小满"
  var age = 18 //int 表示整数类型
  fmt.Println(name, age) //输出：小满 18
}
```

当你鼠标悬浮在变量名上时，会自动显示变量的类型和值。如上所示，`name` 的类型为 `string`，`age` 的类型为 `int`。
![](./imgs/6.avif)

### 自动零值 {#zero-value}

```go
package main

import "fmt"

func main() {
  var name string // [!code focus:3]
  var age int
  fmt.Println(name, age) //输出："" 0
}

```

我们可以声明变量不赋值，那么变量就会有一个默认值。

输出结果为："" 0，因为`name`和`age`没有赋值，所以默认值为空字符串和0。

### 变量简写 {#short-variable}

```go
package main

import "fmt"

func main() {
  //变量名 := 值 // [!code focus:3]
  name := "小满"
  fmt.Println(name)
}

```

我们可以用 :=来简写变量声明，可以省略类型和关键字，但是不能省略变量名和值。

> [!warning] 注意:
> 注意点：变量简写只能用于**函数内部**，不能用于全局变量。

![](./imgs/7.avif)

### 多变量声明 {#multi-variable}

```go
package main

import "fmt"

func main() {
  //多个变量用逗号隔开 // [!code focus:3]
  age, name := 18, "小满"
  fmt.Println(age, name) //输出：18 小满
}

```

多个变量声明需要用,隔开，并且赋值的时候也是根据顺序赋值。例如 `age = 18, name = “小满”`。

## 作业 {#homework}

1. 声明一个变量，类型为字符串，值为"小满”。
2. 声明一个变量，类型为整数，值为18。
3. 并且使用多变量声明以及简写的方式，以及输出到终端。

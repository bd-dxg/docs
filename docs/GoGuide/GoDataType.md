---
title: Go 数据类型
description: Go 语言数据类型详解，含字符串、数字、布尔、数组、切片、映射、结构体与接口
---

# Go 数据类型 {#go-data-type}

> 作者: [小满zs](https://space.bilibili.com/99210573) 链接:https://go-docs.pages.dev/

## 核心内功(纯阳无极功) {#core-art}

### 字符串 {#string}

```go
package main

import "fmt"

func main() {
  text := "这是一段文本，苍天已死，黄天当立，岁在甲子，天下大吉。"// [!code focus:3]
    text += "\n这是第二段文本，天地玄黄，宇宙洪荒，日月盈昃，辰宿列张。"
  fmt.Println(text)
}
```

Go 语言中字符串需要通过双引号包裹文本内容，如果有多段文本需要拼接，可以使用加号`+`进行拼接。如果需要换行，可以使用反斜杠`\n`进行换行。

输出内容如下:

```text
这是一段文本，苍天已死，黄天当立，岁在甲子，天下大吉。

这是第二段文本，天地玄黄，宇宙洪荒，日月盈昃，辰宿列张。
```

### 数字 {#number}

```go
package main

import "fmt"

func main() {
  var age int = 18 // [!code focus:2]
  fmt.Println(age)
}
```

Go 语言中数字类型有多种，包括整数、浮点数、复数等。

整数包括有符号和无符号两种，

- 有符号: int8、int16、int32、int64，
- 无符号: uint8、uint16、uint32、uint64。

> [!tip] 提示
> 有符号和无符号的区别是：有符号可以表示正数和负数，无符号只能表示正数。

| 类型(有符号) | 占用字节数 | 取值范围                                   |
| :----------: | :--------: | ------------------------------------------ |
|     int8     |   1 字节   | -128 ~ 127                                 |
|    int16     |   2 字节   | -32768 ~ 32767                             |
|    int32     |   4 字节   | -2147483648 ~ 2147483647                   |
|    int64     |   8 字节   | -9223372036854775808 ~ 9223372036854775807 |
|     int      |   自适应   | 32 位系统同 int32，64 位系统同 int64       |

| 类型(无符号) | 占用字节数 | 取值范围                                   |
| :----------: | :--------: | ------------------------------------------ |
|     int8     |   1 字节   | -128 ~ 127                                 |
|    int16     |   2 字节   | -32768 ~ 32767                             |
|    int32     |   4 字节   | -2147483648 ~ 2147483647                   |
|    int64     |   8 字节   | -9223372036854775808 ~ 9223372036854775807 |
|     int      |   自适应   | 32 位系统同 int32，64 位系统同 int64       |

浮点数包括单精度浮点数和双精度浮点数，分别对应float32和float64。

|  类型   |  名称  | 字节 | 有效精度  |
| :-----: | :----: | :--: | --------- |
| float32 | 单精度 |  4   | 5~~7 位   |
| float64 | 双精度 |  8   | 15~~16 位 |

### 布尔 {#boolean}

```go
package main

import "fmt"

func main() {
  var isShow bool = true // [!code focus:2]
  fmt.Println(isShow)
}
```

布尔值只有两个，`true`和`false`。一般用于条件判断，和状态表示。

例如：开关 如果开启则是(true)，如果关闭则是(false)。

### 数组 和 切片 {#array-slice}

```go
package main

import "fmt"

func main() {
  //数组 // [!code focus:12]
  var arr [5]int // 定义一个长度为5的整型数组 但是未赋值 所以输出为[0 0 0 0 0]
  fmt.Println(arr)
  //----------------------------------------------------------------------
  arr2 := [5]int{1, 2, 3, 4, 5} // 定义一个长度为5的整型数组 并赋值为[1 2 3 4 5]
  fmt.Println(arr2)
  //----------------------------------------------------------------------
  //切片
  arr3 := []int{}                          // 定义一个空切片
  arr3 = append(arr3, 6, 6, 6, 6, 6, 6, 6) // 追加元素
  fmt.Println(arr3)                        // 输出为[6 6 6 6 6 6 6]
  fmt.Println(len(arr3))                   // 获取切片的长度 输出为7
}

```

数组是长度固定的连续内存块，定义后长度不可变，未赋值的元素会使用对应类型的零值（整型为 0）。

切片是对数组的抽象，长度可变，底层仍依赖数组。常用 `append` 追加元素，用 `len` 获取当前长度，用 `cap` 获取底层数组容量。

| 特性     | 数组                   | 切片                   |
| -------- | ---------------------- | ---------------------- |
| 长度     | 固定，定义时确定       | 可变                   |
| 声明     | `[5]int`               | `[]int`                |
| 传参     | 值传递，会复制整个数组 | 引用传递，共享底层数据 |
| 适用场景 | 固定大小、性能敏感     | 日常开发中最常用       |

### 映射 {#map}

```go
package main

import "fmt"

func main() {
  // 定义一个 map，键为 string，值为 int // [!code focus:17]
  scores := map[string]int{
    "张三": 90,
    "李四": 85,
    "王五": 92,
  }
  fmt.Println(scores["张三"]) // 输出：90

  // 添加或修改键值对
  scores["赵六"] = 88
  delete(scores, "李四") // 删除键值对

  // 判断键是否存在
  score, ok := scores["张三"]
  if ok {
    fmt.Println("张三的分数是", score)
  }
}
```

映射（`map`）是一种键值对集合，通过键快速查找对应的值。键的类型必须是可比较类型（如 `string`、`int`），值可以是任意类型。

常用操作：

- `map[key]` — 读取值，键不存在时返回零值
- `map[key]` = value — 添加或修改
- `delete(map, key)` — 删除键值对
- `value, ok := map[key]` — 判断键是否存在，ok 为 true 表示存在

### 结构体 {#struct}

```go
package main

import "fmt"

// 定义结构体类型 // [!code focus:18]
type Person struct {
  Name string
  Age  int
}

func main() {
  // 创建结构体实例
  p := Person{
    Name: "小满",
    Age:  18,
  }
  fmt.Println(p.Name, p.Age) // 输出：小满 18

  // 访问和修改字段
  p.Age = 20
  fmt.Println(p.Age) // 输出：20
}
```

结构体（`struct`）用于将多个不同类型的字段组合成一个自定义类型，是面向对象编程的基础。通过 `type` 名称 `struct { ... }` 定义，用点号 `.` 访问字段。

结构体适合描述具有多个属性的实体，例如用户信息、商品详情、坐标点等。

### 接口 {#interface}

```go
package main

import "fmt"

// 定义接口：包含一个 Speak 方法 // [!code focus:20]
type Animal interface {
  Speak() string
}

type Dog struct{}
type Cat struct{}

func (d Dog) Speak() string { return "汪汪" }
func (c Cat) Speak() string  { return "喵喵" }

func main() {
  var a Animal

  a = Dog{}
  fmt.Println(a.Speak()) // 输出：汪汪

  a = Cat{}
  fmt.Println(a.Speak()) // 输出：喵喵
}
```

接口（`interface`）定义了一组方法签名，任何实现了这些方法的类型都自动满足该接口，无需显式声明。这是 Go 实现多态的核心机制。

接口的特点：

- 隐式实现：只要类型实现了接口的所有方法，就满足该接口
- 空接口 `interface{}`（或 `any`）可以接收任意类型的值
- 组合接口：多个接口可以嵌入组合成更大的接口

接口让代码更灵活——函数可以接收接口类型参数，从而兼容所有实现了该接口的类型，便于扩展和测试。

## 作业 {#homework}

1. 字符串：声明两个字符串变量，分别存储你的姓名和学校名称，用 `+` 拼接后打印，中间用换行符 `\n` 分隔。

    :::: details 答案
    :::code-group
      <<< ./Answer/GoDataType.go#string [ 字符串~vscode-icons:file-type-go~]
    :::
    ::::
2. 数字：声明一个 `int` 类型的年龄变量和一个 `float64` 类型的身高变量（如 `175.5`），并打印输出。

    :::: details 答案
    :::code-group
      <<< ./Answer/GoDataType.go#int [ 数字 ~vscode-icons:file-type-go~]
    :::
    ::::
3. 布尔：声明一个 `bool` 变量表示「是否在线」，初始值为 `true`，打印后将其改为 `false` 再打印一次。

    :::: details 答案
    :::code-group
      <<< ./Answer/GoDataType.go#bool [ 布尔 ~vscode-icons:file-type-go~]
    :::
    ::::
4. 数组与切片：
    - 定义一个长度为 3 的整型数组，赋值为 `[10, 20, 30]` 并打印；
    - 定义一个空切片，用 `append` 依次追加 `1, 2, 3`，打印切片内容和长度 `len`。

    :::: details 答案
    :::code-group
      <<< ./Answer/GoDataType.go#array [数组 ~vscode-icons:file-type-go~]
      <<< ./Answer/GoDataType.go#slice [切片 ~vscode-icons:file-type-go~]
    :::
    ::::
5. 映射：创建一个 `map[string]int`，存储 3 位同学的姓名和分数，打印其中一位的分数，再添加一位新同学并删除其中一位，最后遍历打印所有键值对。

    :::: details 答案
    :::code-group
      <<< ./Answer/GoDataType.go#map [映射 ~vscode-icons:file-type-go~]
    :::
    ::::
6. 结构体：定义一个 `Book` 结构体，包含 `Title`（书名）和 `Price`（价格）两个字段，创建一本书的实例并打印书名和价格。

    :::: details 答案
    :::code-group
      <<< ./Answer/GoDataType.go#struct [结构体定义 ~vscode-icons:file-type-go~]
      <<< ./Answer/GoDataType.go#struct-usage [使用示例 ~vscode-icons:file-type-go~]
    :::
    ::::
7. 接口：定义一个 `Shape` 接口，包含 `Area() float64` 方法；再定义 `Rectangle`（矩形）结构体并实现该接口，创建实例后打印面积。

    :::: details 答案
    :::code-group
      <<< ./Answer/GoDataType.go#interface [接口定义 ~vscode-icons:file-type-go~]
      <<< ./Answer/GoDataType.go#interface-usage [使用示例 ~vscode-icons:file-type-go~]
    :::
    ::::
8. 综合练习：将上述 `Book` 结构体放入切片中，存储至少 3 本书，遍历切片打印每本书的信息。

    :::: details 答案
    :::code-group
      <<< ./Answer/GoDataType.go#comprehensive [综合练习 ~vscode-icons:file-type-go~]
    :::
    ::::

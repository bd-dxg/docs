package main

import "fmt"

// #region struct
type Book struct {
	Title string
	Price float64
}

// #endregion struct

// #region interface
type Shape interface {
	Area() float64
}

type Rectangle struct {
	Width  float64
	Height float64
}

func (r Rectangle) Area() float64 {
	return r.Width * r.Height
}

// #endregion interface

func main() {
	// #region string
	name, school := "张三", "师范大学"
	fmt.Println(name + "\n" + school)
	// #endregion string
	// #region int
	age, aPersonSHeight := 18, 175.5
	fmt.Println(age, aPersonSHeight)
	// #endregion int
	// #region bool
	online := true
	fmt.Println("online:", online)
	online = false
	fmt.Println("online:", online)
	// #endregion bool
	// #region array
	arr := [3]int{10, 20, 30}
	fmt.Println("数组:", arr)
	// #endregion array
	// #region slice
	var s []int
	s = append(s, 1, 2, 3)
	fmt.Println("切片:", s, "长度:", len(s))
	// #endregion slice
	// #region map
	scores := map[string]int{
		"张三": 90,
		"李四": 85,
		"王五": 92,
	}
	fmt.Println("张三的分数:", scores["张三"])
	scores["赵六"] = 88
	delete(scores, "李四")
	for name, score := range scores {
		fmt.Printf("%s: %d\n", name, score)
	}
	// #endregion map
	// #region struct-usage
	book := Book{
		Title: "Go 语言编程",
		Price: 59.9,
	}
	fmt.Printf("书名: %s, 价格: %.1f\n", book.Title, book.Price)
	// #endregion struct-usage
	// #region interface-usage
	var sh Shape = Rectangle{Width: 10, Height: 5}
	fmt.Println("矩形面积:", sh.Area())
	// #endregion interface-usage
	// #region comprehensive
	books := []Book{
		{Title: "Go 语言编程", Price: 59.9},
		{Title: "数据结构与算法", Price: 45.0},
		{Title: "计算机网络", Price: 38.5},
	}
	for _, b := range books {
		fmt.Printf("书名: %s, 价格: %.1f\n", b.Title, b.Price)
	}
	// #endregion comprehensive
}
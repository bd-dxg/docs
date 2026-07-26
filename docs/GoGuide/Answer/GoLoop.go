package main

import "fmt"

func main() {
	// #region BasicFor
	fmt.Println("1. 普通 for：打印 1 到 10 中的所有偶数")
	for i := 1; i <= 10; i++ {
		if i%2 == 0 {
			fmt.Println(i)
		}
	}
	// #endregion BasicFor
	// #region RangePractice
	fmt.Println("2. range 练习")
	seasons := []string{"春", "夏", "秋", "冬"}
	fmt.Println("只要下标：")
	for i := range seasons {
		fmt.Println(i)
	}
	fmt.Println("只要值：")
	for _, v := range seasons {
		fmt.Println(v)
	}
	fmt.Println("下标+值：")
	for i, v := range seasons {
		fmt.Println(i, v)
	}
	// #endregion RangePractice
	// #region BreakContinue
	fmt.Println("3. break / continue")
	for i := 1; i <= 20; i++ {
		if i%3 == 0 {
			continue
		}
		if i > 15 {
			break
		}
		fmt.Println(i)
	}
	// #endregion BreakContinue
	// #region WhileLike
	fmt.Println("4. 类 while：计算 1 + 2 + ... + 100 的和")
	sum, i := 0, 1
	for i <= 100 {
		sum += i
		i++
	}
	fmt.Println("和:", sum)
	// #endregion WhileLike
	// #region ComprehensivePractice
	fmt.Println("5. 综合练习")
	scores := map[string]int{
		"语文": 85,
		"数学": 92,
		"英语": 58,
		"物理": 73,
		"化学": 45,
	}
	passCount := 0
	for subject, score := range scores {
		if score < 60 {
			fmt.Printf("%s: %d 分 —— 不及格\n", subject, score)
		} else {
			fmt.Printf("%s: %d 分 —— 及格\n", subject, score)
			passCount++
		}
	}
	fmt.Printf("及格科目数量: %d\n", passCount)
	// #endregion ComprehensivePractice
}
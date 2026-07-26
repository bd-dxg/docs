package main

import "fmt"

func main() {
	// #region BasicJudgment
	var Score int = 60
	if Score >= 90 {
		fmt.Println("优秀")
	} else if Score >= 60 && Score <= 89 {
		fmt.Println("及格")
	} else {
		fmt.Println("不及格")
	}
	// #endregion BasicJudgment
	// #region SwitchPractice
	week := "周二"
	switch week {
	case "周一":
		fmt.Println("肉身赴刑，万念俱灰")
	case "周二":
		fmt.Println("满腔怨气，见谁怼谁")
	case "周三":
		fmt.Println("困意顶峰，半死不活")
	case "周四":
		fmt.Println("疯狂摸鱼，心飞周末")
	case "周五":
		fmt.Println("垂死惊起，血脉觉醒")
	case "周六":
		fmt.Println("肆意挥霍，报复熬夜")
	case "周七":
		fmt.Println("白天装傻，夜半渡劫")
	default:
		fmt.Println("无效的星期")
	}
	// #endregion SwitchPractice
	// #region StatusJudge
	// #region type
	type Person struct {
		Name   string
		Age    int
		Gender string
		Score  int
		Status string
	}
	p := Person{
		Name:   "里斯",
		Age:    18,
		Gender: "男",
		Score:  30,
		Status: "忙碌",
	}
	// #endregion type
	// #region IFVersion
	if p.Status == "在线" {
		fmt.Println("他时刻准备着")
	} else if p.Status == "离线" {
		fmt.Println("他下班了")
	} else if p.Status == "忙碌" {
		fmt.Println("正在起飞")
	} else {
		fmt.Println("已离职")
	}
	// #endregion IFVersion
	// #region SwitchVersion
	switch p.Status {
	case "在线":
		fmt.Println("他时刻准备着")
	case "离线":
		fmt.Println("他下班了")
	case "忙碌":
		fmt.Println("正在起飞")
	default:
		fmt.Println("已离职")
	}
	// #endregion SwitchVersion
	// #region LogicalOp
	age, hasTicket, isVIP := 18, "已购票", false
	if age >= 18 && hasTicket == "已购票" {
		if age > 60 || isVIP {
			fmt.Println("尊享优惠")
		}
		fmt.Println("通过")
	}
	// #endregion LogicalOp
	// #region ComprehensivePractice
	if p.Age >= 18 && p.Score >= 60 {
		fmt.Println("合格")
	} else {
		fmt.Printf("%s不合格", p.Name)
	}
	// #endregion ComprehensivePractice
}

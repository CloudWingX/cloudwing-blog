import type { ProfileConfig } from "../types/profileConfig";

export const profileConfig: ProfileConfig = {
	// 头像
	avatar: "assets/images/avatar.jpg",

	// 名字
	name: "CloudWing_X",

	// 个人签名
	bio: "Learn，Learning，Learned",

	// 链接配置
	links: [
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/CloudWingX",
			showName: false,
		},
		{
			name: "Bilibili",
			icon: "fa7-brands:bilibili",
			url: "https://space.bilibili.com/470179349",
			showName: false,
		},
		{
			name: "Email",
			icon: "fa7-solid:envelope",
			url: "mailto:246459267@qq.com",
			showName: false,
		},
		{
			name: "RSS",
			icon: "fa7-solid:rss",
			url: "/rss/",
			showName: false,
		},
		{
			name: "Atom",
			icon: "fa7-solid:atom",
			url: "/atom/",
			showName: false,
		},
	],
};
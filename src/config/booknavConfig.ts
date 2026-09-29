import type { BooknavGroup, BooknavPageConfig } from "../types/booknavConfig";

// 书签导航页面配置
export const booknavPageConfig: BooknavPageConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// favicon 自动获取配置
	favicon: {
		// 书签未填写 icon 时，是否自动获取目标站点的 favicon 图标
		enabled: true,

		// favicon 接口地址，{domain} 为占位符，会被替换成目标站点域名
		// 更换接口只需保证地址里含有 {domain}，例如：
		//   https://a.favicon.im/{domain}
		//   https://favicon.im/{domain}
		api: "https://a.favicon.im/{domain}",
	},
};

// 书签导航配置
// 每个数组项是一个分类组，分类组内的 items 是该分类下的书签
export const booknavConfig: BooknavGroup[] = [
	{
		id: "dev",
		name: "开发",
		icon: "material-symbols:code-rounded",
		desc: "写代码时离不开的站点",
		weight: 100,
		items: [
			{
				title: "GitHub",
				url: "https://github.com",
				desc: "全球最大的代码托管平台",
				// icon 字段可以使用 astro-icon 图标库的图标名称
				// 也可以使用图片 URL 和本地图片路径
				// 不填则会通过接口自动获取目标站点的 favicon 图标（需要在上面配置）
				icon: "fa7-brands:github",
				weight: 10,
			},
			{
				title: "MDN Web Docs",
				url: "https://developer.mozilla.org",
				desc: "最权威的 Web 技术文档",
				weight: 9,
			},
			{
				title: "Astro",
				url: "https://astro.build",
				desc: "内容驱动型网站的 Web 框架",
				weight: 8,
			},
			{
				title: "Svelte",
				url: "https://svelte.dev",
				desc: "把组件编译成高效原生 JS 的框架",
				weight: 7,
			},
			{
				title: "Tailwind CSS",
				url: "https://tailwindcss.com",
				desc: "一个功能强大且灵活的 CSS 框架",
				weight: 6,
			},
		],
	},
	{
		id: "opensource",
		name: "项目",
		icon: "material-symbols:code-rounded",
		desc: "好用的开源项目",
		weight: 90,
		items: [
			{
				title: "Firefly",
				url: "https://github.com/CuteLeaf/Firefly",
				desc: "清晰美观的 Astro 个人博客主题模板",
				icon: "/favicon/firefly-32.png",
				weight: 10,
			},
		],
	},
	{
		id: "design",
		name: "设计",
		icon: "material-symbols:palette-outline-rounded",
		desc: "配色、图标与灵感来源",
		weight: 90,
		items: [
			{
				title: "Iconify",
				url: "https://icon-sets.iconify.design",
				desc: "海量开源图标集合搜索",
				weight: 10,
			},
			{
				title: "iconfont",
				url: "https://www.iconfont.cn",
				desc: "阿里巴巴矢量图标库",
				weight: 9,
			},
		],
	},
	{
		id: "tools",
		name: "工具",
		icon: "material-symbols:build-outline-rounded",
		desc: "顺手的在线小工具",
		weight: 80,
		items: [
			{
				title: "TinyPNG",
				url: "https://tinypng.com",
				desc: "在线压缩 PNG / JPEG 图片",
				weight: 10,
			},
			{
				title: "Squoosh",
				url: "https://squoosh.app",
				desc: "Google 出品的图片压缩与格式转换",
				weight: 9,
			},
			{
				title: "Carbon",
				url: "https://carbon.now.sh",
				desc: "把代码片段生成漂亮的图片",
				weight: 8,
			},
		],
	},
	{
		id: "resources",
		name: "资源",
		icon: "material-symbols:auto-stories-outline-rounded",
		desc: "文档、教程与阅读",
		weight: 70,
		items: [
			{
				title: "Firefly Docs",
				url: "https://docs-firefly.cuteleaf.cn",
				desc: "Firefly 主题模板文档",
				icon: "https://docs-firefly.cuteleaf.cn/logo.png",
				weight: 10,
			},
			{
				title: "夏夜流萤",
				url: "https://blog.cuteleaf.cn",
				desc: "飞萤之火自无梦的长夜亮起",
				weight: 9,
			},
		],
	},
	{
		id: "ai-cloud",
		name: "AI 与云服务",
		icon: "material-symbols:cloud-outline-rounded",
		desc: "模型接口与站点后台",
		weight: 60,
		items: [
			{ title: "DeepSeek 对话", url: "https://chat.deepseek.com/", desc: "官方网页对话入口，写作与代码问答", icon: "/nav/deepseek.svg", weight: 10 },
			{ title: "Kimi 开放平台", url: "https://platform.kimi.com/console/api-keys", desc: "大模型 API 控制台，管理密钥与用量", icon: "/nav/kimi.png", weight: 9 },
			{ title: "APINebula", url: "https://apinebula.ai/", desc: "第三方模型中转，一个密钥接多家；需充值", icon: "/nav/apinebula.svg", weight: 8 },
			{ title: "Cloudflare Pages", url: "https://dash.cloudflare.com/", desc: "本站的托管控制台，登录后进入", icon: "/nav/cloudflare.png", weight: 7 },
		],
	},
	{
		id: "dev-tools",
		name: "开发与工具",
		icon: "material-symbols:terminal-rounded",
		desc: "写代码时会打开的那几个",
		weight: 55,
		items: [
			{ title: "React Bits", url: "https://www.reactbits.dev/", desc: "200+ 可直接复制的 React 动效与背景组件", icon: "/nav/reactbits.png", weight: 10 },
			{ title: "GitHub Proxy", url: "https://github.akams.cn/", desc: "GitHub 下载加速，支持 Clone / Releases / Raw", icon: "/nav/github.svg", weight: 9 },
		],
	},
	{
		id: "study",
		name: "学习与刷题",
		icon: "material-symbols:school-outline-rounded",
		desc: "练手与补基础",
		weight: 50,
		items: [
			{ title: "力扣 LeetCode", url: "https://leetcode.cn/", desc: "中文算法题库，周赛与题解社区", icon: "/nav/leetcode.png", weight: 10 },
			{ title: "柏码", url: "https://www.itbaima.cn/zh-CN", desc: "计算机系列视频课程，基础资源免费", icon: "/nav/itbaima.png", weight: 9 },
		],
	},
	{
		id: "design-assets",
		name: "设计与素材",
		icon: "material-symbols:brush-outline-rounded",
		desc: "字体、模型、可商用资源",
		weight: 45,
		items: [
			{ title: "找字体网 ZFONT", url: "https://www.zfont.cn/", desc: "免费可商用中文字体下载，更新频繁", icon: "/nav/zfont.png", weight: 10 },
			{ title: "模之屋 PlayBox", url: "https://www.aplaybox.com/", desc: "3D 模型、动作与插画创作分享社区", icon: "/nav/aplaybox.png", weight: 9 },
		],
	},
	{
		id: "reading",
		name: "效率与阅读",
		icon: "material-symbols:auto-stories-outline-rounded",
		desc: "顺手会用到的",
		weight: 40,
		items: [
			{ title: "打字鸭", url: "https://daziya.com/", desc: "盲打指法、拼音与代码打字练习", icon: "/nav/daziya.svg", weight: 10 },
			{ title: "星辰云博客", url: "https://blog.xingchencloud.top/p/19901205.html", desc: "《Github 镜像加速站点收集》，汇总可用镜像", icon: "/nav/xingchen.png", weight: 9 },
		],
	},
	{
		id: "games",
		name: "游戏与游戏开发",
		icon: "material-symbols:sports-esports-outline-rounded",
		desc: "平时逛得最多的那一类",
		weight: 35,
		items: [
			{ title: "Godot 引擎", url: "https://godotengine.org/zh-cn/", desc: "免费开源 2D / 3D 游戏引擎与文档", icon: "/nav/godot.svg", weight: 10 },
			{ title: "中文 Minecraft Wiki", url: "https://zh.minecraft.wiki/", desc: "官方授权中文百科，方块 / 生物 / 红石 / 版本", icon: "/nav/mcwiki.png", weight: 9 },
			{ title: "MC 百科", url: "https://www.mcmod.cn/", desc: "国内最大的 MC 模组中文百科与教程", icon: "/nav/mcmod.png", weight: 8 },
			{ title: "CurseForge", url: "https://www.curseforge.com/minecraft", desc: "全球最大的 MC 模组与整合包托管平台", icon: "/nav/curseforge.svg", weight: 7 },
			{ title: "MinecraftShader", url: "https://minecraftshader.com/", desc: "MC 光影、材质包与模组资源，附安装教程", icon: "/nav/minecraftshader.png", weight: 6 },
			{ title: "NameMC", url: "https://zh-cn.namemc.com/minecraft-skins", desc: "MC 皮肤库与玩家 ID 查询", icon: "/nav/namemc.png", weight: 5 },
			{ title: "地形师茶馆", url: "https://terratea.cc/", desc: "MC 地形创作社区，WorldMachine / WorldPainter 教程", icon: "/nav/terratea.png", weight: 4 },
			{ title: "方块小镇 Yuushya", url: "https://yuushya.com/townscape/", desc: "MC 建筑向模组，1000+ 建材与方块建模系统", icon: "/nav/yuushya.png", weight: 3 },
			{ title: "Mooncell", url: "https://fgo.wiki/w/%E8%8B%B1%E7%81%B5%E5%9B%BE%E9%89%B4", desc: "FGO 中文 Wiki，英灵图鉴与数值检索", icon: "/nav/fgo.png", weight: 2 },
		],
	},
];

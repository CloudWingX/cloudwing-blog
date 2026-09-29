import type { GalleryConfig } from "@/types/galleryConfig";

// 相册配置
export const galleryConfig: GalleryConfig = {
	// 相册列表
	albums: [
		// 图片已放入 public/gallery/<id>/ 目录
		// 以下 5 个相册由旧站「影集」5 个分组迁移而来
		{
			id: "mc",
			name: "Minecraft",
			description: "乌托邦探险之旅的游玩截图",
			location: "Minecraft",
			date: "2026-08-26",
			tags: ["影像", "Minecraft"],
		},
		{
			id: "ds2",
			name: "黑暗之魂2",
			description: "Steam 截图，6 月末的传火之旅",
			location: "黑暗之魂2",
			date: "2025-06-29",
			tags: ["影像", "黑暗之魂2"],
		},
		{
			id: "peak",
			name: "Peak",
			description: "游戏截图（1920×1080 全尺寸）",
			location: "Peak",
			date: "2026-09-22",
			tags: ["影像", "Peak"],
		},
		{
			id: "wp",
			name: "壁纸",
			description: "收藏壁纸（竖版为主）",
			date: "2026-09-22",
			tags: ["影像", "壁纸"],
		},
		{
			id: "ai",
			name: "AI 生成",
			description: "AI 生成贴纸",
			date: "2026-09-11",
			tags: ["影像", "AI生成"],
		},
	],

	// 瀑布流最小列宽(px)，浏览器根据容器宽度自动计算列数，默认 240
	columnWidth: 240,
};
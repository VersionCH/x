import type { ExpressiveCodeConfig, LicenseConfig, NavBarConfig, ProfileConfig, SiteConfig } from "./types/config";
import { LinkPreset } from "./types/config";

// 公开站点信息；部署前替换为你自己的内容。
export const siteConfig: SiteConfig = {
	title: "𝕏𝕀𝔽𝕐𝕌ℕ",
	subtitle: "",
	siteStartedAt: "2026-11-05",
	lang: "zh_CN",
	themeColor: { hue: 345, fixed: false },
	banner: {
		enable: false,
		src: "/images/Image_1793201625861_996.jpg",
		position: "center",
		credit: { enable: false, text: "", url: "" },
	},
	toc: { enable: true, depth: 2 },
	favicon: [{ src: "/images/Image_1793201625861_996.jpg", sizes: "any" }],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		{ name: "文章总览", url: "/archive/" },
		{ name: "日记", url: "/diary/" },
		{ name: "音乐", url: "/music/" },
		{ name: "友链", url: "/friends/" },
		{ name: "留言板", url: "/guestbook/" },
		LinkPreset.About,
	],
};

// 留空时显示配置提示，不会访问外部留言服务。
export const twikooConfig = { envId: "" };

export const profileConfig: ProfileConfig = {
	avatar: "/images/Image_1793201625861_996.jpg",
	name: "YUNXI",
	bio: "记录生活、学习和正在发生的小事。",
	links: [
		// 示例：{ name: "Bilibili", icon: "fa6-brands:bilibili", url: "https://space.bilibili.com/你的编号" },
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = { theme: "github-dark" };

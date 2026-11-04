export type QuoteCategory = "daily" | "study" | "healing" | "dream";

export interface QuoteItem {
	text: string;
	category: QuoteCategory;
	label: string;
}

// 主页的语录集中放在这里，后续只需要继续添加对象即可同步到各个语录组件。
export const quoteItems: QuoteItem[] = [
	{ text: "把喜欢的事情，一点一点做成生活。", category: "daily", label: "日常" },
	{ text: "今天也不必赶路，慢慢走也会到达。", category: "healing", label: "治愈" },
	{ text: "认真吃饭，认真休息，也是在认真生活。", category: "daily", label: "日常" },
	{ text: "小小的进步被看见时，平凡的日子也会发光。", category: "healing", label: "治愈" },
	{ text: "先完成，再完善；每一步都算数。", category: "study", label: "学习" },
	{ text: "你正在成为一个更接近理想的自己。", category: "dream", label: "向前" },
	{ text: "把今天能做的事做好，答案会在路上出现。", category: "study", label: "学习" },
	{ text: "允许自己偶尔停下来，风景不会因此消失。", category: "healing", label: "治愈" },
	{ text: "热爱不是轰轰烈烈，而是愿意一次次回来。", category: "dream", label: "向前" },
	{ text: "生活的惊喜，常常藏在不经意的小事里。", category: "daily", label: "日常" },
	{ text: "不用和别人比较，你的节奏也值得被尊重。", category: "healing", label: "治愈" },
	{ text: "给灵感一点时间，它正在悄悄靠近。", category: "dream", label: "向前" },
	{ text: "今天学会的一点点，会成为明天的底气。", category: "study", label: "学习" },
	{ text: "把心放回当下，眼前就有值得收藏的片刻。", category: "daily", label: "日常" },
	{ text: "愿你走过的每一段路，都算作自己的星光。", category: "dream", label: "向前" },
	{ text: "累了就休息，重新出发也不算迟。", category: "healing", label: "治愈" },
];

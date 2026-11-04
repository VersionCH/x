# 个人博客模板

基于 Astro、Svelte、Tailwind CSS 和 Fuwari 的个人博客框架。保留首页大头像、动态背景、文章、心情日历与日记、音乐播放器、友链、荣誉墙、小游戏、深浅主题、搜索和可选后台。

此版本使用示例身份和内容，不附带个人音频、私人头像、真实联系方式或已连接的留言服务。

模板仓库：[23ypz/blog_template](https://github.com/23ypz/blog_template)。请使用模板创建或复制到自己的仓库后部署。

**第一次使用：请从 [从零部署完整指南](docs/DEPLOYMENT.zh-CN.md) 开始。** 按顺序完成创建自己的 GitHub 仓库、本地预览、Cloudflare Pages 上线、后台管理，以及音乐、日记、友链、荣誉墙和留言服务配置；附常见错误排查与上线验收清单。

同一份完整教程已作为公开文章放入 [src/content/posts/blog-deployment-guide.md](src/content/posts/blog-deployment-guide.md)，部署后可在首页、文章总览或 `/posts/blog-deployment-guide/` 阅读。后续修改教程时，请同步更新文档版和文章版。

## 本地预览

建议使用 Node.js 22，以及 pnpm 9.14.4。先将自己的仓库 clone 到本地，下面以 `D:\Projects\my-blog` 为例：

```powershell
cd D:\Projects\my-blog
corepack pnpm install --frozen-lockfile
corepack pnpm dev
```

打开终端显示的地址，通常是 `http://localhost:4321/`。停止服务按 Ctrl+C。

```powershell
corepack pnpm build
corepack pnpm preview
```

构建命令会生成静态页面和 Pagefind 搜索索引。开发模式不生成完整搜索索引，搜索请用 build + preview 验证。

## 修改入口

| 内容 | 文件 |
| --- | --- |
| 标题、头像、昵称、简介、导航、主题色、社交链接 | `src/config.ts` |
| 网站正式地址（影响 sitemap、RSS、规范链接） | `astro.config.mjs` 的 site |
| 关于页面的城市、专业、兴趣和介绍 | `src/pages/about.astro` |
| 首页兴趣标签 | `src/components/HomeHero.astro` |
| 文章、日记 | `src/content/posts/`、`src/content/diary/` |
| 荣誉墙、友链、歌单、留言板配置 | `src/data/` |
| 随机语录 | `src/data/quotes.ts` |
| 示例头像和背景 | `public/images/avatar.svg`、`public/images/banner.svg` |

[完整部署指南](docs/DEPLOYMENT.zh-CN.md) · [写作与使用文档](docs/USAGE.zh-CN.md) · [文章与日记格式](docs/CONTENT_GUIDE.md) · [后台配置](docs/admin-deployment.md) · [模板清理说明](docs/TEMPLATE_REVIEW.md)

## 部署到 Cloudflare Pages

将这个目录上传到你自己的新 GitHub 仓库，连接 Cloudflare Pages：

- 项目类型：Pages，连接 Git 仓库。
- 构建命令：`pnpm build`。
- 输出目录：`dist`。
- 项目根目录：仓库根目录。
- 构建环境变量：`NODE_VERSION=22`、`PNPM_VERSION=9.14.4`。

前台可以直接部署；后台需要同仓库中的 `functions/` 和你自己的服务端环境变量。单独上传 `dist` 只能得到静态页面，不会部署后台接口。保存后台内容后会提交到你的 GitHub，再触发站点重新构建。

## 可选服务

- 留言板：模板默认关闭，填写自己的 Twikoo 服务地址后启用。
- 音乐：模板为空歌单，放入自己的音频并填写数据文件后启用。
- 后台：`/admin/`，默认没有密码、Token 和仓库配置，不提供公共演示账户。
- 统计：保留原有计数组件，显示效果取决于网络和计数服务；本地回退数字仅代表当前浏览器。


## 来源与许可

框架基于 [Fuwari](https://github.com/saicaca/fuwari) 修改，保留其 [MIT License](LICENSE) 与版权声明。原主题的多语言说明保留作上游参考，本模板的部署与使用以当前 README 和中文使用文档为准。模板附带的 SVG 示例图片由简单矢量图形组成，可以随模板使用；文章页显示的 CC 协议是内容展示配置，与源码 MIT 许可分开设置。

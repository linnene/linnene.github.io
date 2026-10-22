# 技术与科研主页

路由：`/research/`。这是现有网站下的独立页面，不是独立子域名。

## 本地预览

```bash
npm run dev
```

打开终端显示地址的 `/research/` 路径。运行 `npm run validate` 检查类型与静态构建。

## 内容维护

- `src/data/research.ts`：姓名、简介、科研、项目、工程经历与联系链接。
- `src/pages/research.astro`：独立 HTML 页面和局部样式，不导入博客的全局样式或布局。
- `email` 和 `cv` 未填写时不显示链接，不使用占位链接。
- 姓名采用用户确认的 `FANGLIN JIAN 简方林`。
- 内容为本人既有背景与当前进行中的项目草稿，不声称完成 CoDreamer 论文性能复现或取得发表成果。不包含成绩、申请目标、私人联系方式和未确认年份。

## 发布

用户于 2026 年 10 月 22 日审核并授权发布。页面使用仓库既有 GitHub Pages 工作流部署，公开路径为 `https://linnene.github.io/research/`，不修改 DNS、GitHub Pages 设置或原站导航。

- 公开姓名、英文表述、实习及项目内容已经用户审核。
- 已移除草稿 `noindex, nofollow` 标记，并配置正式 canonical URL。
- 另行确认是否向原博客导航添加 Research 入口。
- 每次变更后通过类型检查、构建及部署，再核验线上 `/research/`。
- 横幅为用户提供的独立插图，不属于任何项目，不作实验或项目成果证明。
- 用户于发布前更正：实习单位为 Ant Group（蚂蚁集团），不是 Alibaba。官网 Logo 原始资源为 `https://gw.alipayobjects.com/mdn/rms_27e257/afts/img/A*TJgCS4M0nnsAAAAAAAAAAAAAARQnAQ`，取自 `https://www.antgroup.com/en` 滚动页头的白底版本，保留原始图像。标识用于说明实习经历，不表示企业对个人研究的背书。

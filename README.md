# RL Notes

个人博客，使用 Astro + MDX + GitHub Pages。

## 常用命令

```bash
npm run dev
npm run validate
npm run build
```

## 写文章

文章放在：

```text
src/content/blog/
```

图片放在：

```text
public/images/blog/
```

完整规范见：

```text
docs/WRITING.md
```

## 自动部署

`.github/workflows/deploy.yml` 已配置 GitHub Pages 自动部署。

每次推送到 `main` 后会自动执行：

1. `npm ci`
2. `npm run check`
3. `npm run build`
4. 上传 `dist/`
5. 发布到 GitHub Pages

如果仓库是 `username.github.io`，当前配置可以直接使用。如果是项目页仓库，例如 `username.github.io/my-blog-web/`，需要再给 Astro 增加 `site` 和 `base` 配置。

## 站点配置

站点标题、导航、首页文案集中在：

```text
src/site.config.ts
```

主题样式集中在：

```text
src/styles/global.css
```

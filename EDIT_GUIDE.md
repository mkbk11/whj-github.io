# 个人网站编辑记录与说明

仅供自己查看，用来快速回忆这个 Jekyll 站点是怎么改的、要改哪里。

---

## 一、整体结构快速记忆

- 站点根目录：`whj-github.io/`
- 配置文件：`_config.yml`
- 页面布局：`_layouts/`
- 头部、侧边栏等公共片段：`_includes/`
- 静态资源：`static/`（`css`, `js`, `img`）
- 项目详情页：`projects/` 目录下的多个 `.md`
- 数据驱动的项目列表：`_data/projects.json`

---

## 二、如何增加一个新项目

### 1. 新建项目详情页

位置：`projects/`

步骤：

1. 复制一个现有文件作为模板，例如：
   - 火灾项目：`projects/Fire_detection.md`
   - 血细胞项目：`projects/Blood_Cell.md`
2. 修改文件头部信息：
   - `title`: 页面标题
   - `permalink`: 页面访问路径（例如 `/projects/XXX.html`）
3. 按照现在的风格组织内容结构：
   - 项目背景
   - 项目时间与成果（立项、获奖、论文、软著）
   - 使用到的技术
   - 我的主要工作
   - 项目总结与价值 / 未来发展方向

> 项目详情页默认使用 `layout: default`，会自动套用统一的头部、侧边栏和“返回顶部”按钮。

### 2. 在项目列表中出现

位置：`_data/projects.json`

每个项目是一条 JSON 记录，常用字段：

- `name`: 项目名称（列表中显示的标题）
- `image`: 列表卡片展示的封面图，位于 `static/img/`
- `url`: 对应的详情页链接，例如 `/projects/Fire_detection.html`
- `date`: 时间线显示的日期
- `tags`: 标签数组，用于筛选

项目列表页面：`projects.md`，使用 `layout: project`，会通过 `_layouts/project.html` 读取 `_data/projects.json` 自动生成列表。

---

## 三、页面样式修改位置

### 1. 全局样式

文件：`static/css/main.css`

主要内容：

- 顶部 header、侧边栏、整体字体大小
- 搜索框样式
- 项目列表卡片样式（`/* Project Page Styles */`）
- 兴趣爱好页面样式（Interests）

### 2. 项目列表卡片样式

位置：`static/css/main.css` 中的：

- `.project-item .well`
- `.project-img`
- `.project-headlines`
- `.project-footer`

如果想调整项目卡片的阴影、圆角、hover 效果，改这里。

### 3. “返回顶部”按钮样式

样式位置：`static/css/main.css`

相关类：

- `.back-to-top-wrapper`（可以自己加）
- `.project-actions`（项目详情页顶部按钮区域）

页面结构位置：`_includes/main.html`

---

## 四、“返回顶部”按钮逻辑

### 1. 按钮放在哪里

文件：`_includes/main.html`

结构大致为：

```html
<div class="col-md-9 col-xs-12 full">
  {{ content }}
  <div class="back-to-top-wrapper">
    <button type="button" class="btn btn-default btn-raised btn-sm js-back-to-top">
      返回顶部
    </button>
  </div>
  ...
</div>
```

所有使用 `default` / `page` 等布局并经过 `main.html` 渲染的页面都会带这个按钮。

### 2. 点击事件（滚动到顶部）

文件：`static/js/main.js`

核心逻辑：

```js
$('.js-back-to-top').on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, 500);
});
```

如果以后按钮类名或结构变化，记得同步修改这里。

---

## 五、搜索功能开启与数据来源

### 1. 开关位置

文件：`_config.yml`

```yml
allowsearch: true
```

为 `true` 时：

- 头部会显示搜索框（在 `_includes/header.html` 里）
- 会加载 `static/js/super-search.js`

### 2. 搜索框结构

文件：`_includes/header.html`

关键部分：

```html
{% if site.allowsearch ==  true %}
  <div class="col-md-6 col-sm-12 col-xs-12 searchcontrol" id="js-search">
    <input class="form-control" type="text" id="js-search__input" placeholder="Search">
    <ul class="search__results" id="js-search__results"></ul>
  </div>
{% endif %}
```

### 3. 搜索脚本与数据来源

文件：`static/js/super-search.js`

重要点：

- 使用 `feed.xml` 作为数据源，而不是 `sitemap.xml`：

  ```js
  var sitemap = (baseurl || '') + '/feed.xml';
  ```

- `feed.xml` 的生成模板在根目录：
  - `feed.xml`，Jekyll 会根据 `site.posts` 生成 RSS。
- JS 中通过 `xmlToJson` 解析 XML，提取 `channel.item` 作为可搜索的内容。
- 输入长度小于 3 个字符时不触发搜索。

如果以后希望搜索覆盖更多内容（例如 pages），可以调整 `feed.xml` 或单独写一个新的数据源。

---

## 六、项目详情页顶部按钮（火灾 / 血细胞）

### 1. 火灾项目

文件：`projects/Fire_detection.md`

标题下方的按钮区域：

```html
<div class="project-actions">
  <a href="{{ site.baseurl }}/projects/" class="btn btn-default btn-raised btn-sm">返回项目列表</a>
  <a href="#my-work" class="btn btn-primary btn-raised btn-sm">查看我的主要工作</a>
  <a href="#future" class="btn btn-info btn-raised btn-sm">查看未来发展方向</a>
</div>
```

对应锚点：

- `## 我的主要工作 {#my-work}`
- `### 未来发展方向 {#future}`

### 2. 血细胞项目

文件：`projects/Blood_Cell.md`

按钮区域：

```html
<div class="project-actions">
  <a href="{{ site.baseurl }}/projects/" class="btn btn-default btn-raised btn-sm">返回项目列表</a>
  <a href="#results" class="btn btn-primary btn-raised btn-sm">查看项目成果</a>
</div>
```

对应锚点：

- `## 项目时间与成果 {#results}`

如果以后给某个项目再增加“查看技术栈”“跳到总结”等按钮，只需要：

1. 给对应标题加 `{#xxx}` 锚点；
2. 在 `project-actions` 里加一个 `<a href="#xxx">` 即可。

---

## 七、“关于我”页面位置与结构

文件：`about.md`

布局：`layout: page`，使用 `_layouts/page.html`，最终还是走 `_layouts/default.html` + `_includes/main.html`，所以：

- 顶部有统一 header 和搜索
- 左边是侧边栏
- 右边正文下方同样有“返回顶部”按钮

如果以后要把“关于我”拆成多个小节、或者加入时间轴样式，可以只改 `about.md` 自己的内容，不需要改布局。

---

## 八、本地预览与部署相关

### 1. 本地构建

在项目根目录：

```bash
bundle exec jekyll build
```

构建结果输出到 `_site/`。

### 2. 本地预览（可选）

```bash
bundle exec jekyll serve
```

访问：`http://localhost:4000`

### 3. GitHub Pages 部署

- 仓库：`https://github.com/mkbk11/whj-github.io`
- Pages 由 `.github/workflows/jekyll.yml` 的 GitHub Actions 负责构建和部署。
- 每次 push 到 `master`，会自动触发构建。

---

## 九、以后可以在这里补充的内容

可以持续往这个文件里加：

- 新增页面的约定（比如新的栏目）
- 常用颜色、字体大小约定
- 图片命名规范（例如：`领域_用途_版本.png`）
- 新增脚本或样式时的注意点

这个文件不对外展示，只是给自己回顾时少踩坑用。以后忘了某个功能怎么实现的，先来这里找。

# Astro Starter Kit

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

### Содержание стартового шаблона (описаны изменения от дефолтного шаблона)

1. .github/workflows/deploy.yml
2. .vscode/2025.code-snippets
3. .vscode/settings.json
4. scripts/
5. src/styles/
6. src/partials/
7. public/favicon/
8. public/fonts/
9. public/images/

#### Ошибки

1. Не обнаружено

#### Что надо сделать

1. Задача не поставлена

**⚠️ Важно **

`Изменить название проекта на свой в файлах`

1. src/styles/fonts/fonts.scss
1. astro.config.mjs
1. package.json

Полезные эмодзи:

💡 — для подсказок

🚨 — для критически важных моментов

✅ — для проверочных пунктов

❌ — для того, чего делать не стоит

# deeply-disk `"version": "0.0.1"`

### Правила увеличения версий:

- PATCH (+0.0.1) - исправил баг, опечатку
- MINOR (+0.1.0) - добавил новый функционал (блог)
- MAJOR (+1.0.0) - ломающие изменения

# deeply-disk `"version": "0.1.0"`

### В шаблон добавлен блог

**Структура проекта немного изменилась**

1. добавлена папка `src/content`

```txt
📦content
 ┣ 📂blog
 ┃ ┣ 📜first-post.md
 ┃ ┣ 📜markdown-style-guide.md
 ┃ ┣ 📜programming-post.md
 ┃ ┣ 📜second-post.md
 ┃ ┣ 📜third-post.md
 ┃ ┗ 📜using-mdx.mdx
 ┗ 📂test
```

2. добавлены

- `src/pages/blog`
- `src/pages/blog/[...slug].astro`
- `src/pages/blog/index.astro`

```txt
📦pages
 ┣ 📂blog
 ┃ ┣ 📜[...slug].astro
 ┃ ┗ 📜index.astro
 ┣ 📜catalog.astro
 ┣ 📜contacts.astro
 ┗ 📜index.astro
```

3. добавлены

- `src/consts.ts`
- `src/content.config.ts`

```txt
📦src
 ┣ 📜consts.ts
 ┗ 📜content.config.ts
```

### Структура

Структура папки `src` в шаблоне **deeply-disk `"version": "0.1.0"`**

```txt
📦src
 ┣ 📂assets
 ┃ ┣ 📂programming  ✅ — добавлено
 ┃ ┃ ┗ 📜06.jpg     ✅ — добавлено
 ┃ ┣ 📜blog-placeholder-1.jpg
 ┃ ┣ 📜blog-placeholder-2.jpg
 ┃ ┣ 📜blog-placeholder-3.jpg
 ┃ ┣ 📜blog-placeholder-4.jpg
 ┃ ┣ 📜blog-placeholder-5.jpg
 ┃ ┗ 📜blog-placeholder-about.jpg
 ┣ 📂components
 ┃ ┣ 📂partials
 ┃ ┃ ┣ 📜Footer.astro
 ┃ ┃ ┣ 📜Head.astro
 ┃ ┃ ┗ 📜Header.astro
 ┃ ┗ 📂ui
 ┃ ┃ ┣ 📜Images.astro
 ┃ ┃ ┣ 📜Link.astro
 ┃ ┃ ┣ 📜Logo.astro
 ┃ ┃ ┣ 📜MenuToggle.astro
 ┃ ┃ ┣ 📜SocialContact.astro
 ┃ ┃ ┗ 📜ThemeToggle.astro
 ┣ 📂content    ✅ — добавлено
 ┃ ┣ 📂blog     ✅ — добавлено
 ┃ ┃ ┣ 📜first-post.md  ✅ — добавлено
 ┃ ┃ ┣ 📜markdown-style-guide.md    ✅ — добавлено
 ┃ ┃ ┣ 📜programming-post.md    ✅ — добавлено
 ┃ ┃ ┣ 📜second-post.md         ✅ — добавлено
 ┃ ┃ ┗ 📜third-post.md          ✅ — добавлено
 ┃ ┗ 📂test                     ✅ — добавлено
 ┣ 📂layouts
 ┃ ┣ 📜BlogPost.astro
 ┃ ┗ 📜PagesLayout.astro
 ┣ 📂pages
 ┃ ┣ 📂blog                 ✅ — добавлено
 ┃ ┃ ┣ 📜[...slug].astro    ✅ — добавлено
 ┃ ┃ ┗ 📜index.astro        ✅ — добавлено
 ┃ ┣ 📜catalog.astro
 ┃ ┣ 📜contacts.astro
 ┃ ┗ 📜index.astro
 ┣ 📂styles
 ┃ ┣ 📂base
 ┃ ┃ ┣ 📂mixins
 ┃ ┃ ┃ ┣ 📜_adaptive.scss
 ┃ ┃ ┃ ┣ 📜_counter.scss
 ┃ ┃ ┃ ┣ 📜_fontfase.scss
 ┃ ┃ ┃ ┣ 📜_math.scss
 ┃ ┃ ┃ ┣ 📜_rem-em.scss
 ┃ ┃ ┃ ┣ 📜_transparent-color.scss
 ┃ ┃ ┃ ┣ 📜_truncate-text.scss
 ┃ ┃ ┃ ┣ 📜_utilites.scss
 ┃ ┃ ┃ ┣ 📜adaptiveValue.scss
 ┃ ┃ ┃ ┗ 📜grid.scss
 ┃ ┃ ┣ 📜base.scss
 ┃ ┃ ┣ 📜button.scss
 ┃ ┃ ┣ 📜common.scss
 ┃ ┃ ┣ 📜media-new.scss
 ┃ ┃ ┣ 📜media.scss
 ┃ ┃ ┣ 📜mixins.scss
 ┃ ┃ ┣ 📜null.scss
 ┃ ┃ ┣ 📜scroll.scss
 ┃ ┃ ┗ 📜variables.scss
 ┃ ┣ 📂fonts
 ┃ ┃ ┣ 📜fonts.scss
 ┃ ┃ ┗ 📜icons.scss
 ┃ ┣ 📂libs
 ┃ ┃ ┣ 📜form.scss
 ┃ ┃ ┗ 📜spollers.scss
 ┃ ┣ 📂themes
 ┃ ┃ ┗ 📂v_01
 ┃ ┃ ┃ ┣ 📜M3.json
 ┃ ┃ ┃ ┣ 📜dark.scss
 ┃ ┃ ┃ ┗ 📜light.scss
 ┃ ┣ 📂utils
 ┃ ┃ ┗ 📜_focus-visible.scss
 ┃ ┗ 📜global.scss
 ┣ 📜consts.ts          ✅ — добавлено
 ┗ 📜content.config.ts  ✅ — добавлено
```

## 📜 История версий

### deeply-disk `"version": "0.2.0"`

Подробный список изменений доступен в файле `CHANGELOG.md`

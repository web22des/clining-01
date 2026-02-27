# Changelog

Все заметные изменения в этом проекте будут задокументированы в этом файле.

## [0.2.0] - 2026-02-27

### Added

- Компонент `FeatureList` с документацией. Путь `src/components/ui/FeatureList`
- Классы `.image-frame` и `.image-frame__img` в `src/styles/base/common.scss`.

### Changed

- Обновлен `astro` с 5.14.0 до 5.18.0.
- Обновлен `npm` с 10.9.4 до 11.11.0.

### Structure

```astro
📦src
 ┣ 📂assets
 ┃ ┣ 📂programming
 ┃ ┃ ┗ 📜06.jpg
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
 ┃ ┃ ┣ 📂FeatureList    ✅ new
 ┃ ┃ ┃ ┣ 📜FeatureList.astro    ✅ new
 ┃ ┃ ┃ ┗ 📜FeatureList.astro.md ✅ new
 ┃ ┃ ┣ 📜Images.astro
 ┃ ┃ ┣ 📜Link.astro
 ┃ ┃ ┣ 📜Logo.astro
 ┃ ┃ ┣ 📜MenuToggle.astro
 ┃ ┃ ┣ 📜SocialContact.astro
 ┃ ┃ ┗ 📜ThemeToggle.astro
 ┣ 📂content
 ┃ ┗ 📂blog
 ┃ ┃ ┣ 📜first-post.md
 ┃ ┃ ┣ 📜markdown-style-guide.md
 ┃ ┃ ┣ 📜programming-post.md
 ┃ ┃ ┣ 📜second-post.md
 ┃ ┃ ┗ 📜third-post.md
 ┣ 📂layouts
 ┃ ┣ 📜BlogPost.astro
 ┃ ┗ 📜PagesLayout.astro
 ┣ 📂pages
 ┃ ┣ 📂blog
 ┃ ┃ ┣ 📜[...slug].astro
 ┃ ┃ ┗ 📜index.astro
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
 ┃ ┃ ┣ 📜common.scss    ✅ add classes
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
 ┣ 📜consts.ts
 ┗ 📜content.config.ts
```

### [0.1.0] - Дата прошлого релиза

- Initial release starter template.

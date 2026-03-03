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

---

## Добавлено

папка для секций - `src/components/sections`

теперь кроме компонентов карточки, списки и проч. можно хранить секции как компоненты целиком, так же контент компонентов будет выноситься в отдельный файл `data.ts`

- Добавлена папка `src/data` -
- Добавлена папка `src/hooks`
- Добавлен файл `src/components/sections/index.ts`

- Добавлены новые алиасы в файл `tsconfig.json` под обновлённую структуру:
- `@data/*` — для файлов с данными секций
- `@hooks/*` — для JS-логики
- `@utils/*` — для хелпер-функций
- `@sections/*` — для готовых секций (отдельно от UI)

5. Убран `@templates` - так как не используется

```astro
📦components
 ┣ 📂partials
 ┃ ┣ 📜Footer.astro
 ┃ ┣ 📜Head.astro
 ┃ ┗ 📜Header.astro
 ┣ 📂sections   ✅ add
 ┃ ┣ 📂Section_var-03   ✅ add
 ┃ ┃ ┣ 📜SectionVar03.astro
 ┃ ┃ ┗ 📜data.ts
 ┃ ┗ 📂Section_var-04   ✅ add
 ┃ ┃ ┣ 📜SectionVar04.astro
 ┃ ┃ ┗ 📜data.ts
 ┗ 📂ui
 ┃ ┣ 📂FeatureList
 ┃ ┃ ┣ 📜FeatureList.astro
 ┃ ┃ ┗ 📜FeatureList.astro.md
 ┃ ┣ 📂card
 ┃ ┃ ┗ 📜CardVar02.astro
 ┃ ┣ 📜Images.astro
 ┃ ┣ 📜Link.astro
 ┃ ┣ 📜Logo.astro
 ┃ ┣ 📜MenuToggle.astro
 ┃ ┣ 📜SocialContact.astro
 ┃ ┗ 📜ThemeToggle.astro
```

## 🚀 Что было сделано в версии 0.3.0

### 📁 Архитектура проекта

- ✅ Организована структура компонентов: `ui/`, `sections/`, `partials/`
- ✅ Вынесены все данные в `src/data/sections/` (отделение контента от кода)
- ✅ Создана папка `src/components/sections` для
- ✅ Создана папка утилит `src/utils/` для валидации и

- ✅ Создан файл `src/utils/index.ts` для...
- ✅ Создана папка утилит `src/hooks/` для...
- ✅ Создан файл `src/hooks/index.ts` для...

- ✅ Настроены алиасы импортов (`@data/`, `@utils/`)

### 🔒 Типобезопасность

- ✅ Все компоненты типизированы через `export interface Props`
- ✅ Импорт типов через `import type` (не попадает в билд)
- ✅ Валидация данных при сборке (проверка уникальности `id`, обязательных полей)
- ✅ Исправлен `tsconfig.json` (убраны пробелы в кавычках)

### ♿ Доступность (a11y)

- ✅ Обязательные `alt` для всех изображений
- ✅ Семантические теги (`<nav>`, `<main>`, `<button>`)
- ✅ Иерархия заголовков без пропусков
- ✅ Видимый фокус на интерактивных элементах

### 📚 Документация

- ✅ Создана методичка разработчика: `src/components/README.md`
- ✅ Описаны правила нейминга (PascalCase, kebab-case)
- ✅ Добавлены запрещённые приёмы (памятка)
- ✅ Финальный чек-лист перед коммитом

### 🛠 Утилиты

- ✅ Валидация уникальности `id` через `Set`
- ✅ Проверка обязательных полей в данных
- ✅ Комплексная валидация для карточек (`validateCardsData`)

---

## 📋 Чек-лист для перехода на v0.3.0

- [ ] Исправить `tsconfig.json` (убрать пробелы в кавычках)
- [ ] Перенести все данные в `src/data/sections/`
- [ ] Добавить `id: string` во все интерфейсы карточек
- [ ] Подключить валидацию данных через `src/utils/validate-data.ts`
- [ ] Проверить все `alt` у изображений
- [ ] Обновить импорты на алиасы (`@/...`)
- [ ] Прочитать `src/components/README.md` перед разработкой

---

## 🔄 История версий

| Версия | Дата       | Изменения                                  |
| ------ | ---------- | ------------------------------------------ |
| 0.3.0  | 2026-02-27 | Архитектура, валидация, a11y, документация |
| 0.1.0  | 2026-02-xx | Базовая версия шаблона                     |

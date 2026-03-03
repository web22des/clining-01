# 🧩 Компоненты Astro — Методичка разработчика

> **Назначение:** Единый стандарт создания компонентов для стартового шаблона.  
> **Для кого:** Начинающие и опытные разработчики, работающие с шаблоном.  
> **Где хранить:** `src/components/README.md`

---

## ⚡ Быстрый старт (5 шагов)

1.  **Создай файл** в правильной папке: `src/components/ui/ComponentName/ComponentName.astro`
2.  **Опиши интерфейс:** `export interface Props { ... }`
3.  **Импортируй зависимости:** `import type` для типов, `import` для компонентов
4.  **Сделай деструктуризацию:** `const { title, href } = Astro.props`
5.  **Проверь данные:** Валидация `id`, импорт изображений через `import`

---

## 📂 Структура папок компонентов

```astro
📦src/components
┣ 📂ui/ # UI-компоненты (атомы)
┃ ┣ 📂button/ # Кнопки
┃ ┣ 📂card/ # Карточки
┃ ┣ 📂SectionHeader/ # Заголовки секций
┃ ┗ 📂Link/ # Ссылки
┣ 📂sections/ # Готовые секции (блоки)
┃ ┣ 📂Hero/
┃ ┣ 📂Services/
┃ ┗ 📂Contacts/
┗ 📂partials/ # Части страниц
┃ ┣ 📜Header.astro
┃ ┣ 📜Footer.astro
┃ ┗ 📜Head.astro
```

---

## 🗂 Типы компонентов и их особенности

| Тип | Путь | Пример | Назначение |
| --- | --- | --- | --- |
| **UI-атомы** | `ui/button/`, `ui/input/` | Кнопки, формы, иконки | Базовые элементы интерфейса |
| **UI-карточки** | `ui/card/` | Услуги, товары, отзывы | Контентные блоки с данными |
| **UI-типографика** | `ui/SectionHeader/` | Заголовки секций | Единый стиль заголовков |
| **Секции** | `sections/` | Hero, Features, Pricing | Готовые блоки для лендинга |
| **Partials** | `partials/` | Header, Footer, Head | Части layouts страниц |

---

## 📝 Специфичные требования по типам

### 🎴 Карточки (`ui/card/`)

**Минимальные требования:**

- [ ] Поле `id: string` (уникальное, kebab-case)
- [ ] Тип изображения: `ImageMetadata` (импорт, не строка!)
- [ ] Валидация `id` в файле данных через утилиту
- [ ] Поддержка адаптивности (вертикальная/горизонтальная)
- [ ] Текст кнопки (`linkText`) выносится в данные

**Пример интерфейса:**

```ts
export interface Props {
    id: string; // ✅ Для якорей
    title: string;
    subTitle: string;
    href: string;
    linkText: string;
    image: ImageMetadata; // ✅ Не строка!
    imageAlt: string; // ✅ Обязательно для a11y
    imageWidth: number;
    imageHeight?: number;
}
```

**Пример использования:**

```astro
---
import Link from "../Link.astro";
import Images from "../Images.astro";
import type { ImageMetadata } from "astro";

export interface Props {
    id: string;
    title: string;
    subTitle: string;
    href: string;
    linkText: string;
    image: ImageMetadata;
    imageAlt: string;
    imageWidth: number;
    imageHeight?: number;
}

const { id, title, subTitle, href, linkText, image, imageAlt, imageWidth, imageHeight } = Astro.props;
---

<div class="card" id={`card-${id}`}>
    <p class="card__subtitle">{subTitle}</p>
    <h3 class="card__title">{title}</h3>
    <Link class="card__link" href={href}>{linkText}</Link>
    <Images src={image} alt={imageAlt} width={imageWidth} height={imageHeight} />
</div>
```

### 📝 Заголовки (ui/SectionHeader/)

**Минимальные требования:**

- Пропс `tag?: 'h1' | 'h2' | 'h3'` (иерархия SEO)
- Опциональный `subtitle?: string` (не во всех секциях нужен)
- Выравнивание `align?: 'left' | 'center' | 'right'`
- Доступность: Контраст цветов, читаемость шрифтов
- Не хардкодить текст — передавать из данных секции **Пример интерфейса:**

```ts
export interface Props {
    title: string;
    subtitle?: string;
    tag?: "h1" | "h2" | "h3";
    align?: "left" | "center" | "right";
}
```

**Пример использования:**

```astro
---
export interface Props {
    title: string;
    subtitle?: string;
    tag?: 'h1' | 'h2' | 'h3';
    align?: 'left' | 'center' | 'right';
}

const { title, subtitle, tag: HeadingTag = 'h2', align = 'center' } = Astro.props;
---

<div class="section-header" data-align={align}>
    {subtitle && <p class="section-header__subtitle">{subtitle}</p>}
    <HeadingTag class="section-header__title">{title}</HeadingTag>
</div>
```

### 🧩 Секции (sections/)

**Минимальные требования:**

- Данные в `src/data/sections/{name}/data.ts`
- Якорный `id` на самой секции (для ссылок из меню)
- Импорт типов из UI-компонентов `(import type { Props })`
- Валидация данных при сборке (проверка `id`, обязательных полей)
- Заголовок секции — через компонент `SectionHeader`

**Пример структуры секции:**

```astro
---
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader.astro";
import CardVar02 from "@/components/ui/card/CardVar02.astro";
import { cardsData, sectionConfig } from "@/data/sections/services/data";
---

<section id="services" class="section services-section">
    <div class="container">
        <SectionHeader
            title={sectionConfig.title}
            subtitle={sectionConfig.subtitle}
            tag="h2"
        />
        <div class="services-section__grid">
            {cardsData.map((card) => (
                <CardVar02 {...card} />
            ))}
        </div>
    </div>
</section>
```

### 🔘 Кнопки (ui/button/)

**Минимальные требования:**

- Доступность: Видимый фокус `(:focus-visible)`, достаточная область клика
- Поддержка aria-label для кнопок с иконками
- Варианты `(variant?: 'primary' | 'secondary' | 'outline')`
- Размер `(size?: 'sm' | 'md' | 'lg')`
- Поддержка иконок (слот или пропс `icon?`) **Пример интерфейса:**

```ts
export interface Props {
    href?: string;
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    ariaLabel?: string;
}
```

### 📄 Partials (partials/)

**Минимальные требования:**

- Данные из `src/data/navigation.ts`, `src/data/site-config.ts`
- Доступность: Семантические теги `(<nav>, <footer>)`, `landmark`-зоны
- Логотип с `alt` и ссылкой на главную
- Не содержат хардкод-контента

**Пример использования данных:**

```astro
---
import { headerNav } from "@/data/navigation";
import { siteConfig } from "@/data/site-config";
---

<header class="header">
    <nav class="header__nav">
        {headerNav.map((item) => (
            <a href={item.href}>{item.label}</a>
        ))}
    </nav>
    <a href="tel:{siteConfig.phone}">{siteConfig.phone}</a>
</header>
```

### 🛠 Утилиты валидации (`src/utils/`)

**Назначение**

Чистые функции для проверки данных, форматирования и вспомогательной логики. Выполняются во время сборки.

```astro
📦src/utils
 ┣ 📜validate-data.ts        # Валидация данных
 ┣ 📜formatDate.ts           # (будущие утилиты)
 ┗ 📜index.ts                # Баррел-файл для экспорта
```

**Пример: `validate-data.ts`**

```ts
// src/utils/validate-data.ts

/**
 * Проверка уникальности ID в массиве данных
 */
export function validateUniqueIds<T extends Record<string, any>>(
    data: T[],
    fieldName: string = "id",
): void {
    const values = data.map((item) => item[fieldName]);
    const uniqueValues = new Set(values);

    if (values.length !== uniqueValues.size) {
        const duplicates = values.filter(
            (value, index) => values.indexOf(value) !== index,
        );
        throw new Error(
            `❌ Обнаружены дубликаты "${fieldName}": ${[...new Set(duplicates)].join(", ")}`,
        );
    }
}

/**
 * Проверка обязательных полей в объектах
 */
export function validateRequiredFields<T extends Record<string, any>>(
    data: T[],
    requiredFields: (keyof T)[],
): void {
    data.forEach((item, index) => {
        requiredFields.forEach((field) => {
            if (
                item[field] === undefined ||
                item[field] === null ||
                item[field] === ""
            ) {
                throw new Error(
                    `❌ Поле "${String(field)}" отсутствует в элементе #${index}`,
                );
            }
        });
    });
}

/**
 * Комплексная валидация для карточек
 */
export function validateCardsData<T extends { id: string; title: string }>(
    data: T[],
): void {
    validateUniqueIds(data, "id");
    validateRequiredFields(data, ["id", "title", "href"]);
}
```

**Использование в файле данных**

```ts
// src/data/sections/services/data.ts
import { validateCardsData } from "@/utils/validate-data";
import type { Props as CardProps } from "@/components/ui/card/CardVar02.astro";

export const cardsData: CardProps[] = [
    { id: "service-dev", title: "Разработка" /* ... */ },
    { id: "service-seo", title: "SEO" /* ... */ },
];

// ✅ Валидация одной строкой
validateCardsData(cardsData);
```

### ♿ Доступность (a11y) — обязательные пункты

| Компонент | Требование | Пример |
| --- | --- | --- |
| Изображения | Всегда `alt` (даже пустой `alt=""` для декора) | `<Images alt="Описание" />` |
| Ссылки | Понятный текст (не «кликни тут»), `aria-label` для иконок | `<a aria-label="Telegram">` |
| Кнопки | Видимый фокус (`:focus-visible`), тег `<button>` | `<button class="btn">` |
| Формы | `<label>` для каждого `<input>`, `id` + `for` |
| Заголовки | Иерархия h1 → h2 → h3 без пропусков | <h2>, затем <h3> |
| Цвета | Контраст текста к фону минимум 4.5:1 | Проверка в `DevTools` |
| Навигация | Landmark-роли (`<nav>`, `<main>`, `<footer>`) | `<nav aria-label="Главное">` |
| Скип-линк | Ссылка «Перейти к контенту» для клавиатуры | `<a href="#main" class="skip-link">` |

### 🏷 Правила нейминга

| Объект | Формат | Пример |
| --- | --- | --- |
| Папка компонента | `PascalCase` | `ui/CardVar02/, sections/Hero/` |
| ID элемента | `kebab-case` | `service-dev`, `portfolio-item-1` |
| Файл данных | `kebab-case` | `services-data.ts` или `data.ts` внутри папки |
| Папка данных | `kebab-case` | `src/data/sections/services/` |
| CSS классы | `kebab-case` | `.card-var-02`, .`section-header` |
| Переменные TS | c`amelCase` | `cardsData`, `sectionConfig` |
| SCSS миксины | `kebab-case` | `@include max-width()`, `@include between-widths()` |

### ⛔ Запрещённые приёмы (Памятка)

| ❌ Нельзя | ✅ Нужно | Почему |
| --- | --- | --- |
| `image: "@assets/img.jpg"` (строка) | `import img from "@assets/img.jpg"` | Astro не оптимизирует строки |
| `id: 123` (число) | `id: "service-1"` (строка) | Удобен для URL и якорей |
| Хардкод текста в компоненте | Текст в `data.ts` | Клиент должен менять контент безопасно |
| `div` вместо `button` | `<button>` или `<a>` | Доступность и семантика |
| Отсутствует `alt` у изображений | Всегда заполнять `alt` | Скринридеры и `SEO` |
| Дубликаты `id` в массиве данных | Уникальные `id` + валидация | Ломаются якорные ссылки |
| Пробелы в `tsconfig.json` | Чистый JSON без пробелов | Сломаются алиасы `@/...` |
| `import { Props }` без `type` | `import type { Props }` | Лишний код в билде |
| Относительные пути `../../../` | Алиасы `@/components/` | Читаемость и рефакторинг |

### 📦 Импорт компонентов и типов

| Синтаксис | Что импортирует | Попадает в JS-билд? | Когда использовать |
| --- | --- | --- | --- |
| import X from "..." | Сам компонент/функцию | ✅ Да | Когда используешь <X /> в HTML |
| import type { Y } from "..." | Только тип интерфейса | ❌ Нет | Когда типизируешь данные |

**Пример правильного импорта**

```ts
// ✅ Компоненты для использования в шаблоне
import Link from "@/components/ui/Link.astro";
import CardVar02 from "@/components/ui/card/CardVar02.astro";

// ✅ Типы для типизации (не попадают в билд)
import type { Props as CardProps } from "@/components/ui/card/CardVar02.astro";
import type { ImageMetadata } from "astro";

// ✅ Комбинированный импорт (TS 4.5+)
import CardVar02, {
    type Props as CardProps,
} from "@/components/ui/card/CardVar02.astro";
```

**Использование алиасов**

```ts
// ✅ Коротко и понятно (если настроен tsconfig.json)
import Comp from "@/components/ui/Comp.astro";
import data from "@/data/sections/services/data";

// ❌ Длинные относительные пути (избегать)
import Comp from "../../../components/ui/Comp.astro";
```

### 📄 Работа с данными (src/data/)

**Структура папки данных**

```astro
📦src/data
 ┣ 📜site-config.ts          # Глобальные настройки (телефон, email)
 ┣ 📜navigation.ts           # Меню навигации (header, footer)
 ┗ 📂sections
 ┃ ┣ 📂hero/
 ┃ ┃ ┗ 📜data.ts
 ┃ ┣ 📂services/
 ┃ ┃ ┗ 📜data.ts
 ┃ ┗ 📂portfolio/
 ┃ ┃ ┗ 📜data.ts
```

**Пример файла данных**

```ts
// src/data/sections/services/data.ts
import type { Props as CardProps } from "@/components/ui/card/CardVar02.astro";
import { validateCardsData } from "@/utils/validate-data";
import cardImage01 from "@assets/sections/service-1.jpg";
import cardImage02 from "@assets/sections/service-2.jpg";

const cardDefaults = {
    linkText: "Подробнее",
    imageWidth: 360,
    imageHeight: 480,
} as const;

export const sectionConfig = {
    title: "Наши услуги",
    subtitle: "Что мы предлагаем",
};

export const cardsData: CardProps[] = [
    {
        ...cardDefaults,
        id: "service-dev",
        title: "Разработка сайтов",
        subTitle: "Услуга",
        href: "/services/dev",
        image: cardImage01,
        imageAlt: "Разработка веб-сайтов",
    },
    {
        ...cardDefaults,
        id: "service-seo",
        title: "SEO Оптимизация",
        subTitle: "Услуга",
        href: "/services/seo",
        image: cardImage02,
        imageAlt: "SEO продвижение",
    },
];

// ✅ Валидация при сборке
validateCardsData(cardsData);
``;
```

**Что такое img в импорте?**

```ts
import cardImage01 from "@assets/sections/service-1.jpg";
//        ↑ переменная, в которую Astro загрузит метаданные изображения

// ✅ Правильно: передаем переменную
<Images src={cardImage01} alt="Описание" />

// ❌ Неправильно: передаем строку
<Images src="@assets/sections/service-1.jpg" alt="Описание" />
```

Почему? Astro оптимизирует только импортированные изображения (форматы WebP, размеры, lazy-loading).

### ✅ Финальный чек-лист перед коммитом

**Код компонента**

- Интерфейс `Props` экспортирован (`export interface`)
- Типы импортированы через `import type`
- Компоненты импортированы через обычный `import`
- Использована деструктуризация `Astro.props`
- Значения по умолчанию указаны при деструктуризации **Данные**
- Все `id` уникальны и в формате `kebab-case`
- Валидация данных добавлена (проверка на дубли)
- Изображения импортированы, а не строки
- `alt` у всех изображений заполнен
- Данные вынесены в `src/data/sections/` **Доступность**
- Проверен контраст цветов (минимум 4.5:1)
- Видимый фокус на интерактивных элементах
- Семантические теги (<`nav>`, `<main>`, `<button>`)
- Иерархия заголовков без пропусков **Конфигурация**
- `tsconfig.json` без пробелов в кавычках
- Алиасы (`@/...`) работают
- `astro.config.mjs`: проверен `base` (имя репозитория)

**Быстрый тест**

```bash
npm run dev  # Запусти сервер
# 1. Открой страницу с компонентом → всё работает?
# 2. Измени поле в data.ts → обновилось на странице?
# 3. Удали обязательное поле → TypeScript подсветил ошибку?
```

### 🔄 История изменений

| Версия | Дата       | Изменения               |
| ------ | ---------- | ----------------------- |
| 1.0.0  | 2026/03/02 | Первая версия методички |

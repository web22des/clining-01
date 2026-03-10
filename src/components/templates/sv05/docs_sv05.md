# правила использования

Секция это шаблон. **Включает в себя компоненты:**

1. `@components/ui/card/CardVar04.astro`

**Что нужно для использования:**

Если вам нужна данная секция как шаблон, нужно создать новый файл для импорта данной секции (нейминг секции должен соответствовать логике сайта) в директории `src/components/sections/Ваша_новая секция`

Тем самым сам шаблон в папке `src/components/templates` - не засоряется

Пример использования

1. Создаем новую директорию `src/components/sections/Ваша_новая секция`
2. Импортируем в нее нужный нам шаблон

```astro
---
import Sv05 from "@components/templates/sv05/Sv05.astro";
---
<Sv05 descr={testDescr.descr} />

```

3. Создаем новый data файл `src/data/sections/vizitka/visitkaData.ts` для контента, тем самым мы отделяем контентную часть от кода.

```js
📦data
 ┣ 📂sections
 ┃ ┣ 📂vizitka
 ┃ ┃ ┗ 📜visitkaData.ts // тут весь контент

```

4. Импортируем

```js
import type { Props as cardData } from "@components/ui/card/CardVar04.astro"; //

import realAva from "@assets/temp/avatars/av-02.png";

import type { Props as descrData } from "@components/sections/vizitka/Vizitka.astro";
export const testD: cardData = {
    title: "Злата Александровна",
    subtitle: "Специалист по продажам",
    mail: "info2@testklining.ru",
    phone: "+7(999)888-77-76",
    src: realAva,
    alt: "Реальное описание аватарки",
};

export const testDescr: descrData = {
    descr: "Мы всегда на связи — моментально отвечаем на звонки и оперативно реагируем на письма в течение часа.",
};

```

```js
📦src
 ┣ 📂assets
 ┣ 📂components
 ┃ ┣ 📂partials
 ┃ ┣ 📂sections
 ┃ ┃ ┣ 📂vizitka // новая секция, с импортом нужного шаблона
 ┃ ┃ ┃ ┗ 📜Vizitka.astro
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂templates // Теперь все шаблоны тут
 ┃ ┃ ┣ 📂sv05 // Нейминг - sv05 = SectionVar05
 ┃ ┃ ┃ ┣ 📜Sv05.astro
 ┃ ┃ ┃ ┗ 📜docs_sv05.md // Документация по работе
 ┃ ┃ ┗ 📂sv06
 ┃ ┣ 📂ui
 ┃ ┃ ┣ 📂card
 ┃ ┃ ┃ ┣ 📜CardVar02.astro
 ┃ ┃ ┃ ┣ 📜CardVar03.astro
 ┃ ┃ ┃ ┗ 📜CardVar04.astro
 ┃ ┃ ┣ 📂title
 ┃ ┃ ┃ ┣ 📜SectionTitleVar01.astro
 ┃ ┃ ┃ ┗ 📜SectionTitleVar02.astro
 ┃ ┃ ┣ 📜Images.astro
 ┃ ┃ ┣ 📜Link.astro
 ┃ ┃ ┣ 📜Logo.astro
 ┃ ┃ ┣ 📜MenuToggle.astro
 ┃ ┃ ┣ 📜SocialContact.astro
 ┃ ┃ ┗ 📜ThemeToggle.astro
 ┃ ┗ 📜README.md
 ┣ 📂content
 ┣ 📂data
 ┃ ┣ 📂sections
 ┃ ┃ ┣ 📂SectionFull
 ┃ ┃ ┃ ┗ 📜data.ts
 ┃ ┃ ┣ 📂SectionVar03
 ┃ ┃ ┃ ┗ 📜data.ts
 ┃ ┃ ┣ 📂vizitka
 ┃ ┃ ┃ ┗ 📜visitkaData.ts
 ┃ ┃ ┗ 📜StaVar02.ts
 ┃ ┣ 📜README.md
 ┃ ┣ 📜navigation.ts
 ┃ ┗ 📜site-config.ts
 ┣ 📂hooks
 ┣ 📂layouts
 ┣ 📂pages
 ┣ 📂styles
 ┣ 📂utils
 ┣ 📜consts.ts
 ┗ 📜content.config.ts
```

помоги написать грамотную документацию по использованию составного компонента Вводные данные

- Где лежат молекулы: `src/components/ui`
- где лежат микрокомпоненты (это компонент который включает в себя несколько компонентов-молейкул, но не является секцией. Обычно это карточки ): `src/components/ui`
- Где лежат более сложные компоненты-секции (могут содержать заголовок, группы карточек, кнопки, ссылки) - `src/components/sections`
- Где лежат `footer` `header` `head` (сложные составные компоненты, такие же как секции, но используемые в Laiout-шаблонах): `src/components/partials`

**Новая логика работы:**

1. Каждый компонент имеет дефолтный контент, который либо просто показывает стилистику компонента, либо содержит подсказки-комментарии (к примеру. у заголовка может быть дефолтное описательное значение - "Заголовок карточки" или "Заголовок секции" или если это описание - "Тут нужно вставить описание не более 200символов и не менее 180 символов")

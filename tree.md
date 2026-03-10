```js
📦src
 ┣ 📂assets
 ┃ ┣ 📂temp // тут временные изображения, для работы с шаблонами/компонентами
 ┃ ┃ ┣ 📂avatars
 ┃ ┃ ┃ ┣ 📜av-01.png
 ┃ ┃ ┃ ┣ 📜av-02.png
 ┃ ┃ ┃ ┣ 📜av-03.png
 ┃ ┃ ┃ ┣ 📜av-04.png
 ┃ ┃ ┃ ┗ 📜av-05.png
 ┃ ┃ ┣ 📂images
 ┃ ┃ ┃ ┣ 📜360-01.jpg
 ┃ ┃ ┃ ┣ 📜360-02.jpg
 ┃ ┃ ┃ ┣ 📜360х168-01.jpg
 ┃ ┃ ┃ ┣ 📜360х168-02.jpg
 ┃ ┃ ┃ ┗ 📜rutube.jpg
 ┃ ┃ ┗ 📂logo
 ┣ 📂components // Тут все компоненты
 ┃ ┣ 📂partials // основные, те что подключаются в layout
 ┃ ┃ ┣ 📜Footer.astro
 ┃ ┃ ┣ 📜Head.astro
 ┃ ┃ ┗ 📜Header.astro
 ┃ ┣ 📂sections // Непосредственно секции, которые являются реальным контентом на сайте (собраны из компонентов, шаблонов)
 ┃ ┃ ┣ 📂advantages
 ┃ ┃ ┃ ┗ 📜Advantages.astro // Секция страницы именно сюда импортируется data.ts с контентом
 ┃ ┃ ┣ 📂cleaning-expertise
 ┃ ┃ ┃ ┗ 📜Cleaning-expertise.astro
 ┃ ┃ ┣ 📂vizitka
 ┃ ┃ ┃ ┗ 📜Vizitka.astro
 ┃ ┃ ┗ 📜index.ts // Не знаю зачем этот файл, он пустой (создал его но не помню зачем)
 ┃ ┣ 📂templates // Именно  в этой папке находятся шаблоны-компоненты, которые импортирую в реальные секции и подлючаю контент
 ┃ ┃ ┣ 📂sv05
 ┃ ┃ ┃ ┣ 📜Sv05.astro
 ┃ ┃ ┃ ┣ 📜docs_sv05.md // Документация по работе определенного шаблона
 ┃ ┃ ┃ ┗ 📜sv05-temp.ts // тут лежит пример использования шаблона, точнее то что нужно вписать в data (просто можно скопировать и должен работать)
 ┃ ┃ ┣ 📂sv06
 ┃ ┃ ┃ ┗ 📜Sv06.astro
 ┃ ┃ ┗ 📂sv08
 ┃ ┃ ┃ ┗ 📜Sv08.astro
 ┃ ┣ 📂ui // Тут думаю тебе понятно это молекулы и атомы
 ┃ ┃ ┣ 📂FeatureList
 ┃ ┃ ┃ ┣ 📜FeatureList.astro
 ┃ ┃ ┃ ┗ 📜FeatureList.astro.md
 ┃ ┃ ┣ 📂card
 ┃ ┃ ┃ ┣ 📜CardVar02.astro
 ┃ ┃ ┃ ┣ 📜CardVar03.astro
 ┃ ┃ ┃ ┣ 📜CardVar04.astro
 ┃ ┃ ┃ ┗ 📜Cv05.astro
 ┃ ┃ ┣ 📂title
 ┃ ┃ ┃ ┣ 📜SectionTitleVar01.astro
 ┃ ┃ ┃ ┗ 📜SectionTitleVar02.astro
 ┃ ┃ ┣ 📜Images.astro // утилита по работе с изображениями, но сейчас использую из коробки <Images/>
 ┃ ┃ ┣ 📜Link.astro //утилита для подмены корректной ссылки (для правильного деплоя на GitHubPages)
 ┃ ┃ ┣ 📜Logo.astro
 ┃ ┃ ┣ 📜MenuToggle.astro
 ┃ ┃ ┣ 📜SocialContact.astro
 ┃ ┃ ┗ 📜ThemeToggle.astro
 ┃ ┗ 📜README.md // методичка по работе с компонентами (думаю нужно переписать некоторые моменты в будущем)
 ┣ 📂content
 ┃ ┣ 📂blog
 ┃ ┃ ┣ 📜first-post.md
 ┃ ┃ ┣ 📜markdown-style-guide.md
 ┃ ┃ ┣ 📜programming-post.md
 ┃ ┃ ┣ 📜second-post.md
 ┃ ┃ ┗ 📜third-post.md
 ┃ ┗ 📂test// пустая папка
 ┣ 📂data // Здесь хранится весть контент реального сайта
 ┃ ┃ ┣ 📂advantages
 ┃ ┃ ┃ ┗ 📜advantagesData.ts
 ┃ ┃ ┣ 📂cleaning-expertise
 ┃ ┃ ┃ ┗ 📜cleaning-expertiseData.ts
 ┃ ┃ ┣ 📂vizitka
 ┃ ┃ ┃ ┗ 📜visitkaData.ts
 ┃ ┃ ┗ 📜Новые секции...
 ┃ ┣ 📜README.md // про весь проект,
 ┃ ┣ 📜navigation.ts
 ┃ ┗ 📜site-config.ts
 ┣ 📂hooks
 ┃ ┗ 📜index.ts
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
 ┣ 📂utils
 ┃ ┣ 📜index.ts
 ┃ ┗ 📜validate-data.ts
 ┣ 📜consts.ts
 ┗ 📜content.config.ts

```

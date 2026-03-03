```astro
📦src
 ┣ 📂assets
 ┃ ┣ 📂programming
 ┃ ┃ ┗ 📜06.jpg
 ┃ ┣ 📂sections
 ┃ ┃ ┣ 📂sectionsVar03
 ┃ ┃ ┃ ┣ 📜01.jpg
 ┃ ┃ ┃ ┣ 📜02.jpg
 ┃ ┃ ┃ ┗ 📜03.jpg
 ┃ ┃ ┣ 📂test
 ┃ ┃ ┗ 📜test-01.jpg
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
 ┃ ┣ 📂sections
 ┃ ┃ ┣ 📂SectionVar03
 ┃ ┃ ┃ ┗ 📜SectionVar03.astro
 ┃ ┃ ┣ 📂SectionVar04
 ┃ ┃ ┣ 📜SectionVar02.astro
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂ui
 ┃ ┃ ┣ 📂FeatureList
 ┃ ┃ ┃ ┣ 📜FeatureList.astro
 ┃ ┃ ┃ ┗ 📜FeatureList.astro.md
 ┃ ┃ ┣ 📂card
 ┃ ┃ ┃ ┗ 📜CardVar02.astro
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
 ┃ ┣ 📂blog
 ┃ ┃ ┣ 📜first-post.md
 ┃ ┃ ┣ 📜markdown-style-guide.md
 ┃ ┃ ┣ 📜programming-post.md
 ┃ ┃ ┣ 📜second-post.md
 ┃ ┃ ┗ 📜third-post.md
 ┃ ┗ 📂test
 ┣ 📂data
 ┃ ┣ 📂sections
 ┃ ┃ ┗ 📂SectionVar03
 ┃ ┃ ┃ ┗ 📜data.ts
 ┃ ┣ 📂test
 ┃ ┣ 📜README.md
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

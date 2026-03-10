// src/data/sections/cleaning-expertise/cleaning-expertiseData.ts
import type { TitleProps } from "@components/ui/title/SectionTitleVar01.astro";
import type { PropsSv08 } from "@components/templates/sv08/Sv08.astro";
import images01 from "@assets/blog-placeholder-5.jpg";
import images02 from "@assets/blog-placeholder-2.jpg";
import images03 from "@assets/blog-placeholder-3.jpg";
import images04 from "@assets/blog-placeholder-4.jpg";

export const sv08Data: PropsSv08 = {
    descr: "Мы используем профессиональное оборудование и гипоаллергенную химию для бережного, но эффективного удаления любых загрязнений. Мы гарантируем индивидуальный подход к каждому объекту и безупречный результат, превращая уборку в быстрый и комфортный процесс.",
    sectionTitle: "Профессиональная уборка!!!",
    SectionSubtitle:
        "Лучшие клининг решения обеспечивают безупречную чистоту и свежесть, учитывая все потребности клиентов",
    img01: {
        src: images01,
        alt: "описание изображения",
    },
};

// src/data/sections/team-tabs/teamTabsData.ts
import type { TabItem } from "@components/ui/tabs/tv01/Tv01.astro";
// import type { TitleProps } from "@components/ui/title/SectionTitleVar01.astro";

// ✅ Импорт изображений (Astro оптимизирует только импортированные!)
import img01 from "@assets/sections/sectionsVar03/01.jpg";
import img02 from "@assets/sections/sectionsVar03/02.jpg";
import img03 from "@assets/sections/sectionsVar03/03.jpg";
import img04 from "@assets/sections/sectionsVar03/01.jpg"; // можно заменить на реальное
import img05 from "@assets/sections/sectionsVar03/02.jpg"; // можно заменить на реальное

interface TeamTabsDataProps {
    title: string; // Для заголовка
    subtitle?: string; // Для заголовка
    id?: string; // Для секции (якорь)
    class?: string; // Для секции (стили)
    tabs?: any[]; // Для табов
}

// 🔧 Дефолтные значения для карточек (чтобы не дублировать код)
const cardDefaults = {
    btntext: "Заказать услугу",
    width: 552,
    height: 360,
} as const;

export const teamTabsData: TeamTabsDataProps = {
    title: "Ваша клининговая команда!",
    subtitle:
        "Наша клининговая команда — это группа профессионалов с большим опытом, обеспечивающих услуги высшего качества",
    id: "team-tabs",
    class: "",
    tabs: [
        {
            id: "clining-professional",
            title: "Профессионалы",
            cardData: {
                ...cardDefaults,
                btntext: "Заказать звонок",
                title: "Гарантия качества",
                descr: "Наш менеджер по качеству проверяет работу после каждой уборки, и если обнаружены недостатки, мы устраним их без дополнительной платы.",
                src: img01,
                alt: "Гарантия качественной уборки",
            },
        },
        {
            id: "clining-price",
            title: "Цены и ценность",
            cardData: {
                ...cardDefaults,
                btntext: "Рассчитать стоимость",
                title: "Цены и ценность",
                descr: "Наши цены вполне средние на рынке, но мы стремимся предложить гораздо больше, обеспечивая большую ценность за ваши вложения. Убедитесь сами!",
                src: img02,
                alt: "Низкие цены за качественную уборку",
            },
        },
        {
            id: "clining-support",
            title: "Поддержка",
            cardData: {
                ...cardDefaults,
                btntext: "Связаться с менеджером",
                title: "Поддержка",
                descr: "Вам будет назначен персональный менеджер, который будет знаком с деталями вашего помещения и обеспечит высочайшее качество, контролируя выполнение услуги в соответствии с вашими потребностями.",
                src: img03,
                alt: "Поддержка в любой ситуации",
            },
        },
        {
            id: "clining-confidentiality",
            title: "Конфиденциальность",
            cardData: {
                ...cardDefaults,
                btntext: "Хочу конфедициально",
                title: "Конфиденциальность",
                descr: "Наши клининговые специалисты подписывают соглашение о конфиденциальности (NDA), гарантируя, что они будут уважать приватность ваших помещений и не раскрывать информацию о них.",
                src: img04,
                alt: "Все конфиденциально",
            },
        },
    ],
};
// тварь, сука, соска,блядина, давалка

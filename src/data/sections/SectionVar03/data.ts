// src/data/sections/SectionVar03/data.ts
import { validateUniqueIds } from "@utils/index.ts";

import cardImage01 from "@assets/sections/sectionsVar03/01.jpg";
import cardImage02 from "@assets/sections/sectionsVar03/02.jpg";
import cardImage03 from "@assets/sections/sectionsVar03/03.jpg";

import type { Props as CardData } from "@components/ui/card/CardVar02.astro";

import type { Props as SectionTitle } from "@components/ui/title/SectionTitleVar01.astro";

export const heroTitle: SectionTitle = {
    id: "cleaning-expert",
    title: "Наша экспертиза в уборке",
    subtitle:
        "Профессиональные уборочные услуги для квартир, домов, офисов и других помещений.",
    tag: "h2",
};

const cardDefaults = {
    imageWidth: 360,
    imageHeight: 480,
    image: cardImage02,
} as const;

export const cardsData: CardData[] = [
    {
        ...cardDefaults,
        id: "houseCleaning",
        title: "Уборка дома",
        subTitle: "Все виды уборки",
        href: "#",
        imageAlt: "Описание изображения",
    },
    {
        ...cardDefaults,
        id: "officeCleaning",
        title: "Уборка офисов",
        subTitle: "Регулярные",
        href: "#",
        imageAlt: "Описание изображения",
    },
    {
        ...cardDefaults,
        id: "hotelCleaning",
        title: "Уборка отелей",
        subTitle: "Услуги горничных",
        href: "#",
        image: cardImage01,
        imageAlt: "Описание изображения",
    },
];

// ✅ Валидация уникальности ID (сработает при сборке)
validateUniqueIds(cardsData);

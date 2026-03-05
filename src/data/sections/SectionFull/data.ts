import { validateUniqueIds } from "@utils/index.ts";

import type { Props as CardData } from "@components/ui/card/CardVar03.astro";
import type { Props as SectionTitle } from "@components/ui/title/SectionTitleVar01.astro";

import img01 from "@assets/test-1920.jpg";
import img02 from "@assets/test-552-01.jpg";
import img03 from "@assets/test-552-02.jpg";

export const heroTitle: SectionTitle = {
    id: "cleaning kits",
    title: "Наши клининговые комплекты",
    subtitle:
        "Наша компания предлагает профессиональные клининговые комплекты для  домов и бизнеса",
    tag: "h2",
};

export const SectionImages = {
    top: {
        src: img01,
        alt: "Описание первого изображения",
        width: 1128,
        height: 632,
        widths: [320, 440, 744, 1128, 2256],
        sizes: "(max-width: 320px) 320px, (max-width: 440px) 440px, (max-width: 768px) 744px, (max-width: 1128px) 1128px, 1128px",
        format: "avif",
    },
    left: {
        src: img02,
        alt: "Описание второго изображения",
        width: 552,
        height: 552,
        widths: [320, 440, 744, 1128, 2256],
        sizes: "(max-width: 320px) 320px, (max-width: 440px) 440px, (max-width: 768px) 381px, (max-width: 1128px) 552px,",
        format: "avif",
    },
    right: {
        src: img03,
        alt: "Описание третьего изображения",
        width: 552,
        height: 552,
        widths: [320, 440, 744, 1128, 2256],
        sizes: "(max-width: 320px) 320px, (max-width: 440px) 440px, (max-width: 768px) 381px, (max-width: 1128px) 552px,",
        format: "avif",
    },
};

export const cardsData: CardData[] = [
    {
        id: "cleaning-01",
        price: "от 150 руб/м2",
        action: "",
        title: "Регулярная уборка",
        description:
            "Регулярная уборка по договору не реже одного раза в месяц. Первую уборку рекомендуется начать с пакета Углубленная или Генеральная.",
    },
    {
        id: "cleaning-02",
        price: "от 250 руб/м2",
        action: "Акция",
        title: "Углубленная уборка",
        description:
            "Углубленная уборка помещений с детальной проработкой и дезинфекицей  кухонных помещений и санузлов. В пакет бонусом входит: обработка санузла про программе антикальция и антиплесени.",
    },
    {
        id: "cleaning-03",
        price: "от 350 руб/м2",
        action: "",
        title: "Генеральная уборка",
        description:
            "Тщательная сезонная уборка помещений, которая включает уборку  труднодоступных мест, стен и плиточных швов в санузле, штанг и  осветительных приборов, углубленную уборку и дезинфекицию кухонной зоны и санузлов. В пакет бонусом входит",
    },
    {
        id: "cleaning-04",
        price: "от 400 руб/м2",
        action: "Акция",
        title: "Мытьё окон",
        description:
            "При заказе мытья окон, получите скидку на генеральную уборку кухни, вместо 150, всего лишь 130 руб/кв.м.",
    },
    {
        id: "cleaning-05",
        price: "от 100 руб",
        action: "",
        title: "Химчистка мебели",
        description:
            "Профессиональная чистка мебели, ковров и текстиля. Удаляем пятна, пыль и аллергены, восстанавливая внешний вид и свежесть ткани. Обеспечиваем  гигиеническую чистоту.",
    },
    {
        id: "cleaning-06",
        price: "от 100 руб/м2",
        action: "Акция",
        title: "Индивидуальная уборка",
        description:
            "Уборка, адаптированная под ваши конкретные потребности, выберите важные  для вас зоны и задачи, мы обеспечим персонализированную и тщательную  уборку согласно вашему выбору.",
    },
    {
        id: "cleaning-07",
        price: "от 180 руб/м2",
        action: "",
        title: "Уборка кухни",
        description:
            "Доскональная и тщательная уборка Вашей кухни. Проработка детателей  интерьера и глубокая очистка кухонной техники от жира, нагара и  загрязнений различных сложностей.",
    },
    {
        id: "cleaning-08",
        price: "от 700 руб/м2",
        action: "",
        title: "Уборка после ремонта",
        description:
            "Специализированная уборка помещений после строительных работ или ремонта.",
    },
    {
        id: "cleaning-09",
        price: "от 1200 руб/м2",
        action: "",
        title: "Уборка санузла",
        description:
            "Уборка санузла включает очищение и дезинфекцию сантехники, удаление  налёта и загрязнений с раковины, унитаза, ванной или душевой кабины,  мытьё зеркал, плитки и полов, а также обработку труднодоступных мест.",
    },
];

validateUniqueIds(cardsData);

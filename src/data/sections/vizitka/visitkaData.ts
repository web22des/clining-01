import type { Props as cardData } from "@components/ui/card/CardVar04.astro";

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

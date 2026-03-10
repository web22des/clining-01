// Sv05
// data.ts для секции-компонента (готовый шаблон для прода)
//
// Создаем новый файл для секции к примеру секция test.astro
// src/components/sections/test/test.astro
// 1. Создаем новый файл данных в src/data/sections/test/testData.ts
// 2. Cкопируйте данный файл в src/data/sections/test/testData.ts
// 3. Импортируйте вновь заполненный файл в секцию. где используется данный компонент
// Пример:
// import Sv05 from "@components/templates/sv05/Sv05.astro";

import type { Props as cardData } from "@components/ui/card/CardVar04.astro";

import realAva from "@assets/temp/avatars/av-02.png";

import type { Props as descrData } from "@components/templates/sv05/Sv05.astro";
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

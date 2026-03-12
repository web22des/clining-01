// src/utils/tv01.ts

/**
 * Инициализация универсальных табов
 * Ищет все элементы [data-tabs] и активирует логику переключения
 */
export function initTabs(): void {
    const tabsBlocks = document.querySelectorAll<HTMLDivElement>("[data-tabs]");

    if (tabsBlocks.length === 0) return;

    tabsBlocks.forEach((tabsBlock) => {
        const titlesContainer =
            tabsBlock.querySelector<HTMLDivElement>("[data-tabs-titles]");
        const bodiesContainer =
            tabsBlock.querySelector<HTMLDivElement>("[data-tabs-body]");

        // Защита от ошибок верстки
        if (!titlesContainer || !bodiesContainer) return;

        const titles =
            titlesContainer.querySelectorAll<HTMLButtonElement>("button");
        const bodies =
            bodiesContainer.querySelectorAll<HTMLDivElement>(".tabs__body");

        // Проверка на совпадение количества кнопок и контента
        if (titles.length !== bodies.length) {
            console.warn(
                "⚠️ Tabs Error: Количество кнопок и контента не совпадает!",
                tabsBlock,
            );
            return;
        }

        titles.forEach((button, index) => {
            const body = bodies[index];

            // ✅ Добавляем A11y атрибуты динамически
            const bodyId = `tab-body-${Math.random().toString(36).substr(2, 9)}`;
            body.id = bodyId;
            button.setAttribute("aria-controls", bodyId);
            button.setAttribute("role", "tab");
            body.setAttribute("role", "tabpanel");

            // Скрываем неактивные тела при старте
            if (!button.classList.contains("_tab-active")) {
                body.hidden = true;
                button.setAttribute("aria-selected", "false");
                button.setAttribute("tabindex", "-1");
            } else {
                button.setAttribute("aria-selected", "true");
                button.setAttribute("tabindex", "0");
            }

            // Обработчик клика
            button.addEventListener("click", () => {
                if (button.classList.contains("_tab-active")) return;

                // 1. Снимаем активность со всех кнопок и тел в этом блоке
                titles.forEach((t) => {
                    t.classList.remove("_tab-active");
                    t.setAttribute("aria-selected", "false");
                    t.setAttribute("tabindex", "-1");
                });
                bodies.forEach((b) => {
                    b.hidden = true;
                });

                // 2. Активируем текущие
                button.classList.add("_tab-active");
                button.setAttribute("aria-selected", "true");
                button.setAttribute("tabindex", "0");
                body.hidden = false;
            });
        });
    });
}

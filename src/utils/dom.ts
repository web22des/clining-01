// src/utils/dom.ts
// 📌 Базовые утилиты для работы с DOM (переиспользуемые)

/**
 * Найти элемент по data-js атрибуту (Один элемент)
 * @param selector - значение data-js (kebab-case)
 * @param parent - контекст поиска (по умолчанию document)
 */
export function findElement(
    selector: string,
    parent: Document | HTMLElement = document,
): Element | null {
    return parent.querySelector(`[data-js="${selector}"]`);
}

/**
 * Найти все элементы по data-js атрибуту (Группа)
 * @param selector - значение data-js
 * @param parent - контекст поиска
 */
export function findElements(
    selector: string,
    parent: Document | HTMLElement = document,
): NodeListOf<Element> {
    return parent.querySelectorAll(`[data-js="${selector}"]`);
}

/**
 * Безопасно навесить событие (не упадёт, если элемент не найден)
 * @param selector - значение data-js
 * @param event - тип события ('click', 'change', etc.)
 * @param handler - функция-обработчик
 */
export function on(
    selector: string,
    event: string,
    handler: (this: Element, e: Event) => void,
    options?: boolean | AddEventListenerOptions,
): void {
    const el = findElement(selector);
    if (el) {
        el.addEventListener(event, handler, options);
    } else {
        // ⚠️ Предупреждение в консоль для разработчика, но не ломает сайт
        console.warn(`⚠️ Element [data-js="${selector}"] not found`);
    }
}

/**
 * Отследить появление элемента в области видимости (для анимаций)
 * ✅ Обновлено: Работает с одиночными элементами и группами
 * @param selector - значение data-js
 * @param callback - функция, которая вызовётся при появлении (передает сам элемент)
 * @param threshold - порог видимости (0.1 = 10% элемента)
 */
export function onIntersect(
    selector: string,
    callback: (el: Element) => void,
    threshold: number = 0.1,
): void {
    // ✅ Используем findElements для поддержки групп (даже если элемент один)
    const elements = findElements(selector);

    // ✅ Проверка безопасности: если элементов нет, выходим
    if (elements.length === 0) {
        console.warn(`⚠️ No elements found for [data-js="${selector}"]`);
        return;
    }

    // ✅ Создаем ОДИН наблюдатель для всех элементов (оптимизация производительности)
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // ✅ Передаем конкретный элемент (entry.target) в callback
                    callback(entry.target);
                    // ✅ Перестаем следить за этим элементом после анимации (чтобы не повторялась)
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold },
    );

    // ✅ Подключаем наблюдатель ко всем найденным элементам
    elements.forEach((el) => observer.observe(el));
}

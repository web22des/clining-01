//
// src/utils/dom.ts
// 📌 Базовые утилиты для работы с DOM (переиспользуемые)
/**
 * Как использовать -
 * Переключатель темы - on('theme-toggle', 'click', () => { ... })
 * Анимация заголовка - onIntersect('hero-title', (el) => el.classList.add('is-visible'))
 * Поиск элемента const btn = findElement<HTMLButtonElement>('btn')
 */

/**
 * Найти элемент по data-js атрибуту
 * @param selector - значение data-js (kebab-case)
 * @param parent - контекст поиска (по умолчанию document)
 */
export function findElement<T extends HTMLElement = HTMLElement>(
    selector: string,
    parent: Document | HTMLElement = document,
): T | null {
    return parent.querySelector(`[data-js="${selector}"]`) as T | null;
}

/**
 * Найти все элементы по data-js атрибуту
 */
export function findElements<T extends HTMLElement = HTMLElement>(
    selector: string,
    parent: Document | HTMLElement = document,
): NodeListOf<T> {
    return parent.querySelectorAll(`[data-js="${selector}"]`) as NodeListOf<T>;
}

/**
 * Безопасно навесить событие (не упадёт, если элемент не найден)
 * @param selector - значение data-js
 * @param event - тип события ('click', 'change', etc.)
 * @param handler - функция-обработчик
 */
export function on<T extends HTMLElement>(
    selector: string,
    event: string,
    handler: (this: T, e: Event) => void,
    options?: boolean | AddEventListenerOptions,
): void {
    const el = findElement<T>(selector);
    if (el) {
        el.addEventListener(event, handler, options);
    } else {
        console.warn(`⚠️ Element [data-js="${selector}"] not found`);
    }
}

/**
 * Отследить появление элемента в области видимости (для анимаций)
 * @param selector - значение data-js
 * @param callback - функция, которая вызовётся при появлении
 * @param threshold - порог видимости (0.1 = 10% элемента)
 */
export function onIntersect(
    selector: string,
    callback: (el: Element) => void,
    threshold: number = 0.1,
): void {
    const el = findElement(selector);
    if (!el) return;

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                callback(el);
                observer.unobserve(el); // отключаем после срабатывания
            }
        },
        { threshold },
    );

    observer.observe(el);
}

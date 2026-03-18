# 🧩 Утилиты DOM — `src/utils/dom.ts`

**Назначение:** Переиспользуемые функции для безопасной работы с DOM-элементами.  
**Для кого:** Разработчики, работающие с интерактивом (анимации, события, скролл).  
**Где хранить:** `src/utils/dom.ts` + экспорт в `src/utils/index.ts`.

---

## ⚡ Быстрый старт (4 функции)

| Функция | Что делает | Аналог без утилиты |
| --- | --- | --- |
| `findElement('btn')` | Ищет `[data-js="btn"]`, возвращает типизированный элемент | `document.querySelector('[data-js="btn"]') as HTMLElement \| null` |
| `findElements('item')` | Ищет все `[data-js="item"]`, возвращает NodeList | `document.querySelectorAll('[data-js="item"]')` |
| `on('btn', 'click', fn)` | Вешает событие, **если элемент найден** (не упадёт с ошибкой) | `el?.addEventListener('click', fn)` |
| `onIntersect('fade', cb)` | Вызывает `cb`, когда элемент появляется в области видимости | `new IntersectionObserver(...)` |

> 💡 **Главная фишка:** `on()` и `onIntersect()` не упадут с ошибкой, если элемент не найден — просто выведут предупреждение в консоль.

---

## 📦 Как использовать в компонентах

### Шаг 1: Добавь `data-js` в шаблон

```astro
<!-- src/components/ui/animated-title/AnimatedTitle.astro -->
<h2 data-js="fade-title" class="title">Заголовок</h2>
<button data-js="theme-toggle" aria-label="Переключить тему">☀️🌙</button>
```

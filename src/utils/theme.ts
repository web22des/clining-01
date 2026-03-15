// src/utils/theme.ts
// Скрипт для выбора предустановленной цветовой темы сайта (работает на Material Theme3)
//
// src/utils/theme.ts
/**
 * Универсальная утилита для управления цветовыми темами
 * Работает с 1 или N темами без изменений в коде
 */

// ✅ Конфигурация (можно расширять до 5+ тем)
export const AVAILABLE_THEMES = [
    "v_01",
    "v_02",
    "v_03",
    "v_04",
    "v_05",
] as const;
export const DEFAULT_THEME = {
    version: "v_01" as const,
    mode: "light" as const,
};

// ✅ Типы
export type ThemeMode = "light" | "dark";
export type ThemeVersion = "v_01" | "v_02" | "v_03" | "v_04" | "v_05"; // ✅ Добавил

export interface ThemeState {
    mode: ThemeMode;
    version: ThemeVersion;
}

/**
 * Получить тему из localStorage или вернуть дефолт
 */
export function getTheme(): ThemeState {
    const saved = localStorage.getItem("theme");

    // Если нет сохранённой темы — возвращаем дефолт
    if (!saved) {
        return DEFAULT_THEME;
    }

    try {
        const parsed = JSON.parse(saved) as ThemeState;

        // ✅ Защита: если версия не существует — сброс на дефолт
        if (!AVAILABLE_THEMES.includes(parsed.version)) {
            return DEFAULT_THEME;
        }

        // ✅ Защита: если режим некорректный — сброс на light
        if (!["light", "dark"].includes(parsed.mode)) {
            return { ...parsed, mode: "light" };
        }

        return parsed;
    } catch {
        // Если JSON битый — возвращаем дефолт
        return DEFAULT_THEME;
    }
}

/**
 * Сохранить тему в localStorage
 */
export function setTheme(theme: ThemeState): void {
    localStorage.setItem("theme", JSON.stringify(theme));
}

/**
 * Применить тему к документу (установить атрибуты на <html>)
 */
export function applyTheme(theme: ThemeState): void {
    document.documentElement.setAttribute("data-theme-version", theme.version);
    document.documentElement.setAttribute("data-theme", theme.mode);
}

/**
 * Инициализировать тему при загрузке страницы
 * Вызывать в <head> до рендера контента
 */
export function initTheme(): ThemeState {
    const theme = getTheme();
    applyTheme(theme);
    return theme;
}

/**
 * Переключить режим (light/dark) — для ThemeToggle.astro
 */
export function toggleMode(currentMode: ThemeMode): ThemeMode {
    const newMode = currentMode === "light" ? "dark" : "light";
    const theme = { ...getTheme(), mode: newMode };
    setTheme(theme);
    applyTheme(theme);
    return newMode;
}

/**
 * Установить версию темы — для ThemeVersionSelector.astro
 */
export function setVersion(version: ThemeVersion): void {
    const theme = { ...getTheme(), version };
    setTheme(theme);
    applyTheme(theme);
}

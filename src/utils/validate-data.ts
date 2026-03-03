// src/utils/validate-data.ts

/**
 * Проверка уникальности ID в массиве данных
 * @param data - Массив объектов с полем id
 * @param fieldName - Название поля для проверки (по умолчанию 'id')
 */
export function validateUniqueIds<T extends Record<string, any>>(
    data: T[],
    fieldName: string = "id",
): void {
    const values = data.map((item) => item[fieldName]);
    const uniqueValues = new Set(values);

    if (values.length !== uniqueValues.size) {
        const duplicates = values.filter(
            (value, index) => values.indexOf(value) !== index,
        );
        throw new Error(
            `❌ Обнаружены дубликаты "${fieldName}": ${[...new Set(duplicates)].join(", ")}`,
        );
    }
}

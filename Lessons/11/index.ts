type GroupedObject<T> = { [key: string]: T[] };

function groupBy<T>(array: T[], key: keyof T): GroupedObject<T> {
    return array.reduce((grouped, item) => {
        const keyValue = String(item[key]);
        if (!grouped[keyValue]) {
            grouped[keyValue] = [];
        }
        grouped[keyValue].push(item);
        return grouped;
    }, {} as GroupedObject<T>);
}

// Пример использования

const date = [
    { group: 1, name: 'a' },
    { group: 1, name: 'b' },
    { group: 2, name: 'c' },
];

const groupedData = groupBy(date, 'group');
console.log(groupedData);

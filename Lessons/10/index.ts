type ObjectWithId = { id: number };

function sortByDescendingId<T extends ObjectWithId>(array: T[]): T[] {
    return array.sort((a, b) => b.id - a.id);
}

const data = [
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' },
    { id: 3, name: 'Надя' },
];

const sortedData = sortByDescendingId(data);
console.log(sortedData);

export const compareFunc = (a, b) => {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name === b.name) {
        return 0;
    }
    return 1;
};
export const capitalize = (word) => {
    if (!word || word.length === 0) {
        return undefined;
    }
    else {
        const splitWord = word.split('');
        const restWords = [...splitWord];
        restWords.shift();
        const firstChar = splitWord[0].toUpperCase();
        return [firstChar, ...restWords].join('');
    }
};

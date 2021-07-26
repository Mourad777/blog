export const processCategories = (categories) => {
    const processedCategories = categories.map(cat => {
        return { key: cat.name, value: cat.name, text: cat.name, _id: cat.id }
    });
    return processedCategories.reverse();
}

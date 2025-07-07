const todoLocalStorage = "todoItems"

export const getLocalStorageData = () => {
    const rawLocalData = localStorage.getItem(todoLocalStorage);

    if (!rawLocalData) return [];

    return JSON.parse(rawLocalData);
}

export const setLocalStorageData = (task) => {
    return localStorage.setItem(todoLocalStorage, JSON.stringify(task))
}
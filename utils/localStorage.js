export function saveToLocalStorage(varNam, varValue) {
    localStorage.setItem(varNam, varValue);
}

export function removeFromLocalStorage(varName) {
    localStorage.removeItem(varName);
}

export function getFromLocalStorage(varName) {
    localStorage.getItem(varName);
}
// load Local JSON Async
export const loadLocalJSONA = async (path) => {
    const response = await fetch(path);

    if (!response.ok)
        throw new Error(`Failed to load locale messages for ${locale}`);

    return response.json();
}

// empties a JSON object
export const emptyObject = (obj) => Object.fromEntries(
        Object.entries(obj).map(([k, v]) => 
        [k, typeof v === 'object' && v !== null ? emptyObject(v) : '']));

// load default font
export const loadDefaultFont = () => {
    document.documentElement.style.setProperty('--def-font',
        localStorage.getItem('lang') === 'jp' ? 'Zen Maru Gothic' : 'Lato');
}

// get a random number (range)
export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
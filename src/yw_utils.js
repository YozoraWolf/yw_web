import anime from 'animejs';

// load default font
export const loadDefaultFont = () => {
    document.documentElement.style.setProperty('--def-font',
        localStorage.getItem('lang') === 'jp' ? 'Zen Maru Gothic' : 'Lato');
}

// get a random number (range)
export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// promisify animejs
export const promiseAnime = (animationConfig) => {
    return new Promise(resolve => {
        // extend the animation config with a callback to resolve the promise
        const configResolve= {
            ...animationConfig,
            complete: () => resolve()
        };

        // start the animation
        anime(configResolve);
    });
};
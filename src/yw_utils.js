class yw_utils {

    // load Local JSON Async
    static async loadLocalJSONA(path) {
        const response = await fetch(path);

        if (!response.ok) {
            throw new Error(`Failed to load locale messages for ${locale}`);
        }

        return response.json();
    }

    // empties a JSON object
    static emptyObject = (obj) => {
        return Object.fromEntries(
            Object.entries(obj).map(([k, v]) => [k, typeof v === 'object' && v !== null ? yw_utils.emptyObject(v) : ''])
        );
    }

}

export default yw_utils;
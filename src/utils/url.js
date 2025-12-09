/**
 * Joins a path with the base URL, ensuring correct slash handling.
 * @param {string} path - The path to append to the base URL.
 * @returns {string} The full URL.
 */
export function getAssetPath(path) {
    const base = import.meta.env.BASE_URL.replace(/\/$/, '');
    const cleanPath = path.replace(/^\//, '');
    return `${base}/${cleanPath}`;
}

export const BASE_URL = import.meta.env.BASE_URL.replace(/\/$/, '');

export const url = (path: string) => `${BASE_URL}/${path.replace(/^\//, '')}`;
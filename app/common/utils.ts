import { STRAPI_URL } from './config';


export function getUrl(path?: string | null, fallback = '/placeholder.svg'): string {
  if (!path) return fallback;
  return `${STRAPI_URL}${path}`;
}

// Utility function to get correct image paths for both local and production
export function getImagePath(imageName: string): string {
  const baseUrl = import.meta.env.BASE_URL;
  // Ensure there's a slash between baseUrl and imageName
  return `${baseUrl}${baseUrl.endsWith('/') ? '' : '/'}${imageName}`;
}

// Utility function to get correct page paths for both local and production
export function getPagePath(pageName: string): string {
  const baseUrl = import.meta.env.BASE_URL;
  // Remove trailing slash from baseUrl if exists
  const cleanBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
  // Ensure pageName starts with /
  const cleanPage = pageName.startsWith('/') ? pageName : `/${pageName}`;
  return `${cleanBase}${cleanPage}`;
}

// Image constants
export const IMAGES = {
  LOGO: 'Revive-Logo.png',
  PRODUCT: 'Revive-Product.png',
} as const;

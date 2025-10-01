// Utility function to get correct image paths for both local and production
export function getImagePath(imageName: string): string {
  const baseUrl = import.meta.env.BASE_URL;
  return `${baseUrl}${imageName}`;
}

// Image constants
export const IMAGES = {
  LOGO: 'Revive-Logo.png',
  PRODUCT: 'Revive-Product.png',
} as const;

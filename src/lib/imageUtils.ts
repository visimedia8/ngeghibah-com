/**
 * Helper to produce CDN-optimized, appropriately sized image URLs for external providers
 * (Unsplash, Pexels, etc.) when running in static export mode (unoptimized: true).
 * Prevents mobile users from downloading massive 1200px+ images on 360-400px viewports.
 */

export function getOptimizedImageUrl(
  url: string,
  width: number = 640,
  quality: number = 75
): string {
  if (!url) return '';

  try {
    // Check if Unsplash
    if (url.includes('images.unsplash.com')) {
      const urlObj = new URL(url);
      urlObj.searchParams.set('auto', 'format');
      urlObj.searchParams.set('fit', 'crop');
      urlObj.searchParams.set('w', width.toString());
      urlObj.searchParams.set('q', quality.toString());
      return urlObj.toString();
    }

    // Check if Pexels
    if (url.includes('images.pexels.com')) {
      const urlObj = new URL(url);
      urlObj.searchParams.set('auto', 'compress');
      urlObj.searchParams.set('cs', 'tinysrgb');
      urlObj.searchParams.set('w', width.toString());
      return urlObj.toString();
    }

    return url;
  } catch {
    // If URL parsing fails, fallback to original
    return url;
  }
}

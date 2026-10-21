/**
 * Image Utilities & Resilient Fallback Engine for NgeGhibah.com
 * Prevents broken images across current and future content.
 */

export const DEFAULT_FALLBACK_IMAGES: Record<string, string> = {
  'seleb-lokal': 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
  'hollywood-barat': 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80',
  'kpop-asia': 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
  'creator-tiktok': 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=80',
  'default-article': 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
  'default-avatar': 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80',
  'default-banner': 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80',
};

/**
 * Returns a guaranteed valid 200 OK fallback image URL
 */
export function getFallbackImageUrl(
  category?: string,
  type: 'article' | 'avatar' | 'banner' = 'article'
): string {
  if (type === 'avatar') return DEFAULT_FALLBACK_IMAGES['default-avatar'];
  if (type === 'banner') return DEFAULT_FALLBACK_IMAGES['default-banner'];
  if (category && DEFAULT_FALLBACK_IMAGES[category]) {
    return DEFAULT_FALLBACK_IMAGES[category];
  }
  return DEFAULT_FALLBACK_IMAGES['default-article'];
}

/**
 * Helper to produce CDN-optimized, appropriately sized image URLs for external providers
 * (Unsplash, Pexels, etc.) when running in static export mode (unoptimized: true).
 * Prevents mobile users from downloading massive 1200px+ images on 360-400px viewports.
 */
export function getOptimizedImageUrl(
  url: string,
  width: number = 480,
  quality: number = 70
): string {
  if (!url || typeof url !== 'string' || url.trim() === '') {
    return DEFAULT_FALLBACK_IMAGES['default-article'];
  }

  // Local assets are already pre-optimized
  if (url.startsWith('/')) {
    return url;
  }

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

    // Check if Kompas
    if (url.includes('asset.kompas.com/crops/')) {
      const h = Math.round(width * 0.67);
      return url.replace(/\/\d+x\d+\//, `/${width}x${h}/`);
    }

    // Check if raw Wikimedia Commons
    if (url.includes('upload.wikimedia.org/wikipedia/commons/')) {
      const filename = url.split('/').pop() || '';
      return url.replace(
        'upload.wikimedia.org/wikipedia/commons/',
        'thumb.wikimedia.org/wikipedia/commons/thumb/'
      ) + `/330px-${filename}`;
    }

    return url;
  } catch {
    // If URL parsing fails, fallback to original or default
    return url;
  }
}

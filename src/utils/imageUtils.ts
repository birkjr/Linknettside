import { supabase } from '../supabaseClient';

/**
 * Smart bildehåndtering som prøver lokale bilder først, deretter Supabase
 * Med automatisk preloading for optimal ytelse
 */

// Cache for preloaded images
const imageCache = new Set<string>();

export const getOptimizedImageUrl = (
  fileName: string,
  category: 'board_pics' | 'company_logos' | 'subgroups' | 'events_jobads'
): string => {
  // Prøv lokalt bilde først (for eksisterende bilder)
  const localPath = category === 'events_jobads' ? 'jobads_events' : category;
  return `/images/${localPath}/${fileName}`;
};

export const getSupabaseImageUrl = (
  fileName: string,
  category: 'board_pics' | 'company_logos' | 'subgroups' | 'events_jobads'
): string => {
  const supabaseCategory =
    category === 'company_logos'
      ? 'company_logo'
      : category === 'board_pics'
        ? 'board_pic'
        : category === 'subgroups'
          ? 'subGroup'
          : 'events_jobads';

  return supabase.storage
    .from('bilder')
    .getPublicUrl(`${supabaseCategory}/${fileName}`).data.publicUrl;
};

export const preloadImage = (url: string): Promise<void> => {
  if (imageCache.has(url)) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      imageCache.add(url);
      resolve();
    };
    img.onerror = reject;
    img.src = url;
  });
};

export const handleImageError = (
  e: React.SyntheticEvent<HTMLImageElement>,
  fileName: string,
  category: 'board_pics' | 'company_logos' | 'subgroups' | 'events_jobads'
): void => {
  const target = e.currentTarget;

  // Hvis lokalt bilde feilet, prøv Supabase
  if (target.src.includes('/images/')) {
    const supabaseUrl = getSupabaseImageUrl(fileName, category);
    target.src = supabaseUrl;

    // Preload Supabase-bildet for fremtidige besøk
    preloadImage(supabaseUrl).catch(() => {
      // Hvis Supabase også feiler, vis placeholder
      target.src = '/images/placeholder.png';
    });
  } else {
    // Hvis Supabase også feiler, vis placeholder
    target.src = '/images/placeholder.png';
  }
};

// Preload alle eksisterende bilder når appen starter
export const preloadAllImages = async (
  partners: string[],
  category: 'board_pics' | 'company_logos' | 'subgroups' | 'events_jobads'
) => {
  const preloadPromises = partners.map(partner => {
    const fileName = `${partner}.${category === 'company_logos' ? 'JPG' : 'png'}`;
    const supabaseUrl = getSupabaseImageUrl(fileName, category);
    return preloadImage(supabaseUrl).catch(() => {
      // Ignorer feil ved preloading
    });
  });

  await Promise.allSettled(preloadPromises);
};

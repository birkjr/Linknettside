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
  // Sjekk om det er et Supabase-bilde (inneholder UUID eller er et nytt bilde)
  // Men ikke alle bilder med bindestrek er Supabase-bilder (f.eks. "logo.sintef.png")
  if (fileName.includes('supabase') || 
      (fileName.includes('-') && fileName.length > 25) || 
      fileName.length > 30) {
    console.log(`Detecting Supabase image: ${fileName}`);
    return getSupabaseImageUrl(fileName, category);
  }
  
  // Alltid prøv lokalt bilde først - handleImageError håndterer fallback til Supabase
  const localPath = category === 'events_jobads' ? 'jobads_events' : category;
  const localUrl = `/images/${localPath}/${fileName}`;
  console.log(`Trying local image: ${localUrl}`);
  return localUrl;
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
  console.log(`Image error for ${fileName} in ${category}, current src: ${target.src}`);

  // Hvis lokalt bilde feilet, prøv Supabase
  if (target.src.includes('/images/')) {
    const supabaseUrl = getSupabaseImageUrl(fileName, category);
    console.log(`Trying Supabase URL: ${supabaseUrl}`);
    target.src = supabaseUrl;

    // Preload Supabase-bildet for fremtidige besøk
    preloadImage(supabaseUrl).catch(() => {
      // Hvis Supabase også feiler, vis placeholder
      console.log(`Supabase also failed, using placeholder`);
      target.src = '/images/logo_transparent.png';
    });
  } else {
    // Hvis Supabase også feiler, vis placeholder
    console.log(`Supabase failed, using placeholder`);
    target.src = '/images/logo_transparent.png';
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

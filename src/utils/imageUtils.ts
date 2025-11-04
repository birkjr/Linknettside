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
  // board_pics og subgroups skal ALLTID hentes fra Supabase
  if (category === 'board_pics' || category === 'subgroups') {
    return getSupabaseImageUrl(fileName, category);
  }

  // Sjekk om det er et Supabase-bilde (inneholder UUID eller er et nytt bilde)
  // Men ikke alle bilder med bindestrek er Supabase-bilder (f.eks. "logo.sintef.png")
  if (fileName.includes('supabase') || 
      (fileName.includes('-') && fileName.length > 25) || 
      fileName.length > 30) {
    return getSupabaseImageUrl(fileName, category);
  }
  
  // Alltid prøv lokalt bilde først - handleImageError håndterer fallback til Supabase
  const localPath = category === 'events_jobads' ? 'jobads_events' : category;
  const localUrl = `/images/${localPath}/${fileName}`;
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
          ? 'subGroups' // subgroups ligger i subGroups mappen i Supabase
          : 'events_jobads';

  const publicUrl = supabase.storage
    .from('bilder')
    .getPublicUrl(`${supabaseCategory}/${fileName}`).data.publicUrl;

  // Legg til cache-busting parameter for å unngå gamle bilder fra cache
  // Bruk timestamp for å tvinge browseren til å hente nytt bilde
  // For board_pics og subgroups, bruk en versjon som kan oppdateres i admin
  // For andre bilder, bruk timestamp hver gang
  let cacheBuster: string;
  if (category === 'board_pics' || category === 'subgroups') {
    // Bruk versjon fra localStorage, eller timestamp hvis ikke satt
    const version = localStorage.getItem('boardPicCacheVersion');
    cacheBuster = version || Date.now().toString();
  } else {
    // Bruk timestamp for å tvinge refresh
    cacheBuster = Date.now().toString();
  }
  
  // Legg til cache-busting parameter hvis det ikke allerede finnes
  const separator = publicUrl.includes('?') ? '&' : '?';
  return `${publicUrl}${separator}v=${cacheBuster}`;
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
      target.src = '/images/logo_transparent.png';
    });
  } else {
    // Hvis Supabase også feiler, vis placeholder
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

// Funksjon for å tømme cache og oppdatere versjon
// Kall denne når bilder er oppdatert i admin-panelet
export const clearImageCache = () => {
  imageCache.clear();
  // Oppdater cache-versjon for board_pics og subgroups
  localStorage.setItem('boardPicCacheVersion', Date.now().toString());
};

// Funksjon for å oppdatere cache-versjon manuelt
export const updateImageCacheVersion = () => {
  localStorage.setItem('boardPicCacheVersion', Date.now().toString());
};

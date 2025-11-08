import type { ComponentType } from 'react';

type Loader = () => Promise<{ default: ComponentType<unknown> }>;

const loaderMap: Record<string, Loader> = {
  '/': () => import('../Pages/App.tsx'),
  '/faq': () => import('../Pages/FAQ.tsx'),
  '/for_bedrifter': () => import('../Pages/ForCompanies.tsx'),
  '/jobbtorget': () => import('../Pages/Jobs.tsx'),
  '/om_oss': () => import('../Pages/AboutUs.tsx'),
  '/kontakt_oss': () => import('../Pages/ContactUs.tsx'),
  '/admin/arrangementer': () => import('../Pages/AdminEventsPage.tsx'),
  '/admin/jobbtorget': () => import('../Pages/AdminJobsPage.tsx'),
  '/admin/om_oss': () => import('../Pages/AdminAboutUsPage.tsx'),
  '/admin/kontakt_oss': () => import('../Pages/AdminContactUsPage.tsx'),
  '/admin/nyheter': () => import('../Pages/AdminNewsPage.tsx'),
  '/admin/support': () => import('../Pages/AdminSupportPage.tsx'),
  '/admin/last_opp_bilder': () => import('../Pages/AdminUploadPage.tsx'),
  '/admin/partnere': () => import('../Pages/AdminPartnersPage.tsx'),
  '/admin/styret': () => import('../Pages/AdminBoardPage.tsx'),
};

const prefetchCache = new Map<string, Promise<unknown>>();

export const getRouteLoader = (path: string): Loader | undefined =>
  loaderMap[path];

export const prefetchRoute = (path: string) => {
  const loader = getRouteLoader(path);
  if (!loader) return;
  if (!prefetchCache.has(path)) {
    prefetchCache.set(path, loader());
  }
  return prefetchCache.get(path);
};

export const routePaths = Object.keys(loaderMap);

export type AdminTab = {
  id: string;
  label: string;
  path: string;
};

export const adminTabs: AdminTab[] = [
  {
    id: 'arrangementer',
    label: 'Arrangementer',
    path: '/admin/arrangementer',
  },
  { id: 'jobbtorget', label: 'Jobbtorget', path: '/admin/jobbtorget' },
  { id: 'nyheter', label: 'Nyheter', path: '/admin/nyheter' },
  { id: 'om_oss', label: 'Om oss', path: '/admin/om_oss' },
  { id: 'kontakt_oss', label: 'Kontakt oss', path: '/admin/kontakt_oss' },
  { id: 'support', label: 'Support', path: '/admin/support' },
  {
    id: 'last_opp_bilder',
    label: 'Last opp bilder',
    path: '/admin/last_opp_bilder',
  },
  { id: 'partnere', label: 'Partnere', path: '/admin/partnere' },
  { id: 'styret', label: 'Styret', path: '/admin/styret' },
];

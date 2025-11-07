import { useEffect, useMemo, useState } from 'react';
import { supabase } from '../supabaseClient';
import SubGroupPic from '../components/Tools/SubGroupPic';
import {
  getOptimizedImageUrl,
  getSupabaseImageUrl,
  updateImageCacheVersion,
} from '../utils/imageUtils';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import { useLocation } from 'react-router-dom';

// Preload critical images
const preloadImages = () => {
  const criticalImages = [getOptimizedImageUrl('styret.png', 'subgroups')];

  const prefetchImages = [
    getOptimizedImageUrl('bedrift.png', 'subgroups'),
    getOptimizedImageUrl('marked.png', 'subgroups'),
    getOptimizedImageUrl('logistikk.png', 'subgroups'),
    getOptimizedImageUrl('fa.png', 'subgroups'),
  ];

  // Preload critical above-the-fold images
  criticalImages.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    document.head.appendChild(link);
  });

  // Prefetch other images with lower priority
  prefetchImages.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.as = 'image';
    link.href = url;
    document.head.appendChild(link);
  });
};

type Styret = {
  id: number;
  stilling: string;
  name: string;
  telefon: string;
  mail: string;
  bilde: string | null;
};

export default function OmOss() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  const subgroupKeys = useMemo(
    () =>
      [
        { key: 'styret', title: 'Styret' },
        { key: 'bedrift', title: 'Bedrift' },
        { key: 'marked', title: 'Marked' },
        { key: 'logistikk', title: 'Logistikk' },
        { key: 'fa', title: 'FA' },
      ] as const,
    []
  );

  const [subgroupFileByKey, setSubgroupFileByKey] = useState<
    Record<string, string | null>
  >({});
  const [leder, setLeder] = useState<Styret | null>(null);
  const [nestleder, setNestleder] = useState<Styret | null>(null);
  const [hr, setHr] = useState<Styret | null>(null);
  const [økonomi, setØkonomi] = useState<Styret | null>(null);
  const [marked, setMarked] = useState<Styret | null>(null);
  const [bedrift, setBedrift] = useState<Styret | null>(null);
  const [logistikk, setLogistikk] = useState<Styret | null>(null);
  const [fa, setFa] = useState<Styret | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Preload images immediately when component mounts
    preloadImages();

    const fetchStyret = async () => {
      const { data, error } = await supabase.from('styret').select('*');

      if (error) {
        console.error('Error fetching styret:', error);
      } else {
        // Separate the fetched data based on the specific roles
        setLeder(
          data.find((person: Styret) => person.stilling === 'Leder') || null
        );
        setNestleder(
          data.find((person: Styret) => person.stilling === 'Nestleder') || null
        );
        setHr(
          data.find((person: Styret) => person.stilling === 'HR ansvarlig') ||
            null
        );
        setØkonomi(
          data.find(
            (person: Styret) => person.stilling === 'Økonomiansvarlig'
          ) || null
        );
        setMarked(
          data.find(
            (person: Styret) => person.stilling === 'Teamleder markedsføring'
          ) || null
        );
        setBedrift(
          data.find(
            (person: Styret) => person.stilling === 'Teamleder bedrift'
          ) || null
        );
        setLogistikk(
          data.find(
            (person: Styret) => person.stilling === 'Teamleder logistikk'
          ) || null
        );
        setFa(
          data.find((person: Styret) => person.stilling === 'Teamleder FA') ||
            null
        );
      }
      setLoading(false);
    };

    fetchStyret();

    // Fetch existing subgroup images (any extension)
    const fetchSubgroupFiles = async () => {
      const { data, error } = await supabase.storage
        .from('bilder')
        .list('subGroups');
      if (error) return;
      const byKey: Record<string, string | null> = {};
      subgroupKeys.forEach(({ key }) => {
        const found = (data || []).find(
          f => f.name.startsWith(`${key}.`) || f.name === key
        );
        byKey[key] = found ? found.name : null;
      });
      setSubgroupFileByKey(byKey);
    };
    fetchSubgroupFiles();
  }, [subgroupKeys]);

  const handleDeleteSubgroup = async (key: string) => {
    const fileName = subgroupFileByKey[key];
    if (!fileName) return;
    await supabase.storage.from('bilder').remove([`subGroups/${fileName}`]);
    setSubgroupFileByKey(prev => ({ ...prev, [key]: null }));
    updateImageCacheVersion();
  };

  const handleUploadSubgroup = async (key: string, file: File) => {
    const path = `subGroups/${key}.${file.name.split('.').pop()}`;
    // Remove any existing file for this key
    const existing = subgroupFileByKey[key];
    if (existing)
      await supabase.storage.from('bilder').remove([`subGroups/${existing}`]);
    await supabase.storage
      .from('bilder')
      .upload(path, file, { upsert: true, cacheControl: '3600' });
    setSubgroupFileByKey(prev => ({
      ...prev,
      [key]: path.split('/').pop() || null,
    }));
    updateImageCacheVersion();
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-600">Laster inn...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center" style={{ zIndex: 1 }}>
      {/* Widen the main content */}
      <div className="w-full p-6 lg:px-12">
        {/* Blue Section with Scroll on Mobile */}
        <div
          className="flex flex-col justify-center items-center w-full max-w-6xl mx-auto 
                    p-12 text-white text-center rounded-lg 
                    h-auto overflow-visible" // ✅ Scrolls only on mobile
          style={{ backgroundColor: '#4682B4' }}
        >
          <h3 className="text-3xl py-4">Om EMIL Link</h3>
          <p className="text-lg leading-relaxed">
            Hovedsakelig arrangerer vi bedriftspresentasjoner, hvor bedrifter
            som er aktuelle for studiet besøker oss i Trondheim, holder en kort
            presentasjon, og mingler med oss studentene under servering.
            Bedriftspresentasjonene er et tilbud åpent for alle Energi og
            Miljø-studenter, og vi anbefaler på det sterkeste å melde seg på
            ulike bedrifter sine presentasjoner for å få innsikt i en spennende
            hverdag og en potensiell arbeidsgiver.
            <br />
            <br />
            EMIL-Link ble stiftet av Energi og Miljø-studiets aller første kull
            for å skaffe sponsorer til hovedekskursjonen og har utviklet seg til
            den Link vi kjenner i dag. I tillegg til å arrangere
            bedriftspresentasjoner og ulike fagdager holder vi også en rekke
            sosiale arrangementer. Inntekter til Link går direkte til
            linjeforeningen som hjelper alle EMIL studenter med å få en bedre
            studietid.
          </p>
        </div>

        {/* Grid Section for Styret, Bedrift, etc. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
          {/* Styret */}
          <div>
            <div>
              <div className="relative">
                {isAdmin && subgroupFileByKey['styret'] && (
                  <button
                    onClick={() => handleDeleteSubgroup('styret')}
                    className="absolute top-2 right-2 z-10 bg-white/90 text-red-700 rounded-full p-1 shadow"
                    title="Slett bilde"
                  >
                    <CloseIcon />
                  </button>
                )}
                {isAdmin && !subgroupFileByKey['styret'] && (
                  <label className="absolute inset-0 flex items-center justify-center cursor-pointer z-10">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={e => {
                        const f = e.target.files?.[0];
                        if (f) handleUploadSubgroup('styret', f);
                      }}
                    />
                    <div className="bg-white/90 text-red-700 rounded-full p-2 shadow">
                      <AddIcon />
                    </div>
                  </label>
                )}
                <SubGroupPic
                  alt="Styret"
                  className="rounded-xl"
                  src={
                    subgroupFileByKey['styret']
                      ? getSupabaseImageUrl(
                          subgroupFileByKey['styret'] as string,
                          'subgroups'
                        )
                      : getOptimizedImageUrl('styret.png', 'subgroups')
                  }
                  priority={true}
                />
              </div>
            </div>
          </div>
          <div className="py-8 flex flex-col mt-6 text-gray-600 text-sm sm:text-xl px-4 sm:px-0">
            <h3 className="text-3xl font-semibold text-center sm:text-center py-4">
              Styret
            </h3>
            <p className="py-2 lg:text-center sm:text-left">
              {' '}
              {leder?.stilling} | {leder?.name}
            </p>
            <p className="py-2 lg:text-center sm:text-left">
              {nestleder?.stilling} | {nestleder?.name}
            </p>
            <p className="py-2 lg:text-center sm:text-left">
              {hr?.stilling} | {hr?.name}
            </p>
            <p className="py-2 lg:text-center sm:text-left">
              {økonomi?.stilling} | {økonomi?.name}
            </p>
            <p className="py-2 lg:text-center sm:text-left">
              {bedrift?.stilling} | {bedrift?.name}
            </p>
            <p className="py-2 lg:text-center sm:text-left">
              {marked?.stilling} | {marked?.name}
            </p>
            <p className="py-2 lg:text-center sm:text-left">
              {logistikk?.stilling} | {logistikk?.name}
            </p>
            <p className="py-2 lg:text-center sm:text-left">
              {fa?.stilling} | {fa?.name}
            </p>
          </div>

          {/* Bedrift */}
          <div>
            <div className="relative">
              {isAdmin && subgroupFileByKey['bedrift'] && (
                <button
                  onClick={() => handleDeleteSubgroup('bedrift')}
                  className="absolute top-2 right-2 z-10 bg-white/90 text-red-700 rounded-full p-1 shadow"
                  title="Slett bilde"
                >
                  <CloseIcon />
                </button>
              )}
              {isAdmin && !subgroupFileByKey['bedrift'] && (
                <label className="absolute inset-0 flex items-center justify-center cursor-pointer z-10">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={e => {
                      const f = e.target.files?.[0];
                      if (f) handleUploadSubgroup('bedrift', f);
                    }}
                  />
                  <div className="bg-white/90 text-red-700 rounded-full p-2 shadow">
                    <AddIcon />
                  </div>
                </label>
              )}
              <SubGroupPic
                alt="Bedrift"
                className="rounded-xl"
                src={
                  subgroupFileByKey['bedrift']
                    ? getSupabaseImageUrl(
                        subgroupFileByKey['bedrift'] as string,
                        'subgroups'
                      )
                    : getOptimizedImageUrl('bedrift.png', 'subgroups')
                }
              />
            </div>
          </div>
          <div className="py-8 flex flex-col mt-6 text-gray-600 text-xl max-w-lg mx-auto sm:text-left lg:text-center">
            <h3 className="text-4xl font-semibold py-4 text-center">Bedrift</h3>
            <p className="py-2 lg">
              Bedriftsgruppen har direkte kontakt med forskjellige bedrifter, og
              ansvaret med å sikre bedriftspresentasjoner m.m.
              Bedriftsundergruppen er EMIL-studentens ansikt mot bedriftene. De
              opprettholder kontakten med samarbeidspartnere gjennom året, og da
              spesielt frem mot et arrangement.
            </p>
          </div>

          {/* Marked */}
          <div>
            <div className="relative">
              {isAdmin && subgroupFileByKey['marked'] && (
                <button
                  onClick={() => handleDeleteSubgroup('marked')}
                  className="absolute top-2 right-2 z-10 bg-white/90 text-red-700 rounded-full p-1 shadow"
                  title="Slett bilde"
                >
                  <CloseIcon />
                </button>
              )}
              {isAdmin && !subgroupFileByKey['marked'] && (
                <label className="absolute inset-0 flex items-center justify-center cursor-pointer z-10">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={e => {
                      const f = e.target.files?.[0];
                      if (f) handleUploadSubgroup('marked', f);
                    }}
                  />
                  <div className="bg-white/90 text-red-700 rounded-full p-2 shadow">
                    <AddIcon />
                  </div>
                </label>
              )}
              <SubGroupPic
                alt="Markedsføring"
                className="rounded-xl"
                src={
                  subgroupFileByKey['marked']
                    ? getSupabaseImageUrl(
                        subgroupFileByKey['marked'] as string,
                        'subgroups'
                      )
                    : getOptimizedImageUrl('marked.png', 'subgroups')
                }
              />
            </div>
          </div>
          <div className="py-8 flex flex-col mt-6 text-gray-600 text-xl max-w-lg mx-auto sm:text-left lg:text-center">
            <h3 className="text-4xl font-semibold py-4 text-center">Marked</h3>
            <p className="py-2">
              Markedsføringsgruppen har ansvaret for å informere om
              bedriftspresentasjoner. Markedsføring har også i oppgave å skaffe
              samarbeidspartnere som sponser linjeforeningen. Undergruppen
              jobber også med å skaffe og publisere jobbannonser spesielt for
              EMIL studenter.
            </p>
          </div>

          {/* Logistikk */}
          <div>
            <div className="relative">
              {isAdmin && subgroupFileByKey['logistikk'] && (
                <button
                  onClick={() => handleDeleteSubgroup('logistikk')}
                  className="absolute top-2 right-2 z-10 bg-white/90 text-red-700 rounded-full p-1 shadow"
                  title="Slett bilde"
                >
                  <CloseIcon />
                </button>
              )}
              {isAdmin && !subgroupFileByKey['logistikk'] && (
                <label className="absolute inset-0 flex items-center justify-center cursor-pointer z-10">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={e => {
                      const f = e.target.files?.[0];
                      if (f) handleUploadSubgroup('logistikk', f);
                    }}
                  />
                  <div className="bg-white/90 text-red-700 rounded-full p-2 shadow">
                    <AddIcon />
                  </div>
                </label>
              )}
              <SubGroupPic
                alt="Logistikk"
                className="rounded-xl"
                src={
                  subgroupFileByKey['logistikk']
                    ? getSupabaseImageUrl(
                        subgroupFileByKey['logistikk'] as string,
                        'subgroups'
                      )
                    : getOptimizedImageUrl('logistikk.png', 'subgroups')
                }
              />
            </div>
          </div>
          <div className="py-8 flex flex-col mt-6 text-gray-600 text-xl max-w-lg mx-auto sm:text-left lg:text-center">
            <h3 className="text-4xl font-semibold py-4 text-center">
              Logistikk
            </h3>
            <p className="py-2">
              Logistikkgruppen tar seg av alt det praktiske når det gjelder
              bedriftspresentasjoner. De tar seg av bestilling av
              restaurantlokalet og auditorium, samt at de er til stede på selve
              arrangementet og passer på at alt annet går som det skal.
            </p>
          </div>

          {/* FA */}
          <div>
            <div className="relative">
              {isAdmin && subgroupFileByKey['fa'] && (
                <button
                  onClick={() => handleDeleteSubgroup('fa')}
                  className="absolute top-2 right-2 z-10 bg-white/90 text-red-700 rounded-full p-1 shadow"
                  title="Slett bilde"
                >
                  <CloseIcon />
                </button>
              )}
              {isAdmin && !subgroupFileByKey['fa'] && (
                <label className="absolute inset-0 flex items-center justify-center cursor-pointer z-10">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={e => {
                      const f = e.target.files?.[0];
                      if (f) handleUploadSubgroup('fa', f);
                    }}
                  />
                  <div className="bg-white/90 text-red-700 rounded-full p-2 shadow">
                    <AddIcon />
                  </div>
                </label>
              )}
              <SubGroupPic
                alt="FA"
                className="rounded-xl"
                src={
                  subgroupFileByKey['fa']
                    ? getSupabaseImageUrl(
                        subgroupFileByKey['fa'] as string,
                        'subgroups'
                      )
                    : getOptimizedImageUrl('fa.png', 'subgroups')
                }
              />
            </div>
          </div>
          <div className="py-8 flex flex-col mt-6 text-gray-600 text-xl max-w-lg mx-auto sm:text-left lg:text-center">
            <h3 className="text-4xl font-semibold py-4 text-center">FA</h3>
            <p className="py-2">
              FA-gruppen er de som setter opp alle arrangementer Emil link har,
              som ikke er i kategorien bedriftspresentasjoner. Det vil si alt av
              foredrag, arrangementer og kurs der fokuset ligger på det faglige
              innholdet. Arrangementer som FA setter opp er blant annet
              Motivasjonsdagen, eksamenskurs og Masterfrokost.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

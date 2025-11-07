import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import BoardPic from '../components/Tools/BoardPic';
import {
  getOptimizedImageUrl,
  getSupabaseImageUrl,
  preloadAllImages,
  updateImageCacheVersion,
} from '../utils/imageUtils';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import { useLocation } from 'react-router-dom';

// Preload critical images
const preloadBoardImages = (members: Styret[]) => {
  // Use the new preloading utility
  const memberNames = members.map(member =>
    member.name.split(' ')[0].toLowerCase()
  );
  preloadAllImages(memberNames, 'board_pics');
};

type Styret = {
  id: number;
  stilling: string;
  name: string;
  telefon: string;
  mail: string;
  bilde: string | null;
};

export default function ContactUs() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');
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
    const fetchStyret = async () => {
      const { data, error } = await supabase.from('styret').select('*');

      if (error) {
        console.error('Error fetching styret:', error);
      } else {
        // Preload images after data is fetched
        preloadBoardImages(data);

        // Fetch existing board images from storage
        const { data: storageFiles } = await supabase.storage
          .from('bilder')
          .list('board_pic');

        // Helper function to find matching image in storage
        const findImageForPerson = (person: Styret): string | null => {
          if (person.bilde) return person.bilde; // Already has bilde in DB

          // Find image based on person's first name (e.g., "aqeel.png")
          const navnNormalized = person.name.split(' ')[0].toLowerCase();
          const pattern = `${navnNormalized}.`;

          const matchingFile = storageFiles?.find(file =>
            file.name.toLowerCase().startsWith(pattern.toLowerCase())
          );

          return matchingFile ? matchingFile.name : null;
        };

        // Update each person with found image
        const updatePersonWithImage = (
          person: Styret | null
        ): Styret | null => {
          if (!person) return null;
          const foundImage = findImageForPerson(person);
          if (foundImage && !person.bilde) {
            // Update database if image found but not in DB
            supabase
              .from('styret')
              .update({ bilde: foundImage })
              .eq('id', person.id)
              .then(() => {
                // Update locally after DB update
              });
            return { ...person, bilde: foundImage };
          }
          return person;
        };

        const lederData =
          data.find((person: Styret) => person.stilling === 'Leder') || null;
        const nestlederData =
          data.find((person: Styret) => person.stilling === 'Nestleder') ||
          null;
        const hrData =
          data.find((person: Styret) => person.stilling === 'HR ansvarlig') ||
          null;
        const økonomiData =
          data.find(
            (person: Styret) => person.stilling === 'Økonomiansvarlig'
          ) || null;
        const markedData =
          data.find(
            (person: Styret) => person.stilling === 'Teamleder markedsføring'
          ) || null;
        const bedriftData =
          data.find(
            (person: Styret) => person.stilling === 'Teamleder bedrift'
          ) || null;
        const logistikkData =
          data.find(
            (person: Styret) => person.stilling === 'Teamleder logistikk'
          ) || null;
        const faData =
          data.find((person: Styret) => person.stilling === 'Teamleder FA') ||
          null;

        setLeder(updatePersonWithImage(lederData));
        setNestleder(updatePersonWithImage(nestlederData));
        setHr(updatePersonWithImage(hrData));
        setØkonomi(updatePersonWithImage(økonomiData));
        setMarked(updatePersonWithImage(markedData));
        setBedrift(updatePersonWithImage(bedriftData));
        setLogistikk(updatePersonWithImage(logistikkData));
        setFa(updatePersonWithImage(faData));
      }
      setLoading(false);
    };

    fetchStyret();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-600">Laster inn styret...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center" style={{ zIndex: 1 }}>
      <div className="w-full p-6 lg:px-12">
        <div
          className="flex flex-col justify-center items-center w-full max-w-6xl mx-auto h-auto lg:h-auto p-6 text-white text-center rounded-lg"
          style={{ backgroundColor: '#4682B4' }}
        >
          <h3 className="text-3xl">Styret</h3>
        </div>

        <>
          {leder && (
            <div className="flex flex-col items-center justify-center my-3 relative">
              {leder.bilde ? (
                <>
                  <div className="relative">
                    {isAdmin && (
                      <button
                        onClick={async () => {
                          await supabase.storage
                            .from('bilder')
                            .remove([`board_pic/${leder.bilde}`]);
                          await supabase
                            .from('styret')
                            .update({ bilde: null })
                            .eq('id', leder.id);
                          setLeder({ ...leder, bilde: null });
                          updateImageCacheVersion();
                        }}
                        className="absolute top-2 right-2 z-10 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 shadow-lg"
                        title="Slett bilde"
                      >
                        <CloseIcon />
                      </button>
                    )}
                    <BoardPic
                      src={
                        leder.bilde
                          ? getSupabaseImageUrl(leder.bilde, 'board_pics')
                          : getOptimizedImageUrl(
                              `${leder.name.split(' ')[0].toLowerCase()}.png`,
                              'board_pics'
                            )
                      }
                      alt={leder.stilling}
                      className="h-40 rounded-2xl object-cover"
                      priority={true}
                    />
                  </div>
                </>
              ) : (
                <>
                  {isAdmin ? (
                    <label className="relative flex items-center justify-center w-full h-40 rounded-2xl border-2 border-dashed border-gray-300 cursor-pointer hover:border-blue-500 bg-gray-50">
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={async e => {
                          const f = e.target.files?.[0];
                          if (!f) return;
                          // Use original filename as-is (admin user should name it correctly, e.g., "aqeel.png")
                          const fileName = f.name;
                          await supabase.storage
                            .from('bilder')
                            .upload(`board_pic/${fileName}`, f, {
                              upsert: true,
                            });
                          await supabase
                            .from('styret')
                            .update({ bilde: fileName })
                            .eq('id', leder.id);
                          setLeder({ ...leder, bilde: fileName });
                          updateImageCacheVersion();
                        }}
                      />
                      <div className="flex flex-col items-center justify-center">
                        <div className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 shadow-lg mb-2">
                          <AddIcon />
                        </div>
                        <span className="text-sm text-gray-500">
                          Legg til bilde
                        </span>
                      </div>
                    </label>
                  ) : (
                    <div className="h-40 w-full rounded-2xl bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400">Ingen bilde</span>
                    </div>
                  )}
                </>
              )}
              <p className="font-semibold mt-2">{leder.stilling}</p>
              <p className="text-sm">{leder.name}</p>
              <p>
                Tlf:{' '}
                <a href={`tel:${leder.telefon}`} className="text-blue-500">
                  {leder.telefon}
                </a>
              </p>
              <p>
                Mail:{' '}
                <a href={`mailto:${leder.mail}`} className="text-blue-500">
                  {leder.mail}
                </a>
              </p>
            </div>
          )}

          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:p-0 flex-row justify-center sm:grid-cols-2">
            {nestleder && (
              <div className="text-center flex flex-col items-center justify-center my-3 relative">
                {nestleder.bilde ? (
                  <div className="relative">
                    {isAdmin && (
                      <button
                        onClick={async () => {
                          await supabase.storage
                            .from('bilder')
                            .remove([`board_pic/${nestleder.bilde}`]);
                          await supabase
                            .from('styret')
                            .update({ bilde: null })
                            .eq('id', nestleder.id);
                          setNestleder({ ...nestleder, bilde: null });
                          updateImageCacheVersion();
                        }}
                        className="absolute top-2 right-2 z-10 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 shadow-lg"
                        title="Slett bilde"
                      >
                        <CloseIcon />
                      </button>
                    )}
                    <BoardPic
                      src={
                        nestleder.bilde
                          ? getSupabaseImageUrl(nestleder.bilde, 'board_pics')
                          : getOptimizedImageUrl(
                              `${nestleder.name.split(' ')[0].toLowerCase()}.png`,
                              'board_pics'
                            )
                      }
                      alt={nestleder.stilling}
                      className="h-40 rounded-2xl object-cover"
                    />
                  </div>
                ) : (
                  <>
                    {isAdmin ? (
                      <label className="relative flex items-center justify-center w-full h-40 rounded-2xl border-2 border-dashed border-gray-300 cursor-pointer hover:border-blue-500 bg-gray-50">
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={async e => {
                            const f = e.target.files?.[0];
                            if (!f) return;
                            // Use original filename as-is (admin user should name it correctly, e.g., "aryan.png")
                            const fileName = f.name;
                            await supabase.storage
                              .from('bilder')
                              .upload(`board_pic/${fileName}`, f, {
                                upsert: true,
                              });
                            await supabase
                              .from('styret')
                              .update({ bilde: fileName })
                              .eq('id', nestleder.id);
                            setNestleder({ ...nestleder, bilde: fileName });
                            updateImageCacheVersion();
                          }}
                        />
                        <div className="flex flex-col items-center justify-center">
                          <div className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 shadow-lg mb-2">
                            <AddIcon />
                          </div>
                          <span className="text-sm text-gray-500">
                            Legg til bilde
                          </span>
                        </div>
                      </label>
                    ) : (
                      <div className="h-40 w-full rounded-2xl bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400">Ingen bilde</span>
                      </div>
                    )}
                  </>
                )}
                <p className="font-semibold mt-2">{nestleder.stilling}</p>
                <p className="text-sm">{nestleder.name}</p>
                <p>
                  Tlf:{' '}
                  <a
                    href={`tel:${nestleder.telefon}`}
                    className="text-blue-500"
                  >
                    {nestleder.telefon}
                  </a>
                </p>
                <p>
                  Mail:{' '}
                  <a
                    href={`mailto:${nestleder.mail}`}
                    className="text-blue-500"
                  >
                    {nestleder.mail}
                  </a>
                </p>
              </div>
            )}
            {hr && (
              <div className="text-center flex flex-col items-center justify-center my-3 relative">
                {hr.bilde ? (
                  <div className="relative">
                    {isAdmin && (
                      <button
                        onClick={async () => {
                          await supabase.storage
                            .from('bilder')
                            .remove([`board_pic/${hr.bilde}`]);
                          await supabase
                            .from('styret')
                            .update({ bilde: null })
                            .eq('id', hr.id);
                          setHr({ ...hr, bilde: null });
                          updateImageCacheVersion();
                        }}
                        className="absolute top-2 right-2 z-10 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 shadow-lg"
                        title="Slett bilde"
                      >
                        <CloseIcon />
                      </button>
                    )}
                    <BoardPic
                      src={
                        hr.bilde
                          ? getSupabaseImageUrl(hr.bilde, 'board_pics')
                          : getOptimizedImageUrl(
                              `${hr.name.split(' ')[0].toLowerCase()}.png`,
                              'board_pics'
                            )
                      }
                      alt={hr.stilling}
                      className="h-40 rounded-2xl object-cover"
                    />
                  </div>
                ) : (
                  <>
                    {isAdmin ? (
                      <label className="relative flex items-center justify-center w-full h-40 rounded-2xl border-2 border-dashed border-gray-300 cursor-pointer hover:border-blue-500 bg-gray-50">
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={async e => {
                            const f = e.target.files?.[0];
                            if (!f) return;
                            // Use original filename as-is (admin user should name it correctly, e.g., "julius.png")
                            const fileName = f.name;
                            await supabase.storage
                              .from('bilder')
                              .upload(`board_pic/${fileName}`, f, {
                                upsert: true,
                              });
                            await supabase
                              .from('styret')
                              .update({ bilde: fileName })
                              .eq('id', hr.id);
                            setHr({ ...hr, bilde: fileName });
                            updateImageCacheVersion();
                          }}
                        />
                        <div className="flex flex-col items-center justify-center">
                          <div className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 shadow-lg mb-2">
                            <AddIcon />
                          </div>
                          <span className="text-sm text-gray-500">
                            Legg til bilde
                          </span>
                        </div>
                      </label>
                    ) : (
                      <div className="h-40 w-full rounded-2xl bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400">Ingen bilde</span>
                      </div>
                    )}
                  </>
                )}
                <p className="font-semibold mt-2">{hr.stilling}</p>
                <p className="text-sm">{hr.name}</p>
                <p>
                  Tlf:{' '}
                  <a href={`tel:${hr.telefon}`} className="text-blue-500">
                    {hr.telefon}
                  </a>
                </p>
                <p>
                  Mail:{' '}
                  <a href={`mailto:${hr.mail}`} className="text-blue-500">
                    {hr.mail}
                  </a>
                </p>
              </div>
            )}
            {økonomi && (
              <div className="text-center flex flex-col items-center justify-center my-3 relative">
                {økonomi.bilde ? (
                  <div className="relative">
                    {isAdmin && (
                      <button
                        onClick={async () => {
                          await supabase.storage
                            .from('bilder')
                            .remove([`board_pic/${økonomi.bilde}`]);
                          await supabase
                            .from('styret')
                            .update({ bilde: null })
                            .eq('id', økonomi.id);
                          setØkonomi({ ...økonomi, bilde: null });
                          updateImageCacheVersion();
                        }}
                        className="absolute top-2 right-2 z-10 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 shadow-lg"
                        title="Slett bilde"
                      >
                        <CloseIcon />
                      </button>
                    )}
                    <BoardPic
                      src={
                        økonomi.bilde
                          ? getSupabaseImageUrl(økonomi.bilde, 'board_pics')
                          : getOptimizedImageUrl(
                              `${økonomi.name.split(' ')[0].toLowerCase()}.png`,
                              'board_pics'
                            )
                      }
                      alt={økonomi.stilling}
                      className="h-40 rounded-2xl object-cover"
                    />
                  </div>
                ) : (
                  <>
                    {isAdmin ? (
                      <label className="relative flex items-center justify-center w-full h-40 rounded-2xl border-2 border-dashed border-gray-300 cursor-pointer hover:border-blue-500 bg-gray-50">
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={async e => {
                            const f = e.target.files?.[0];
                            if (!f) return;
                            // Use original filename as-is (admin user should name it correctly, e.g., "kaia.png")
                            const fileName = f.name;
                            await supabase.storage
                              .from('bilder')
                              .upload(`board_pic/${fileName}`, f, {
                                upsert: true,
                              });
                            await supabase
                              .from('styret')
                              .update({ bilde: fileName })
                              .eq('id', økonomi.id);
                            setØkonomi({ ...økonomi, bilde: fileName });
                            updateImageCacheVersion();
                          }}
                        />
                        <div className="flex flex-col items-center justify-center">
                          <div className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 shadow-lg mb-2">
                            <AddIcon />
                          </div>
                          <span className="text-sm text-gray-500">
                            Legg til bilde
                          </span>
                        </div>
                      </label>
                    ) : (
                      <div className="h-40 w-full rounded-2xl bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400">Ingen bilde</span>
                      </div>
                    )}
                  </>
                )}
                <p className="font-semibold mt-2">{økonomi.stilling}</p>
                <p className="text-sm">{økonomi.name}</p>
                <p>
                  Tlf:{' '}
                  <a href={`tel:${økonomi.telefon}`} className="text-blue-500">
                    {økonomi.telefon}
                  </a>
                </p>
                <p>
                  Mail:{' '}
                  <a href={`mailto:${økonomi.mail}`} className="text-blue-500">
                    {økonomi.mail}
                  </a>
                </p>
              </div>
            )}
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:p-0 flex-row justify-center sm:grid-cols-2">
            {marked && (
              <div className="text-center flex flex-col items-center justify-center my-3 relative">
                {marked.bilde ? (
                  <div className="relative">
                    {isAdmin && (
                      <button
                        onClick={async () => {
                          await supabase.storage
                            .from('bilder')
                            .remove([`board_pic/${marked.bilde}`]);
                          await supabase
                            .from('styret')
                            .update({ bilde: null })
                            .eq('id', marked.id);
                          setMarked({ ...marked, bilde: null });
                          updateImageCacheVersion();
                        }}
                        className="absolute top-2 right-2 z-10 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 shadow-lg"
                        title="Slett bilde"
                      >
                        <CloseIcon />
                      </button>
                    )}
                    <BoardPic
                      src={
                        marked.bilde
                          ? getSupabaseImageUrl(marked.bilde, 'board_pics')
                          : getOptimizedImageUrl(
                              `${marked.name.split(' ')[0].toLowerCase()}.png`,
                              'board_pics'
                            )
                      }
                      alt={marked.stilling}
                      className="h-40 rounded-2xl object-cover"
                    />
                  </div>
                ) : (
                  <>
                    {isAdmin ? (
                      <label className="relative flex items-center justify-center w-full h-40 rounded-2xl border-2 border-dashed border-gray-300 cursor-pointer hover:border-blue-500 bg-gray-50">
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={async e => {
                            const f = e.target.files?.[0];
                            if (!f) return;
                            // Use original filename as-is (admin user should name it correctly)
                            const fileName = f.name;
                            await supabase.storage
                              .from('bilder')
                              .upload(`board_pic/${fileName}`, f, {
                                upsert: true,
                              });
                            await supabase
                              .from('styret')
                              .update({ bilde: fileName })
                              .eq('id', marked.id);
                            setMarked({ ...marked, bilde: fileName });
                            updateImageCacheVersion();
                          }}
                        />
                        <div className="flex flex-col items-center justify-center">
                          <div className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 shadow-lg mb-2">
                            <AddIcon />
                          </div>
                          <span className="text-sm text-gray-500">
                            Legg til bilde
                          </span>
                        </div>
                      </label>
                    ) : (
                      <div className="h-40 w-full rounded-2xl bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400">Ingen bilde</span>
                      </div>
                    )}
                  </>
                )}
                <p className="font-semibold mt-2">{marked.stilling}</p>
                <p className="text-sm">{marked.name}</p>
                <p>
                  Tlf:{' '}
                  <a href={`tel:${marked.telefon}`} className="text-blue-500">
                    {marked.telefon}
                  </a>
                </p>
                <p>
                  Mail:{' '}
                  <a href={`mailto:${marked.mail}`} className="text-blue-500">
                    {marked.mail}
                  </a>
                </p>
              </div>
            )}
            {bedrift && (
              <div className="text-center flex flex-col items-center justify-center my-3 relative">
                {bedrift.bilde ? (
                  <div className="relative">
                    {isAdmin && (
                      <button
                        onClick={async () => {
                          await supabase.storage
                            .from('bilder')
                            .remove([`board_pic/${bedrift.bilde}`]);
                          await supabase
                            .from('styret')
                            .update({ bilde: null })
                            .eq('id', bedrift.id);
                          setBedrift({ ...bedrift, bilde: null });
                          updateImageCacheVersion();
                        }}
                        className="absolute top-2 right-2 z-10 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 shadow-lg"
                        title="Slett bilde"
                      >
                        <CloseIcon />
                      </button>
                    )}
                    <BoardPic
                      src={
                        bedrift.bilde
                          ? getSupabaseImageUrl(bedrift.bilde, 'board_pics')
                          : getOptimizedImageUrl(
                              `${bedrift.name.split(' ')[0].toLowerCase()}.png`,
                              'board_pics'
                            )
                      }
                      alt={bedrift.stilling}
                      className="h-40 rounded-2xl object-cover"
                    />
                  </div>
                ) : (
                  <>
                    {isAdmin ? (
                      <label className="relative flex items-center justify-center w-full h-40 rounded-2xl border-2 border-dashed border-gray-300 cursor-pointer hover:border-blue-500 bg-gray-50">
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={async e => {
                            const f = e.target.files?.[0];
                            if (!f) return;
                            // Use original filename as-is (admin user should name it correctly)
                            const fileName = f.name;
                            await supabase.storage
                              .from('bilder')
                              .upload(`board_pic/${fileName}`, f, {
                                upsert: true,
                              });
                            await supabase
                              .from('styret')
                              .update({ bilde: fileName })
                              .eq('id', bedrift.id);
                            setBedrift({ ...bedrift, bilde: fileName });
                            updateImageCacheVersion();
                          }}
                        />
                        <div className="flex flex-col items-center justify-center">
                          <div className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 shadow-lg mb-2">
                            <AddIcon />
                          </div>
                          <span className="text-sm text-gray-500">
                            Legg til bilde
                          </span>
                        </div>
                      </label>
                    ) : (
                      <div className="h-40 w-full rounded-2xl bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400">Ingen bilde</span>
                      </div>
                    )}
                  </>
                )}
                <p className="font-semibold mt-2">{bedrift.stilling}</p>
                <p className="text-sm">{bedrift.name}</p>
                <p>
                  Tlf:{' '}
                  <a href={`tel:${bedrift.telefon}`} className="text-blue-500">
                    {bedrift.telefon}
                  </a>
                </p>
                <p>
                  Mail:{' '}
                  <a href={`mailto:${bedrift.mail}`} className="text-blue-500">
                    {bedrift.mail}
                  </a>
                </p>
              </div>
            )}
            {logistikk && (
              <div className="text-center flex flex-col items-center justify-center my-3 relative">
                {logistikk.bilde ? (
                  <div className="relative">
                    {isAdmin && (
                      <button
                        onClick={async () => {
                          await supabase.storage
                            .from('bilder')
                            .remove([`board_pic/${logistikk.bilde}`]);
                          await supabase
                            .from('styret')
                            .update({ bilde: null })
                            .eq('id', logistikk.id);
                          setLogistikk({ ...logistikk, bilde: null });
                          updateImageCacheVersion();
                        }}
                        className="absolute top-2 right-2 z-10 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 shadow-lg"
                        title="Slett bilde"
                      >
                        <CloseIcon />
                      </button>
                    )}
                    <BoardPic
                      src={
                        logistikk.bilde
                          ? getSupabaseImageUrl(logistikk.bilde, 'board_pics')
                          : getOptimizedImageUrl(
                              `${logistikk.name.split(' ')[0].toLowerCase()}.png`,
                              'board_pics'
                            )
                      }
                      alt={logistikk.stilling}
                      className="h-40 rounded-2xl object-cover"
                    />
                  </div>
                ) : (
                  <>
                    {isAdmin ? (
                      <label className="relative flex items-center justify-center w-full h-40 rounded-2xl border-2 border-dashed border-gray-300 cursor-pointer hover:border-blue-500 bg-gray-50">
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={async e => {
                            const f = e.target.files?.[0];
                            if (!f) return;
                            // Use original filename as-is (admin user should name it correctly)
                            const fileName = f.name;
                            await supabase.storage
                              .from('bilder')
                              .upload(`board_pic/${fileName}`, f, {
                                upsert: true,
                              });
                            await supabase
                              .from('styret')
                              .update({ bilde: fileName })
                              .eq('id', logistikk.id);
                            setLogistikk({ ...logistikk, bilde: fileName });
                            updateImageCacheVersion();
                          }}
                        />
                        <div className="flex flex-col items-center justify-center">
                          <div className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 shadow-lg mb-2">
                            <AddIcon />
                          </div>
                          <span className="text-sm text-gray-500">
                            Legg til bilde
                          </span>
                        </div>
                      </label>
                    ) : (
                      <div className="h-40 w-full rounded-2xl bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400">Ingen bilde</span>
                      </div>
                    )}
                  </>
                )}
                <p className="font-semibold mt-2">{logistikk.stilling}</p>
                <p className="text-sm">{logistikk.name}</p>
                <p>
                  Tlf:{' '}
                  <a
                    href={`tel:${logistikk.telefon}`}
                    className="text-blue-500"
                  >
                    {logistikk.telefon}
                  </a>
                </p>
                <p>
                  Mail:{' '}
                  <a
                    href={`mailto:${logistikk.mail}`}
                    className="text-blue-500"
                  >
                    {logistikk.mail}
                  </a>
                </p>
              </div>
            )}
            {fa && (
              <div className="text-center flex flex-col items-center justify-center my-3 relative">
                {fa.bilde ? (
                  <div className="relative">
                    {isAdmin && (
                      <button
                        onClick={async () => {
                          await supabase.storage
                            .from('bilder')
                            .remove([`board_pic/${fa.bilde}`]);
                          await supabase
                            .from('styret')
                            .update({ bilde: null })
                            .eq('id', fa.id);
                          setFa({ ...fa, bilde: null });
                          updateImageCacheVersion();
                        }}
                        className="absolute top-2 right-2 z-10 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 shadow-lg"
                        title="Slett bilde"
                      >
                        <CloseIcon />
                      </button>
                    )}
                    <BoardPic
                      src={
                        fa.bilde
                          ? getSupabaseImageUrl(fa.bilde, 'board_pics')
                          : getOptimizedImageUrl(
                              `${fa.name.split(' ')[0].toLowerCase()}.png`,
                              'board_pics'
                            )
                      }
                      alt={fa.stilling}
                      className="h-40 rounded-2xl object-cover"
                    />
                  </div>
                ) : (
                  <>
                    {isAdmin ? (
                      <label className="relative flex items-center justify-center w-full h-40 rounded-2xl border-2 border-dashed border-gray-300 cursor-pointer hover:border-blue-500 bg-gray-50">
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={async e => {
                            const f = e.target.files?.[0];
                            if (!f) return;
                            // Use original filename as-is (admin user should name it correctly)
                            const fileName = f.name;
                            await supabase.storage
                              .from('bilder')
                              .upload(`board_pic/${fileName}`, f, {
                                upsert: true,
                              });
                            await supabase
                              .from('styret')
                              .update({ bilde: fileName })
                              .eq('id', fa.id);
                            setFa({ ...fa, bilde: fileName });
                            updateImageCacheVersion();
                          }}
                        />
                        <div className="flex flex-col items-center justify-center">
                          <div className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 shadow-lg mb-2">
                            <AddIcon />
                          </div>
                          <span className="text-sm text-gray-500">
                            Legg til bilde
                          </span>
                        </div>
                      </label>
                    ) : (
                      <div className="h-40 w-full rounded-2xl bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400">Ingen bilde</span>
                      </div>
                    )}
                  </>
                )}
                <p className="font-semibold mt-2">{fa.stilling}</p>
                <p className="text-sm">{fa.name}</p>
                <p>
                  Tlf:{' '}
                  <a href={`tel:${fa.telefon}`} className="text-blue-500">
                    {fa.telefon}
                  </a>
                </p>
                <p>
                  Mail:{' '}
                  <a href={`mailto:${fa.mail}`} className="text-blue-500">
                    {fa.mail}
                  </a>
                </p>
              </div>
            )}
          </div>
        </>
      </div>
    </div>
  );
}

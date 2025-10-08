import { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';
import { useToast } from '../Tools/ToastProvider';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

type Job = {
  id: number;
  bedrift: string;
  jobType: string;
  jobTitle: string;
  deadline: string;
  link: string;
  place: string;
  imageURL: string;
};

export default function AddJob() {
  const [job, setJobs] = useState<Job[]>([]);
  const [newJob, setNewJob] = useState({
    bedrift: '',
    jobType: '',
    jobTitle: '',
    deadline: '',
    link: '',
    place: '',
    imageURL: '',
  });
  const [editingJob, setEditingJob] = useState<Job | null>(null);
  const { showToast } = useToast();

  useEffect(() => {
    const fetchJobs = async () => {
      const { data, error } = await supabase.from('jobs').select('*');
      if (error) {
        console.error('Error fetching jobs:', error);
      } else {
        setJobs(data);
      }
    };
    fetchJobs();
  }, []);

  // Function to add a new job
  const addNewJob = async () => {
    // Validering av påkrevde felt
    if (
      !newJob.bedrift ||
      !newJob.jobType ||
      !newJob.jobTitle ||
      !newJob.deadline ||
      !newJob.link ||
      !newJob.place
    ) {
      showToast(
        'Husk å fylle inn alle felt! (Bedrift, stillingstype, tittel, søknadsfrist, sted og lenke)',
        'error'
      );
      return;
    }

    const { data, error } = await supabase
      .from('jobs')
      .insert([newJob])
      .select('*');

    if (error) {
      console.error('Feil ved legge til jobbannonse:', error);
      showToast(
        'Kunne ikke legge til jobbannonse. Sjekk at alle felt er riktig utfylt og prøv igjen.',
        'error'
      );
    } else {
      showToast('Jobbannonse er opprettet!', 'success');
      setJobs([...job, ...data]); // Update the state with the new Job
      setNewJob({
        bedrift: '',
        jobType: '',
        jobTitle: '',
        deadline: '',
        link: '',
        place: '',
        imageURL: '',
      });
    }
  };

  // Function to remove an job
  const removeJob = async (id: number) => {
    const { error } = await supabase.from('jobs').delete().eq('id', id);

    if (error) {
      console.error('Error deleting job:', error);
      showToast('Kunne ikke fjerne jobbannonse. Prøv igjen.', 'error');
    } else {
      setJobs(job.filter(job => job.id !== id)); // Update state to remove event
      showToast('Jobbannonse har blitt fjernet.', 'success');
    }
  };

  const editJob = (job: Job) => {
    setEditingJob(job);
  };

  // ✅ Save edited event
  const saveEditedJob = async () => {
    if (!editingJob) return;

    const { error } = await supabase
      .from('jobs')
      .update({
        bedrift: editingJob.bedrift,
        jobType: editingJob.jobType,
        jobTitle: editingJob.jobTitle,
        deadline: editingJob.deadline,
        link: editingJob.link,
        place: editingJob.place,
        imageURL: editingJob.imageURL,
      })
      .eq('id', editingJob.id);

    if (error) {
      console.error('Error oppdatering jobber:', error);
      showToast('Kunne ikke oppdatere jobbannonse. Prøv igjen.', 'error');
    } else {
      setJobs(job.map(job => (job.id === editingJob.id ? editingJob : job))); // Update UI
      setEditingJob(null);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 rounded-xl shadow-lg">
      <h2 className="text-lg font-bold mb-4 text-center">
        Administrer jobbtorget
      </h2>

      {/* Form for adding new Jobs */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Bedrift"
          value={newJob.bedrift}
          onChange={e => setNewJob({ ...newJob, bedrift: e.target.value })}
          className="w-full p-2 border rounded mb-2"
        />
        <select
          className="w-full p-2 border rounded mb-2"
          onChange={e => setNewJob({ ...newJob, jobType: e.target.value })}
          value={newJob.jobType}
        >
          <option value="">Velg stillingstype</option>
          <option value="Sommerjobb">Sommerjobb</option>
          <option value="Internship">Internship</option>
          <option value="Heltidsstilling">Heltidsstilling</option>
        </select>
        <input
          type="text"
          placeholder="Tittel"
          value={newJob.jobTitle}
          onChange={e => setNewJob({ ...newJob, jobTitle: e.target.value })}
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="text"
          placeholder="Sted (Place)"
          value={newJob.place}
          onChange={e => setNewJob({ ...newJob, place: e.target.value })}
          className="w-full p-2 border rounded mb-2"
        />
        <div className="text-red-600 text-xs ">(Søknadsfrist)</div>
        <input
          type="date"
          placeholder="Søknadsfrist"
          value={newJob.deadline}
          onChange={e => setNewJob({ ...newJob, deadline: e.target.value })}
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="text"
          placeholder="Link til annonse her"
          value={newJob.link}
          onChange={e => setNewJob({ ...newJob, link: e.target.value })}
          className="w-full p-2 border rounded mb-2"
        />
        <div>
          <input
            type="text"
            placeholder={'Legg til bilde'}
            value={newJob.imageURL}
            onChange={e =>
              setNewJob({ ...newJob, imageURL: `${e.target.value}` })
            }
            className="w-full p-2 border rounded mb-2"
          />
        </div>
        <button
          className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 w-full cursor-pointer"
          onClick={addNewJob}
        >
          Legg til jobbannonse
        </button>

        {/* Display Existing Jobs */}
        {job.length === 0 ? (
          <p className="text-center">Ingen jobbannonser ute for øyeblikket.</p>
        ) : (
          <ul className="space-y-1">
            {job.map(job => (
              <li key={job.id}>
                <div className="flex flex-row">
                  <div
                    className="px-12 py-2 rounded-lg shadow-md flex justify-between items-center bg-amber-100 hover:bg-amber-200 cursor-pointer"
                    onClick={() => editJob(job)}
                  >
                    <p className="font-bold flex text-center">
                      {job.jobTitle}, {job.deadline}
                    </p>
                  </div>
                  <button
                    className="text-red-600 hover:scale-110 text-lg cursor-pointer"
                    onClick={() => removeJob(job.id)}
                  >
                    <DeleteForeverIcon />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        {/* Edit Job Form */}
        {editingJob && (
          <div className="mt-6 p-4 border rounded-lg shadow-md bg-gray-100">
            <h3 className="text-lg font-bold mb-2">Rediger arrangement</h3>
            <input
              type="text"
              value={editingJob.bedrift}
              onChange={e =>
                setEditingJob({ ...editingJob, bedrift: e.target.value })
              }
              className="w-full p-2 border rounded mb-2"
            />
            <select
              onChange={e =>
                setEditingJob({ ...editingJob, jobType: e.target.value })
              }
              className="w-full border rounded mb-2"
            >
              <option value="">Velg stillingstype</option>
              <option value="Sommerjobb">Sommerjobb</option>
              <option value="Internship">Internship</option>
              <option value="Heltidsstilling">Heltidsstilling</option>
            </select>
            <input
              type="text"
              value={editingJob.jobTitle}
              onChange={e =>
                setEditingJob({ ...editingJob, jobTitle: e.target.value })
              }
              className="w-full p-2 border rounded mb-2"
            />
            <input
              type="date"
              value={editingJob.deadline}
              onChange={e =>
                setEditingJob({ ...editingJob, deadline: e.target.value })
              }
              className="w-full p-2 border rounded mb-2"
            />
            <input
              type="text"
              value={editingJob.link}
              onChange={e =>
                setEditingJob({ ...editingJob, link: e.target.value })
              }
              className="w-full p-2 border rounded mb-2"
            />
            <input
              type="text"
              value={editingJob.place}
              onChange={e =>
                setEditingJob({ ...editingJob, place: e.target.value })
              }
              className="w-full p-2 border rounded mb-2"
            />
            {/* Image Search and Selection */}
            <div>
              <input
                type="text"
                //placeholder={`${editingJob.bedrift}.png`}
                value={editingJob.imageURL}
                onChange={e =>
                  setEditingJob({
                    ...editingJob,
                    imageURL: `${e.target.value}`,
                  })
                }
                className="w-full p-2 border rounded mb-2"
              />
            </div>
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
              onClick={saveEditedJob}
            >
              Lagre endringer
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

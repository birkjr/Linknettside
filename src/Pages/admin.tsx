import SupportManager from '../components/Admin/SupportManager';
import AdminBoard from '../components/Admin/AdminBoard';
import AddNews from '../components/Admin/AdminNews';
import AddEvent from '../components/Admin/AdminEvents';
import AddJob from '../components/Admin/AdminJobs';
import { useNavigate } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import EventIcon from '@mui/icons-material/Event';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import { useAuth } from '../context/AuthContext';
import UploadPhoto from '../components/Admin/UploadPhoto';
import AdminPartners from '../components/Admin/AdminPartners';
import { useToast } from '../context/ToastContext';

export default function Admin() {
  const navigate = useNavigate();
  const { isAuthenticated, loading } = useAuth(); // ✅ Get authentication state and loading
  const { showToast } = useToast();
  const [searchParams] = useSearchParams();
  const activeTab = (searchParams.get('tab') || 'events') as string;

  const tabs = useMemo(
    () => [
      {
        id: 'events',
        label: 'Arrangementer',
        icon: <EventIcon fontSize="small" />,
        component: <AddEvent />,
      },
      {
        id: 'jobs',
        label: 'Jobbannonser',
        icon: <WorkOutlineIcon fontSize="small" />,
        component: <AddJob />,
      },
      {
        id: 'news',
        label: 'Nyheter',
        icon: <ArticleOutlinedIcon fontSize="small" />,
        component: <AddNews />,
      },
      {
        id: 'board',
        label: 'Styret',
        icon: <Groups2OutlinedIcon fontSize="small" />,
        component: <AdminBoard />,
      },
      {
        id: 'upload',
        label: 'Last opp bilder',
        icon: <CloudUploadOutlinedIcon fontSize="small" />,
        component: <UploadPhoto />,
      },
      {
        id: 'support',
        label: 'Support',
        icon: <SupportAgentOutlinedIcon fontSize="small" />,
        component: <SupportManager />,
      },
      {
        id: 'partners',
        label: 'Partnere',
        icon: <Diversity3OutlinedIcon fontSize="small" />,
        component: <AdminPartners />,
      },
    ],
    []
  );

  useEffect(() => {
    // Wait for auth to finish loading
    if (loading) return;

    // If not authenticated, redirect to home
    if (!isAuthenticated) {
      showToast('Ingen tilgang! Du må være innlogget som admin.', 'error');
      navigate('/');
    }
  }, [isAuthenticated, loading, navigate, showToast]);

  // Show loading spinner while checking authentication
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  // Don't render admin panel if not authenticated
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-start">
      {/* Content */}
      <div className="w-full max-w-6xl mx-auto px-4 py-8">
        <div className="rounded-2xl border border-red-100 bg-white shadow-xl shadow-red-100/40">
          <div className="p-4 sm:p-8">
            {tabs.find(t => t.id === activeTab)?.component}
          </div>
        </div>
      </div>
    </div>
  );
}

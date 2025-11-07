import { useState, useEffect, useRef } from 'react';
import { supabase } from '../../supabaseClient';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import ImageIcon from '@mui/icons-material/Image';
import LazyImage from './LazyImage';

interface ImageSelectorProps {
  value: string;
  onChange: (value: string) => void;
  category: 'board_pics' | 'company_logos' | 'subgroups' | 'events_jobads';
  placeholder?: string;
  className?: string;
}

export default function ImageSelector({
  value,
  onChange,
  category,
  placeholder = 'Velg bilde...',
  className = '',
}: ImageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [localImages, setLocalImages] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Get Supabase category mapping
  const getSupabaseCategory = (cat: string) => {
    switch (cat) {
      case 'company_logos': return 'company_logo';
      case 'board_pics': return 'board_pic';
      case 'subgroups': return 'subGroup';
      case 'events_jobads': return 'events_jobads';
      default: return cat;
    }
  };

  // Get local images based on category
  const getLocalImages = () => {
    const knownImages: { [key: string]: string[] } = {
      company_logos: ['asplanviak.JPG', 'cowi.JPG', 'dnv.JPG', 'equinor.JPG', 'multiconsult.JPG', 'norconsult.JPG', 'statkraft.JPG'],
      board_pics: ['Annie.png', 'Aqeel.png', 'Aryan.png', 'Julia.png', 'Julie.png', 'Julius.png', 'Kaia.png', 'Stina.png'],
      subgroups: ['bedrift.png', 'fa.png', 'logistikk.png', 'marked.png', 'styret.png'],
      events_jobads: [
        'asplanviak.png', 'cowi.png', 'dnv.JPG', 'elvia.jpg', 'equinor.JPG', 
        'fornybarnorge.png', 'logo.sintef.png', 'multiconsult.png', 'nexans.png', 
        'norconsult.jpg', 'norskenergi.jpg', 'siemensenergy.png'
      ]
    };
    return knownImages[category] || [];
  };

  // Fetch images from Supabase
  const fetchSupabaseImages = async () => {
    setLoading(true);
    try {
      const supabaseCategory = getSupabaseCategory(category);
      const { data, error } = await supabase.storage
        .from('bilder')
        .list(supabaseCategory, {
          limit: 100,
          sortBy: { column: 'created_at', order: 'desc' }
        });

      if (error) {
        console.error('Error fetching images:', error);
        return;
      }

      const imageNames = data
        ?.filter(file => file.name && !file.name.endsWith('/'))
        .map(file => file.name) || [];
      
      setImages(imageNames);
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLocalImages(getLocalImages());
    fetchSupabaseImages();
  }, [category]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter images based on search query
  const filteredImages = [...localImages, ...images]
    .filter((image, index, self) => self.indexOf(image) === index) // Remove duplicates
    .filter(image => 
      image.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      // Local images first, then Supabase images
      const aIsLocal = localImages.includes(a);
      const bIsLocal = localImages.includes(b);
      if (aIsLocal && !bIsLocal) return -1;
      if (!aIsLocal && bIsLocal) return 1;
      return a.localeCompare(b);
    });

  const handleImageSelect = (imageName: string) => {
    onChange(imageName);
    setIsOpen(false);
    setSearchQuery('');
  };

  const handleClear = () => {
    onChange('');
    setSearchQuery('');
  };

  const getImageUrl = (imageName: string) => {
    if (localImages.includes(imageName)) {
      const localPath = category === 'events_jobads' ? 'jobads_events' : category;
      return `/images/${localPath}/${imageName}`;
    } else {
      const supabaseCategory = getSupabaseCategory(category);
      return supabase.storage
        .from('bilder')
        .getPublicUrl(`${supabaseCategory}/${imageName}`).data.publicUrl;
    }
  };

  const getImageType = (imageName: string) => {
    return localImages.includes(imageName) ? 'Lokal' : 'Supabase';
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Input Field */}
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-1">
          {value && (
            <button
              onClick={handleClear}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              type="button"
            >
              <ClearIcon fontSize="small" />
            </button>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            type="button"
          >
            <ImageIcon fontSize="small" />
          </button>
        </div>
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-80 overflow-hidden">
          {/* Search Bar */}
          <div className="p-3 border-b border-gray-200">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Søk etter bilder..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                autoFocus
              />
            </div>
          </div>

          {/* Images List */}
          <div className="max-h-60 overflow-y-auto">
            {loading ? (
              <div className="p-4 text-center text-gray-500">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-600 mx-auto"></div>
                <p className="mt-2 text-sm">Laster bilder...</p>
              </div>
            ) : filteredImages.length === 0 ? (
              <div className="p-4 text-center text-gray-500">
                <p className="text-sm">Ingen bilder funnet</p>
              </div>
            ) : (
              <div className="p-2">
                {filteredImages.map((imageName, index) => (
                  <div
                    key={index}
                    onClick={() => handleImageSelect(imageName)}
                    className="flex items-center p-2 hover:bg-gray-100 rounded cursor-pointer transition-colors"
                  >
                    {/* Image Preview */}
                    <div className="w-12 h-12 flex-shrink-0 mr-3">
                      <LazyImage
                        src={getImageUrl(imageName)}
                        alt={imageName}
                        className="w-full h-full object-cover rounded border"
                        onError={(e) => {
                          e.currentTarget.src = '/images/logo_transparent.png';
                        }}
                      />
                    </div>
                    
                    {/* Image Info */}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {imageName}
                      </p>
                      <div className="flex items-center space-x-2">
                        <span className={`text-xs px-2 py-1 rounded ${
                          getImageType(imageName) === 'Lokal' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {getImageType(imageName)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-3 border-t border-gray-200 bg-gray-50">
            <p className="text-xs text-gray-500 text-center">
              {filteredImages.length} bilde{filteredImages.length !== 1 ? 'r' : ''} funnet
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

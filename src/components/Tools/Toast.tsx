import { useEffect, useState } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';

export type ToastType = 'success' | 'error' | 'info';

interface ToastProps {
  message: string;
  type: ToastType;
  isVisible: boolean;
  onClose: () => void;
  duration?: number; // Auto-close duration in ms
}

export default function Toast({ 
  message, 
  type, 
  isVisible, 
  onClose, 
  duration = 4000 
}: ToastProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true);
      
      // Auto-close after duration
      const timer = setTimeout(() => {
        handleClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      onClose();
    }, 300); // Wait for animation to complete
  };

  const getToastStyles = () => {
    switch (type) {
      case 'success':
        return {
          bg: 'bg-gradient-to-r from-green-500 to-green-600',
          border: 'border-green-400',
          icon: <CheckCircleIcon className="text-white" />,
          shadow: 'shadow-green-200'
        };
      case 'error':
        return {
          bg: 'bg-gradient-to-r from-red-500 to-red-600',
          border: 'border-red-400',
          icon: <ErrorIcon className="text-white" />,
          shadow: 'shadow-red-200'
        };
      case 'info':
        return {
          bg: 'bg-gradient-to-r from-blue-500 to-blue-600',
          border: 'border-blue-400',
          icon: <InfoIcon className="text-white" />,
          shadow: 'shadow-blue-200'
        };
      default:
        return {
          bg: 'bg-gradient-to-r from-gray-500 to-gray-600',
          border: 'border-gray-400',
          icon: <InfoIcon className="text-white" />,
          shadow: 'shadow-gray-200'
        };
    }
  };

  const styles = getToastStyles();

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-[9999]">
      <div
        className={`
          ${styles.bg} 
          ${styles.border}
          ${styles.shadow}
          border-2 
          shadow-lg 
          rounded-xl 
          p-4 
          min-w-[320px] 
          max-w-[480px]
          transform 
          transition-all 
          duration-300 
          ease-in-out
          ${isAnimating ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
        `}
      >
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            {styles.icon}
          </div>
          
          <div className="flex-1">
            <p className="text-white font-medium text-sm leading-relaxed">
              {message}
            </p>
          </div>
          
          <button
            onClick={handleClose}
            className="flex-shrink-0 ml-2 p-1 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors duration-200"
            aria-label="Lukk melding"
          >
            <CloseIcon className="text-white text-sm" />
          </button>
        </div>
        
        {/* Progress bar for auto-close */}
        <div className="mt-3 w-full bg-white bg-opacity-20 rounded-full h-1">
          <div 
            className={`${styles.bg.replace('from-', 'from-').replace('to-', 'to-')} h-1 rounded-full transition-all duration-${duration} ease-linear`}
            style={{
              animation: `shrink ${duration}ms linear forwards`
            }}
          />
        </div>
      </div>
      
      <style>{`
        @keyframes shrink {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
    </div>
  );
}

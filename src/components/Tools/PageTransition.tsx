import { ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation();
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    setIsFading(true);
    const timeout = window.setTimeout(() => setIsFading(false), 150);
    return () => window.clearTimeout(timeout);
  }, [location]);

  return (
    <div
      className={`transition-opacity duration-150 ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {children}
    </div>
  );
}

'use client';

import { useEffect } from 'react';

export default function BootstrapClient() {
  useEffect(() => {
    // Bootstrap JS will be loaded on client side
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return null;
}

'use client';

import { Suspense } from 'react';
import Portfolio from '@/components/Portfolio';

export default function PortfolioPage() {
  return (
    <main className="bg-black text-white">
      <Suspense fallback={<div>Loading portfolio...</div>}>
        <Portfolio />
      </Suspense>
    </main>
  );
}

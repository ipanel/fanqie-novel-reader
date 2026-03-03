import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

const Home = lazy(() => import('./pages/Home'));
const Catalog = lazy(() => import('./pages/Catalog'));
const Chapter = lazy(() => import('./pages/Chapter'));

function PageFallback() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100dvh', backgroundColor: 'var(--background-color)' }}>
      <span style={{ color: 'var(--text-color)' }}>載入中...</span>
    </div>
  );
}

function App() {
  return (
    <>
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/chapter" element={<Chapter />} />
        </Routes>
      </Suspense>
      <Analytics debug={false} />
    </>
  );
}

export default App;

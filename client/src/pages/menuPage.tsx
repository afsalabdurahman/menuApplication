import { useEffect, useState, useCallback } from 'react';
import { Hero } from '../components/layout/hero';
import { MenuTabs } from '../components/user/menuTabs';
import { MenuContent } from '../components/user/menuContent';
import { getMenu } from '../apiService/menuApis';

// ── Skeleton primitives ────────────────────────────────────────────────────────
const Shimmer = ({ className = '' }: { className?: string }) => (
  <div className={`relative overflow-hidden bg-gray-200 dark:bg-gray-700 rounded ${className}`}>
    <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_infinite] bg-gradient-to-r from-transparent via-white/30 dark:via-white/10 to-transparent" />
  </div>
);

const MenuSkeleton = () => (
  <div className="page">
    {/* Hero skeleton */}
    <div className="relative w-full h-64 bg-gray-200 dark:bg-gray-800 overflow-hidden">
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <Shimmer className="h-8 w-56" />
        <Shimmer className="h-4 w-36" />
      </div>
    </div>

    {/* Tabs skeleton */}
    <div className="flex gap-3 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
      {[120, 96, 108, 88].map((w, i) => (
        <Shimmer key={i} className="h-9 rounded-full" style={{ width: w }} />
      ))}
    </div>

    {/* Menu items skeleton */}
    <section className="menu-content px-6 py-6 space-y-4">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50"
          style={{ opacity: 1 - i * 0.1 }}   // fade out toward bottom
        >
          <Shimmer className="w-16 h-16 rounded-lg shrink-0" />
          <div className="flex-1 space-y-2">
            <Shimmer className="h-4 w-3/4" />
            <Shimmer className="h-3 w-1/2" />
          </div>
          <Shimmer className="h-5 w-14" />
        </div>
      ))}
    </section>

    {/* Order button skeleton */}
    <div className="order-wrap px-6 py-4">
      <Shimmer className="h-12 w-40 rounded-full mx-auto" />
    </div>
  </div>
);

// ── Inline content fade while switching tabs ───────────────────────────────────
const ContentSkeleton = () => (
  <section className="menu-content px-6 py-6 space-y-4 animate-pulse">
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className="flex items-center gap-4 p-4 rounded-xl bg-gray-100 dark:bg-gray-800"
        style={{ opacity: 1 - i * 0.1 }}
      >
        <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg shrink-0" />
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
        </div>
        <div className="h-5 w-14 bg-gray-200 dark:bg-gray-700 rounded" />
      </div>
    ))}
  </section>
);

// ── Main page ─────────────────────────────────────────────────────────────────
export const MenuPage = () => {
  const [activeId, setActiveId] = useState<string>('FOOD');
  const [currentMenu, setCurrentMenu] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);        // true on first load
  const [tabLoading, setTabLoading] = useState<boolean>(false); // true only on tab switch
  const [error, setError] = useState<string | null>(null);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  const fetchMenu = useCallback(async (id: string, isFirst: boolean) => {
    try {
      isFirst ? setLoading(true) : setTabLoading(true);
      setError(null);

      const menuData = await getMenu(id);

      if (!menuData) throw new Error('Menu not found');

      setCurrentMenu(menuData);
    } catch (err: unknown) {
      setError((err as Error).message || 'Failed to load menu');
      setCurrentMenu(null);
    } finally {
      setLoading(false);
      setTabLoading(false);
      setIsFirstLoad(false);
    }
  }, []);

  useEffect(() => {
    fetchMenu(activeId, isFirstLoad);
  }, [activeId]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleTabChange = (newId: string) => {
    setActiveId(newId);
  };

  // ── First load → full skeleton ─────────────────────────────────────────────
  if (loading) return <MenuSkeleton />;

  // ── Error state ────────────────────────────────────────────────────────────
  if (error || !currentMenu) {
    return (
      <div className="page">
        <div className="flex flex-col items-center justify-center min-h-[400px] gap-3">
          <p className="text-red-500 text-lg">{error || 'Menu not found'}</p>
          <button
            onClick={() => fetchMenu(activeId, false)}
            className="px-4 py-2 text-sm rounded-lg border border-red-300 text-red-500 hover:bg-red-50 transition"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  // ── Happy path ─────────────────────────────────────────────────────────────
  return (
    <div className="page">
      <Hero />

      <MenuTabs activeId={activeId} onChange={handleTabChange} />

      {/* Swap only the content area on tab switch, not the whole page */}
      {tabLoading ? (
        <ContentSkeleton />
      ) : (
        <section
          className="menu-content animate-[fadeIn_0.25s_ease-in]"  // soft fade-in
        >
          <MenuContent activeMenu={currentMenu} />
        </section>
      )}

      <div className="order-wrap">
        <button className="order-btn">ORDER ONLINE</button>
      </div>

      <footer>
        <span>DEEPNETSOFT</span> · All Rights Reserved © 2026
      </footer>
    </div>
  );
};
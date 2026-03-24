import { useEffect, useState, useCallback } from 'react';
import { Hero } from '../components/layout/hero';
import { MenuTabs } from '../components/user/menuTabs';
import { MenuContent } from '../components/user/menuContent';
import { getMenu } from '../apiService/menuApis';

export const MenuPage = () => {
  const [activeId, setActiveId] = useState<string>('FOOD');
  const [currentMenu, setCurrentMenu] = useState<string|null>(null);   // single menu object
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch menu whenever activeId changes
  const fetchMenu = useCallback(async (id: string) => {
    try {
      setLoading(true);
      setError(null);

      const menuData = await getMenu(id);        // ← This returns ONE menu object

      if (!menuData) {
        throw new Error('Menu not found');
      }

      setCurrentMenu(menuData);
    } catch (err: any) {
      
      setError(err.message || 'Failed to load menu');
      setCurrentMenu(null);
    } finally {
      setLoading(false);
    }
  }, []);


  useEffect(() => {
    fetchMenu(activeId);
  }, [activeId, fetchMenu]);


  const handleTabChange = (newId: string) => {
    setActiveId(newId);
  };

  if (loading) {
    return (
      <div className="page">
       
        <div className="flex items-center justify-center min-h-[400px]">
          <p className="text-xl">Loading menu...</p>
        </div>
      </div>
    );
  }

  if (error || !currentMenu) {
    return (
      <div className="page">
     
        <div className="flex items-center justify-center min-h-[400px] text-red-500">
          <p>{error || 'Menu not found'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
   

      <Hero />

      <MenuTabs
               // Pass as array (since MenuTabs expects array)
        activeId={activeId}
        onChange={handleTabChange}
      />

      <section className="menu-content">
        <MenuContent activeMenu={currentMenu} />
      </section>

      <div className="order-wrap">
        <button className="order-btn">ORDER ONLINE</button>
      </div>

      {/* Footer */}
      <footer>
        <span>DEEPNETSOFT</span> · All Rights Reserved © 2026
      </footer>
    </div>
  );
};
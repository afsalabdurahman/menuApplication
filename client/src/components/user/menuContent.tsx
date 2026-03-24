import { FC } from 'react';
import { MenuCategory } from './menuCategory';

type Props = {
  activeMenu: any;
};

export const MenuContent: FC<Props> = ({ activeMenu }) => {
  if (!activeMenu) {
    return <div className="menu-inner p-12 text-center">Loading menu...</div>;
  }

  // Your current API returns items directly under the menu (not grouped by category)
  // So we treat the whole menu as one big section for now
  const fakeCategory = {
    category: activeMenu.name?.toUpperCase() || "MENU",
    items: activeMenu.items || [],
  };

  return (
    <div className="menu-inner">
      <img className="corner-img tl" src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80" alt="" />
      <img className="corner-img tr" src="https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80" alt="" />

      {/* Render as single category for now */}
      <MenuCategory category={fakeCategory} index={0} />
    </div>
  );
};
import { FC } from 'react';
import { Menu } from '../../types/menu';
import {MenuCategory} from './menuCategory';

type Props = {
  activeMenu: Menu;
};

export const MenuContent: FC<Props> = ({ activeMenu }) => {
  return (
    <div className="menu-inner">
      <img className="corner-img tl" src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80" alt="" />
      <img className="corner-img tr" src="https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80" alt="" />

      {activeMenu.sections.map((section, idx) => (
        <MenuCategory key={section.category} category={section} index={idx} />
      ))}
    </div>
  );
};


import { FC } from 'react';
import { MenuCategory as CategoryType } from '../../types/menu';
import {MenuItem} from './menuItems';

type Props = {
  category: CategoryType;
  index: number;
};

export const MenuCategory: FC<Props> = ({ category, index }) => {
  const isAlt = index % 2 === 1;

  return (
    <div className="cat-section" style={{ animationDelay: `${index * 0.08}s` }}>
      <div className="cat-left">
        <div className={`cat-name ${isAlt ? 'alt' : ''}`}>{category.category}</div>
        {isAlt && <p className="cat-note">Option to add protein</p>}
        <div className="cat-divider" />
      </div>

      <div className="cat-right">
        {category.items.map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
};


import { FC } from 'react';
import { MenuItem } from './menuItems';

type Props = {
  category: {
    category: string;
    items: Array<{
      id: string;
      name: string;
      description: string;
      price: number;
    }>;
  };
  index: number;
};

export const MenuCategory: FC<Props> = ({ category, index }) => {
  const isAlt = index % 2 === 1;

  return (
    <div className="cat-section" style={{ animationDelay: `${index * 0.08}s` }}>
      <div className="cat-left">
        <div className={`cat-name ${isAlt ? 'alt' : ''}`}>
          {category.category}
        </div>
        {isAlt && <p className="cat-note">Option to add protein</p>}
        <div className="cat-divider" />
      </div>

      <div className="cat-right">
        {category.items?.length > 0 ? (
          category.items.map((item) => (
            <MenuItem key={item.id || item.name} item={item} />
          ))
        ) : (
          <p className="py-8 text-center text-gray-500">No items found in this menu</p>
        )}
      </div>
    </div>
  );
};
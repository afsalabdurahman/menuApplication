import { FC } from 'react';
import { MenuItem as MenuItemType } from '../../types/menu';

type Props = {
  item: MenuItemType;
};

export const MenuItem: FC<Props> = ({ item }) => {
  return (
    <div className="menu-item">
      <div className="item-row">
        <span className="item-name">{item.name}</span>
        <span className="item-dots" />
        <span className="item-price">${String(item.price).padStart(2, '0')}</span>
      </div>
      <p className="item-desc">{item.description}</p>
    </div>
  );
};


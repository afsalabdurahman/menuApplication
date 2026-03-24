import { FC } from 'react';

type Props = {
  item: {
    id?: string;
    name: string;
    description: string;
    price: number;
  };
};

export const MenuItem: FC<Props> = ({ item }) => {
  return (
    <div className="menu-item">
      <div className="item-row">
        <span className="item-name">{item.name}</span>
        <span className="item-dots" />
        <span className="item-price">${Number(item.price).toFixed(2)}</span>
      </div>
      <p className="item-desc">{item.description}</p>
    </div>
  );
};
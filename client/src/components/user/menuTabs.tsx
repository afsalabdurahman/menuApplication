import { FC } from 'react';
import { Menu } from '../../types/menu';

type Props = {
  menus: Menu[];
  activeId: string;
  onChange: (id: string) => void;
};

export const MenuTabs: FC<Props> = ({ menus, activeId, onChange }) => {
  return (
    <div className="tabs-wrap">
      {menus.map((m) => (
        <button
          key={m.id}
          className={`tab-btn ${activeId === m.id ? 'active' : ''}`}
          onClick={() => onChange(m.id)}
        >
          {m.label}
        </button>
      ))}
    </div>
  );
};


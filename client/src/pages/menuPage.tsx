import { useState } from 'react';
import {Navbar} from '../components/layout/navebar';
import {Hero} from '../components/layout/hero';
import {MenuTabs} from '../components/user/menuTabs';
import {MenuContent} from '../components/user/menuContent';
import { MENUS } from '../data/menu';


export const  MenuPage=()=> {
  const [activeId, setActiveId] = useState('drinks');
  const activeMenu = MENUS.find((m) => m.id === activeId)!;

  return (
   
   
    <div className="page">
      
    

      <Hero />

      <MenuTabs
        menus={MENUS}
        activeId={activeId}
        onChange={setActiveId}
      />

      <section className="menu-content">
        <MenuContent activeMenu={activeMenu} />
      </section>

      <div className="order-wrap">
        <button className="order-btn">ORDER ONLINE</button>
      </div>

      {/* Footer component can be extracted similarly */}
   
    </div>
   
  );
}
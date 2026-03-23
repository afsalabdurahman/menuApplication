import { FC } from 'react';

export const Hero: FC = () => {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-pattern" />
      <img className="hero-img-left" src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80" alt="" />
      <img className="hero-img-right" src="https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80" alt="" />

      <div className="hero-content">
        <h1 className="hero-title">MENU</h1>
        <div className="hero-underline" />
        <p className="hero-sub">
          Please take a look at our menu featuring food, drinks, and brunch. If you'd like to
          place an order, use the "Order Online" button located below the menu.
        </p>
      </div>
    </section>
  );
};


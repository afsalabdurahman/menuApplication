import { useState } from "react";

/* ─── TYPES ─────────────────────────────────────── */
interface MenuItem {
  name: string;
  description: string;
  price: number;
}
interface MenuCategory {
  category: string;
  items: MenuItem[];
}
interface Menu {
  id: string;
  label: string;
  sections: MenuCategory[];
}

/* ─── MOCK DATA (replace with API fetch) ────────── */
const MENUS: Menu[] = [
  {
    id: "food",
    label: "FOOD",
    sections: [
      {
        category: "APPETIZERS",
        items: [
          { name: "FIRE CRACKER SALMON", description: "Broiled Cajun salmon bites – topped with bang bang sauce, red peppers and green chiles", price: 16 },
          { name: "LAMB CHOPS", description: "Garlic and rosemary marinated lamb chops topped with our signature ground mustard sauce.", price: 26 },
          { name: "FRIED RED SNAPPER BITES", description: "Deep fried red snapper, served with a house made Cajun remoulade.", price: 18 },
        ],
      },
      {
        category: "SALADS",
        items: [
          { name: "HOUSE SALAD WITH BEANS", description: "Fresh garden greens, house beans, cherry tomatoes, red onion with vinaigrette.", price: 6 },
          { name: "CAESAR SALAD", description: "Crisp romaine, parmesan, house-made caesar dressing, croutons. Option to add protein.", price: 8 },
        ],
      },
      {
        category: "SIDES",
        items: [
          { name: "SWEET POTATO FRIES", description: "Crispy seasoned sweet potato fries served with chipotle dipping sauce.", price: 7 },
          { name: "SAUTÉED VEGETABLES", description: "Seasonal vegetables sautéed in garlic butter and fresh herbs.", price: 6 },
        ],
      },
    ],
  },
  {
    id: "drinks",
    label: "DRINKS",
    sections: [
      {
        category: "COCKTAILS",
        items: [
          { name: "OLD FASHIONED", description: "Bourbon, angostura bitters, orange peel, demerara sugar, large ice cube.", price: 14 },
          { name: "ESPRESSO MARTINI", description: "Vodka, kahlúa, fresh espresso, vanilla syrup, shaken to a frothy finish.", price: 15 },
          { name: "PASSION FRUIT MOJITO", description: "White rum, fresh lime, mint, passion fruit purée, soda water.", price: 13 },
        ],
      },
      {
        category: "WINES",
        items: [
          { name: "CABERNET SAUVIGNON", description: "Rich, full-bodied red with notes of black cherry, cedar and vanilla. Glass / Bottle.", price: 12 },
          { name: "SAUVIGNON BLANC", description: "Crisp, aromatic white with citrus and tropical fruit notes. Glass / Bottle.", price: 11 },
        ],
      },
      {
        category: "NON-ALCOHOLIC",
        items: [
          { name: "VIRGIN MOJITO", description: "Fresh lime, mint, sugar syrup, soda water, cucumber ribbons.", price: 7 },
          { name: "HOUSE LEMONADE", description: "Freshly squeezed lemons, mint, honey syrup, still or sparkling water.", price: 6 },
        ],
      },
    ],
  },
  {
    id: "brunch",
    label: "BRUNCH",
    sections: [
      {
        category: "SIGNATURES",
        items: [
          { name: "EGGS BENEDICT", description: "Poached eggs on toasted brioche with Canadian bacon and house hollandaise sauce.", price: 16 },
          { name: "AVOCADO TOAST", description: "Smashed avocado, poached egg, chili flakes, microgreens on sourdough.", price: 14 },
          { name: "FRENCH TOAST", description: "Thick-cut brioche, maple syrup, fresh berries, whipped mascarpone.", price: 13 },
        ],
      },
      {
        category: "BOWLS",
        items: [
          { name: "ACAI BOWL", description: "Blended acai, banana, granola, fresh berries, honey drizzle, coconut flakes.", price: 12 },
          { name: "SHAKSHUKA", description: "Poached eggs in spiced tomato and pepper sauce, served with pita bread.", price: 15 },
        ],
      },
    ],
  },
];

/* ─── COMPONENT ─────────────────────────────────── */
export const MenuPage=()=> {
  const [activeId, setActiveId] = useState("drinks");
  const activeMenu = MENUS.find((m) => m.id === activeId)!;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --gold: #c9a84c; --gold-light: #e8c97a; --gold-dim: #7a6230;
          --red: #8b1a1a; --bg: #111111; --bg2: #181818;
          --border: #2a2a2a; --text: #e0e0e0; --dim: #777;
        }
        .page { min-height: 100vh; background: var(--bg); font-family: 'Raleway', sans-serif; color: var(--text); }

        /* NAVBAR */
        .navbar { display: flex; align-items: center; justify-content: space-between; padding: 0 48px; height: 72px; background: rgba(10,10,10,0.95); border-bottom: 1px solid var(--border); position: sticky; top: 0; z-index: 200; backdrop-filter: blur(10px); }
        .nav-logo { font-size: 20px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; }
        .nav-logo .d { color: var(--gold); } .nav-logo .n { color: #fff; }
        .nav-links { display: flex; gap: 36px; list-style: none; align-items: center; }
        .nav-links a { color: var(--dim); text-decoration: none; font-size: 11px; letter-spacing: 2.5px; font-weight: 700; text-transform: uppercase; transition: color 0.2s; }
        .nav-links a:hover { color: var(--text); }
        .nav-links a.active { color: var(--gold); }

        /* HERO */
        .hero { position: relative; min-height: 320px; display: flex; flex-direction: column; align-items: center; justify-content: center; overflow: hidden; background: #0c0c0c; }
        .hero-bg { position: absolute; inset: 0; background: radial-gradient(ellipse 80% 60% at 50% 50%, rgba(30,20,10,0.5), rgba(10,10,10,0.92)), url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=80') center/cover no-repeat; }
        .hero-pattern { position: absolute; inset: 0; background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c9a84c' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E"); }
        .hero-img-left, .hero-img-right { position: absolute; bottom: 0; width: 200px; height: 180px; object-fit: cover; opacity: 0.75; }
        .hero-img-left { left: 0; } .hero-img-right { right: 0; }
        .hero-content { position: relative; text-align: center; padding: 48px 24px 36px; }
        .hero-title { font-family: 'Cinzel', serif; font-size: clamp(44px, 8vw, 82px); font-weight: 900; color: #fff; letter-spacing: 12px; text-transform: uppercase; line-height: 1; text-shadow: 0 2px 30px rgba(0,0,0,0.9); }
        .hero-underline { width: 72px; height: 4px; background: #8b1a1a; margin: 14px auto; }
        .hero-sub { font-size: 13px; color: #aaa; letter-spacing: 0.5px; max-width: 540px; line-height: 1.75; margin: 0 auto; }

        /* TABS */
        .tabs-wrap { display: flex; justify-content: center; padding: 32px 24px 0; background: var(--bg2); border-bottom: 1px solid var(--border); }
        .tab-btn { padding: 14px 52px; border: 1px solid var(--border); background: transparent; color: var(--dim); font-family: 'Raleway', sans-serif; font-size: 13px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; cursor: pointer; transition: all 0.2s; position: relative; top: 1px; margin: 0 -1px; }
        .tab-btn:hover { color: var(--text); border-color: #444; }
        .tab-btn.active { background: var(--gold); color: #111; border-color: var(--gold); z-index: 1; }

        /* MENU CONTENT */
        .menu-content { background: var(--bg2); min-height: 600px; }
        .menu-inner { max-width: 1100px; margin: 0 auto; padding: 0 48px 80px; position: relative; }
        .corner-img { position: absolute; width: 190px; height: 155px; object-fit: cover; opacity: 0.7; }
        .corner-img.tl { top: 0; left: 0; } .corner-img.tr { top: 0; right: 0; }

        /* CATEGORY */
        .cat-section { display: grid; grid-template-columns: 280px 1fr; border: 1px solid var(--border); border-top: none; }
        .cat-section:first-child { border-top: 1px solid var(--border); margin-top: 48px; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(14px); } to { opacity:1; transform:translateY(0); } }
        .cat-section { animation: fadeUp 0.35s ease both; }
        .cat-section:nth-child(2) { animation-delay:.08s; } .cat-section:nth-child(3) { animation-delay:.16s; }

        .cat-left { padding: 48px 32px; border-right: 1px solid var(--border); position: relative; }
        .cat-name { font-family: 'Cinzel', serif; font-size: clamp(22px,3vw,30px); font-weight: 700; color: var(--gold); letter-spacing: 2px; text-transform: uppercase; font-style: italic; line-height: 1.1; }
        .cat-name.alt { background: #8b1a1a; color: #fff; padding: 8px 18px; font-style: normal; font-size: clamp(17px,2.5vw,24px); display: inline-block; }
        .cat-note { margin-top: 10px; font-size: 11px; color: var(--dim); letter-spacing: 1px; font-style: italic; }
        .cat-divider { position: absolute; right: -1px; top: 20px; bottom: 20px; width: 1px; background: linear-gradient(180deg, transparent, rgba(201,168,76,0.4), transparent); }

        .cat-right { padding: 40px 40px 40px 48px; }
        .menu-item { margin-bottom: 26px; padding-bottom: 26px; border-bottom: 1px solid rgba(255,255,255,0.04); }
        .menu-item:last-child { margin-bottom:0; padding-bottom:0; border-bottom:none; }
        .item-row { display: flex; align-items: baseline; margin-bottom: 6px; gap: 0; }
        .item-name { font-family: 'Cinzel', serif; font-size: 15px; font-weight: 600; color: #fff; letter-spacing: 1px; white-space: nowrap; }
        .item-dots { flex:1; border-bottom: 1px dotted #333; margin: 0 10px; position: relative; top: -4px; min-width: 20px; }
        .item-price { font-family: 'Cinzel', serif; font-size: 15px; font-weight: 600; color: #fff; white-space: nowrap; }
        .item-desc { font-size: 12px; color: #5e5e5e; line-height: 1.65; max-width: 540px; letter-spacing: 0.2px; }

        /* ORDER BTN */
        .order-wrap { display: flex; justify-content: center; padding: 52px 24px 72px; background: var(--bg2); }
        .order-btn { padding: 17px 64px; background: transparent; border: 2px solid var(--gold); color: var(--gold); font-family: 'Raleway', sans-serif; font-size: 13px; font-weight: 700; letter-spacing: 4px; text-transform: uppercase; cursor: pointer; transition: all 0.25s; }
        .order-btn:hover { background: var(--gold); color: #111; }

        /* FOOTER */
        footer { background: #0a0a0a; border-top: 1px solid var(--border); padding: 40px 48px; display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 32px; }
        .f-logo { font-size: 18px; font-weight: 700; letter-spacing: 3px; }
        .f-logo .d { color: var(--gold); } .f-logo .n { color: #fff; }
        .f-tag { font-size: 11px; color: var(--dim); margin-top: 8px; letter-spacing: 1px; }
        .f-links { display: flex; flex-direction: column; gap: 10px; }
        .f-links a { color: var(--dim); text-decoration: none; font-size: 12px; letter-spacing: 1.5px; text-transform: uppercase; font-weight: 600; transition: color 0.2s; }
        .f-links a:hover { color: var(--gold); }
        .f-copy { font-size: 11px; color: #333; letter-spacing: 1px; text-align: right; }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .navbar { padding: 0 16px; }
          .nav-links { gap: 14px; }
          .nav-links a { font-size: 9px; letter-spacing: 1px; }
          .hero-img-left, .hero-img-right { width: 100px; height: 100px; }
          .tab-btn { padding: 11px 18px; font-size: 11px; letter-spacing: 1.5px; }
          .menu-inner { padding: 0 0 48px; }
          .cat-section { grid-template-columns: 1fr; }
          .cat-left { padding: 20px; border-right: none; border-bottom: 1px solid var(--border); }
          .cat-right { padding: 20px; }
          .corner-img { display: none; }
          footer { grid-template-columns: 1fr; padding: 28px 20px; }
          .f-copy { text-align: left; }
        }
      `}</style>

      <div className="page">
        {/* NAVBAR */}
        <nav className="navbar">
          <div className="nav-logo"><span className="d">DEEP</span><span className="n">NETSOFT</span></div>
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
            <polygon points="26,3 45,14 45,38 26,49 7,38 7,14" fill="none" stroke="#c9a84c" strokeWidth="1.5"/>
            <polygon points="26,9 38,17 38,35 26,43 14,35 14,17" fill="#c9a84c" opacity="0.12"/>
            <text x="26" y="30" textAnchor="middle" fill="#c9a84c" fontSize="15" fontWeight="bold" fontFamily="serif">D</text>
          </svg>
          <ul className="nav-links">
            <li><a href="/">HOME</a></li>
            <li><a href="/menu" className="active">MENU</a></li>
            <li><a href="/reservation">MAKE A RESERVATION</a></li>
            <li><a href="/contact">CONTACT US</a></li>
          </ul>
        </nav>

        {/* HERO */}
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

        {/* TABS */}
        <div className="tabs-wrap">
          {MENUS.map((m) => (
            <button key={m.id} className={`tab-btn ${activeId === m.id ? "active" : ""}`} onClick={() => setActiveId(m.id)}>
              {m.label}
            </button>
          ))}
        </div>

        {/* MENU BODY */}
        <section className="menu-content">
          <div className="menu-inner">
            <img className="corner-img tl" src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80" alt="" />
            <img className="corner-img tr" src="https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80" alt="" />

            {activeMenu.sections.map((sec, si) => (
              <div className="cat-section" key={sec.category} style={{ animationDelay: `${si * 0.1}s` }}>
                <div className="cat-left">
                  <div className={`cat-name ${si % 2 === 1 ? "alt" : ""}`}>{sec.category}</div>
                  {si % 2 === 1 && <p className="cat-note">Option to add protein</p>}
                  <div className="cat-divider" />
                </div>
                <div className="cat-right">
                  {sec.items.map((item) => (
                    <div className="menu-item" key={item.name}>
                      <div className="item-row">
                        <span className="item-name">{item.name}</span>
                        <span className="item-dots" />
                        <span className="item-price">${String(item.price).padStart(2, "0")}</span>
                      </div>
                      <p className="item-desc">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ORDER ONLINE */}
        <div className="order-wrap">
          <button className="order-btn">ORDER ONLINE</button>
        </div>

        {/* FOOTER */}
        <footer>
          <div>
            <div className="f-logo"><span className="d">DEEP</span><span className="n">NETSOFT</span></div>
            <p className="f-tag">Fine dining, unforgettable flavours.</p>
          </div>
          <div className="f-links">
            <a href="/">Home</a>
            <a href="/menu">Menu</a>
            <a href="/reservation">Reservations</a>
            <a href="/contact">Contact</a>
          </div>
          <p className="f-copy">© 2024 DeepNetSoft.<br />All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
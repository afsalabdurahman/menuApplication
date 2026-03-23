import { useState } from "react";
import { MenuItem } from "../../types/menu";
import { MenuForm } from "../../types/menu";


const initialForm: MenuForm = {
  name: "",
  description: "",
  items: [],
};

const emptyItem = (): MenuItem => ({
  name: "",
  description: "",
  price: "",
});

export const  MenuCreate=()=> {
  const [form, setForm] = useState<MenuForm>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"menu" | "items">("menu");

  const addItem = () => {
    setForm((f) => ({ ...f, items: [...f.items, emptyItem()] }));
    setActiveTab("items");
  };





  const handleSubmit = async () => {
    if (!form.name.trim()) return;
    setLoading(true);
    // Replace with your actual API call:
    // await fetch('/api/menus', { method: 'POST', body: JSON.stringify(form) })
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm(initialForm);
    setSubmitted(false);
    setActiveTab("menu");
  };

  return (
    <>
      

      <div className="page">
       

        {/* HERO */}
        <div className="hero-strip">
          <h1>CREATE <span>MENU</span></h1>
          <p>Add a new menu and populate it with items</p>
          <div className="gold-line" />
        </div>

        <main>
          {submitted ? (
            <div className="success-screen">
              <div className="success-icon">✓</div>
              <h2>MENU CREATED</h2>
              <p>
                <strong style={{ color: "#fff" }}>"{form.name}"</strong> has been saved
                {form.items.length > 0 && ` with ${form.items.length} item${form.items.length > 1 ? "s" : ""}`}.
              </p>
              <div className="success-actions">
                <button className="btn btn-gold btn-lg" onClick={() => window.location.href = "/menu"}>
                  VIEW MENU
                </button>
                <button className="btn btn-outline btn-lg" onClick={handleReset}>
                  CREATE ANOTHER
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* STEP TABS */}
              <div className="step-tabs">
                <button
                  className={`step-tab ${activeTab === "menu" ? "active" : ""}`}
                  onClick={() => setActiveTab("menu")}
                >
                  <span className="badge">1</span>
                  MENU DETAILS
                </button>
                <button
                  className={`step-tab ${activeTab === "items" ? "active" : ""}`}
                  onClick={() => setActiveTab("items")}
                >
                  <span className="badge">{form.items.length || "2"}</span>
                  MENU ITEMS
                </button>
              </div>

              {/* MENU DETAILS TAB */}
              {activeTab === "menu" && (
                <div className="card">
                  <div className="card-title">Menu Information</div>
                  <div className="field required">
                    <label>Menu Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Drinks, Food, Brunch..."
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    />
                  </div>
                  <div className="field">
                    <label>Description</label>
                    <textarea
                      placeholder="Brief description of this menu's offerings..."
                      value={form.description}
                      onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                    />
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <button
                      className="btn btn-gold"
                      onClick={() => setActiveTab("items")}
                      disabled={!form.name.trim()}
                    >
                      NEXT: ADD ITEMS →
                    </button>
                  </div>
                </div>
              )}

              {/* ITEMS TAB */}
              {activeTab === "items" && (
                <>
                  {form.items.length === 0 ? (
                    <div className="card">
                      <div className="card-title">Menu Items</div>
                      <div className="empty-items">
                        <div className="icon">🍽</div>
                        <p>No items added yet. Add your first item below.</p>
                      </div>
                      <div
                        className="add-item-row"
                        onClick={addItem}
                      >
                        <span>+ ADD FIRST ITEM</span>
                        <span style={{ fontSize: "20px" }}>+</span>
                      </div>
                    </div>
                  ) : (
                    <>
                      {form.items.map((item, index) => (
                        <div className="item-card" key={item.id}>
                          <div className="item-card-header">
                            <span className="item-num">ITEM {String(index + 1).padStart(2, "0")}</span>
                            <button className="btn btn-danger" onClick={() => removeItem(item.id)}>
                              REMOVE
                            </button>
                          </div>
                          <div className="item-grid">
                            <div className="field required">
                              <label>Item Name</label>
                              <input
                                type="text"
                                placeholder="e.g. Fire Cracker Salmon"
                                value={item.name}
                                onChange={(e) => updateItem(item.id, "name", e.target.value)}
                              />
                            </div>
                            <div className="field required">
                              <label>Price ($)</label>
                              <input
                                type="number"
                                placeholder="0.00"
                                value={item.price}
                                onChange={(e) => updateItem(item.id, "price", e.target.value)}
                              />
                            </div>
                            <div className="field full">
                              <label>Description</label>
                              <textarea
                                placeholder="Brief description of this item..."
                                value={item.description}
                                onChange={(e) => updateItem(item.id, "description", e.target.value)}
                                style={{ minHeight: "70px" }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}

                      <div className="add-item-row" onClick={addItem}>
                        <span>+ ADD ANOTHER ITEM</span>
                        <span style={{ fontSize: "20px" }}>+</span>
                      </div>
                    </>
                  )}

                  <div className="actions">
                    <button className="btn btn-outline" onClick={() => setActiveTab("menu")}>
                      ← BACK
                    </button>
                    <button
                      className="btn btn-gold btn-lg"
                      onClick={handleSubmit}
                      disabled={!form.name.trim() || loading}
                    >
                      {loading ? (
                        <>
                          <div className="spinner" />
                          SAVING...
                        </>
                      ) : (
                        "SAVE MENU"
                      )}
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </main>

        <footer>
          <span>DEEPNETSOFT</span> · All Rights Reserved © 2024
        </footer>
      </div>
    </>
  );
}
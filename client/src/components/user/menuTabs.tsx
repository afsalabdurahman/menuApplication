import { FC, useEffect, useState } from "react";
import { getCategory } from "../../apiService/menuApis";

type Category = {
  _id: string;
  name: string;
};

type Props = {
  activeId: string;
  onChange: (id: string) => void;
};

export const MenuTabs: FC<Props> = ({ activeId, onChange }) => {
  const [category, setCategory] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await getCategory(); // make sure this exists
        setCategory(response);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategory();
  }, []);

  if (category.length === 0) {
    return <div className="tabs-wrap">No menus available</div>;
  }

  return (
    <div className="tabs-wrap">
      {category.map((m) => (
        <button
          key={m._id}
          className={`tab-btn ${activeId === m.name ? "active" : ""}`}
          onClick={() => onChange(m.name)}
        >
          {m.name?.toUpperCase() || "MENU"}
        </button>
      ))}
    </div>
  );
};
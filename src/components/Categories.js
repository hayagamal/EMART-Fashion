import React from "react";
import { useNavigate } from "react-router-dom";
function Categories({ cls, img, gender, gradient, category, gen }) {
  const nav = useNavigate();
  return (
    <div onClick={() => nav(`/categories/${gen}`)} className={cls}>
      <img src={img} alt={gender} className={gender} />

      <div className={gradient}>
        <button>{category}</button>
      </div>
    </div>
  );
}

export default Categories;

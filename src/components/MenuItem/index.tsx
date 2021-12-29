import { useNavigate } from "react-router-dom";

import "./menu-item.styles.scss";

interface MenuItemProps {
  title: string;
  imageBackground: string;
  link: string;
  sizeValue?: string;
}

function MenuItem({ title, imageBackground, sizeValue, link }: MenuItemProps) {
  const navigate = useNavigate();

  return (
    <div 
      className={`${sizeValue} menu-item`}
      onClick={() => navigate(`${link}`)}
    >
      <div 
        className="background-image"  
        style={{ backgroundImage: `url(${imageBackground})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP</span>
      </div>
    </div>
  );
}

export default MenuItem;

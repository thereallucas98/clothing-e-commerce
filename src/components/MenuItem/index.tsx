import "./menu-item.styles.scss";

interface MenuItemProps {
  title: string;
  imageBackground: string;
  sizeValue?: string;
}

function MenuItem({ title, imageBackground, sizeValue }: MenuItemProps) {
  return (
    <div 
      className={`${sizeValue} menu-item`}
      style={{ backgroundImage: `url(${imageBackground})` }}
    >
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP</span>
      </div>
    </div>
  );
}

export default MenuItem;

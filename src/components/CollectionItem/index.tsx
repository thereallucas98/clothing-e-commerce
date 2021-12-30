import "./collection-item.styles.scss";

type CollectionItemProps = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

function CollectionItem({ id, name, imageUrl, price }: CollectionItemProps) {
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
}

export default CollectionItem;

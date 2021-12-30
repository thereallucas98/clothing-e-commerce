import "./collection-item.styles.scss";

type CollectionItem = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

function CollectionItem({ id, name, imageUrl, price }: CollectionItem) {
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

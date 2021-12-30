import CollectionItem from "../CollectionItem";

import "./preview-collection.styles.scss";

type CollectionItemProps = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

type Collection = {
  // id: number;
  title: string;
  // routeName: string;
  items: CollectionItemProps[];
}

function PreviewCollection({ title, items }: Collection) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {
          items.filter((item, index) => index < 4).map((item) => (
            <CollectionItem 
              key={item.id} 
              id={item.id} 
              name={item.name} 
              imageUrl={item.imageUrl} 
              price={item.price} 
            />
          ))
        }
      </div>
    </div>
  );
}

export default PreviewCollection;

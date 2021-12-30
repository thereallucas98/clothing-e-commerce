import "./preview-collection.styles.scss";

type CollectionItem = {
  id: number;
  name: string;
  // imageUrl: string;
  // price: number;
}

type Collection = {
  // id: number;
  title: string;
  // routeName: string;
  items: CollectionItem[];
}

function PreviewCollection({ title, items }: Collection) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {
          items.filter((item, index) => index < 4).map((item) => (
            <div key={item.id}>{item.name}</div>
          ))
        }
      </div>
    </div>
  );
}

export default PreviewCollection;

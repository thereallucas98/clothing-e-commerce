import { useEffect, useState } from "react";

import PreviewCollection from "../../components/PreviewCollection";

import SHOP_DATA from "../../assets/data/shop.data";

type CollectionItem = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

type Collection = {
  id: number;
  title: string;
  routeName: string;
  items: CollectionItem[];
}

function ShopPage() {
  const [shopData, setShopData] = useState<Collection[]>();

  useEffect(() => {
    const collections = SHOP_DATA;
    setShopData(collections);
  }, []);

  return (
    <div className="shop-page">
      {
        shopData?.map((shop) => (
          <PreviewCollection key={shop.id} title={shop.title} items={shop.items} />
        ))
      }
    </div>
  );
}

export default ShopPage;

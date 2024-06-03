import React from 'react';
import styles from './GarmentShop.module.css';
import Navbar from './Navbar';
// Mock data for the collections
const collections = {
  'Gul Ahmed': [
    { id: 1, name: 'Summer Collection', image: 'https://www.gulahmedshop.com/media/catalog/product/g/t/gtyu898ioikjhnbgftyui8okjhbgftyu8iokjnhbgyuiokjmnhbgvyhuikjnhbgyui_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&canvas=2:3&height=825&width=550' },
    { id: 2, name: 'Winter Collection', image: 'https://www.gulahmedshop.com/media/catalog/product/b/l/blue_styling_kurta_kr-sty24-027_5_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&canvas=2:3&height=825&width=550' },
  ],
  Khadi: [
    { id: 1, name: 'Cotton', image: 'https://pk.khaadi.com/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw693d8d6b/images/0.0-Gardenia-promo.gif' },
    { id: 2, name: 'Unstitched', image: 'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw11b4c159/images/hi-res/bme240201_turquoise_1.jpg?sw=800&sh=1200' },
  ],
  Bonanza_Satrangi: [
    { id: 1, name: 'Sale', image: 'https://cdn.shopify.com/s/files/1/0464/1731/3955/files/USGZB23-03b_360x.jpg?v=1708759872' },
    { id: 2, name: 'Fabric', image: 'https://bonanzasatrangi.com/cdn/shop/files/SS2243P05_1_360x.jpg?v=1707192945' },
  ],
  Nike: [
    { id: 1, name: 'Sportswear', image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5abc9cb0-edc6-4dfd-9e8f-033b3939a146/academy-dri-fit-football-tracksuit-MSxfJK.png' },
    { id: 2, name: 'Jackets', image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54308f2e-37bd-462a-9f06-0d86c81dc0a5/windrunner-primaloft-hooded-puffer-jacket-lJB180.png' },
  ],
  "J.": [
    { id: 1, name: 'Eid Collection', image: 'https://www.junaidjamshed.com/media/wysiwyg/f-s15.jpg' },
    { id: 2, name: 'Qameez Shalwar', image: 'https://www.junaidjamshed.com/media/catalog/product/j/t/jtks-s-46230_3_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755' },
  ],
};

// Collection component to display individual brand collections
const Collection = ({ brand, items }) => (
  <div className={styles.brand}>
    <h2 className={styles.brandTitle}>{brand}</h2>
    <div className={styles.collectionContainer}>
      {items.map(item => (
        <div key={item.id} className={styles.collectionItem}>
          <img src={item.image} alt={item.name} />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  </div>
);

// Main component to display all collections
const GarmentShop = () => {
  return (
    <>
    <Navbar />
    <div className={styles.container}>
      <h1 className={styles.header}>Collections</h1>
      {Object.entries(collections).map(([brand, items]) => (
        <Collection key={brand} brand={brand} items={items} />
      ))}
    </div>
    </>
  );
};

export default GarmentShop;
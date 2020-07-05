import React, { useState } from "react";

import { Page, Navbar } from "framework7-react";
import MyCard from "../components.jsx/MyCard";

const HomePage = () => {
  const [items, setItems] = useState([...Array(5).keys()]);
  const [allowInfinite, setAllowInfinite] = useState(true);
  const [showPreloader, setShowPreloader] = useState(true);

  const _loadMore = () => {
    if (!allowInfinite) return;
    setAllowInfinite(false);

    setTimeout(() => {
      const tmpItems = items;

      if (tmpItems.length >= 50) {
        setShowPreloader(false);
        return;
      }

      const itemsLength = tmpItems.length;

      for (let i = 0; i <= 4; i += 1) {
        tmpItems.push(itemsLength + i);
      }

      setItems(tmpItems);
      setAllowInfinite(true);
    }, 500);
  };

  return (
    <Page
      infinite
      infiniteDistance={50}
      infinitePreloader={showPreloader}
      onInfinite={_loadMore}
    >
      <Navbar title="Home" />
      {items.map((item, index) => {
        return <MyCard key={index} index={item} />;
      })}
    </Page>
  );
};

export default HomePage;

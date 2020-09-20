import * as React from "react";

export default function ShoppingCard() {
  return (
    <div className="shopping-cart">
      {/* header */}
      <Header />
      <main>
        <div className="products-list">{/* show products here*/}</div>
      </main>
    </div>
  );
}

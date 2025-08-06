import React, { useState } from "react";
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";

function App() {
	const [cart, setCart] = useState([]);

	const addToCart = (product) => {
		setCart([...cart, product]);
	};

	return (
		<div style={{ padding: "2rem" }}>
			<h1>🛍️ Simple E-Commerce Store</h1>

			<div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
				{products.map((product) => (
					<ProductCard
						key={product.id}
						product={product}
						addToCart={addToCart}
					/>
				))}
			</div>

			<Cart cart={cart} />
		</div>
	);
}

export default App;

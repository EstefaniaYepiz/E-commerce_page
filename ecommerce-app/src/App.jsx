import React, { useState, useEffect } from "react";
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";

function App() {
	const [cart, setCart] = useState([]);
	const [orderPlaced, setOrderPlaced] = useState(() => {
		return localStorage.getItem("orderPlaced") === "true";
	});
	useEffect(() => {
		const storedCart = localStorage.getItem("cart");
		if (storedCart) {
			console.log("🔍 Loading cart from localStorage:", storedCart);
			setCart(JSON.parse(storedCart));
			setOrderPlaced(false);
		} else {
			console.log("🛒 No cart in localStorage");
		}
	}, []);

	useEffect(() => {
		console.log("💾 Saving cart to localStorage:", cart);
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]);

	const addToCart = (product) => {
		setCart([...cart, product]);
	};

	const removeFromCart = (indexToRemove) => {
		setCart(cart.filter((_, index) => index !== indexToRemove));
	};

	const handleOrderSubmit = () => {
		setCart([]);
		setOrderPlaced(true);
		localStorage.removeItem("cart");
		localStorage.setItem("orderPlaced", "true");
	};

	return (
		<div className="container">
			<h1>🛍️ Simple E-Commerce Store</h1>

			<div className="product-grid">
				{products.map((product) => (
					<ProductCard
						key={product.id}
						product={product}
						addToCart={addToCart}
					/>
				))}
			</div>

			<Cart cart={cart} removeFromCart={removeFromCart} />

			{orderPlaced ? (
				<h2 style={{ color: "green", marginTop: "2rem" }}>
					🎉 Thank you for your order!
				</h2>
			) : (
				<CheckoutForm cart={cart} onSubmit={handleOrderSubmit} />
			)}
		</div>
	);
}

export default App;

import React, { useState, useEffect } from "react";
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";

function App() {
	const [cart, setCart] = useState([]);
	const [orderPlaced, setOrderPlaced] = useState(false);
	const [cartLoaded, setCartLoaded] = useState(false);

	useEffect(() => {
		const storedCart = localStorage.getItem("cart");
		if (storedCart) {
			const parsedCart = JSON.parse(storedCart);
			setCart(parsedCart);

			if (parsedCart.length > 0) {
				setOrderPlaced(false);
			}
		}
		setCartLoaded(true);
	}, []);

	useEffect(() => {
		if (cartLoaded) {
			localStorage.setItem("cart", JSON.stringify(cart));
			console.log("Saving cart to localStorage:", cart);
		}
	}, [cart, cartLoaded]);

	if (!cartLoaded) return <p>Loading...</p>;

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
		localStorage.removeItem("orderPlaced");
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

			{orderPlaced && cart.length === 0 ? (
				<h2 style={{ color: "green", marginTop: "2rem" }}>
					Thank you for your order!
				</h2>
			) : (
				<CheckoutForm cart={cart} onSubmit={handleOrderSubmit} />
			)}
		</div>
	);
}

export default App;

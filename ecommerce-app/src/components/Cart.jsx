import React from "react";

const Cart = ({ cart, removeFromCart }) => {
	const total = cart.reduce((sum, item) => sum + item.price, 0);

	return (
		<div style={{ marginTop: "2rem" }}>
			<h2>🛒 Cart</h2>
			{cart.length === 0 ? (
				<p>Your cart is empty.</p>
			) : (
				<>
					<ul>
						{cart.map((item, index) => (
							<li key={index} style={{ marginBottom: "10px" }}>
								{item.name} - ${item.price.toFixed(2)}{" "}
								<button onClick={() => removeFromCart(index)}>Remove</button>
							</li>
						))}
					</ul>
					<h3>Total: ${total.toFixed(2)}</h3>
				</>
			)}
		</div>
	);
};

export default Cart;

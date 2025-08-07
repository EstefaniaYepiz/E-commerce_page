import React from "react";

function Cart({ cart, removeFromCart }) {
	console.log("🧾 Cart received in component:", cart);

	return (
		<div style={{ marginTop: "2rem" }}>
			<h2>Your Cart</h2>
			<p>Items in cart: {cart.length}</p>

			{cart.length === 0 ? (
				<p>No items in cart.</p>
			) : (
				<ul>
					{cart.map((item, index) => (
						<li key={index}>
							{item.name} - ${item.price.toFixed(2)}{" "}
							<button onClick={() => removeFromCart(index)}>Remove</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default Cart;

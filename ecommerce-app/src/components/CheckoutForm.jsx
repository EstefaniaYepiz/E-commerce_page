import React, { useState } from "react";

const CheckoutForm = ({ cart, onSubmit }) => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		address: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!cart.length) {
			alert("Your cart is empty.");
			return;
		}

		console.log("Order submitted:", formData, cart);
		onSubmit();
	};

	return (
		<form onSubmit={handleSubmit} style={{ marginTop: "2rem" }}>
			<h2>Checkout</h2>

			<div style={{ marginBottom: "1rem" }}>
				<label>Name:</label>
				<br />
				<input
					type="text"
					name="name"
					value={formData.name}
					onChange={handleChange}
					required
				/>
			</div>

			<div style={{ marginBottom: "1rem" }}>
				<label>Email:</label>
				<br />
				<input
					type="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					required
				/>
			</div>

			<div style={{ marginBottom: "1rem" }}>
				<label>Address:</label>
				<br />
				<textarea
					name="address"
					value={formData.address}
					onChange={handleChange}
					required
				/>
			</div>

			<button type="submit">Place Order</button>
		</form>
	);
};

export default CheckoutForm;

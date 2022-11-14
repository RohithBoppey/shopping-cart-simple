import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

import "./Bill.css";

const Bill = (props) => {
	const navigate = useNavigate();

	const calculateTotal = () => {
		let total = 0;
		props.dishes.forEach((dish) => {
			total += dish.price * dish.count;
		});
		return total;
	};

	const submitHandler = () => {
		const text = `\n\nYour bill is: $${calculateTotal()}\n\nYour items are: \n${props.dishes.map(
			(dish) => {
				return `${dish.name} - ${dish.count}\n`;
			}
		)}\nDelivering to ${
			addressRef.current.value
		}\n\nThank you for shopping with us!\nHoping to see you soon Customer.`;
		alert(text);
		props.clearCart();
		navigate("/show-cart");
	};

	const addressRef = useRef();

	return (
		<div className="body">
			<form class="checkout" onsubmit="return false">
				<div class="checkout-header">
					<h1 class="checkout-title">
						Checkout Form
						<span class="checkout-price">
							$ &nbsp;{calculateTotal()}
						</span>
					</h1>
				</div>
				<p>
					<input
						type="text"
						class="checkout-input checkout-name"
						placeholder="Your name"
						autofocus
					/>
					<input
						type="text"
						class="checkout-input checkout-exp"
						placeholder="MM"
					/>
					<input
						type="text"
						class="checkout-input checkout-exp"
						placeholder="YY"
					/>
				</p>
				<p>
					<input
						type="text"
						class="checkout-input checkout-card"
						placeholder="4111 1111 1111 1111"
					/>
					<input
						type="text"
						class="checkout-input checkout-cvc"
						placeholder="CVC"
					/>
				</p>
				<p>
					<input
						type="text"
						class="checkout-input address"
						placeholder="Address"
					/>
				</p>
				<p>
					<input
						type="submit"
						value="Purchase"
						class="checkout-btn"
						onClick={submitHandler}
						ref={addressRef}
					/>
				</p>
			</form>
		</div>
	);
};

export default Bill;

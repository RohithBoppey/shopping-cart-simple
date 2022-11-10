import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Navbar/Navbar";

import "./Cart.css";

import { useNavigate } from "react-router-dom";

const Cart = (props) => {
	// console.log(props.cart);

	let initialDishes = [];

	props.cart.forEach((dish) => {
		initialDishes.push({ ...dish, count: 1 });
	});

	const [dishes, setDishes] = useState(initialDishes);

	const [total, setTotal] = useState(0);

	const navigate = useNavigate();

	const inputRef = useRef(new Array());

	const calculateTotal = () => {
		let t = 0;
		dishes.forEach((dish) => {
			t += dish.price * dish.count;
		});
		setTotal(t);
	};

	useEffect(() => {
		calculateTotal();
	});

	const changeHandler = (id) => {
		setDishes((prevDishes) => {
			const index = prevDishes.findIndex((obj) => id === obj.id);
			// console.log(index);
			// console.log(inputRef);
			if (index !== -1) {
				prevDishes[index].count = parseInt(
					inputRef.current[index].value
				);
				calculateTotal();
				// console.log(prevDishes)
			}
			return prevDishes;
		});
	};

	const getDetails = (detail) => {
		// console.log(detail);
		return (
			<div className="cart-items">
				<div className="cart-row">
					<div className="cart-item cart-column">
						<span className="cart-item-title">
							{" "}
							{detail.name} &nbsp;
							<span
								style={{ fontSize: 12, fontStyle: "oblique" }}>
								({detail.id})
							</span>{" "}
						</span>
					</div>

					<span className="cart-price cart-column">
						$ {parseFloat(detail.price).toFixed(2)}{" "}
					</span>

					<div className="cart-quantity cart-column">
						<input
							className="cart-quantity-input"
							type="number"
							defaultValue={detail.count}
							min={1}
							onChange={() => changeHandler(detail.id)}
							ref={(element) => inputRef.current.push(element)}
						/>
						<button
							className="btn btn-danger"
							type="button"
							onClick={() => {
								props.removeFromCart(detail.id);
								setDishes((prevCart) => {
									return prevCart.filter(
										(dish) => dish.id !== detail.id
									);
								});

								navigate("/show-cart");
							}}>
							REMOVE
						</button>
					</div>
				</div>
			</div>
		);
	};

	const purchase = () => {
		const text = `\n\nYour bill is: $${total}\n\nYour items are: \n${dishes.map(
			(dish) => {
				return `${dish.name} - ${dish.count}` + `\n`;
			}
		)}\nThank you for shopping with us!\nHoping to see you soon Customer.`;
		alert(text);
	};

	return (
		<div>
			<Navbar />
			<h2 className="section-header">Welcome to Cart!</h2>

			{props.cart.length !== 0 ? (
				<>
					<div style={{ padding: 20 }}>
						<div className="cart-row">
							<span className="cart-item cart-header cart-column">
								ITEM
							</span>

							<span className="cart-price cart-header cart-column">
								PRICE
							</span>
							<span className="cart-quantity cart-header cart-column">
								QUANTITY
							</span>
						</div>

						{dishes.map((dish) => getDetails(dish))}

						<div class="cart-total">
							<strong class="cart-total-title">Total</strong>
							<span class="cart-total-price" id="finalPrice">
								₹{total.toFixed(2)}
							</span>
						</div>
						<button
							class="btn btn-primary btn-purchase"
							type="button"
							onClick={purchase}>
							PURCHASE
						</button>
					</div>
				</>
			) : (
				<div className="middle">
					<p>
						Maybe your cart is empty, add elements and visit here
						again.
					</p>
				</div>
			)}
		</div>
	);
};

export default Cart;

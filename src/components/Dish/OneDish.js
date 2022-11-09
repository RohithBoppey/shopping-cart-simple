import React from "react";
import { useNavigate } from "react-router-dom";

import classes from "./OneDish.module.css";


const OneDish = (props) => {

	const navigate = useNavigate();

	// console.log(props.dish);
	const onClickHandler = (dish) => {
		// console.log(dishId);
		props.onAddToCart(dish);
		navigate('/show-cart');
	}
	return (
		<li
			className={classes.singleMeal}
			key={props.dish.id}
			style={{ paddingLeft: 20, paddingRight: 20, padding: 10 }}>
			<div className={classes.oneHalf} style={{ float: "left" }}>
				<h3>{props.dish.name}</h3>
				<div className={classes.description}>
					{props.dish.dsc}
				</div>
				<div className={classes.price}>
					<strike>$ {(props.dish.price) + parseFloat(Math.random().toFixed(2))}</strike> &nbsp;
					$ {props.dish.price.toFixed(2)}
				</div>
			</div>
			<div
				className={classes.oneHalf}
				style={{ float: "right", textAlign: "center" }}>
				<img
					src={props.dish.img}
					className={classes.dishImage}
					alt={`${props.dish.name}`}
				/>
			</div>
			<div
				className={classes.otherHalf}
				style={{ float: "right", textAlign: "right" }}>
				<button className={classes.Dishbutton} onClick={() => onClickHandler(props.dish)}>Add to Cart</button>
			</div>

			{/* <div>
				<MealItemForm id={props.id} onAddToCart={addToCartHandler} />
			</div> */}
		</li>
	);
};

export default OneDish;

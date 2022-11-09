import React from "react";
import Navbar from "../Navbar/Navbar";
import OneDish from "./OneDish";

const AllDishes = (props) => {
	// console.log(props.dishes);
	return (
		<>
			<Navbar />
			<ul style={{ padding: 0 }}>
				{props.dishes.map((dish) => (
					<OneDish dish={dish} onAddToCart = {props.onAddToCart}/>
				))}
			</ul>
		</>
	);
};

export default AllDishes;

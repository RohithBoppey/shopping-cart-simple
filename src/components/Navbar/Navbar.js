import React from "react";

import "./Navbar.css";

import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="main-div">
			<div className="half-div main-title left">
				Shopping Cart (React)
			</div>
			<div className="half-div right list">
				<ul>
					<li>
						<NavLink to='/all-dishes'>All Dishes</NavLink>
					</li>
					<li>
						<NavLink to='/show-cart'>Show Cart</NavLink>
					</li>
					<li>
						<NavLink to='/about-us'>About Me</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;

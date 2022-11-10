import React from "react";
import Navbar from "../Navbar/Navbar";

import "./AboutUs.css";

import photo from "./photo.jpg";

const AboutUs = () => {
	return (
		<>
		<Navbar />
			<div className="main-div1">
				<div className="first-half">
					<img src={photo} alt="photo" />
				</div>

				<div className="other-half">
					{/* right div  */}
					<h4 className="list-heading">Personal Details: </h4>
					<ul className="about-us-list">
						<li>
							<span className="list-heading">Full name</span> :
							Rohith Boppey
						</li>
						<li>
							<span className="list-heading">Roll Number</span> :
							S20200010042
						</li>
						<li>
							<span className="list-heading">
								Github Repo Link
							</span>{" "}
							: <a href="https://github.com/RohithBoppey/shopping-cart-simple" target = '__blank'>Shopping Cart</a> (React)
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default AboutUs;

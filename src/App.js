import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import AllDishes from "./components/Dish/AllDishes";
import Cart from "./components/Cart/Cart";
import Axios from "axios";
import AboutUs from "./components/About Us/AboutUs";

// const allDishes = [
// 	{
// 		id: "1",
// 		name: "Sushi",
// 		img_url:
// 			"https://cdn.britannica.com/52/128652-050-14AD19CA/Maki-zushi.jpg",
// 		discounted_price: 69.21,
// 		actual_price: 70,
// 		description: "Made with fish, rice and love.",
// 	},
// 	{
// 		id: "2",
// 		name: "Pho (Viatnamese)",
// 		img_url:
// 			"https://upload.wikimedia.org/wikipedia/commons/5/53/Pho-Beef-Noodles-2008.jpg",
// 		discounted_price: 26.71,
// 		actual_price: 29,
// 		description:
// 			"Thin sliced beef and smooth rice noodles in mouthwatery bone broth.",
// 	},
// ];

function App() {
	const [dishes, setDishes] = useState([]);
	const [cart, setCart] = useState([]);

	const navigate = useNavigate();

	const getAllDishes = async () => {
		const response = await Axios.get(
			"https://ig-food-menus.herokuapp.com/best-foods"
		);
		// adding first 20 entries
		response.data = response.data.slice(25, 42);
		// console.log(response.data);
		setDishes(response.data);
	};

	useEffect(() => {
		getAllDishes();
	}, []);

	const addToCart = (dish) => {
		// console.log(dishId);
		setCart((prevCart) => {
			let prev = new Set(prevCart);
			// prev.add({ ...dish, count: 1 });
			prev.add(dish);

			// console.log(Array.from(prev));
			return Array.from(prev);
		});
	};

	const removeFromCart = (dishId) => {
		setCart((prevCart) => {
			return prevCart.filter((dish) => dish.id !== dishId);
		});
		navigate("/show-cart");
	};

	return (
		<Routes>
			<Route
				path="/"
				element={
					dishes.length !== 0 ? (
						<AllDishes dishes={dishes} onAddToCart={addToCart} />
					) : (
						`Loading....`
					)
				}
				exact
			/>
			<Route
				path="/all-dishes"
				element={
					dishes.length !== 0 ? (
						<AllDishes dishes={dishes} onAddToCart={addToCart} />
					) : (
						`Loading....`
					)
				}
				exact
			/>
			<Route
				path="/show-cart"
				element={<Cart cart={cart} removeFromCart={removeFromCart} />}
				exact
			/>
			<Route path="/about-us" element={<AboutUs />} exact />
		</Routes>
	);
}

export default App;

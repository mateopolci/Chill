import React from "react";
import {useNavigate} from "react-router-dom";

function Item({id, image, name, brand, price}) {
	const navigate = useNavigate();

	const handleDetailsClick = () => {
		navigate(`/product/${id}`);
	};

	return (
		<div className="flex h-80 w-48 flex-col items-center justify-between border-2 border-solid border-black p-3">
			<div className="flex ">
				<img src={image} className=""></img>
			</div>
			<div className="text-center">
				<h3 className="text-xl">{name}</h3>
				<h4>{brand}</h4>
				<p>${price}</p>
				<button
					className="hover:bg-dark-green my-5 h-8 w-24 rounded-xl border-2 border-solid border-black bg-light-green hover:text-white"
					onClick={handleDetailsClick}
				>
					Details
				</button>
			</div>
		</div>
	);
}

export default Item;

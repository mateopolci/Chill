import React from "react";

function Item({id, image, name, brand, price}) {
	return (
		<div className="flex h-80 w-48 flex-col items-center justify-between border-2 border-solid border-black p-3">
			<div className="">
				<img src={image} className=""></img>
				<div className="m-2">
					<h3>{name}</h3>
					<h4>{brand}</h4>
					<p>${price}</p>
				</div>
			</div>
			<button className="w-24 rounded-sm border border-solid border-black bg-light-green">
				Details
			</button>
		</div>
	);
}

export default Item;

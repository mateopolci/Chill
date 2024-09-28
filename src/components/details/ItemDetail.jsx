import React from "react";

function ItemDetail({item}) {
	return (
		<>
			<div className="center flex items-center justify-center border-2 border-solid border-black p-10">
				<div className="m-5 flex h-72 w-72 items-center p-3">
					<img src={item.image} alt={item.name} />
				</div>
				<div className="flex flex-col items-center">
					<div>
						<h2 className="text-2xl font-bold">{item.name}</h2>
						<h3 className="text-xl">{item.brand}</h3>
						<h3 className="text-lg">{`Size ${item.size}`}</h3>
						<div className="my-2 w-96 text-xl">
							<p className="text-justify">{item.description}</p>
						</div>
						<p className="my-2 text-2xl">
							Only {item.stock} remaining!
						</p>
						<p className="text-2xl">${item.price}</p>
					</div>
					<button className="hover:bg-dark-green my-5 h-12 w-36 rounded-xl border-2 border-solid border-black bg-light-green hover:text-white">
						Add to cart
					</button>
				</div>
			</div>
		</>
	);
}

export default ItemDetail;

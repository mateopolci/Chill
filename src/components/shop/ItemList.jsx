import React from "react";
import Item from "./Item";
function ItemList() {
	return (
		<div className="flex flex-col items-center">
            <h2 className="py-8 text-xl">All our products</h2>
			<div className="grid grid-cols-6 gap-20">
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
			</div>
		</div>
	);
}

export default ItemList;

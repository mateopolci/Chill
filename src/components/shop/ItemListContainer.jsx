import React from "react";
import ItemList from "./ItemList";
import {useParams} from "react-router-dom";

function ItemListContainer() {
	const {category} = useParams();
	return (
		<>
			<ItemList category={category} />
		</>
	);
}

export default ItemListContainer;

import React from "react";

function Item() {
	return (
		<div className="h-44 w-36 border border-solid border-black flex flex-col items-center">
			<div>
				<p className="pb-5">*Image*</p>
				<h3>*Name*</h3>
				<h4>*Brand*</h4>
				<p>*Size*</p>
				<p>*Price*</p>
			</div>
			<button className="border border-solid border-black w-24 bg-light-green rounded-sm">Details</button>
		</div>
	);
}

export default Item;

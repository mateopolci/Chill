function ItemListContainer(props) {
	return (
		<>
			<div className="rounded-md bg-light-green m-5 h-12 flex justify-center items-center">
				<h2 className="text-black font-medium text-2xl">
					{props.greetings}
				</h2>
			</div>
		</>
	);
}

export default ItemListContainer;

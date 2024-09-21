function ItemListContainer(props) {
	return (
		<>
			<div className="m-5 flex h-12 items-center justify-center rounded-md bg-light-green">
				<h2 className="text-2xl font-medium text-black">
					{props.greetings}
				</h2>
			</div>
		</>
	);
}

export default ItemListContainer;

import chill from "../assets/chill.png";
import Cart from "./Cart.jsx";

function NavBar() {
	return (
		<header className="flex flex-row justify-between bg-black">
			<a href="#" className="w-32">
				<img src={chill} alt="Chill logo" />
			</a>
			<div className="flex">
				<ul className="flex flex-row justify-center items-center">
					<li className="text-light-green text-2xl font-bold">
						<a href="#" className="ml-10 mr-5 p-3">
							Shop
						</a>
					</li>
					<li className="text-light-green text-2xl font-bold">
						<a href="#" className="mx-5 p-3">
							About us
						</a>
					</li>
					<li className="text-light-green text-2xl font-bold">
						<a href="#" className="ml-5 mr-10 p-3">
							Contact
						</a>
					</li>
				</ul>
				<></>
			</div>
		</header>
	);
}

export default NavBar;

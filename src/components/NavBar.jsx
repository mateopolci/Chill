import chill from "../assets/icons/chill.png";
import Cart from "./Cart.jsx";

function NavBar() {
	return (
		<header className="flex h-20 flex-row justify-between bg-black">
			<a href="#" className="w-32">
				<img src={chill} alt="Chill logo" />
			</a>
			<div className="flex">
				<ul className="flex flex-row items-center justify-center">
					<li className="text-2xl font-semibold text-light-green">
						<a href="#" className="ml-10 mr-5 p-3">
							Shop
						</a>
					</li>
					<li className="text-2xl font-semibold text-light-green">
						<a href="#" className="mx-5 p-3">
							About us
						</a>
					</li>
					<li className="text-2xl font-semibold text-light-green">
						<a href="#" className="ml-5 mr-10 p-3">
							Contact
						</a>
					</li>
					<li className="mr-5 text-2xl font-bold text-light-green">
						<a href="#" className="p-3">
							<Cart></Cart>
						</a>
					</li>
				</ul>
				<></>
			</div>
		</header>
	);
}

export default NavBar;

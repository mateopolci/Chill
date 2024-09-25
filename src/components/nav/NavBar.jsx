import React from "react";
import Cart from "./Cart.jsx";
import {Link} from "react-router-dom";

function NavBar() {
	return (
		<header className="flex h-20 flex-row justify-between bg-black">
			<Link to="/" className="w-32">
				<img src="/assets/icons/chill.png" alt="Chill logo" />
			</Link>
			<div className="flex">
				<ul className="flex flex-row items-center justify-center">
					<li className="text-2xl font-semibold text-light-green">
						<Link to="/" className="ml-10 mr-5 p-2">
							Shop
						</Link>
					</li>
					<li className="text-2xl font-semibold text-light-green">
						<Link to="/" className="mx-5 p-2">
							About us
						</Link>
					</li>
					<li className="text-2xl font-semibold text-light-green">
						<Link to="/" className="ml-5 mr-10 p-2">
							Contact
						</Link>
					</li>
					<li className="mr-5 text-2xl font-bold text-light-green">
						<Cart></Cart>
					</li>
				</ul>
				<></>
			</div>
		</header>
	);
}

export default NavBar;

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
						<Link to="/snowboards" className="mr-10 p-2">
							Snowboards
						</Link>
					</li>
					<li className="text-2xl font-semibold text-light-green">
						<Link to="/helmets" className="mr-10 p-2">
							Helmets
						</Link>
					</li>
					<li className="text-2xl font-semibold text-light-green">
						<Link to="/goggles" className="mr-10 p-2">
							Goggles
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

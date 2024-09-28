import React from "react";
import {Link} from "react-router-dom";

function Footer() {
	return (
		<div className="flex h-20 flex-row justify-end bg-black">
			<div className="flex">
				<ul className="flex flex-row items-center">
					<li className="text-xl font-semibold text-light-green">
						<Link to="/" className="ml-5 mr-5 p-2">
							FAQ
						</Link>
					</li>
					<li className="text-xl font-semibold text-light-green">
						<Link to="/" className="ml-5 mr-5 p-2">
							Privacy and terms
						</Link>
					</li>
					<li className="text-xl font-semibold text-light-green">
						<Link to="/" className="m-5 p-2">
							230 E Main St, Aspen, CO 81611, EE. UU.
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Footer;

import React from "react";

function Footer() {
	return (
		<div className="mt-8 flex h-20 flex-row justify-end bg-black">
			<div className="flex">
				<ul className="flex flex-row items-center">
					<li className="text-xl font-semibold text-light-green">
						<a href="#" className="ml-10 mr-5 p-2">
							FAQ
						</a>
					</li>
					<li className="text-xl font-semibold text-light-green">
						<a href="#" className="ml-5 mr-10 p-2">
							Privacy and terms
						</a>
					</li>
					<li className="text-xl font-semibold text-light-green">
						<a href="#" className="mx-5 p-2">
                            230 E Main St, Aspen, CO 81611, EE. UU.
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Footer;

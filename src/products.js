const snowboards = [
	{
		id: 1,
		name: "Burton Custom",
		brand: "Burton",
		price: 599,
		description:
			"The Burton Custom is one of the most iconic snowboards, offering a perfect balance of control and maneuverability. Ideal for advanced riders looking for versatility across all terrains.",
		stock: 10,
		size: 158,
		image: "./assets/products/snowboards/burton-custom",
	},
	{
		id: 2,
		name: "Lib Tech T.Rice Pro",
		brand: "Lib Tech",
		price: 650,
		description:
			"Developed with Travis Rice, the Lib Tech T.Rice Pro provides unmatched power and precision for riders aiming to conquer any mountain with style and performance.",
		stock: 7,
		size: 161,
	},
	{
		id: 3,
		name: "Salomon Assassin",
		brand: "Salomon",
		price: 549,
		description:
			"The Salomon Assassin is an all-mountain snowboard that blends freestyle performance with freeride capabilities. It’s perfect for versatile riders who want to tackle every part of the mountain.",
		stock: 5,
		size: 156,
	},
	{
		id: 4,
		name: "K2 Raygun",
		brand: "K2",
		price: 399,
		description:
			"The K2 Raygun is an award-winning all-mountain board, offering an easy ride with smooth edge-to-edge transitions. Great for beginners and intermediate riders alike.",
		stock: 12,
		size: 159,
	},
	{
		id: 5,
		name: "Burton Process",
		brand: "Burton",
		price: 529,
		description:
			"The Burton Process is lightweight and playful, making it an ideal choice for freestyle riders looking to progress in the park or shred the whole mountain with confidence.",
		stock: 8,
		size: 157,
	},
	{
		id: 6,
		name: "Lib Tech Skate Banana",
		brand: "Lib Tech",
		price: 549,
		description:
			"The Lib Tech Skate Banana is a revolutionary snowboard with a hybrid rocker design, offering effortless float in powder and easy control on groomers. Perfect for intermediate riders.",
		stock: 3,
		size: 154,
	},
	{
		id: 7,
		name: "Salomon Huck Knife",
		brand: "Salomon",
		price: 500,
		description:
			"The Salomon Huck Knife is a top-tier park snowboard, delivering explosive pop and precise handling. Ideal for freestyle riders who love hitting rails, boxes, and jumps.",
		stock: 6,
		size: 155,
	},
	{
		id: 8,
		name: "K2 Broadcast",
		brand: "K2",
		price: 499,
		description:
			"The K2 Broadcast is an all-terrain beast, offering a perfect blend of power, precision, and playful flexibility. It’s built for riders who want reliable performance on any slope.",
		stock: 4,
		size: 160,
	},
	{
		id: 9,
		name: "Burton Deep Thinker",
		brand: "Burton",
		price: 649,
		description:
			"Designed with input from Danny Davis, the Burton Deep Thinker is a directional snowboard built for riders who enjoy charging hard and carving deep in powder and groomers.",
		stock: 9,
		size: 162,
	},
	{
		id: 10,
		name: "Lib Tech Orca",
		brand: "Lib Tech",
		price: 699,
		description:
			"The Lib Tech Orca is a high-performance, wide-bodied freeride board known for its float and stability. It’s perfect for aggressive riders who want to dominate the backcountry.",
		stock: 2,
		size: 159,
	},
];

const helmets = [
	{
		id: 1,
		name: "Smith Vantage",
		brand: "Smith",
		price: 270,
		description:
			"The Smith Vantage is a premium helmet that combines advanced protection and a lightweight design, featuring adjustable ventilation and a Boa fit system for comfort.",
		stock: 6,
		size: "M",
	},
	{
		id: 2,
		name: "Giro Ledge MIPS",
		brand: "Giro",
		price: 100,
		description:
			"The Giro Ledge MIPS offers top-notch safety with its multi-directional impact protection system. It's perfect for freestyle riders looking for durability and comfort.",
		stock: 8,
		size: "L",
	},
	{
		id: 3,
		name: "Anon Raider 3",
		brand: "Anon",
		price: 85,
		description:
			"The Anon Raider 3 helmet provides skaters and snowboarders with reliable protection, boasting a simple, durable construction and passive ventilation.",
		stock: 12,
		size: "M",
	},
	{
		id: 4,
		name: "Smith Mission",
		brand: "Smith",
		price: 140,
		description:
			"The Smith Mission is lightweight yet highly protective, with Koroyd material for improved impact absorption and AirEvac ventilation to prevent goggles from fogging.",
		stock: 5,
		size: "S",
	},
	{
		id: 5,
		name: "Giro Range MIPS",
		brand: "Giro",
		price: 250,
		description:
			"The Giro Range MIPS helmet combines a custom fit with supreme protection, featuring integrated MIPS technology and adjustable venting for optimal comfort on the slopes.",
		stock: 4,
		size: "L",
	},
];

const goggles = [
	{
		id: 1,
		name: "Oakley Flight Deck",
		brand: "Oakley",
		price: 200,
		description:
			"The Oakley Flight Deck provides an unrivaled field of vision with its rimless design, combined with Prizm lens technology for maximum contrast and visibility in all conditions.",
		stock: 10,
		lensColor: "Prizm Sapphire",
	},
	{
		id: 2,
		name: "Smith I/O MAG",
		brand: "Smith",
		price: 240,
		description:
			"The Smith I/O MAG goggles feature a magnetic lens system for quick swaps and ChromaPop technology to enhance color and clarity on the mountain.",
		stock: 7,
		lensColor: "ChromaPop Sun Green Mirror",
	},
	{
		id: 3,
		name: "Dragon X2",
		brand: "Dragon",
		price: 220,
		description:
			"The Dragon X2 goggles offer a sleek frameless design and Swiftlock lens change system, with Lumalens technology for superior color optimization.",
		stock: 6,
		lensColor: "Lumalens Red Ion",
	},
	{
		id: 4,
		name: "Anon M4 Cylindrical",
		brand: "Anon",
		price: 300,
		description:
			"The Anon M4 Cylindrical goggles provide precision optics with their cylindrical lens shape, and MFI magnetic integration for seamless compatibility with Anon face masks.",
		stock: 3,
		lensColor: "Sonar Smoke",
	},
	{
		id: 5,
		name: "Oakley Line Miner",
		brand: "Oakley",
		price: 170,
		description:
			"The Oakley Line Miner goggles offer a close-to-face fit for enhanced peripheral vision, with Prizm technology to sharpen contrasts in snowy environments.",
		stock: 8,
		lensColor: "Prizm Torch",
	},
	{
		id: 6,
		name: "Smith Squad XL",
		brand: "Smith",
		price: 150,
		description:
			"The Smith Squad XL goggles feature a large cylindrical lens for a wide field of vision, with Fog-X anti-fog coating and ChromaPop for enhanced clarity.",
		stock: 11,
		lensColor: "ChromaPop Everyday Rose Gold",
	},
	{
		id: 7,
		name: "Dragon NFX2",
		brand: "Dragon",
		price: 180,
		description:
			"The Dragon NFX2 goggles feature a frameless design with fast lens changes and Lumalens technology, offering exceptional contrast and clarity in varying light conditions.",
		stock: 5,
		lensColor: "Lumalens Pink Ion",
	},
];

import React from 'react';
import Image from 'next/image';

function SmallCard({ img, distance, location }) {
	return (
		<div className="flex items-center m-2 mt-5 space-x-4 cursor-pointer hover:bg-gray-100 hover:scale-105 transition duration-200 ease-out">
			<div className="relative h-16 w-16">
				<Image
					alt=""
					src={img}
					layout="fill"
					objectFit="contain"
					objectPosition="left"
					className="rounded-lg
					"
				/>
			</div>

			<div>
				<h2>{location}</h2>
				<h3 className="text-gray-500">{distance}</h3>
			</div>
		</div>
	);
}

export default SmallCard;

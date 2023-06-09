import Image from 'next/image';
import React from 'react';
import { Search } from 'react-hero-icon/outline';
import { GlobeAlt, Menu, UserCircle, Users } from 'react-hero-icon/solid';

function Header() {
	return (
		<header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5">
			<div className="relative flex items-center h-10 cursor-pointer my-auto md:px-10">
				<Image
					alt=""
					src={'https://links.papareact.com/qd3'}
					layout="fill"
					objectFit="contain"
					objectPosition="left"
				/>
			</div>

			<div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
				<input
					placeholder="Start your search"
					className="pl-5 bg-transparent outline-none flex-1 text-sm text-gray-600 placeholder-gray-400"
				/>
				<Search className="hidden md:inline-flex h-8 w-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
			</div>

			<div className="flex items-center space-x-4 justify-end text-gray-500">
				<p className="hidden md:inline cursor-pointer">Become a host</p>
				<GlobeAlt className="h-6 cursor-pointer" />

				<div className="flex items-center border-2 p-2 rounded-full">
					<Menu className="cursor-pointer" />
					<UserCircle />
				</div>
			</div>
		</header>
	);
}

export default Header;

import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import clsx from 'clsx';
import {
	Code,
	Contact,
	Hamburger,
	Home,
	Pen,
	Work,
	Xmark,
} from '../utils/Icons';

const ThemeSwitch = dynamic(() => import('./ThemeSwitch'), {
	ssr: false,
});
const Header = () => {
	const [showNav, setShowNav] = useState(false);

	const toggleShowNav = () => {
		setShowNav(!showNav);
	};

	return (
		<header
			className={clsx(
				'group fixed z-20 inset-0 w-full md:static md:flex flex-column bg-white dark:bg-slate-900 border-r border-slate-900/10 md:border-r-0 md:border-b md:border-slate-900/10 dark:border-slate-50/[0.06] duration-200 md:left-0',
				showNav ? 'left-0' : '-left-full closed'
			)}
		>
			<div className="lg:container w-full px-5 pt-5 md:pt-0 flex md:justify-center md:items-center">
				<nav role="Main Navigation" className="md:ml-auto w-full">
					<ul className="flex flex-col md:flex-row md:justify-center w-full">
						<li>
							<Link
								href="#"
								className="py-4 p-5 md:px-2 md:mx-3 inline-block text-lg dark:text-white hover:text-theme dark:hover:text-theme outline-theme flex"
							>
								<Home size={25} />
								<span className="ml-3">Home</span>
							</Link>
						</li>
						<li>
							<Link
								href="#"
								className="py-4 p-5 md:px-2 md:mx-3 inline-block text-lg dark:text-white hover:text-theme dark:hover:text-theme outline-theme flex"
							>
								<Work size={25} />
								<span className="ml-3">Work</span>
							</Link>
						</li>
						<li>
							<Link
								href="#"
								className="py-4 p-5 md:px-2 md:mx-3 inline-block text-lg dark:text-white hover:text-theme dark:hover:text-theme outline-theme flex"
							>
								<Code size={24} />
								<span className="ml-3">Profolio</span>
							</Link>
						</li>
						<li>
							<Link
								href="#"
								className="py-4 p-5 md:px-2 md:mx-3 inline-block text-lg dark:text-white hover:text-theme dark:hover:text-theme outline-theme flex"
							>
								<Pen size={25} />
								<span className="ml-3">Blog</span>
							</Link>
						</li>
						<li>
							<Link
								href="#"
								className="py-4 p-5 md:px-2 md:mx-3 inline-block text-lg dark:text-white hover:text-theme dark:hover:text-theme outline-theme flex"
							>
								<Contact size={25} />
								<span className="ml-3">Contact</span>
							</Link>
						</li>
					</ul>
				</nav>
				<div className="hidden md:block ml-auto">
					<ThemeSwitch />
				</div>
				<button
					className="fixed top-10 right-10 md:hidden"
					onClick={() => toggleShowNav()}
				>
					<span className="hidden group-[.closed]:block">
						<Hamburger />
					</span>
					<span className="hidden group-[:not(.closed)]:block">
						<Xmark />
					</span>
				</button>
			</div>
		</header>
	);
};

export default Header;

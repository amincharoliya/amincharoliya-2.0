import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import clsx from 'clsx';
import { Hamburger, Xmark } from '../utils/Icons';

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
				'group fixed inset-0 w-2/3 md:w-full md:static md:flex flex-column bg-white dark:bg-slate-800 border-r border-slate-900/10 md:border-r-0 md:border-b md:border-slate-900/10 dark:border-slate-50/[0.06] duration-200',
				showNav ? 'left-0' : '-left-full closed'
			)}
		>
			<div className="container flex md:m-auto md:justify-center md:items-center">
				<nav role="Main Navigation" className="md:ml-auto">
					<ul className="flex flex-col md:flex-row md:justify-center">
						<li>
							<Link
								href="#"
								className="py-4 px-2 mx-3 inline-block text-lg dark:text-white hover:text-theme outline-theme"
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								href="#"
								className="py-4 px-2 mx-2 inline-block text-lg dark:text-white hover:text-theme outline-theme"
							>
								Work
							</Link>
						</li>
						<li>
							<Link
								href="#"
								className="py-4 px-2 mx-2 inline-block text-lg dark:text-white hover:text-theme outline-theme"
							>
								Profolio
							</Link>
						</li>
						<li>
							<Link
								href="#"
								className="py-4 px-2 mx-2 inline-block text-lg dark:text-white hover:text-theme outline-theme"
							>
								Blog
							</Link>
						</li>
						<li>
							<Link
								href="#"
								className="py-4 px-2 mx-2 inline-block text-lg dark:text-white hover:text-theme outline-theme"
							>
								Recommendations
							</Link>
						</li>
						<li>
							<Link
								href="#"
								className="py-4 px-2 mx-2 inline-block text-lg dark:text-white hover:text-theme outline-theme"
							>
								Contact
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

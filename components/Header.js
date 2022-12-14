import Link from 'next/link';
import { useRouter } from 'next/router';
import { Link as ScrollLink, Events } from 'react-scroll';
import dynamic from 'next/dynamic';
import { useCallback, useEffect, useRef, useState } from 'react';
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
	const router = useRouter();
	const [showNav, setShowNav] = useState(false);
	const [scrolled, setScrolled] = useState(true);
	const header = useRef(null);
	const lastScroll = useRef(0);

	const handleScroll = useCallback(() => {
		const currentScroll = window.pageYOffset;
		if (currentScroll <= 0) {
			setScrolled(true);
			return;
		}

		if (currentScroll > lastScroll.current && scrolled) {
			setScrolled(false);
		} else if (currentScroll < lastScroll.current && !scrolled) {
			setScrolled(true);
			// up
		}
		lastScroll.current = currentScroll;
	}, [scrolled]);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [handleScroll]);

	const toggleShowNav = () => {
		setShowNav(!showNav);
	};

	Events.scrollEvent.register('begin', () => setShowNav(!showNav));

	const homeLink = ['Blog', 'Testimonials', 'Work', 'Projects', 'Contact'];

	return (
		<>
			<div className="h-16 hidden md:block" id="header"></div>
			<header
				className={clsx(
					'group fixed z-20 inset-0 w-full h-auto md:h-16 bg-white/[0.85] dark:bg-slate-900/[0.85] flex-column border-r border-slate-900/10 md:border-r-0 md:border-b md:border-slate-900/10 dark:border-slate-50/[0.06] duration-200 md:left-0 md:top-0 md:right-0 md:bottom-auto md:backdrop-blur',
					showNav ? 'left-0' : '-left-full closed',
					scrolled && 'md:flex block',
					!scrolled && !showNav && 'hidden md:flex',
					showNav && 'backdrop-blur'
				)}
				ref={header}
			>
				<div className="lg:container w-full px-5 pt-5 md:pt-0 flex md:justify-center md:items-center">
					<nav
						role="Main Navigation"
						className="w-full h-screen md:h-auto md:ml-auto "
					>
						<ul className="flex flex-col h-screen overflow-auto md:h-auto md:flex-row md:justify-center w-full">
							{router.pathname == '/' ? (
								<li>
									<ScrollLink
										href="#header"
										className="py-4 p-5 md:px-2 md:mx-3 inline-block text-lg dark:text-white hover:text-theme dark:hover:text-theme outline-theme flex"
										activeClass="text-theme dark:text-theme"
										to="header"
										spy={true}
										smooth={true}
										offset={0}
										duration={500}
									>
										<span className="ml-3">Home</span>
									</ScrollLink>
								</li>
							) : (
								<>
									<li>
										<Link
											href="/"
											scroll={false}
											className="py-4 p-5 md:px-2 md:mx-3 inline-block text-lg dark:text-white hover:text-theme dark:hover:text-theme outline-theme flex"
										>
											<span className="ml-3">Home</span>
										</Link>
									</li>
									<li>
										<Link
											href="/blog"
											scroll={false}
											className="py-4 p-5 md:px-2 md:mx-3 inline-block text-lg dark:text-white hover:text-theme dark:hover:text-theme outline-theme flex"
										>
											<span className="ml-3">Blog</span>
										</Link>
									</li>
								</>
							)}
							{router.pathname == '/' &&
								homeLink.map((item) => (
									<li key={item}>
										<ScrollLink
											href={`#${item.toLocaleLowerCase()}`}
											className="py-4 p-5 md:px-2 md:mx-3 inline-block text-lg dark:text-white hover:text-theme dark:hover:text-theme outline-theme flex"
											activeClass="text-theme dark:text-theme"
											to={item.toLocaleLowerCase()}
											spy={true}
											smooth={true}
											offset={0}
											duration={500}
										>
											<span className="ml-3">{item}</span>
										</ScrollLink>
									</li>
								))}
						</ul>
					</nav>
					<div className="hidden md:block ml-auto">
						<ThemeSwitch classes={'text-theme dark:text-white'} />
					</div>
					<button
						className="fixed top-10 right-10 bg-theme text-content-dark dark:text-content-light rounded-sm p-2 md:hidden"
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
		</>
	);
};

export default Header;

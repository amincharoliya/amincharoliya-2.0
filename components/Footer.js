import Link from 'next/link';
import Contact from './Contact';

const Footer = () => {
	return (
		<>
			<Contact />
			<footer className="py-5 bg-white dark:bg-slate-800 shadow">
				<div className="container">
					<p className="text-center">
						<Link
							className="hover:text-theme duration-200"
							href="https://github.com/amincharoliya/amincharoliya-2.0"
							rel="noopener noreferrer"
							target="_blank"
						>
							Built by Amin Charoliya
						</Link>
					</p>
				</div>
			</footer>
		</>
	);
};

export default Footer;

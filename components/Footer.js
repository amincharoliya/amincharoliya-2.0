import Link from 'next/link';
import Layout from './Layout';

const Footer = () => {
	return (
		<footer className="py-5 bg-white dark:bg-slate-800 shadow">
			<div className="container">
				<p className="text-center">
					<Link href="/" className="hover:text-theme duration-200">
						Built by Amin Charoliya
					</Link>
				</p>
			</div>
		</footer>
	);
};

export default Footer;

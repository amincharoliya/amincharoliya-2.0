import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import Header from './Header';
import Footer from './Footer';
import { siteURL } from '../utils/data';
const ThemeSwitch = dynamic(() => import('./ThemeSwitch'), {
	ssr: false,
});

const Layout = ({ children, title, description, ogImage }) => {
	const router = useRouter();
	const pageURL = siteURL + router.asPath;

	return (
		<div className="min-h-screen font-inter bg-gray-100 dark:bg-slate-900 text-content-light dark:text-content-dark ">
			<Head>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				{/* Primary Meta Tag */}
				<title>
					{title
						? `${title} | Amin Charoliya`
						: 'Amin Charoliya | Front End Developer based in India'}
				</title>
				<meta
					name="description"
					content={
						description
							? `${description}`
							: 'Amin Charoliya is a Front End Developer who is skilled in HTML, CSS, JavaScript, React js, Next js and WordPress.'
					}
				/>
				{/* Open Graph / Facebook */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content={pageURL} />
				<meta
					property="og:title"
					content={
						title
							? `${title} | Amin Charoliya`
							: 'Amin Charoliya | Front End Developer based in India'
					}
				/>
				<meta
					property="og:description"
					content={
						description
							? `${description}`
							: 'Amin Charoliya is a Front End Developer who is skilled in HTML, CSS, JavaScript, React js, Next js and WordPress.'
					}
				/>
				<meta
					property="og:image"
					content={
						ogImage
							? siteURL + ogImage
							: `${pageURL}images/amin.jpg`
					}
				/>
				{/* Twitter */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content={pageURL} />
				<meta
					property="twitter:title"
					content={
						title
							? `${title} | Amin Charoliya`
							: 'Amin Charoliya | Front End Developer based in India'
					}
				/>
				<meta
					property="twitter:description"
					content={
						description
							? `${description}`
							: 'Amin Charoliya is a Front End Developer who is skilled in HTML, CSS, JavaScript, React js, Next js and WordPress.'
					}
				/>
				<meta
					property="twitter:image"
					content={
						ogImage
							? siteURL + ogImage
							: `${pageURL}images/amin.jpg`
					}
				/>
				<link rel="icon" type="image/png" href="/favicon.png" />
			</Head>
			<Header />
			<main>
				{children}
				<div className="fixed bottom-10 right-10 md:hidden">
					<ThemeSwitch
						classes={
							'bg-theme text-content-dark dark:text-content-light rounded-sm p-2 opacity-90'
						}
					/>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default Layout;

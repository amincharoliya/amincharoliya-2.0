import Head from 'next/head';
import dynamic from 'next/dynamic';
import Script from 'next/script';
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
							: `${pageURL}images/amincharoliya_preview.png`
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
							: `${pageURL}images/amincharoliya_preview.png`
					}
				/>
				<link rel="icon" type="image/png" href="/favicon.png" />
			</Head>
			{/* Global site tag (gtag.js) - Google Analytics */}
			<Script
				async
				src="https://www.googletagmanager.com/gtag/js?id=UA-47736244-1"
				strategy="afterInteractive"
			/>
			<Script id="google-analytics" strategy="afterInteractive">
				{`
					window.dataLayer = window.dataLayer || []; function gtag()
					{dataLayer.push(arguments)}
					gtag('js', new Date()); gtag('config', 'UA-47736244-1');
				`}
			</Script>
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

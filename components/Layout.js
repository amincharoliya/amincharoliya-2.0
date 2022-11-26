import Head from 'next/head';
import dynamic from 'next/dynamic';
const ThemeSwitch = dynamic(() => import('./ThemeSwitch'), {
	ssr: false,
});

const Layout = ({ children, title }) => {
	return (
		<div className="min-h-screen font-inter bg-gray-100 dark:bg-slate-900 text-content-light dark:text-content-dark ">
			<Head>
				<title>
					{title
						? `${title} | Amin Charoliya`
						: 'Amin Charoliya | Front End Developer based in India'}
				</title>
				<meta
					name="description"
					content="Amin Charoliya is a Front End Developer who is skilled in HTML, CSS, JavaScript, React js, Next js and WordPress."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{children}
			<div className="fixed bottom-10 right-10 md:hidden">
				<ThemeSwitch
					classes={
						'bg-theme text-content-dark dark:text-content-light rounded-sm p-2'
					}
				/>
			</div>
		</div>
	);
};

export default Layout;

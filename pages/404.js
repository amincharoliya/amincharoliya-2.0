import Link from 'next/link';
import Layout from '../components/Layout';

const page404 = () => {
	return (
		<Layout title="404">
			<section class="h-screen bg-white dark:bg-gray-900 flex items-center">
				<div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
					<div class="mx-auto max-w-screen-sm text-center">
						<h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-theme">
							404
						</h1>
						<p class="mb-4 text-lg font-light text-content-light dark:text-content-dark">
							Sorry, we can&apos;t find that page. You&apos;ll
							find lots to explore on the home page.{' '}
						</p>
						<Link
							href="/"
							class="inline-flex text-theme focus:ring-1 border border-theme focus:border-transparent focus:outline-none focus:ring-2 focus:ring-theme font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
						>
							Back to Homepage
						</Link>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default page404;

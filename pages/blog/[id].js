import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

import Header from '../../components/Header';

import { getAllPostIds, getPostData } from '../../lib/blog/posts';
import Image from 'next/image';

export default function Post({ postData, paths }) {
	const pages = paths.map((item) => item.params.id);
	const router = useRouter();
	const id = router.query.id;
	return (
		<Layout>
			<header className="relative h-72 w-full after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/[0.5] after:to-black/[0.3]">
				<Image
					src={`/images/articles/${postData.bannerImage}`}
					fill
					alt={postData.title}
					style={{ objectFit: 'cover' }}
				/>
				<div className="max-w-screen-lg mx-auto px-5 py-14 h-72 flex items-center text-white relative z-10">
					<h1 className="text-2xl font-bold relative sm:text-3xl md:text-4xl">
						{postData.title}
					</h1>
				</div>
			</header>
			<div className="bg-white dark:bg-slate-900">
				<div className="max-w-screen-lg mx-auto px-5 py-14">
					<div className="flex flex-col items-center">
						<div className="max-w-7xl w-full">
							<div
								className="article-content"
								dangerouslySetInnerHTML={{
									__html: postData.contentHtml,
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export async function getStaticProps({ params }) {
	// Add the "await" keyword like this:
	const postData = await getPostData(params.id);
	const paths = getAllPostIds();

	return {
		props: {
			postData,
			paths,
		},
	};
}

export async function getStaticPaths() {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
}

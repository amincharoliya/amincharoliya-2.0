import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Link from 'next/link';

import Header from '../../components/Header';

import { getAllPostIds, getPostData } from '../../lib/blog/posts';
import Image from 'next/image';

export default function Post({ postData, paths }) {
	const pages = paths.map((item) => item.params.id);
	const router = useRouter();
	const id = router.query.id;
	return (
		<Layout>
			<header>
				<div className="relative h-52 sm:h-72 w-full after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/[0.5] after:to-black/[0.3]">
					<Image
						src={`/images/articles/${postData.bannerImage}`}
						fill
						alt={postData.title}
						style={{ objectFit: 'cover' }}
						priority={true}
					/>
					<div className="max-w-screen-lg mx-auto px-5 py-14 h-52 sm:h-72 flex items-center text-white relative z-10">
						<h1 className="text-2xl font-bold relative sm:text-3xl md:text-4xl">
							{postData.title}
						</h1>
					</div>
				</div>
				<div className="bg-white dark:bg-slate-900">
					<div className="pt-10 px-5 flex flex-col sm:flex-row sm:justify-between sm:items-center max-w-screen-lg mx-auto">
						<div className="flex sm:justify-center items-center mb-6 sm:mb-0">
							<div className="h-16 w-16 relative rounded-full overflow-hidden mr-6">
								<Image
									src={`/images/${postData.authorImage}`}
									fill
									alt={postData.author}
									style={{ objectFit: 'cover' }}
									priority={true}
								/>
							</div>
							<div className="flex flex-col">
								<span>{postData.author}</span>
								<span>
									<span className="sr-only">
										Published on{' '}
									</span>
									{postData.date}
								</span>
							</div>
						</div>
						<ul className="flex mb-0">
							<li className="font-medium">Tags:</li>
							{postData.tags?.map((tag) => (
								<li key={tag} className=" ml-2">
									<Link
										href={`/blog?tags=${tag}`}
										className="hover:text-theme duration-200"
									>
										{tag}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</header>
			<div className="article-content bg-white dark:bg-slate-900">
				<div className="max-w-screen-lg mx-auto px-5 py-10">
					<div
						dangerouslySetInnerHTML={{
							__html: postData.contentHtml,
						}}
					/>
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

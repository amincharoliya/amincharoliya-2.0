import Link from 'next/link';

import PostListing from '../PostListing';

const BlogList = ({ posts }) => {
	return (
		<section className="lg:container px-5 py-14" id="blog">
			<h2 className="text-2xl font-bold text-heading-light dark:text-heading-dark leading-tight mb-16 md:text-3xl lg:text-4xl md:pt-5 text-center">
				Blog
			</h2>
			<PostListing posts={posts} />
			<p className="text-center mt-10">
				<Link
					href="/blog"
					className="inline-block text-theme border border-theme hover:bg-theme hover:text-content-dark focus:border-transparent dark:focus:border-transparent focus:outline-none focus:ring-2 focus:ring-theme font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-200"
				>
					Visit my blog
				</Link>
			</p>
		</section>
	);
};

export default BlogList;

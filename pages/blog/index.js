import { useRouter } from 'next/router';

import Layout from '../../components/Layout';
import { getAllPosts } from '../../lib/blog/posts';
import PostListing from '../../components/PostListing';
import { XMark } from '../../utils/Icons';

const Blog = ({ posts }) => {
	const router = useRouter();
	const { query } = router;

	const tags = query.tags;

	// Filter the posts based on the tags value if available or just return the posts array
	const filteredPosts = tags
		? posts.filter((post) => post.frontmatter.tags.includes(tags))
		: posts;

	const handleClearTags = () => {
		// Navigate to the same page without the "tags" query parameter
		router.push({
			pathname: router.pathname,
			query: { ...router.query, tags: undefined },
		});
	};

	return (
		<Layout>
			<section className="lg:container px-5 py-14" id="blog">
				<h2 className="text-2xl font-bold text-heading-light dark:text-heading-dark leading-tight mb-16 md:text-3xl lg:text-4xl md:pt-5 text-center">
					Blog
				</h2>
				{tags && (
					<button
						onClick={handleClearTags}
						className="inline-block text-content-light dark:text-content-dark border border-content-light dark:border-content-dark mb-6 font-medium rounded-lg text-sm px-4 py-2 text-center duration-200"
					>
						Clear Filter <XMark classes="inline-block" size={20} />
					</button>
				)}

				<PostListing posts={filteredPosts} />
			</section>
		</Layout>
	);
};

export default Blog;

export async function getStaticProps() {
	const posts = getAllPosts();

	return {
		props: {
			posts,
		},
	};
}

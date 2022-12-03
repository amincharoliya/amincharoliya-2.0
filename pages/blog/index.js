import Layout from '../../components/Layout';
import BlogList from '../../components/Home/BlogList';

import { getAllPosts } from '../../lib/blog/posts';
import PostListing from '../../components/PostListing';

const Blog = ({ posts }) => {
	return (
		<Layout>
			<section className="lg:container px-5 py-14" id="blog">
				<h2 className="text-2xl font-bold text-heading-light dark:text-heading-dark leading-tight mb-16 md:text-3xl lg:text-4xl md:pt-5 text-center">
					Blog
				</h2>
				<PostListing posts={posts} />
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

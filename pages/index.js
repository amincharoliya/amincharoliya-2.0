import Layout from '../components/Layout';
import Header from '../components/Header';
import Banner from '../components/Home/Banner';
import Testimonials from '../components/Home/Testimonials';
import BlogList from '../components/Home/BlogList';
import { getAllPosts } from '../lib/blog/posts';

export default function Home({ posts }) {
	return (
		<Layout>
			<Header />
			<Banner />
			<Testimonials />
			<BlogList posts={posts} />
		</Layout>
	);
}

export async function getStaticProps() {
	const posts = getAllPosts();

	return {
		props: {
			posts,
		},
	};
}

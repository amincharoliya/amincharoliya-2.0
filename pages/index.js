import Layout from '../components/Layout';
import Header from '../components/Header';
import Banner from '../components/Home/Banner';
import Testimonials from '../components/Home/Testimonials';
import BlogList from '../components/Home/BlogList';
import WorkHistory from '../components/Home/WorkHistory';
import { getAllPosts } from '../lib/blog/posts';
import { testimonials, work } from '../utils/data';

export default function Home({ posts }) {
	return (
		<Layout>
			<Header />
			<Banner />
			<BlogList posts={posts} />
			<Testimonials testimonials={testimonials} />
			<WorkHistory work={work} />
		</Layout>
	);
}

export async function getStaticProps() {
	const posts = getAllPosts();

	return {
		props: {
			posts,
			testimonials,
			work,
		},
	};
}

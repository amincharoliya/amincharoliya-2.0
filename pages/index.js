import Layout from '../components/Layout';
import Banner from '../components/Home/Banner';
import Testimonials from '../components/Home/Testimonials';
import BlogList from '../components/Home/BlogList';
import WorkHistory from '../components/Home/WorkHistory';
import { getAllPosts } from '../lib/blog/posts';
import { projects, testimonials, work } from '../utils/data';
import Projects from '../components/Home/Projects';

export default function Home({ posts, projects, testimonials, work }) {
	const projectReversed = projects.sort((a, b) => b.id - a.id);
	return (
		<Layout>
			<Banner />
			<BlogList posts={posts} />
			<Testimonials testimonials={testimonials} />
			<WorkHistory work={work} />
			<Projects projects={projectReversed} />
		</Layout>
	);
}

export async function getStaticProps() {
	const posts = getAllPosts(3);

	return {
		props: {
			posts,
			testimonials,
			work,
			projects,
		},
	};
}

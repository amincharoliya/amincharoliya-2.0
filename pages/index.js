import Layout from '../components/Layout';
import Header from '../components/Header';
import Banner from '../components/Home/Banner';
import Testimonials from '../components/Home/Testimonials';

export default function Home() {
	return (
		<Layout>
			<Header />
			<Banner />
			<Testimonials />
		</Layout>
	);
}

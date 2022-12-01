import Link from 'next/link';
import { LinkedIn, Mail, Twitter } from '../utils/Icons';

const Contact = () => {
	return (
		<section className="lg:container px-5 py-14">
			<h2 className="text-2xl font-bold text-heading-light dark:text-heading-dark leading-tight mb-6 md:text-3xl lg:text-4xl md:pt-5 text-center">
				Contact Me
			</h2>
			<p class="text-content-light dark:text-content-dark block mb-8 text-center">
				Get in touch with me or just say Hi...
			</p>
			<p className="flex justify-center items-center">
				<Link
					href="https://www.linkedin.com/in/amin-charoliya-392bab81/"
					rel="noopener noreferrer"
					target="_blank"
					className="focus:outline-0 focus:text-theme mx-2"
					title="E-Mail"
				>
					<LinkedIn classes="hover:scale-110 duration-200 hover:text-theme" />
				</Link>
				<Link
					href="https://twitter.com/amincharoliya"
					rel="noopener noreferrer"
					target="_blank"
					className="focus:outline-0 focus:text-theme mx-2"
					title="E-Mail"
				>
					<Twitter classes="hover:scale-110 duration-200 hover:text-theme" />
				</Link>
				<Link
					href="mailto:ameencharoliya@gmail.com"
					rel="noopener noreferrer"
					target="_blank"
					className="focus:outline-0 focus:text-theme mx-2"
					title="E-Mail"
				>
					<Mail classes="hover:scale-110 duration-200 hover:text-theme" />
				</Link>
			</p>
		</section>
	);
};

export default Contact;

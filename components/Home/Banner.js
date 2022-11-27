/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';

const Banner = () => {
	return (
		<section className="relative">
			<div className="lg:container px-5 py-28">
				<div className="flex flex-col md:flex-row relative z-10">
					<div className="md:w-1/2 order-2 md:order-1 lg:pl-14">
						<h1 className="text-3xl font-bold text-heading-light dark:text-heading-dark leading-tight mb-4 md:text-4xl lg:text-5xl md:pt-5">
							I’m Amin Charoliya <br />
							<span className="text-theme">Front-end</span>{' '}
							Developer
						</h1>
						<p className="lg:max-w-xl text-content-light dark:text-content-dark">
							Experienced Front End Developer with a demonstrated
							history of working in the internet industry. Skilled
							in HTML, CSS, JavaScript, React js, Next js and
							WordPress.
						</p>
					</div>
					<div className="md:w-1/2 flex justify-center order-1 md:order-2 mb-5 md:mb-0">
						<div className="rounded-full overflow-hidden relative h-48 w-48 lg:h-52 lg:w-52 shadow-md">
							<img
								src={'/images/amin.jpg'}
								alt="Amin"
								className="h-full w-full object-cover"
							/>
						</div>
					</div>
				</div>
				<div className="absolute inset-0 overflow-hidden">
					{[...Array(30)].map((item, i) => (
						<div className="particle" key={i}></div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Banner;

/* eslint-disable @next/next/no-img-element */
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { Quote } from '../../utils/Icons';

const Testimonials = ({ testimonials }) => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 768 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 767, min: 0 },
			items: 1,
		},
	};

	return (
		<section
			className="lg:container px-5 py-14 text-center"
			id="testimonials"
		>
			<h2 className="text-2xl font-bold text-heading-light dark:text-heading-dark leading-tight mb-6 md:text-3xl lg:text-4xl md:pt-5">
				Testimonials
			</h2>
			<p className="text-content-light dark:text-content-dark inline-block mb-8">
				People I&apos;ve worked with have said some nice things...
			</p>
			<div className="text-left">
				<Carousel
					responsive={responsive}
					swipeable={true}
					showDots={true}
					removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
					itemClass="flex items-stretch"
				>
					{testimonials.map((item) => (
						<div className="p-4 mb-8" key={item.id}>
							<div className="h-full bg-white dark:bg-slate-800 shadow rounded-sm p-8 rounded flex justify-center flex-col">
								<Quote
									classes="block text-gray-500 mb-4"
									size={20}
								/>
								<p className="leading-relaxed mb-6 line-clamp-5">
									{item.content}
								</p>
								<div className="inline-flex items-center">
									<img
										src={`/images/${item.image}`}
										className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
										alt={item.name}
									/>
									<div className="flex-grow flex flex-col pl-4">
										<h3 className="title-font font-medium text-heading-light dark:text-heading-dark">
											{item.name}
										</h3>
										<p className="text-sm">
											{item.designation}
										</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</Carousel>
			</div>
		</section>
	);
};

export default Testimonials;

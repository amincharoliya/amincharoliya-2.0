/* eslint-disable @next/next/no-img-element */
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { testimonials } from '../../utils/data';

const Testimonials = () => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	return (
		<div className="lg:container px-5 py-14 text-center">
			<h2 className="text-2xl font-bold text-heading-light dark:text-heading-dark leading-tight mb-6 md:text-3xl lg:text-4xl md:pt-5">
				Testimonials
			</h2>
			<p className="text-content-light dark:text-content-dark inline-block mb-12 lg:max-w-xl">
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
						<div
							className="mb-12 p-4 mx-3 bg-white dark:bg-slate-800 shadow rounded-sm"
							key={item.id}
						>
							<div className="flex items-center mb-6 justify-start">
								<div className="w-20 h-20 rounded-full overflow-hidden relative mr-5">
									<img
										src={`/images/${item.image}`}
										className="h-full w-full object-cover"
										alt={item.name}
									/>
								</div>
								<div className="flex-1">
									<h3 className="text-lg font-bold text-heading-light dark:text-heading-dark">
										{item.name}
									</h3>
									<p className="text-sm">
										{item.designation}
									</p>
								</div>
							</div>
							<p className="line-clamp-5">{item.content}</p>
						</div>
					))}
				</Carousel>
			</div>
		</div>
	);
};

export default Testimonials;

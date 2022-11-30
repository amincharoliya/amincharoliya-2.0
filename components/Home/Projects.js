import Link from 'next/link';
import { CodeIcon, LinkIcon } from '../../utils/Icons';

/* eslint-disable @next/next/no-img-element */
const Projects = ({ projects }) => {
	return (
		<section className="lg:container px-5 py-14">
			<h2 className="text-2xl font-bold text-heading-light dark:text-heading-dark leading-tight mb-12 md:text-3xl lg:text-4xl md:pt-5 text-center">
				Projects
			</h2>
			<div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
				{projects.map((item) => (
					<div
						className="bg-white dark:bg-slate-800 shadow rounded-sm"
						key={item.id}
					>
						<div className="group">
							<div className="h-64 relative overflow-hidden">
								<img
									className="object-cover object-center rounded-t-sm w-full"
									alt="hero"
									src={`/images/${item.image}`}
								/>
							</div>
							<div className="p-5">
								<h3 className="text-2xl font-bold text-heading-light dark:text-heading-dark mb-4">
									{item.name}
								</h3>

								<p className="mb-4 leading-relaxed">
									{item.description}
								</p>
								<p className="mb-6">
									{item.technologies.map((item) => (
										<span
											key={item}
											className="text-sm px-3 py-1 border border-content-light/50 dark:border-content-dark/50 inline-block rounded-full mr-3"
										>
											{item}
										</span>
									))}
								</p>
								<Link
									href={item.link}
									className="mr-4 focus:outline-0 focus:text-theme"
									aria-label="External Link"
									rel="noopener noreferrer"
									target="_blank"
								>
									<LinkIcon
										classes="inline-block hover:scale-110 duration-200 hover:text-theme"
										size={25}
									/>
								</Link>
								<Link
									href={item.git}
									className="mr-4 focus:outline-0 focus:text-theme"
									aria-label="GitHub Link"
									rel="noopener noreferrer"
									target="_blank"
								>
									<CodeIcon
										classes="inline-block hover:scale-110 duration-200 hover:text-theme"
										size={25}
									/>
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Projects;

/* eslint-disable @next/next/no-img-element */
const WorkHistory = ({ work }) => {
	return (
		<section className="lg:container px-5 py-14">
			<h2 className="text-2xl font-bold text-heading-light dark:text-heading-dark leading-tight mb-6 md:text-3xl lg:text-4xl md:pt-5 text-center">
				Work History
			</h2>
			<p className="text-content-light dark:text-content-dark block mb-8 text-center">
				Places where I&apos;ve worked troughout my career...
			</p>
			<div>
				<div className="lg:container bg-white dark:bg-slate-800 shadow rounded-sm px-5 py-5 mx-auto flex flex-wrap ">
					<div className="w-full justify-center flex md:items-center">
						<div className="md:w-1/2">
							{work.map((item) => (
								<div
									className="flex relative pt-2 pb-5 sm:items-center md:w-2/3 mx-auto"
									key={item.id}
								>
									<div className="h-full w-6 absolute inset-0 flex items-center justify-center">
										<div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
									</div>
									<div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-theme text-content-dark relative z-10 title-font font-medium text-sm">
										{item.id}
									</div>
									<div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
										<div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
											<h3 className="text-lg font-bold text-heading-light dark:text-heading-dark mb-1">
												{item.name}
											</h3>
											{item.positions.map((company) => (
												<div
													className="pb-5"
													key={company.id}
												>
													<span className="bg-theme font-normal text-xs text-content-dark inline-block px-1 py-0.5 mb-2">
														{company.date}
													</span>
													<p className="text-sm">
														{company.position}
													</p>
												</div>
											))}
										</div>
									</div>
								</div>
							))}
						</div>
						<div className="hidden md:block md:w-1/2">
							<img
								src="/images/work.jpeg"
								alt="badge"
								className="rounded-sm"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WorkHistory;

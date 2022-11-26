/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const BlogList = ({ posts }) => {
	return (
		<div className="lg:container px-5 py-14">
			<h2 className="text-2xl font-bold text-heading-light dark:text-heading-dark leading-tight mb-16 md:text-3xl lg:text-4xl md:pt-5 text-center">
				Blog
			</h2>
			<div className="flex flex-col md:flex-row">
				{posts.map((item) => (
					<div
						key={item.slug}
						className="w-full md:w-1/3 mb-12 md:mx-3 bg-white dark:bg-slate-800 shadow rounded-sm"
					>
						<Link href={`/blogs/${item.slug}`}>
							<img
								src={`/images/articles/${item.frontmatter.bannerImage}`}
								alt={item.frontmatter.title}
								className="w-full rounded-t-sm h-52 object-cover"
							/>
						</Link>
						<div className="p-4">
							<h3 className="text-lg font-bold text-heading-light dark:text-heading-dark mb-2">
								<Link href={`/blogs/${item.slug}`}>
									{item.frontmatter.title}
								</Link>
							</h3>
							<p className="text-sm">
								{item.frontmatter.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default BlogList;

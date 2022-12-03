/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const PostListing = ({ posts }) => {
	return (
		<div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			{posts.map((item) => (
				<div
					key={item.slug}
					className="group bg-white dark:bg-slate-800 shadow rounded-sm relative"
				>
					<div className="h-52 overflow-hidden">
						<Link href={`/blog/${item.slug}`} tabIndex="-1">
							<img
								src={`/images/articles/${item.frontmatter.bannerImage}`}
								alt={item.frontmatter.title}
								className="group-hover:scale-110 w-full rounded-t-sm h-52 object-cover duration-200"
							/>
						</Link>
					</div>
					<div className="p-4">
						<h3 className="text-lg font-bold text-heading-light dark:text-heading-dark mb-2">
							<Link
								href={`/blog/${item.slug}`}
								className="after:content-[''] after:absolute after:inset-0"
							>
								{item.frontmatter.title}
							</Link>
						</h3>
						<p className="text-sm line-clamp-3">
							{item.frontmatter.description}
						</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default PostListing;

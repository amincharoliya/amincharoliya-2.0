import { remark } from 'remark';
import html from 'remark-html';
import remarkPrism from 'remark-prism';

import * as matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

export async function getPostData(id) {
	const fullPath = path.join('./data/blogs', `${id}.md`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');

	// Use gray-matter to parse the post metadata section
	const matterResult = matter(fileContents);

	// Use remark to convert markdown into HTML string
	const processedContent = await remark()
		.use(html, { sanitize: false })
		.use(remarkPrism, { plugins: ['line-numbers'] })
		.process(matterResult.content);
	const contentHtml = processedContent.toString();

	// Combine the data with the id and contentHtml
	return {
		id,
		contentHtml,
		...matterResult.data,
	};
}

export function getAllPostIds() {
	const fileNames = fs.readdirSync('./data/blogs');
	return fileNames.map((fileName) => {
		return {
			params: {
				id: fileName.replace(/\.md$/, ''),
			},
		};
	});
}

export function getAllPosts(limit = null) {
	const files = fs.readdirSync('./data/blogs');
	let posts = files.map((fileName) => {
		const slug = fileName.replace('.md', '');
		const readFile = fs.readFileSync(`./data/blogs/${fileName}`, 'utf-8');
		const { data: frontmatter } = matter(readFile);

		return {
			slug,
			frontmatter,
		};
	});

	// Sort the posts by date in descending order (newest to oldest)
	posts.sort((a, b) => {
		return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
	});

	return limit ? posts.slice(0, limit) : posts;
}

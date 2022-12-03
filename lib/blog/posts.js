import { remark } from 'remark';
import html from 'remark-html';

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
		.use(html)
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
	const posts = files.map((fileName) => {
		const slug = fileName.replace('.md', '');
		const readFile = fs.readFileSync(`./data/blogs/${fileName}`, 'utf-8');
		const { data: frontmatter } = matter(readFile);

		return {
			slug,
			frontmatter,
		};
	});
	return limit ? posts.slice(0, limit) : posts;
}

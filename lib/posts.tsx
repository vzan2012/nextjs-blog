import fs from "fs";
import path from "path";

import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "blogposts");

export const getSortedPostsData = () => {
  // Get the file names from the blogposts folder
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    // Remove the .md from the filename to get the id
    const id = fileName.replace(/\.md$/, "");

    // Read the markdown file as string
    const filePath = path.join(postsDirectory, fileName);
    const fileDataContents = fs.readFileSync(filePath, "utf-8");

    // Using the gray-matter to parse the post metadata section
    const postDataResult = matter(fileDataContents);

    const blogPost: BlogPost = {
      id,
      title: postDataResult.data.title,
      date: postDataResult.data.date,
    };

    return blogPost;
  });

  // Sort Posts by Date
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
};

// Get Posts Content Data
export const getPostsContentData = async (id: string) => {
  // Get the File by Id
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");

  // Using "gray-matter" to parse the post metadata section
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHTML = processedContent.toString();

  const blogPostWithHTML: BlogPost & { contentHTML: string } = {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    contentHTML,
  };

  return blogPostWithHTML;
};

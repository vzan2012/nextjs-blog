import fs from "fs";
import path from "path";

import matter from "gray-matter";

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

// TODO: Get Posts Content Data
export const getPostsContentData = () => {};

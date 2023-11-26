import { getSortedPostsData } from "@/lib/posts";
import { notFound } from "next/navigation";

// Generate Meta Data
export const generateMetadata = ({
  params,
}: {
  params: { postId: string };
}) => {
  const posts = getSortedPostsData();
  const { postId } = params;

  const post = posts.find((post) => post.id === postId);

  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
  };
};

const Post = async ({ params }: { params: { postId: string } }) => {
  const posts = getSortedPostsData();
  const { postId } = params;

  // PostId doesn't exist
  if (!posts.find((post) => post.id === postId)) return notFound();

  return <div>page</div>;
};

export default Post;

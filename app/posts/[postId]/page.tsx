import getFormattedDate from "@/lib/getFormattedDate";
import { getPostsContentData, getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
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

// Generate Static Params
export const generateStaticParams = () => {
  const posts = getSortedPostsData();

  return posts.map((post) => ({ postId: post.id }));
};

const Post = async ({ params }: { params: { postId: string } }) => {
  const posts = getSortedPostsData();
  const { postId } = params;

  // PostId doesn't exist
  if (!posts.find((post) => post.id === postId)) return notFound();

  const { title, date, contentHTML } = await getPostsContentData(postId);

  const publishedDate = getFormattedDate(date);

  return (
    <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto text-white">
      <h1 className="text-3xl mt-4 mb-0 text-white">{title}</h1>
      <p className="mt-0">{publishedDate}</p>
      <article>
        <section
          className="text-white"
          dangerouslySetInnerHTML={{ __html: contentHTML }}
        />
        <p className="text-white text-center">
          <Link
            className="no-underline hover:underline text-white hover:text-white/70 "
            href="/"
          >
            Back to Home 🏡
          </Link>
        </p>
      </article>
    </main>
  );
};

export default Post;

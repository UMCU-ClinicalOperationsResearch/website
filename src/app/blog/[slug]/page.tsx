import { getBlogPost, getBlogPosts } from "@/lib/blog";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-8">{post.date}</p>
      <div 
        className="prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}

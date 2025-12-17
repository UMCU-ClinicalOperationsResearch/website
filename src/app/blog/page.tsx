import { getBlogPosts } from "@/lib/blog";
import Link from "next/link";

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
        Latest updates and insights from our research team
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="card-hover border-2 border-gray-200 dark:border-gray-800 rounded-xl p-6 bg-white dark:bg-gray-900 block"
          >
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="text-sm text-gray-500 mb-3">{post.date}</p>
            <p className="text-gray-600 dark:text-gray-400">{post.excerpt}</p>
            <p className="text-blue-600 font-semibold mt-4 inline-flex items-center">
              Read more
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

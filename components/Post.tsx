type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
};

export default function Post({ post }: { post: Post }) {
  return (
<div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 overflow-y-auto max-h-[70vh]">
      <div
        key={post.id}
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 mb-6 hover:shadow-lg transition-shadow duration-300 overflow-y-auto max-h-[80vh]"
      >
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          {post.title}
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed whitespace-pre-wrap">
          {post.content}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 border-t pt-4 mt-4">
          <div>
            <span className="font-medium">👤 {post.author}</span>
          </div>
          <div>
            <span>📅 {new Date(post.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

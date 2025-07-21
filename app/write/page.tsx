'use client';

import { createPost } from "./actions";


export default function Write() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950 px-6 py-12">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Write Your Post
        </h1>

        <form action={createPost}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="title"
              required
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
              placeholder="Enter post title"
            />
            <input
              type="text"
              name="author"
              required
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <textarea
              name="content"
              required
              rows={6}
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
              placeholder="Enter post content"
            ></textarea>
          </div>

          <button
            type="submit"
            className="text-center cursor-pointer w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
          >
            Submit Your Writing
          </button>
        </form>
      </div>
    </div>
  );
}

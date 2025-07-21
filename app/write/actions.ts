'use server';

export async function createPost(formData: FormData) {
  const title = formData.get('title') as string;
  const author = formData.get('author') as string;
  const content = formData.get('content') as string;

  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!apiBaseUrl) {
    throw new Error('API base URL is not defined');
  }
  const res = await fetch(apiBaseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      author,
      content,
    }),
  });

  if (!res.ok) {
    throw new Error('Failed to submit post');
  }


  const { redirect } = require('next/navigation');
  redirect('/');
}

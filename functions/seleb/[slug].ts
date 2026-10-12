/// <reference types="@cloudflare/workers-types" />

export const onRequestGet = async (context: {
  request: Request;
  params: { slug: string };
  next: () => Promise<Response>;
}) => {
  // If static SSG file exists in out/seleb/[slug].html, Cloudflare Pages serves it directly.
  // This fallback ensures graceful handling of profile routes.
  return context.next();
};

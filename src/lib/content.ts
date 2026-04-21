import { z } from 'zod';
import matter from 'gray-matter';

// Zod Schema to validate our Frontmatter
export const BlogPostSchema = z.object({
  title: z.string(),
  excerpt: z.string(),
  category: z.string(),
  image: z.string(),
  date: z.string(),
  readTime: z.string(),
  author: z.string(),
});

export type BlogPostFrontmatter = z.infer<typeof BlogPostSchema>;

export interface BlogPost {
  slug: string;
  frontmatter: BlogPostFrontmatter;
  content: string;
}

// We use Vite's import.meta.glob to read all markdown files.
// { query: '?raw', import: 'default' } loads them as raw strings synchronously
const modules = import.meta.glob('../content/*.md', { query: '?raw', import: 'default', eager: true });

export function getBlogPosts(): BlogPost[] {
  const posts: BlogPost[] = [];

  for (const path in modules) {
    const rawMarkdown = modules[path] as string;
    const parsed = matter(rawMarkdown);
    
    // Validate Frontmatter with Zod
    const frontmatter = BlogPostSchema.parse(parsed.data);
    
    // Extract slug from filename
    const slug = path.split('/').pop()?.replace(/\.md$/, '') || '';

    posts.push({
      slug,
      frontmatter,
      content: parsed.content,
    });
  }

  // Sort by date (newest first)
  return posts.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const posts = getBlogPosts();
  return posts.find((post) => post.slug === slug);
}

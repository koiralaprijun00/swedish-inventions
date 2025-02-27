declare module 'content-collections' {
  export interface Post {
    _meta: {
      path: string;
      // possibly filePath, directory, extension if needed
    };
    title: string;
    summary: string;
    content: string;            // <--- add this
    locale?: string;            // <--- add this
    image?: string;             // <--- add this
    readingDuration?: string;   // <--- add this
    categories?: string[];      // <--- add this
  }

  export const allPosts: Post[];
}

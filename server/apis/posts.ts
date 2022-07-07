import { client as Posts } from "../apis/fm/clients/Posts";
import { client as PostPreviews } from "../apis/fm/clients/PostPreviews";


export async function getPostBySlug(slug: string) {
  const post = await Posts.findFirst({ query: { Slug: slug } });
  const { Slug, PublishedBody, PublishedTitle } = post.data.fieldData;
  return { Slug: Slug, Body: PublishedBody, Title: PublishedTitle };
}

export async function getPostPreviewBySlug(slug: string) {
  const post = await PostPreviews.findFirst({ query: { Slug: slug } });
  const { Slug, PublishedBody, PublishedTitle } = post.data.fieldData;
  return { Slug: Slug, Body: PublishedBody, Title: PublishedTitle };
}
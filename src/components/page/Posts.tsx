import { For } from "solid-js";
import { MarkdownInstance } from "astro";
import truncate from "lodash.truncate";
import { config } from "@config";
import AppLink from "@components/AppLink";

export interface PostsProps {
  posts: MarkdownInstance<Record<string, any>>[];
}

export default function Posts(props: PostsProps) {
  const truncateOptions = {
    length: 150,
    separator: " ",
  };

  return (
    <div>
      <For each={props.posts}>
        {(post) => (
          <div class="space-y-4 mb-6">
            <h1 class="post-title md:text-3xl text-xl">
              <AppLink href={post.url}>{post.frontmatter.title}</AppLink>
            </h1>
            <div class="post-attr font-bold">
              {config.author}, {post.frontmatter.date}
            </div>
            <p class="post-desc leading-loose md:text-xl text-lg">
              {truncate(post.frontmatter.description, truncateOptions)}
            </p>
          </div>
        )}
      </For>
    </div>
  );
}

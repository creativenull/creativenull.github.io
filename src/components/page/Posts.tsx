import { For } from "solid-js";
import truncate from "lodash.truncate";
import { config } from "@config";
import AppLink from "@components/AppLink";
import { CollectionEntry } from "astro:content";

export interface PostsProps {
  posts: CollectionEntry<"posts">[];
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
              <AppLink href={`/${post.collection}/${post.slug}`}>{post.data.title}</AppLink>
            </h1>
            <div class="post-attr font-bold text-xs md:text-base">
              {config.author}, {post.data.date}
            </div>
            <p class="post-desc leading-loose md:text-xl text-md">
              {truncate(post.data.description, truncateOptions)}
            </p>
          </div>
        )}
      </For>
    </div>
  );
}

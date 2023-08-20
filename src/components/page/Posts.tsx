import { For } from "solid-js";
import truncate from "lodash.truncate";
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
            <h1 class="post-title md:text-2xl text-xl">
              <AppLink href={`/${post.collection}/${post.slug}`}>{post.data.title}</AppLink>
            </h1>
            <div class="post-attr italic text-xs md:text-sm">
              {post.data.date}
            </div>
            <p class="post-desc leading-loose">
              {truncate(post.data.description, truncateOptions)}
            </p>
          </div>
        )}
      </For>
    </div>
  );
}

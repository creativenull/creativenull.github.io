import { For } from "solid-js";
import truncate from "lodash.truncate";
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
              <a
                href={`/${post.collection}/${post.slug}`}
                class="text-blue-700 font-bold underline hover:no-underline dark:text-blue-500"
              >
                {post.data.title}
              </a>
            </h1>
            <div class="post-attr italic text-xs md:text-sm">{post.data.date}</div>
            <p class="post-desc leading-loose">
              {truncate(post.data.description, truncateOptions)}
            </p>
          </div>
        )}
      </For>
    </div>
  );
}

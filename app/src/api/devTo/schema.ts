import { z } from "zod";

/**
 * tag_list / tags が
 * ["a", "b", "c"]
 * "a, b, c"
 * のどちらでも来る可能性を許容
 */
const DevToTagsShema = z.union([z.array(z.string()), z.string()]);

const DevToUserShema = z.object({
  name: z.string(),
  user_id: z.number(),
});

export const DevToItemShema = z.object({
  id: z.number(),
  title: z.string(),
  body_markdown: z.string(),
  url: z.string(),
  positive_reactions_count: z.number(),
  published_at: z.string(),
  edited_at: z.string().nullable(),
  tags: DevToTagsShema,
  tag_list: DevToTagsShema,
  user: DevToUserShema,
});

export type DevToTags = z.infer<typeof DevToTagsShema>;
export type DevToUser = z.infer<typeof DevToUserShema>;
export type DevToItem = z.infer<typeof DevToItemShema>;

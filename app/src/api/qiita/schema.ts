import { z } from "zod";

const QiitaTagShema = z.object({
  name: z.string(),
  versions: z.array(z.string()),
});

const QiitaUserShema = z.object({
  id: z.string(),
  name: z.string(),
});

export const QiitaItemShema = z.object({
  id: z.string(),
  title: z.string(),
  body: z.string(),
  url: z.string(),
  tags: z.array(QiitaTagShema),
  likes_count: z.number(),
  user: QiitaUserShema,
  created_at: z.string(),
  updated_at: z.string(),
});

export type QiitaTag = z.infer<typeof QiitaTagShema>;
export type QiitaUser = z.infer<typeof QiitaUserShema>;
export type QiitaItem = z.infer<typeof QiitaItemShema>;

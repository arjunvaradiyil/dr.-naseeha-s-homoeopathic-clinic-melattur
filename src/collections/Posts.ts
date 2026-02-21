import type { CollectionConfig } from 'payload'

/** Block shape for body: same as frontend BlogBlock (h2, p, list, listNested) */
export type PostBodyBlock =
  | { type: 'h2'; text: string }
  | { type: 'p'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'listNested'; intro?: string; items: string[] }

export const Posts: CollectionConfig = {
  slug: 'posts',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'publishedAt', 'updatedAt'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },
    {
      name: 'description',
      type: 'textarea',
      admin: { description: 'Meta description for SEO' },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      admin: { description: 'Short excerpt for cards' },
    },
    {
      name: 'category',
      type: 'text',
    },
    {
      name: 'author',
      type: 'text',
    },
    {
      name: 'publishedAt',
      type: 'date',
      required: true,
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Optional hero image' },
    },
    {
      name: 'body',
      type: 'json',
      admin: { description: 'Article blocks: array of { type: "h2"|"p"|"list"|"listNested", text?, items?, intro? }' },
    },
  ],
}

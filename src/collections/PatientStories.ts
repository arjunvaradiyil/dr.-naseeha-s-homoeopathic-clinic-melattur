import type { CollectionConfig } from 'payload'

export const PatientStories: CollectionConfig = {
  slug: 'patient-stories',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'stars', 'createdAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'quote',
      type: 'textarea',
      required: true,
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'stars',
      type: 'number',
      required: true,
      min: 1,
      max: 5,
      defaultValue: 5,
    },
    {
      name: 'order',
      type: 'number',
      admin: {
        description: 'Order for display (lower = first)',
      },
    },
  ],
  timestamps: true,
}

import type { CollectionConfig } from 'payload'

export const Patients: CollectionConfig = {
  slug: 'patients',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'phone', 'email', 'createdAt'],
    description: 'Patient registry and demographics. View visit history in the Visits collection.',
  },
  access: {
    read: ({ req: { user } }) => Boolean(user),
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          admin: { width: '50%' },
        },
        {
          name: 'dateOfBirth',
          type: 'date',
          admin: { width: '50%', description: 'Date of birth' },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'phone',
          type: 'text',
          required: true,
          admin: { width: '50%' },
        },
        {
          name: 'email',
          type: 'email',
          admin: { width: '50%' },
        },
      ],
    },
    {
      name: 'gender',
      type: 'select',
      options: [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' },
        { label: 'Prefer not to say', value: 'prefer_not_to_say' },
      ],
      admin: { description: 'Optional' },
    },
    {
      name: 'address',
      type: 'textarea',
      admin: { description: 'Full address' },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'bloodGroup',
          type: 'text',
          admin: { width: '50%', description: 'e.g. A+, B-, O+' },
        },
        {
          name: 'emergencyContact',
          type: 'text',
          admin: { width: '50%', description: 'Name and phone' },
        },
      ],
    },
    {
      name: 'knownConditions',
      type: 'textarea',
      admin: {
        description: 'Known medical conditions, allergies, or ongoing treatments',
      },
    },
    {
      name: 'notes',
      type: 'textarea',
      admin: {
        description: 'General notes about the patient',
      },
    },
  ],
  timestamps: true,
}

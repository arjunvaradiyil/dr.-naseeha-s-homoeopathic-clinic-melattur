import type { CollectionConfig } from 'payload'

export const Visits: CollectionConfig = {
  slug: 'visits',
  admin: {
    useAsTitle: 'chiefComplaint',
    defaultColumns: ['patient', 'visitDate', 'chiefComplaint', 'followUpDate', 'createdAt'],
    description: 'Consultation and visit history. Each record is one visit for a patient.',
  },
  access: {
    read: ({ req: { user } }) => Boolean(user),
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'patient',
      type: 'relationship',
      relationTo: 'patients',
      required: true,
      hasMany: false,
      admin: {
        description: 'Select the patient for this visit',
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'visitDate',
          type: 'date',
          required: true,
          admin: { width: '50%' },
        },
        {
          name: 'followUpDate',
          type: 'date',
          admin: { width: '50%', description: 'Suggested follow-up date' },
        },
      ],
    },
    {
      name: 'chiefComplaint',
      type: 'text',
      required: true,
      admin: {
        description: 'Main reason for visit / chief complaint',
      },
    },
    {
      name: 'symptoms',
      type: 'textarea',
      admin: {
        description: 'Symptoms and history noted during visit',
      },
    },
    {
      name: 'examination',
      type: 'textarea',
      admin: {
        description: 'Clinical examination findings',
      },
    },
    {
      name: 'diagnosis',
      type: 'textarea',
      admin: {
        description: 'Diagnosis or assessment',
      },
    },
    {
      name: 'prescription',
      type: 'textarea',
      admin: {
        description: 'Medicines / homoeopathic prescription and dosage',
      },
    },
    {
      name: 'advice',
      type: 'textarea',
      admin: {
        description: 'Lifestyle advice, diet, follow-up instructions',
      },
    },
    {
      name: 'visitSummary',
      type: 'text',
      admin: {
        description: 'Short summary (e.g. for list view). Leave blank to auto-generate from chief complaint and date.',
      },
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Completed', value: 'completed' },
        { label: 'Follow-up scheduled', value: 'follow_up_scheduled' },
        { label: 'Pending', value: 'pending' },
        { label: 'Cancelled', value: 'cancelled' },
      ],
      defaultValue: 'completed',
    },
  ],
  timestamps: true,
}

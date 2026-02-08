/**
 * Blog post content for /blog/[slug] pages.
 * Each post: slug, title, description (meta), content blocks.
 */

export type BlogBlock =
  | { type: 'h2'; text: string }
  | { type: 'p'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'listNested'; intro?: string; items: string[] }

export type BlogPost = {
  slug: string
  title: string
  description: string
  category?: string
  author?: string
  publishedAt?: string
  featuredImage?: string
  blocks: BlogBlock[]
}

export const BLOG_POSTS: Record<string, BlogPost> = {
  'understanding-homoeopathy-daily-wellness': {
    slug: 'understanding-homoeopathy-daily-wellness',
    title: 'Understanding Homoeopathy for Daily Wellness',
    description: 'How homoeopathy supports daily wellness: natural, safe care for the whole family. Learn about like cures like, immunity, chronic conditions and balance.',
    category: 'Homoeopathy',
    author: "Dr. Naseeha's Homoeopathic Clinic",
    publishedAt: '2026-02-08',
    featuredImage: '/skilltreatments.png',
    blocks: [
      { type: 'h2', text: '🌿 Understanding Homoeopathy for Daily Wellness' },
      {
        type: 'p',
        text: "In today's fast-paced life, stress, irregular food habits, pollution, and lack of sleep are slowly affecting our health. Many people are now looking for natural, safe, and long-term solutions instead of just temporary relief. This is where Homoeopathy plays a powerful role in daily wellness.",
      },
      { type: 'h2', text: '🌱 What is Homoeopathy?' },
      {
        type: 'p',
        text: 'Homoeopathy is a natural system of medicine based on the principle: "Like cures like." This means a substance that can cause symptoms in a healthy person can, in very small doses, help treat similar symptoms in a sick person.',
      },
      {
        type: 'p',
        text: 'Homoeopathic medicines are:',
      },
      {
        type: 'list',
        items: [
          'Natural and gentle',
          'Non-toxic',
          'Safe for all age groups (infants to elderly)',
          'Free from harmful side effects when taken properly',
        ],
      },
      { type: 'h2', text: '💚 How Homoeopathy Supports Daily Wellness' },
      {
        type: 'p',
        text: "Homoeopathy doesn't just treat diseases—it focuses on you as a whole person: body, mind, and emotions.",
      },
      {
        type: 'p',
        text: "Here's how it helps in everyday life:",
      },
      { type: 'h2', text: '✅ Boosts Natural Immunity' },
      {
        type: 'p',
        text: "Instead of suppressing symptoms, homoeopathy strengthens your body's own healing power, helping you fight infections, allergies, and frequent illnesses.",
      },
      { type: 'h2', text: '✅ Manages Chronic Problems' },
      {
        type: 'p',
        text: 'Conditions like:',
      },
      {
        type: 'list',
        items: [
          'Allergies & sinus issues',
          'Migraine & headaches',
          'Skin problems',
          'Thyroid, PCOD, digestive issues',
          'Joint pains & back pain',
        ],
      },
      {
        type: 'p',
        text: 'can be managed gently and effectively with regular homoeopathic treatment.',
      },
      { type: 'h2', text: '✅ Reduces Stress & Improves Sleep' },
      {
        type: 'p',
        text: 'Mental stress, anxiety, and sleep disturbances are very common today. Homoeopathy helps balance the nervous system and improves mental well-being naturally.',
      },
      { type: 'h2', text: '✅ Safe for Long-Term Use' },
      {
        type: 'p',
        text: 'Since homoeopathic medicines are highly diluted and natural, they can be used for long periods without damaging the liver, kidneys, or stomach.',
      },
      { type: 'h2', text: '🌼 Homoeopathy for the Whole Family' },
      {
        type: 'p',
        text: 'One of the biggest advantages of homoeopathy is that it is suitable for:',
      },
      {
        type: 'list',
        items: [
          '👶 Children',
          '👩‍🦰 Adults',
          '👵 Elderly people',
          '🤰 Women (including hormonal issues like PCOD)',
        ],
      },
      {
        type: 'p',
        text: 'It treats acute problems (cold, fever, stomach upset) as well as chronic diseases with a personalized approach.',
      },
      { type: 'h2', text: '🧘 Daily Wellness is About Balance' },
      {
        type: 'p',
        text: 'True health is not just "no disease." It\'s about:',
      },
      {
        type: 'list',
        items: [
          'Good energy levels',
          'Peaceful sleep',
          'Strong immunity',
          'Emotional balance',
          'Healthy digestion',
        ],
      },
      {
        type: 'p',
        text: 'Homoeopathy works at the root cause and helps restore this natural balance in your body.',
      },
      { type: 'h2', text: '🌟 Final Thoughts' },
      {
        type: 'p',
        text: "If you're looking for a gentle, natural, and long-lasting way to take care of your health, homoeopathy can be a great choice. With the right guidance and regular follow-up, it can support your journey toward better daily wellness and a healthier life.",
      },
    ],
  },
}

export const BLOG_SLUGS = Object.keys(BLOG_POSTS) as string[]

export function getBlogPost(slug: string): BlogPost | null {
  return BLOG_POSTS[slug] ?? null
}

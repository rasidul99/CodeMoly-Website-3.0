import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: 'users',
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {
      views: {
        dashboard: {
          Component: './components/CustomDashboard',
          path: '/',
        },
        login: {
          Component: './components/CustomLogin',
          path: '/login',
        },
      },
    },
  },
  collections: [
    // Users Collection (for admin login)
    {
      slug: 'users',
      auth: true,
      admin: {
        useAsTitle: 'email',
      },
      fields: [],
    },
    // Media Collection (for uploads)
    {
      slug: 'media',
      upload: true,
      admin: {
        useAsTitle: 'filename',
        components: {
          views: {
            edit: {
              root: {
                Component: './components/CustomMediaEditor',
              },
            },
          },
        },
      },
      fields: [
        {
          name: 'alt',
          type: 'text',
          required: true,
        },
      ],
    },
    // Pages Collection (modular page builder)
    {
      slug: 'pages',
      admin: {
        useAsTitle: 'title',
        components: {
          views: {
            list: {
              Component: './components/CustomPagesList',
            },
            edit: {
              root: {
                Component: './components/CustomPageEditor',
              },
            },
          },
        },
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
          admin: {
            position: 'sidebar',
          },
        },
        {
          name: 'seo',
          type: 'group',
          label: 'SEO / Metadata',
          fields: [
            {
              name: 'metaTitle',
              type: 'text',
              label: 'Meta Title',
            },
            {
              name: 'metaDescription',
              type: 'textarea',
              label: 'Meta Description',
            },
            {
              name: 'ogImage',
              type: 'relationship',
              relationTo: 'media',
              label: 'Open Graph Image',
            },
          ],
        },
        {
          name: 'layout',
          type: 'blocks',
          blocks: [
            // Hero Block
            {
              slug: 'hero',
              labels: {
                singular: 'Hero Section',
                plural: 'Hero Sections',
              },
              fields: [
                {
                  name: 'showRating',
                  type: 'checkbox',
                  defaultValue: true,
                  label: 'Show Rating Badge',
                },
                {
                  name: 'ratingScore',
                  type: 'text',
                  defaultValue: '4.9',
                  label: 'Rating Score',
                },
                {
                  name: 'ratingLabel',
                  type: 'text',
                  defaultValue: 'Rated 4.9 out of 5 stars based on Capterra and Google reviews',
                  label: 'Rating Accessibility Label',
                },
                {
                  name: 'label',
                  type: 'text',
                  defaultValue: 'Transforming Business Through AI',
                },
                {
                  name: 'headingLine1',
                  type: 'text',
                  defaultValue: 'Transforming businesses',
                },
                {
                  name: 'headingLine2',
                  type: 'text',
                  defaultValue: 'through vision & AI innovation',
                },
                {
                  name: 'description',
                  type: 'textarea',
                  defaultValue: 'A leading software company reshaping industries across the globe through AI automation, seamless integrations, and intelligent solutions that drive business growth.',
                },
                {
                  name: 'ctaText',
                  type: 'text',
                  defaultValue: 'Book a Free Consultant',
                },
                {
                  name: 'ctaLink',
                  type: 'text',
                  defaultValue: '#',
                },
                {
                  name: 'contactCtaText',
                  type: 'text',
                  defaultValue: 'Contact Us',
                },
                {
                  name: 'contactCtaLink',
                  type: 'text',
                  defaultValue: '#',
                },
                {
                  name: 'secondaryCtaText',
                  type: 'text',
                  defaultValue: 'EXPLORE WORK',
                },
                {
                  name: 'secondaryCtaLink',
                  type: 'text',
                  defaultValue: '#',
                },
                {
                  name: 'video',
                  type: 'relationship',
                  relationTo: 'media',
                },
              ],
            },
          ],
        },
      ],
    },
    // Services Collection
    {
      slug: 'services',
      admin: {
        useAsTitle: 'name',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'icon',
          type: 'text',
          admin: {
            description: 'Lucide icon identifier (e.g. Activity, Cpu)',
          },
        },
        {
          name: 'content',
          type: 'richText',
        },
      ],
    },
    // Products Collection
    {
      slug: 'products',
      admin: {
        useAsTitle: 'name',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'image',
          type: 'relationship',
          relationTo: 'media',
        },
        {
          name: 'link',
          type: 'text',
        },
      ],
    },
    // Case Studies Collection
    {
      slug: 'case-studies',
      admin: {
        useAsTitle: 'title',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'client',
          type: 'text',
        },
        {
          name: 'summary',
          type: 'textarea',
        },
        {
          name: 'content',
          type: 'richText',
        },
        {
          name: 'image',
          type: 'relationship',
          relationTo: 'media',
        },
        {
          name: 'results',
          type: 'text',
          admin: {
            description: 'Highlight result (e.g. +320% Revenue growth)',
          },
        },
      ],
    },
    // Blog Posts Collection
    {
      slug: 'blog-posts',
      admin: {
        useAsTitle: 'title',
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
          unique: true,
        },
        {
          name: 'content',
          type: 'richText',
        },
        {
          name: 'image',
          type: 'relationship',
          relationTo: 'media',
        },
        {
          name: 'publishedDate',
          type: 'date',
        },
      ],
    },
    // Testimonials Collection
    {
      slug: 'testimonials',
      admin: {
        useAsTitle: 'author',
      },
      fields: [
        {
          name: 'author',
          type: 'text',
          required: true,
        },
        {
          name: 'role',
          type: 'text',
        },
        {
          name: 'company',
          type: 'text',
        },
        {
          name: 'quote',
          type: 'textarea',
          required: true,
        },
        {
          name: 'avatar',
          type: 'relationship',
          relationTo: 'media',
        },
      ],
    },
    // Partner Logos Collection
    {
      slug: 'partner-logos',
      admin: {
        useAsTitle: 'name',
        components: {
          views: {
            list: {
              Component: './components/CustomPartnerLogosList',
            },
            edit: {
              root: {
                Component: './components/CustomPartnerLogoEditor',
              },
            },
          },
        },
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'image',
          type: 'relationship',
          relationTo: 'media',
          admin: {
            description: 'Image file for logo (optional, text used if blank)',
          },
        },
        {
          name: 'hidden',
          type: 'checkbox',
          defaultValue: false,
          label: 'Hide from home page ticker',
        },
      ],
    },
    // Team Members Collection
    {
      slug: 'team-members',
      admin: {
        useAsTitle: 'name',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'role',
          type: 'text',
        },
        {
          name: 'bio',
          type: 'textarea',
        },
        {
          name: 'photo',
          type: 'relationship',
          relationTo: 'media',
        },
      ],
    },
    // FAQs Collection
    {
      slug: 'faqs',
      admin: {
        useAsTitle: 'question',
      },
      fields: [
        {
          name: 'question',
          type: 'text',
          required: true,
        },
        {
          name: 'answer',
          type: 'textarea',
          required: true,
        },
      ],
    },
    // Leads Collection (contact submissions)
    {
      slug: 'leads',
      admin: {
        useAsTitle: 'email',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
        },
        {
          name: 'email',
          type: 'text',
          required: true,
        },
        {
          name: 'message',
          type: 'textarea',
        },
        {
          name: 'status',
          type: 'select',
          defaultValue: 'new',
          options: [
            { label: 'New', value: 'new' },
            { label: 'Contacted', value: 'contacted' },
            { label: 'Converted', value: 'converted' },
            { label: 'Archived', value: 'archived' },
          ],
        },
      ],
    },
  ],
  globals: [
    // Site Settings Global (includes Navigation)
    {
      slug: 'site-settings',
      fields: [
        {
          name: 'siteName',
          type: 'text',
          defaultValue: 'adonis',
        },
        {
          name: 'logoText',
          type: 'text',
          defaultValue: 'adonis',
        },
        {
          name: 'logoImage',
          type: 'relationship',
          relationTo: 'media',
          label: 'Logo Image',
        },
        {
          name: 'logoTranslateY',
          type: 'number',
          label: 'Logo Vertical Offset (translateY in px)',
          defaultValue: 2,
        },
        {
          name: 'ctaLabel',
          type: 'text',
          label: 'Navbar CTA Label',
          defaultValue: 'Start a project',
        },
        {
          name: 'ctaLink',
          type: 'text',
          label: 'Navbar CTA Link',
          defaultValue: '#',
        },
        {
          name: 'showCta',
          type: 'checkbox',
          label: 'Show Navbar CTA Button',
          defaultValue: true,
        },
        {
          name: 'mobileMenuFooter',
          type: 'text',
          label: 'Mobile Menu Footer Text',
          defaultValue: 'CODEMOLY AI LABS',
        },
        {
          name: 'navigation',
          type: 'array',
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
            {
              name: 'link',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'footerLinks',
          type: 'array',
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
            {
              name: 'link',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
  ],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || 'a_secret_key_for_codemoly_website_development',
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URL || 'file:./payload.db',
    },
  }),
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})

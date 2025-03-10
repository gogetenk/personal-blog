import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Badge } from '@/components/ui/badge'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/cryptocard.svg'

const projects = [
  
  {
    name: 'CryptoCard',
    description: 'A seamless way to gift crypto. Purchase a card in stablecoins, let the recipient claim it in their preferred cryptocurrency.',
    link: { href: 'https://cryptocard.gift', label: 'cryptocard.gift' },
    logo: logoPlanetaria,
    technologies: ['React + Next', '.NET Core 9', 'Modular Monolith']
  },
  {
    name: 'Publishy',
    description:
      'An AI agent for solopreneurs and small businesses. Automates and scales unique content creation (texts, images, videos) with AI, effortlessly.',
    link: { href: 'https://publishy.ai', label: 'publishy.ai' },
    logo: logoAnimaginary,
    technologies: ['Blazor WebApp', 'OpenAI']
  },
  {
    name: 'InstantSite',
    description:
      'An automated solution for local businesses to get a fully personalized website instantly. Scraped business data from Google is used to pre-build sites, which can be claimed and customized before purchase.',
    link: { href: 'https://instantsite.fr', label: 'instantsite.fr' },
    logo: logoHelioStream,
    technologies: ['React + Next', 'Outscraper', 'Vercel CLI']
},
{
  name: 'AgileMind',
  description:
    'AI-powered backlog generation for Agile teams. Describe your project in natural language, and let AgileMind create structured user stories ready for your favorite project management tool.',
  link: { href: 'https://agilemind.ai', label: 'agilemind.ai' },
  logo: logoCosmos,
  technologies: ['OpenAI', 'Blazor WebApp']
},
  {
    name: 'Digitime',
    description:
      'A simple way for freelancers to fill up their monthly timesheet, and for customers to approve them. This is a repetitive, mandatory step for all freelancers before sending an invoice.',
    link: { href: 'https://digitime.app', label: 'https://digitime.app' },
    logo: logoOpenShuttle,
    technologies: ['Blazor WASM', 'Mongo DB']
  },{
    name: 'Padel companion',
    description:
      'A SaaS for tennis and padel clubs, combining yield management, flexible cancellations, and a universal loyalty program for small clubs and associations.',
    link: { href: '', label: 'coming soon...' },
    logo: logoOpenShuttle,
    technologies: ['Blazor WebApp', 'Modular Monolith']
  }
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: "Things I've made over the years.",
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Things I've made over the years."
      intro="I've worked on tons of little projects over the years but these are the ones that I'm most proud of. Spoiler alert: nothing made me rich yet."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <div className="relative z-20 mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="bg-white text-zinc-600 dark:bg-zinc-800/50 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700">
                  {tech}
                </Badge>
              ))}
            </div>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}

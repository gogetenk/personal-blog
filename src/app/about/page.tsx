import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Yannis, and my journey started from a cardboard fork dispenser.',
    openGraph: {
      images: '/images/portrait.jpg',
    },
    twitter: {
      card: 'summary_large_image',
      images: '/images/portrait.jpg',
    },
  }

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Yannis, and my journey started from a cardboard fork dispenser.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
          <p>
        Since childhood, I’ve been obsessed with building stuff. My first “great invention”? 
        A fork dispenser made of toilet paper rolls and cardboard. Utterly useless, but it 
        sparked the engineer in me. A few years later, my family handed me a Windows 95 PC, 
        and I dove into coding—initially just to make video games. Before long, I realized 
        I wasn’t hooked on game dev alone; I loved <strong>building</strong>, period.
      </p>

      <p>
        I started with BASIC, moved on to web development, and eventually, 
        <strong> C# became my weapon of choice</strong> in engineering school. 
        What began as a simple fascination turned into a full-blown passion for software 
        architecture and solving complex problems. Whether I’m optimizing microservices 
        or mentoring fellow devs, I still feel that original thrill—except now my contraptions 
        actually work (most of the time).
      </p>

      <p>
        I’ve been fully remote since before it was cool. About two years before COVID, when the world realized 
        offices weren’t all that necessary. For me, remote work isn’t just a preference; it’s practically 
        a fundamental right. Beyond code, AI captivates me for both its incredible potential and its pitfalls. 
        Truth be told, I’m using AI in almost every aspect of my life.
      </p>

      <p>
        Between client gigs, side projects (some promising, some absurd),
        I’m always creating something. This blog is my way of sharing the journey—thoughts on tech, AI, and 
        everything that keeps me awake at night. <br /> Welcome aboard! 🚀
      </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="#" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:&#121;&#97;&#110;&#110;&#105;&#115;&#46;&#116;&#111;&#99;&#114;&#101;&#97;&#117;&#64;&#111;&#117;&#116;&#108;&#111;&#111;&#107;&#46;&#99;&#111;&#109;"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              &#121;&#97;&#110;&#110;&#105;&#115;&#46;&#116;&#111;&#99;&#114;&#101;&#97;&#117;&#64;&#111;&#117;&#116;&#108;&#111;&#111;&#107;&#46;&#99;&#111;&#109;
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}

import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Yannis Tocreau',
    default:
      'Yannis Tocreau - Software engineer, architect & remote work advocate',
  },
  description:
    "I'm Yannis, a passionate software engineer specializing in .NET ecosystems and cloud-native architectures. By day, I build mission-critical systems for international enterprises while promoting clean code practices and sustainable software design. By night, I compulsively spawn side projects like there's a GitHub repo shortage (judge them yourself here). Permanently remote since before it was cool, because pants are overrated.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}

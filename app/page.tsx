import SocialList from '../components/SocialList'

export default function Home() {
  return (
    <>
      <div className="font-raleway leading-relaxed max-w-2xl mb-6 space-y-2 md:space-y-1">
        <p>TypeScript/Frontend developer based in Falun, Sweden.</p>
        <p>
          Building HR-Tech at{' '}
          <a
            href="https://worklygroup.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-yellow transition-colors duration-300"
          >
            Workly
          </a>{' '}
          using TypeScript, Nextjs and React Native.
        </p>
        <p>Interested in Web Performance, a11y, UX and Cloud technologies.</p>
      </div>
      <SocialList />
      <p className="text-xs text-yellow/50 mt-16">Built using Nextjs 13, TypeScript, Tailwind CSS and Vercel</p>
    </>
  )
}

import { Noto_Serif_Display, Raleway } from '@next/font/google'
import Header from '../components/Header'
import './globals.css'

const notoSerifDisplay = Noto_Serif_Display({ variable: '--noto-serif-display' })
const raleway = Raleway({ variable: '--raleway', subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={`min-h-screen bg-zinc-900 text-zinc-100 ${notoSerifDisplay.variable} ${raleway.variable} px-6`}>
        <div className="mx-auto max-w-5xl font-raleway text-base md:text-lg">
          <Header />
          <main className="py-6">{children}</main>
        </div>
      </body>
    </html>
  )
}

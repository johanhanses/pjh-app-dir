const title = 'Johan Hanses'
const subtitle = 'TypeScripter | Tailwinder | Devopser'
const externalCVURL = 'https://cv.johanhanses.com'

export default function Header() {
  return (
    <header className="py-6 md:py-24 flex justify-between">
      <div>
        <h1 className="text-3xl md:text-5xl mb-2 font-notoSerifDisplay">{title}</h1>
        <p className="text-sm md:text-base">{subtitle}</p>
      </div>
      <div className="font-notoSerifDisplay pt-4">
        <a
          href={externalCVURL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-1 rounded-md hover:bg-yellow/10 transition-colors duration-300"
        >
          CV
        </a>
      </div>
    </header>
  )
}

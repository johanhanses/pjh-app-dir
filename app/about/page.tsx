export default function page() {
  return (
    <div>
      <h2 className="font-notoSerifDisplay uppercase mb-4">Todo</h2>
      <ul className="space-y-2 md:space-y-1">
        <li className="list-disc list-inside line-through">Fix Lighthouse scores</li>
        <li className="list-disc list-inside">Add colorMode, check compat with next-themes and nextjs appDir</li>
        <li className="list-disc list-inside line-through">Mobile menu</li>
        <li className="list-disc list-inside line-through">Animate mobile menu</li>
        <li className="list-disc list-inside line-through">Close mobile menu on internal navigation</li>
      </ul>
    </div>
  )
}

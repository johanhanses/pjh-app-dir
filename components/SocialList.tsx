import Email from './Email'
import Github from './Github'
import LinkedIn from './LinkedIn'

const links = [
  {
    title: 'Email',
    url: 'mailto:johanhanses@gmail.com',
    icon: <Email />
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/johanhanses',
    icon: <LinkedIn />
  },
  {
    title: 'Github',
    url: 'https://github.com/johanhanses',
    icon: <Github />
  }
]

export default function SocialList() {
  return (
    <ul className="flex space-x-6">
      {links.map((link) => (
        <li key={link.title}>
          <a
            className="hover:text-yellow transition-colors duration-300"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
            <span className="sr-only">{link.title}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}

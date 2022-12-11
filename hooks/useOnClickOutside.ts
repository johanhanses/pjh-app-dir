import { MutableRefObject, useEffect } from 'react'

export default function useOnClickOutside(ref: MutableRefObject<HTMLDivElement | null>, action: () => void) {
  const handleClick = (e: globalThis.MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as HTMLElement)) action()
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  })
}

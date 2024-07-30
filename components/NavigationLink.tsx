'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavigationLink({ item }: {
  item: { name: string, value: string }
}) {
  const pathname = usePathname()
  const _href = `/${item.value}`
  const _extraClass = pathname === _href ? 'status--active' : undefined

  return (
    <Link
      className={`px-4 leading-10 bottom-border ${_extraClass}`}
      href={_href}
    >
      {item.name}
    </Link>
  )
}

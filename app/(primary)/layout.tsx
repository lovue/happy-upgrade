import NavigationLink from '@/components/NavigationLink'
import '../../style/layout.scss'

const projects: {
  name: string
  value: string
}[] = [
  { name: 'Vue', value: 'vue' },
  { name: 'Vite', value: 'vite' },
  { name: 'Stylelint', value: 'stylelint' },
  { name: 'DOMPurify', value: 'dompurify' },
  { name: 'Helmet', value: 'helmet' },
  { name: 'ESLint', value: 'eslint' },
  { name: 'Mongoose', value: 'mongoose' },
  { name: 'pnpm', value: 'pnpm' },
]

export default function PrimaryLayout({ children }: { children: React.ReactNode }) {
  const items = projects.map(item =>
    <NavigationLink item={item} key={item.value} />
  )

  return (
    <div className="layout-primary flex">
      <div className="layout-sidebar shrink-0 w-60">
        <div className="sidebar-above"></div>
        <div className="sidebar-items grid pb-5">{items}</div>
      </div>
      <div className="layout-content flex-1 p-6">{children}</div>
    </div>
  )
}

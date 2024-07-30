export default function PrimaryLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout-default flex">
      <div className="layout-sidebar shrink-0"></div>
      <div className="layout-content flex-1 p-6">{children}</div>
    </div>
  )
}

import Link from 'next/link'

export type BreadcrumbItem = { label: string; href?: string }

type Props = {
  title: string
  items: BreadcrumbItem[]
}

export default function PageBanner({ title, items }: Props) {
  return (
    <header className="page-banner">
      <div className="page-banner-pattern" aria-hidden />
      <div className="page-banner-inner">
        <p className="page-banner-title">{title}</p>
        <nav className="page-breadcrumb" aria-label="Breadcrumb">
          {items.map((item, i) => (
            <span key={i}>
              {i > 0 && <span className="page-breadcrumb-sep" aria-hidden>→</span>}
              {item.href ? (
                <Link href={item.href}>{item.label}</Link>
              ) : (
                <span>{item.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </header>
  )
}

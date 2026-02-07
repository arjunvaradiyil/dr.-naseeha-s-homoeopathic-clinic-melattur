import Link from 'next/link'

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="logo">
          <span className="logo-text">
            <span className="logo-main">DR. NASEEHA&apos;S</span>
            <span className="logo-sub">HOMOEOPATHIC CLINIC</span>
          </span>
        </Link>
        <nav className="main-nav">
          <Link href="/">Home</Link>
          <Link href="/#services">Treatments</Link>
          <Link href="/about">About Us</Link>
          <Link href="/patient-stories">Patient Stories</Link>
          <Link href="/awareness-videos">Awareness Videos</Link>
          <Link href="/contact">Contact</Link>
          <a href="https://wa.me/917356736929" target="_blank" rel="noopener noreferrer" className="btn btn-teal btn-header-cta">Book Appointment</a>
        </nav>
      </div>
    </header>
  )
}

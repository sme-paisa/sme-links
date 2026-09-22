import Image from 'next/image';
import styles from './page.module.css';

// ── SVG Icon Components ──────────────────────────────────────────────────────

const IconGlobe = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const IconYouTube = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const IconFacebook = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const IconBlogger = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
    <path d="M21.976 24H2.026C.9 24 0 23.1 0 21.976V2.026C0 .9.9 0 2.026 0h19.95C23.1 0 24 .9 24 2.026v19.95C24 23.1 23.1 24 21.976 24zM11.5 5.5H8c-1.381 0-2.5 1.119-2.5 2.5v8c0 1.381 1.119 2.5 2.5 2.5h8c1.381 0 2.5-1.119 2.5-2.5v-4.5c0-.553-.447-1-1-1h-.5c-.553 0-1-.447-1-1V8c0-1.381-1.119-2.5-2.5-2.5h-1zm-2 3h2c.553 0 1 .447 1 1s-.447 1-1 1H9.5c-.553 0-1-.447-1-1s.447-1 1-1zm5 6H9.5c-.553 0-1-.447-1-1s.447-1 1-1h5c.553 0 1 .447 1 1s-.447 1-1 1z"/>
  </svg>
);

const IconWhatsApp = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const IconArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
    strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const IconMedium = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
);

const IconQuora = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
    <path d="M12.555 18.447c-.61-1.333-1.316-2.699-2.826-2.699-.283 0-.567.059-.82.179l-.535-1.168c.656-.447 1.658-.804 2.929-.804 2.009 0 3.132.967 3.938 2.3.477-1.034.745-2.29.745-3.762C16 8.1 14.352 5.08 12 5.08S8 8.1 8 12.493c0 4.385 1.648 7.427 4 7.427.967 0 1.848-.537 2.555-1.473zM12 24C6.394 24 1.84 18.837 1.84 12.493 1.84 6.155 6.394 1 12 1s10.16 5.155 10.16 11.493c0 2.431-.69 4.7-1.878 6.537l1.638 3.256H18.3l-.855-1.714C16.296 21.616 14.24 24 12 24z"/>
  </svg>
);

const IconReddit = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
  </svg>
);

const IconTumblr = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
    <path d="M14.563 24c-5.093 0-7.031-2.443-7.031-5.74V10.42H4.5V6.368c3.96-.864 5.34-3.52 5.586-6.368h3.948v5.823h4.632v4.597h-4.632v7.126c0 1.62.778 2.454 2.442 2.454h2.247V24h-4.16z"/>
  </svg>
);

// ── Link Data ─────────────────────────────────────────────────────────────────

const LINKS = [
  {
    id: 'website',
    title: 'Visit Our Website',
    href: 'https://www.smepaisa.com',
    Icon: IconGlobe,
    variant: 'website',
  },
  {
    id: 'instagram',
    title: 'Instagram',
    href: 'https://www.instagram.com/officialsmepaisa?igsi=cTBwYjFudWlvbWd5',
    Icon: IconInstagram,
    variant: 'instagram',
  },
  {
    id: 'facebook',
    title: 'Facebook',
    href: 'https://www.facebook.com/sharer.php?u=https://tr.ee/xKwh0Yk3kw',
    Icon: IconFacebook,
    variant: 'facebook',
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp Channel',
    href: 'https://whatsapp.com/channel/0029Va9VxjWLCoX0h3ZR2L39',
    Icon: IconWhatsApp,
    variant: 'whatsapp',
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/company/sme-paisa',
    Icon: IconLinkedIn,
    variant: 'linkedin',
  },
  {
    id: 'youtube',
    title: 'YouTube',
    href: 'https://www.youtube.com/@SMEPaisa-z5g',
    Icon: IconYouTube,
    variant: 'youtube',
  },
  {
    id: 'blogger',
    title: 'Blog',
    href: 'https://officialsmepaisa.blogspot.com/',
    Icon: IconBlogger,
    variant: 'blogger',
  },
  {
    id: 'medium',
    title: 'Medium',
    href: 'https://medium.com/@smepaisaofficial',
    Icon: IconMedium,
    variant: 'medium',
  },
  {
    id: 'quora',
    title: 'Quora',
    href: 'https://www.quora.com/profile/SME-PAISA-1',
    Icon: IconQuora,
    variant: 'quora',
  },
  {
    id: 'reddit',
    title: 'Reddit',
    href: 'https://www.reddit.com/user/Express-Dealer2766/',
    Icon: IconReddit,
    variant: 'reddit',
  },
  {
    id: 'tumblr',
    title: 'Tumblr',
    href: 'https://www.tumblr.com/blog/smepaisa',
    Icon: IconTumblr,
    variant: 'tumblr',
  },
];

// ── Link Card Component ───────────────────────────────────────────────────────

function LinkCard({ title, href, Icon, variant }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.linkCard} ${styles[variant]}`}
      aria-label={`Visit SME PAISA on ${title}`}
    >
      <div className={`${styles.iconBox} ${styles[variant]}`}>
        <Icon />
      </div>
      <div className={styles.cardContent}>
        <p className={styles.cardTitle}>{title}</p>
      </div>
      <div className={styles.arrow}>
        <IconArrow />
      </div>
    </a>
  );
}

// ── Logo Component ────────────────────────────────────────────────────────────

function Logo() {
  return (
    <div className={styles.logoRing}>
      <div className={styles.logoCircle}>
        <Image
          src="/logo.jpeg"
          alt="SME PAISA Logo"
          width={104}
          height={104}
          priority
          className={styles.logoImg}
        />
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className={styles.pageWrapper}>
      {/* Ambient Gradient Blobs (Top-Right and Bottom-Left only) */}
      <div className={styles.bgBlobs} aria-hidden="true">
        <div className={`${styles.blob} ${styles.blobTopRight}`} />
        <div className={`${styles.blob} ${styles.blobBottomLeft}`} />
      </div>

      {/* Profile Header */}
      <section className={styles.profile} aria-label="SME PAISA profile">
        <Logo />
        <h1 className={styles.brandName}>SME PAISA</h1>
        <p className={styles.brandTagline}>
          Empowering Businesses with the right funding solutions
        </p>
      </section>

      <div className={styles.divider} role="separator" />

      {/* Quick Links */}
      <nav
        className={styles.linksContainer}
        aria-label="SME PAISA social and web links"
      >
        <p className={styles.sectionLabel}>Quick Links</p>
        <div className={styles.linksList}>
          {LINKS.map((link) => (
            <LinkCard key={link.id} {...link} />
          ))}
        </div>
      </nav>

      {/* Footer */}
      <footer className={styles.footer}>
        <p className={styles.footerText}>© {new Date().getFullYear()} All rights reserved</p>
        <p className={styles.footerBrand}>SME PAISA</p>
      </footer>
    </main>
  );
}


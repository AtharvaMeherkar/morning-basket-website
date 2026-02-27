/**
 * Premium Footer Component
 * Clean, warm footer with WhatsApp and location
 */

"use client";

import Link from "next/link";

const quickLinks = [
  { href: "/subscriptions", label: "Fruit Baskets" },
  { href: "/fruits", label: "Individual Fruits" },
  { href: "/check-availability", label: "Check Your Area" },
  { href: "/about", label: "About Us" },
  { href: "/faq", label: "FAQ" },
  { href: "/refund-policy", label: "Refund Policy" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: 'linear-gradient(180deg, var(--mb-cream-100) 0%, var(--mb-cream-200) 100%)',
        borderTop: '1px solid var(--mb-cream-300)',
        paddingTop: '4rem',
        paddingBottom: '2rem'
      }}
    >
      <style jsx>{`
        .footer-link {
          color: var(--mb-text-secondary);
          text-decoration: none;
          font-size: 0.95rem;
          transition: color 0.2s;
        }
        .footer-link:hover {
          color: var(--mb-olive-600);
        }
      `}</style>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
            marginBottom: '3rem'
          }}
        >
          {/* Brand */}
          <div>
            <Link 
              href="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                textDecoration: 'none',
                marginBottom: '1rem'
              }}
            >
              <span style={{ fontSize: '2rem' }}>🧺</span>
              <div>
                <span style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: 'var(--mb-olive-700)',
                  display: 'block',
                  lineHeight: 1.1
                }}>
                  MorningBasket
                </span>
                <span style={{
                  fontSize: '0.75rem',
                  color: 'var(--mb-text-muted)'
                }}>
                  Fresh every morning
                </span>
              </div>
            </Link>
            <p style={{ 
              fontSize: '0.95rem', 
              color: 'var(--mb-text-secondary)',
              maxWidth: '280px',
              lineHeight: 1.6
            }}>
              Hygienically cleaned fruits delivered to your door every morning. Serving families in Pune.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ 
              fontSize: '0.9rem', 
              fontWeight: '600',
              color: 'var(--mb-olive-700)',
              marginBottom: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {quickLinks.map((link) => (
                <li key={link.href} style={{ marginBottom: '0.75rem' }}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ 
              fontSize: '0.9rem', 
              fontWeight: '600',
              color: 'var(--mb-olive-700)',
              marginBottom: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Contact Us
            </h4>
            
            <a
              href="https://wa.me/918698292415"
              target="_blank"
              rel="noopener"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.25rem',
                background: '#25D366',
                color: 'white',
                borderRadius: 'var(--mb-radius-full)',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: '600',
                marginBottom: '1rem',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              +91 86982 92415
            </a>
            
            <p style={{ 
              fontSize: '0.9rem', 
              color: 'var(--mb-text-secondary)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.5rem'
            }}>
              <span style={{ fontSize: '1.1rem' }}>📍</span>
              <span>
                Bibewadi, Kondhwa, Market Yard, Gangadham & more<br/>
                Pune, Maharashtra
              </span>
            </p>
          </div>

          {/* Timing */}
          <div>
            <h4 style={{ 
              fontSize: '0.9rem', 
              fontWeight: '600',
              color: 'var(--mb-olive-700)',
              marginBottom: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Delivery Info
            </h4>
            <div style={{
              background: 'white',
              padding: '1.25rem',
              borderRadius: 'var(--mb-radius-md)',
              boxShadow: 'var(--mb-shadow-sm)'
            }}>
              <p style={{ 
                fontWeight: '600', 
                color: 'var(--mb-olive-700)',
                marginBottom: '0.5rem'
              }}>
                🌅 6:00 AM – 10:00 AM
              </p>
              <p style={{ 
                fontSize: '0.9rem', 
                color: 'var(--mb-text-secondary)',
                marginBottom: '0.75rem'
              }}>
                Daily morning deliveries
              </p>
              <p style={{
                fontSize: '0.85rem',
                padding: '0.5rem 0.75rem',
                background: 'var(--mb-cream-100)',
                borderRadius: 'var(--mb-radius-sm)',
                color: 'var(--mb-text-secondary)'
              }}>
                ⏰ Order by 10 PM for next-day delivery
              </p>
            </div>
          </div>
        </div>

        {/* Coming Soon */}
        <div style={{
          textAlign: 'center',
          padding: '1.5rem',
          background: 'var(--mb-olive-50)',
          borderRadius: 'var(--mb-radius-lg)',
          marginBottom: '2rem'
        }}>
          <p style={{ 
            color: 'var(--mb-text-muted)', 
            fontSize: '0.85rem',
            marginBottom: '0.25rem'
          }}>
            Coming Soon
          </p>
          <p style={{ 
            color: 'var(--mb-olive-600)', 
            fontWeight: '600'
          }}>
            🥬 Fresh Vegetables &nbsp;&nbsp; 💐 Flowers
          </p>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid var(--mb-cream-300)',
          paddingTop: '1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <p style={{ 
            fontSize: '0.85rem', 
            color: 'var(--mb-text-muted)',
            margin: 0
          }}>
            © 2025 MorningBasket. Fresh every morning.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link
              href="/terms"
              style={{
                fontSize: '0.85rem',
                color: 'var(--mb-text-muted)',
                textDecoration: 'none'
              }}
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              style={{
                fontSize: '0.85rem',
                color: 'var(--mb-text-muted)',
                textDecoration: 'none'
              }}
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/**
 * Premium Header Component
 * Glassmorphism navigation with smooth animations
 */

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/subscriptions", label: "Baskets" },
  { href: "/fruits", label: "Fruits" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/check-availability", label: "Check Area" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '0.75rem 0',
        background: isScrolled 
          ? 'rgba(255, 253, 249, 0.9)' 
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(45, 97, 78, 0.1)' : 'none',
        transition: 'all 0.3s var(--mb-ease)'
      }}
    >
      <div className="container">
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem'
        }}>
          {/* Logo */}
          <Link 
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              textDecoration: 'none'
            }}
          >
            <Image 
              src="/images/logo.png"
              alt="MorningBasket Logo"
              width={48}
              height={48}
              unoptimized
              style={{ 
                borderRadius: '50%',
                objectFit: 'cover'
              }}
            />
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
                fontSize: '0.7rem',
                color: 'var(--mb-text-muted)',
                letterSpacing: '0.02em'
              }}>
                Fresh every morning
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div 
            className="hide-mobile"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: '0.625rem 1rem',
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  color: 'var(--mb-text-secondary)',
                  textDecoration: 'none',
                  borderRadius: 'var(--mb-radius-full)',
                  transition: 'all 0.2s var(--mb-ease)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--mb-olive-50)';
                  e.currentTarget.style.color = 'var(--mb-olive-700)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'var(--mb-text-secondary)';
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hide-mobile" style={{ display: 'flex', gap: '0.75rem' }}>
            <a
              href="https://wa.me/918698292415"
              target="_blank"
              rel="noopener"
              className="btn btn-whatsapp"
              style={{
                padding: '0.625rem 1rem',
                fontSize: '0.95rem',
                gap: '0.5rem'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="hide-desktop"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              padding: '0.5rem',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px'
            }}
            aria-label="Toggle menu"
          >
            <span style={{
              display: 'block',
              width: '24px',
              height: '2px',
              background: 'var(--mb-olive-700)',
              borderRadius: '2px',
              transition: 'all 0.3s var(--mb-ease)',
              transform: isMenuOpen ? 'rotate(45deg) translateY(7px)' : 'none'
            }} />
            <span style={{
              display: 'block',
              width: '24px',
              height: '2px',
              background: 'var(--mb-olive-700)',
              borderRadius: '2px',
              transition: 'all 0.3s var(--mb-ease)',
              opacity: isMenuOpen ? 0 : 1
            }} />
            <span style={{
              display: 'block',
              width: '24px',
              height: '2px',
              background: 'var(--mb-olive-700)',
              borderRadius: '2px',
              transition: 'all 0.3s var(--mb-ease)',
              transform: isMenuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none'
            }} />
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className="hide-desktop"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'var(--mb-cream-50)',
            borderBottom: '1px solid var(--mb-gray-200)',
            padding: isMenuOpen ? '1.5rem' : '0',
            maxHeight: isMenuOpen ? '400px' : '0',
            overflow: 'hidden',
            transition: 'all 0.3s var(--mb-ease)',
            boxShadow: isMenuOpen ? 'var(--mb-shadow-lg)' : 'none'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  padding: '0.875rem 1rem',
                  fontSize: '1rem',
                  fontWeight: '500',
                  color: 'var(--mb-text-primary)',
                  textDecoration: 'none',
                  borderRadius: 'var(--mb-radius-md)',
                  background: 'var(--mb-cream-100)'
                }}
              >
                {link.label}
              </Link>
            ))}
            <div className="divider" style={{ margin: '0.5rem 0' }} />
            <a
              href="https://wa.me/918698292415"
              target="_blank"
              rel="noopener"
              className="btn btn-whatsapp"
              onClick={() => setIsMenuOpen(false)}
              style={{ justifyContent: 'center' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Order on WhatsApp
            </a>

          </div>
        </div>
      </div>
    </header>
  );
}

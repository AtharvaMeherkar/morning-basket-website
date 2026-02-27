/**
 * Premium Check Availability Page
 * Locality based availability check for Pune
 */

"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CheckAvailabilityPage() {
  const [name, setName] = useState("");
  const [area, setArea] = useState("");
  const [pinCode, setPinCode] = useState("");

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi! I want to check delivery availability for my location.%0A%0AName: ${name}%0AArea / Locality: ${area}%0APIN Code: ${pinCode}`;
    window.open(`https://wa.me/918698292415?text=${message}`, "_blank");
  };

  const locations = [
    "Bibewadi",
    "Kondhwa Upper",
    "Ganga Dham",
    "Market Yard"
  ];

  return (
    <>
      <Header />
      <main 
        style={{ 
          paddingTop: '6rem',
          minHeight: '100vh',
          background: 'linear-gradient(180deg, var(--mb-cream-200) 0%, var(--mb-cream-50) 100%)'
        }}
      >
        <section className="section" style={{ paddingTop: '2rem' }}>
          <div className="container">
            <div style={{ maxWidth: '500px', margin: '0 auto' }}>
              {/* Header */}
              <div className="text-center mb-4">
                <div className="badge badge-olive mb-2">📍 Pune Only</div>
                <h1 style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>
                  Our Service Areas
                </h1>
                <p style={{ color: 'var(--mb-text-secondary)' }}>
                  We currently deliver to the following locations in Pune
                </p>
              </div>

              {/* Locations List */}
              <div 
                className="card"
                style={{ 
                  padding: '2rem',
                  marginBottom: '2rem',
                  background: 'white',
                  border: '1px solid var(--mb-cream-300)'
                }}
              >
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0, 
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}>
                  {locations.map((loc, idx) => (
                    <li key={idx} style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.75rem',
                      padding: '1rem',
                      background: 'var(--mb-olive-50)',
                      borderRadius: 'var(--mb-radius-md)',
                      fontWeight: '600',
                      color: 'var(--mb-olive-700)'
                    }}>
                      <span style={{ fontSize: '1.25rem' }}>✅</span>
                      {loc}
                    </li>
                  ))}
                </ul>
                
                <div style={{ marginTop: '1.5rem' }}>
                  <Link 
                    href="/subscriptions" 
                    className="btn btn-primary" 
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    View Fruit Baskets →
                  </Link>
                </div>
              </div>

              {/* Inquiry Form */}
              <div className="card" style={{ padding: '2rem', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--mb-olive-700)', textAlign: 'center' }}>
                  Don't see your locality?
                </h3>
                <p style={{ color: 'var(--mb-text-secondary)', marginBottom: '1.5rem', textAlign: 'center', fontSize: '0.95rem', lineHeight: 1.5 }}>
                  We are continuously expanding! If your area isn't listed above, please contact us on WhatsApp to check delivery availability for your location.
                </p>

                <form onSubmit={handleWhatsAppRedirect}>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Name</label>
                    <input
                      type="text"
                      className="input"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      style={{ width: '100%' }}
                    />
                  </div>
                  
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Locality / Area</label>
                    <input
                      type="text"
                      className="input"
                      placeholder="e.g., Kothrud"
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                      required
                      style={{ width: '100%' }}
                    />
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>PIN Code</label>
                    <input
                      type="text"
                      className="input"
                      placeholder="e.g., 411038"
                      value={pinCode}
                      onChange={(e) => setPinCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                      required
                      maxLength={6}
                      style={{ width: '100%' }}
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-whatsapp" 
                    style={{ width: '100%', justifyContent: 'center', gap: '0.5rem' }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Send to WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

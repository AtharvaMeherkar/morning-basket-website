/**
 * About Us Page
 * MorningBasket story and mission
 */

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | MorningBasket - Fresh Fruits Delivered Every Morning",
  description: "Learn about MorningBasket's mission to deliver hygienically cleaned, fresh fruits to families in Pune every morning.",
  openGraph: {
    title: "About MorningBasket",
    description: "Our mission is to make fresh, clean fruits a simple part of your morning routine.",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '5rem' }}>
        {/* Hero */}
        <section 
          className="section"
          style={{
            background: 'linear-gradient(180deg, var(--mb-cream-200) 0%, var(--mb-cream-50) 100%)',
            paddingTop: '4rem',
            paddingBottom: '3rem'
          }}
        >
          <div className="container text-center">
            <h1 style={{ marginBottom: '1rem' }}>About MorningBasket</h1>
            <p style={{ 
              maxWidth: '600px', 
              margin: '0 auto',
              fontSize: '1.1rem'
            }}>
              We believe fresh fruits should be simple, clean, and part of every family's morning.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="section">
          <div className="container">
            <div style={{ maxWidth: '700px', margin: '0 auto' }}>
              <h2 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Our Story</h2>
              
              {/* Family image */}
              <div 
                className="img-zoom"
                style={{ 
                  marginBottom: '2rem',
                  borderRadius: 'var(--mb-radius-lg)',
                  boxShadow: 'var(--mb-shadow-lg)'
                }}
              >
                <Image 
                  src="/images/family-morning.png"
                  alt="Happy family enjoying fresh fruits"
                  width={700}
                  height={467}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                  MorningBasket started with a simple observation: buying fresh fruits shouldn't be complicated. 
                  Yet for most families in Pune, it means rushed weekend trips to the market, questioning freshness, 
                  and worrying about what's really on the surface of the fruits you eat.
                </p>
                
                <p style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                  We set out to change that. Our promise is simple — fresh, seasonal fruits, cleaned with 
                  ozonated water, delivered to your door every morning before you wake up.
                </p>

                <div style={{
                  padding: '2rem',
                  background: 'var(--mb-olive-50)',
                  borderRadius: 'var(--mb-radius-lg)',
                  borderLeft: '4px solid var(--mb-olive-400)'
                }}>
                  <p style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: '600',
                    color: 'var(--mb-olive-700)',
                    margin: 0,
                    fontStyle: 'italic'
                  }}>
                    "We don't just deliver fruits. We deliver peace of mind."
                  </p>
                </div>

                <p style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                  Every basket is curated with care — we source directly from trusted farms, 
                  clean each fruit with ozonated water to remove pesticides and bacteria, 
                  and deliver before your day begins.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section section-cream">
          <div className="container">
            <h2 style={{ marginBottom: '2.5rem', textAlign: 'center' }}>What We Stand For</h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              {[
                {
                  icon: "🧼",
                  title: "Hygiene First",
                  desc: "Every fruit is cleaned with ozonated water — the same technology used by food processing facilities worldwide."
                },
                {
                  icon: "🌱",
                  title: "Freshness Guaranteed",
                  desc: "No cold storage, no warehousing. We source and deliver the same day, so you get seasonal fruits at their best."
                },
                {
                  icon: "🤝",
                  title: "Trust & Transparency",
                  desc: "No hidden charges, no complicated subscriptions. Simple pricing, easy pause or cancel, honest service."
                },
                {
                  icon: "🏡",
                  title: "Family-Focused",
                  desc: "We're building MorningBasket for families like ours. Quality you'd serve to your own kids."
                }
              ].map((value, i) => (
                <div 
                  key={value.title}
                  className="card"
                  style={{ padding: '2rem' }}
                >
                  <span style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'block' }}>
                    {value.icon}
                  </span>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{value.title}</h3>
                  <p style={{ margin: 0, lineHeight: 1.7 }}>{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section section-cream">
          <div className="container">
            <div className="text-center mb-4">
              <h2 style={{ marginBottom: '0.75rem' }}>How It Works</h2>
              <p style={{ maxWidth: '500px', margin: '0 auto' }}>From farm to your door in hours</p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '2rem'
            }}>
              {[
                { icon: '🌙', title: 'Order by 10 PM', desc: 'Secure your basket for the next morning.' },
                { icon: '🚜', title: 'Procured at 4 AM', desc: 'Fresh from the source, directly to us.' },
                { icon: '💧', title: 'Ozonated Cleaning', desc: 'Washed and packed with strict hygiene.' },
                { icon: '🌅', title: 'Delivered before 10 AM', desc: 'Wake up to fresh fruits at your door.' }
              ].map((step, i) => (
                <div key={i} className="card text-center" style={{ padding: '2rem 1.5rem', background: '#fff' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{step.icon}</div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: '600' }}>{step.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--mb-text-muted)', margin: 0, lineHeight: '1.5' }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section section-olive" style={{ color: 'white' }}>
          <div className="container">
            <div className="text-center mb-4">
              <h2 style={{ marginBottom: '0.75rem', color: 'white' }}>Why Choose MorningBasket?</h2>
              <p style={{ maxWidth: '500px', margin: '0 auto', color: 'rgba(255,255,255,0.85)' }}>The better way to buy fruits</p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem'
            }}>
              {[
                { title: 'No Cold Storage', desc: 'We never store fruits overnight. You get what was procured the same morning.' },
                { title: '100% Hygienic', desc: 'Cleaned with ozonated water removing pesticides and bacteria before packing.' },
                { title: 'Unmatched Convenience', desc: 'No daily cart hassle. Subscribe once, and let us handle your daily fruit nutrition.' }
              ].map((benefit, i) => (
                <div key={i} style={{ 
                  padding: '1.5rem', 
                  background: 'rgba(255,255,255,0.1)', 
                  borderRadius: 'var(--mb-radius-lg)', 
                  border: '1px solid rgba(255,255,255,0.2)' 
                }}>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '1.4rem' }}>✨</span> {benefit.title}
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.85)', margin: 0, lineHeight: '1.5' }}>{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hygiene - Ozonated Water Cleaning */}
        <section className="section section-cream">
          <div className="container">
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '3rem',
                alignItems: 'center',
                maxWidth: '900px',
                margin: '0 auto'
              }}
            >
              <div className="text-center">
                <div className="badge badge-olive mb-3">Our Promise</div>
                <h2 style={{ marginBottom: '1rem' }}>
                  Ozonated water cleaning — not just a rinse
                </h2>
                <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 1.5rem' }}>
                  We use ozonated water (O₃) to deep-clean every fruit. It's the same technology used by premium food processing facilities worldwide.
                </p>
                
                {/* Cleaning image */}
                <div 
                  className="img-zoom"
                  style={{ 
                    maxWidth: '400px', 
                    margin: '0 auto 2rem',
                    borderRadius: 'var(--mb-radius-lg)',
                    boxShadow: 'var(--mb-shadow-lg)'
                  }}
                >
                  <Image 
                    src="/images/ozone-cleaning.png"
                    alt="Fruits being cleaned with ozonated water"
                    width={400}
                    height={400}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
                
                <div 
                  className="grid-2-col"
                  style={{
                    maxWidth: '600px',
                    margin: '0 auto',
                    textAlign: 'left'
                  }}
                >
                  {[
                    { title: "Removes pesticides", desc: "Breaks down surface chemicals" },
                    { title: "Eliminates bacteria", desc: "99.9% cleaner than water rinse" },
                    { title: "No residue", desc: "Ozone converts back to oxygen" },
                    { title: "Safe for all", desc: "Kids and elderly friendly" }
                  ].map((item, i) => (
                    <div 
                      key={item.title}
                      style={{
                        padding: '1.25rem',
                        background: 'var(--mb-olive-50)',
                        borderRadius: 'var(--mb-radius-md)',
                        borderLeft: '3px solid var(--mb-olive-400)'
                      }}
                    >
                      <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem', color: 'var(--mb-olive-700)' }}>
                        {item.title}
                      </h4>
                      <p style={{ fontSize: '0.9rem', margin: 0 }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="section">
          <div className="container text-center">
            <h2 style={{ marginBottom: '1rem' }}>What's Coming Next</h2>
            <p style={{ 
              maxWidth: '600px', 
              margin: '0 auto 2.5rem',
              color: 'var(--mb-text-secondary)'
            }}>
              We're expanding our offerings to bring you more fresh, seasonal goodness
            </p>
            
            <div 
              style={{
                display: 'inline-block',
                padding: '1.5rem 3rem',
                background: 'var(--mb-cream-200)',
                borderRadius: 'var(--mb-radius-xl)',
                border: '1px dashed var(--mb-olive-200)'
              }}
            >
              <p style={{ 
                color: 'var(--mb-text-muted)', 
                marginBottom: '0.5rem',
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Coming soon
              </p>
              <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
                <div className="float-slow" style={{ textAlign: 'center' }}>
                  <span style={{ fontSize: '2rem' }}>🥬</span>
                  <p style={{ fontSize: '0.9rem', color: 'var(--mb-olive-600)', fontWeight: '600', margin: '0.25rem 0 0' }}>
                    Fresh Vegetables
                  </p>
                </div>
                <div className="float-medium" style={{ textAlign: 'center' }}>
                  <span style={{ fontSize: '2rem' }}>💐</span>
                  <p style={{ fontSize: '0.9rem', color: 'var(--mb-olive-600)', fontWeight: '600', margin: '0.25rem 0 0' }}>
                    Fresh Flowers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="section">
          <div className="container text-center">
            <h2 style={{ marginBottom: '1rem' }}>Where We Are</h2>
            <p style={{ marginBottom: '2rem', color: 'var(--mb-text-secondary)' }}>
              Currently serving selected residential societies in Pune, Maharashtra.
            </p>
            
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1.5rem 2rem',
              background: 'var(--mb-cream-100)',
              borderRadius: 'var(--mb-radius-lg)'
            }}>
              <span style={{ fontSize: '2rem' }}>📍</span>
              <div style={{ textAlign: 'left' }}>
                <p style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Pune, Maharashtra</p>
                <p style={{ color: 'var(--mb-text-muted)', margin: 0, fontSize: '0.9rem' }}>Bibewadi, Kondhwa, Market Yard, Gangadham & more</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Promise */}
        <section className="section" style={{ background: 'var(--mb-cream-200)', textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ marginBottom: '1.25rem' }}>Our Promise</h2>
            <p style={{ maxWidth: '650px', margin: '0 auto 2rem', fontSize: '1.1rem', lineHeight: '1.6', color: 'var(--mb-text-secondary)' }}>
              We promise to never compromise on freshness or hygiene. Your health and satisfaction are our top priorities. We believe that a fresh morning leads to a beautiful day.
              <br /><br />
              <strong style={{ fontSize: '1.25rem', color: 'var(--mb-olive-700)' }}>Ready to experience freshness?</strong>
            </p>
            
            <a 
              href="https://wa.me/918698292415?text=Hi!%20I%20want%20to%20experience%20freshness"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2rem' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

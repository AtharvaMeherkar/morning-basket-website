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

        {/* Why Families Trust Us - Benefits */}
        <section className="section">
          <div className="container">
            <div className="text-center mb-4">
              <h2 style={{ marginBottom: '0.75rem' }}>Why families trust MorningBasket</h2>
              <p style={{ maxWidth: '500px', margin: '0 auto' }}>
                Fresh, clean, and delivered with care
              </p>
            </div>
            
            <div 
              className="grid-2-col"
              style={{
                maxWidth: '800px',
                margin: '0 auto'
              }}
            >
              {[
                {
                  icon: "💧",
                  title: "Ozonated Water Cleaned",
                  desc: "Every fruit washed with ozonated water — removing pesticides, bacteria, and chemicals"
                },
                {
                  icon: "🌅",
                  title: "Early Morning Delivery",
                  desc: "Fresh fruits ready before you start your day. 6-10 AM, every morning."
                },
                {
                  icon: "📦",
                  title: "No Cold Storage",
                  desc: "Sourced and delivered the same day. No warehousing, no preservatives."
                },
                {
                  icon: "🔄",
                  title: "Flexible Subscriptions",
                  desc: "Pause anytime, skip days, change baskets. Your routine, your control."
                }
              ].map((benefit, i) => (
                <div 
                  key={benefit.title}
                  className="card"
                  style={{
                    padding: '2rem',
                    opacity: 0,
                    animation: `fadeInUp 0.6s var(--mb-ease) ${0.1 + i * 0.1}s forwards`
                  }}
                >
                  <span style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'block' }}>
                    {benefit.icon}
                  </span>
                  <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>{benefit.title}</h3>
                  <p style={{ fontSize: '0.95rem', margin: 0 }}>{benefit.desc}</p>
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
                <p style={{ color: 'var(--mb-text-muted)', margin: 0, fontSize: '0.9rem' }}>411037</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section section-olive">
          <div className="container text-center">
            <h2 style={{ color: 'white', marginBottom: '1rem' }}>
              Ready to start your fresh morning?
            </h2>
            <p style={{ 
              color: 'rgba(255,255,255,0.85)', 
              maxWidth: '500px', 
              margin: '0 auto 2rem'
            }}>
              Try us for 3 days. No commitment, no hassle.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/subscriptions" className="btn btn-lg" style={{ 
                background: 'white', 
                color: 'var(--mb-olive-700)' 
              }}>
                View Baskets
              </Link>
              <a 
                href="https://wa.me/918698292415"
                target="_blank"
                rel="noopener"
                className="btn btn-lg"
                style={{ 
                  background: 'rgba(255,255,255,0.15)',
                  color: 'white',
                  border: '1.5px solid rgba(255,255,255,0.3)'
                }}
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

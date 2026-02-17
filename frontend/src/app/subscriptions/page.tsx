/**
 * Premium Subscriptions Page
 * Basket selection with frequency options
 */

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const baskets = [
  {
    id: "daily-essential",
    name: "Daily Essential Basket",
    tagline: "For your daily fruit routine",
    description: "Perfect for small families who want fresh fruits every morning. A balanced mix of everyday favourites.",
    price: 199,
    for: "Small families",
    fruits: [
      { emoji: "🍎", name: "Apple", qty: "2 pcs" },
      { emoji: "🍊", name: "Orange", qty: "2 pcs" },
      { emoji: "🍐", name: "Pomegranate", qty: "2 pcs" },
      { emoji: "🍌", name: "Banana", qty: "4 pcs" }
    ],
    popular: false,
    color: "var(--mb-olive-100)",
    image: "/images/basket-daily-essentials.png"
  },
  {
    id: "family-care",
    name: "Family Care Basket",
    tagline: "Balanced variety for everyone",
    description: "Our most loved basket. Generous portions for families who share fruit together.",
    price: 369,
    for: "Medium–large families",
    fruits: [
      { emoji: "🍎", name: "Apple", qty: "3 pcs" },
      { emoji: "🍊", name: "Orange", qty: "3 pcs" },
      { emoji: "🍌", name: "Banana", qty: "6 pcs" },
      { emoji: "🍐", name: "Pomegranate", qty: "3 pcs" },
      { emoji: "🍇", name: "Seasonal Fruit", qty: "500g" }
    ],
    popular: true,
    color: "var(--mb-olive-200)",
    image: "/images/basket-family-care.png"
  },
  {
    id: "summer-special",
    name: "Summer Special Basket",
    tagline: "Refreshing summer favourites",
    description: "Beat the heat with our refreshing summer selection. Curated with the freshest seasonal picks.",
    price: 449,
    for: "Variety seekers",
    fruits: [
      { emoji: "🍉", name: "Watermelon", qty: "2–3 kg" },
      { emoji: "🍈", name: "Muskmelon", qty: "½ kg" },
      { emoji: "🍇", name: "Grapes", qty: "500g" },
      { emoji: "🐉", name: "Dragon Fruit", qty: "2 pcs" },
      { emoji: "🥝", name: "Kiwi", qty: "3 pcs" }
    ],
    popular: false,
    color: "var(--mb-cream-300)",
    image: "/images/basket-seasonal-select.png"
  }
];

export default function SubscriptionsPage() {
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
            <div className="badge badge-olive mb-3">Fruits only • Phase 1</div>
            <h1 style={{ marginBottom: '1rem' }}>Choose your fruit basket</h1>
            <p style={{ 
              maxWidth: '550px', 
              margin: '0 auto',
              fontSize: '1.1rem'
            }}>
              No cart hassle. Pick your basket, set your frequency, and wake up to freshness every morning.
            </p>
          </div>
        </section>

        {/* Frequency Info */}
        <section style={{ padding: '2rem 0' }}>
          <div className="container">
            <div 
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '2rem',
                flexWrap: 'wrap',
                padding: '1.5rem 2rem',
                background: 'white',
                borderRadius: 'var(--mb-radius-lg)',
                boxShadow: 'var(--mb-shadow-sm)',
                maxWidth: '600px',
                margin: '0 auto'
              }}
            >
              <div className="text-center">
                <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>📅</div>
                <p style={{ fontWeight: '600', color: 'var(--mb-olive-700)', marginBottom: '0.125rem' }}>Daily</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--mb-text-muted)', margin: 0 }}>Every morning</p>
              </div>
              <div style={{ 
                width: '1px', 
                background: 'var(--mb-gray-200)',
                alignSelf: 'stretch'
              }} />
              <div className="text-center">
                <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>🔄</div>
                <p style={{ fontWeight: '600', color: 'var(--mb-olive-700)', marginBottom: '0.125rem' }}>Alternate Days</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--mb-text-muted)', margin: 0 }}>Every other day</p>
              </div>
            </div>
          </div>
        </section>

        {/* Baskets */}
        <section className="section" style={{ paddingTop: '1rem' }}>
          <div className="container">
            <div 
              className="baskets-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '0.75rem',
                padding: '0 0.5rem'
              }}
            >
              {baskets.map((basket, i) => (
                <div 
                  key={basket.id}
                  className="card"
                  style={{
                    padding: '0',
                    overflow: 'hidden',
                    opacity: 0,
                    animation: `fadeInUp 0.6s var(--mb-ease) ${0.1 + i * 0.05}s forwards`
                  }}
                >
                  {/* Product Image */}
                  <div 
                    style={{ 
                      aspectRatio: '4/3',
                      background: 'var(--mb-cream-100)',
                      overflow: 'hidden',
                      position: 'relative'
                    }}
                  >
                    <Image 
                      src={basket.image}
                      alt={basket.name}
                      width={400}
                      height={300}
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover' 
                      }}
                    />
                  </div>
                  
                  <div style={{ padding: '0.75rem' }}>
                    <p style={{ 
                      fontSize: '0.75rem',
                      color: 'var(--mb-text-muted)',
                      marginBottom: '0.25rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      Baskets
                    </p>
                    
                    <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', fontWeight: '600' }}>{basket.name}</h3>
                  
                    {/* Description */}
                    <p style={{ 
                      fontSize: '0.85rem', 
                      marginBottom: '0.75rem',
                      color: 'var(--mb-text-muted)',
                      lineHeight: 1.5
                    }}>
                      {basket.description}
                    </p>

                    {/* What's included */}
                    <div style={{ 
                      marginBottom: '0.75rem',
                      padding: '0.5rem',
                      background: 'var(--mb-cream-100)',
                      borderRadius: 'var(--mb-radius-sm)'
                    }}>
                      <p style={{ 
                        fontSize: '0.7rem',
                        fontWeight: '600',
                        color: 'var(--mb-text-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        marginBottom: '0.4rem'
                      }}>
                        What's included
                      </p>
                      <div style={{ 
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.3rem'
                      }}>
                        {basket.fruits.map((fruit, idx) => (
                          <div 
                            key={idx}
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              fontSize: '0.8rem',
                              paddingBottom: '0.3rem',
                              borderBottom: idx < basket.fruits.length - 1 ? '1px solid var(--mb-gray-100)' : 'none'
                            }}
                          >
                            <span>{fruit.name}</span>
                            <span style={{ color: 'var(--mb-text-muted)', fontWeight: '500', fontSize: '0.75rem' }}>{fruit.qty}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  
                    {/* Price */}
                    <div style={{
                      padding: '0.4rem 0.5rem',
                      background: 'var(--mb-cream-200)',
                      borderRadius: 'var(--mb-radius-sm)',
                      marginBottom: '0.75rem',
                      fontWeight: '600',
                      fontSize: '0.9rem',
                      color: 'var(--mb-olive-600)'
                    }}>
                      ₹{basket.price}/basket
                    </div>
                  
                    {/* CTA */}
                    <a 
                      href={`https://wa.me/918698292415?text=Hi!%20I'm%20interested%20in%20the%20${encodeURIComponent(basket.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{ 
                        width: '100%',
                        fontSize: '0.85rem',
                        padding: '0.6rem'
                      }}
                    >
                      Buy on WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trial Info */}
        <section className="section section-cream">
          <div className="container">
            <div style={{ maxWidth: '700px', margin: '0 auto' }}>
              <div className="text-center mb-4">
                <h2 style={{ marginBottom: '0.75rem' }}>Your 3-day trial</h2>
                <p>Experience MorningBasket with no commitment</p>
              </div>

              <div 
                style={{
                  display: 'grid',
                  gap: '1rem'
                }}
              >
                {[
                  { 
                    step: "1", 
                    title: "Choose your basket", 
                    desc: "Pick the one that fits your family" 
                  },
                  { 
                    step: "2", 
                    title: "Get 3 deliveries", 
                    desc: "Fresh, clean fruits for 3 consecutive mornings" 
                  },
                  { 
                    step: "3", 
                    title: "Continue or cancel", 
                    desc: "Love it? Subscribe. Not for you? No hard feelings." 
                  }
                ].map((item, i) => (
                  <div
                    key={item.step}
                    className="card"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.25rem',
                      padding: '1.25rem 1.5rem'
                    }}
                  >
                    <div className="step-number">{item.step}</div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', marginBottom: '0.125rem' }}>{item.title}</h4>
                      <p style={{ margin: 0, fontSize: '0.95rem' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Order Info */}
        <section className="section">
          <div className="container text-center">
            <div style={{
              maxWidth: '500px',
              margin: '0 auto',
              padding: '2rem',
              background: 'var(--mb-olive-50)',
              borderRadius: 'var(--mb-radius-lg)',
              border: '1px solid var(--mb-olive-100)'
            }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--mb-olive-700)' }}>
                How to order
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

                <div>
                  <p style={{ fontWeight: '600', marginBottom: '0.25rem' }}>💬 Order on WhatsApp</p>
                  <p style={{ fontSize: '0.9rem', marginBottom: '0.75rem' }}>
                    Just say hi and we'll help you
                  </p>
                  <a
                    href="https://wa.me/918698292415?text=Hi!%20I%20want%20to%20order%20MorningBasket"
                    target="_blank"
                    rel="noopener"
                    className="btn btn-whatsapp btn-sm"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    +91 86982 92415
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

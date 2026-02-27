/**
 * Premium Homepage - MorningBasket
 * Fresh fruits, delivered every morning
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
    price: 199,
    for: "Individuals/Couples",
    popular: false,
    image: "/images/Daily Essential Basket.png"
  },
  {
    id: "small-family-care",
    name: "Small Family Care Basket",
    tagline: "Just right for small families",
    price: 249,
    for: "Small families",
    popular: true,
    image: "/images/Small Family Care Basket.png"
  },
  {
    id: "family-care",
    name: "Family Care Basket",
    tagline: "Balanced variety for everyone",
    price: 379,
    for: "Medium–large families",
    popular: false,
    image: "/images/Family Care Basket.png"
  },
  {
    id: "summer-special",
    name: "Summer Special Basket",
    tagline: "Refreshing summer favourites",
    price: 299,
    for: "Variety seekers",
    popular: false,
    image: "/images/Summer Special Basket.png"
  }
];

const steps = [
  {
    num: "1",
    title: "Choose your basket",
    desc: "Pick from our curated fruit baskets designed for different family sizes"
  },
  {
    num: "2",
    title: "Set your schedule",
    desc: "Daily or alternate days — we work around your family's routine"
  },
  {
    num: "3",
    title: "Wake up to freshness",
    desc: "Clean, fresh fruits at your door between 6-10 AM. Every morning."
  }
];

const benefits = [
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
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section 
          className="section"
          style={{
            paddingTop: '7rem',
            paddingBottom: '4rem',
            background: 'linear-gradient(180deg, var(--mb-cream-200) 0%, var(--mb-cream-50) 100%)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Left side spilled bag force-tilted */}
          <div 
            className="hide-mobile"
            style={{
              position: 'absolute',
              top: '50%',
              left: '-150px',
              transform: 'translateY(-50%) rotate(15deg)',
              width: '700px',
              height: '700px',
              pointerEvents: 'none',
              zIndex: 0,
              mixBlendMode: 'multiply',
              filter: 'brightness(1.05) contrast(1.05)',
              opacity: 0.8
            }}
          >
            <Image 
              src="/images/newimage.png"
              alt="Fresh fruits spilling from bag"
              width={900}
              height={900}
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'contain'
              }}
             />
          </div>

          {/* Full fruit bowl peeking from right - clear and prominent */}
          <div 
            className="hide-mobile"
            style={{
              position: 'absolute',
              top: '50%',
              right: '-100px',
              transform: 'translateY(-50%)',
              width: '700px',
              height: '700px',
              pointerEvents: 'none',
              zIndex: 0,
              opacity: 0.8
            }}
          >
            <Image 
              src="/images/fruit-bowl-bg.png"
              alt="Fresh fruit bowl"
              width={800}
              height={800}
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                borderRadius: '50%'
              }}
            />
          </div>
          
          <div className="container" style={{ position: 'relative', zIndex: 10 }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '3rem',
              alignItems: 'center'
            }}>
              <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto', background: 'rgba(255,255,255,0.4)', padding: '2rem', borderRadius: 'var(--mb-radius-xl)', backdropFilter: 'blur(3px)' }}>
                <div 
                  className="badge badge-olive mb-3"
                  style={{ 
                    opacity: 0,
                    animation: 'fadeInUp 0.6s var(--mb-ease) forwards'
                  }}
                >
                  🍎 Fresh fruits only — Pune
                </div>
                
                <h1 
                  style={{ 
                    marginBottom: '1.5rem',
                    opacity: 0,
                    animation: 'fadeInUp 0.6s var(--mb-ease) 0.1s forwards'
                  }}
                >
                  Fresh fruits, delivered{' '}
                  <span className="text-gradient">every morning</span>
                </h1>
                
                <p 
                  style={{ 
                    fontSize: '1.25rem',
                    maxWidth: '550px',
                    margin: '0 auto 2rem',
                    opacity: 0,
                    animation: 'fadeInUp 0.6s var(--mb-ease) 0.2s forwards'
                  }}
                >
                  Cleaned with ozonated water. No cold storage. Just seasonal goodness delivered to your door before you wake up.
                </p>
                
                <div 
                  style={{ 
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    justifyContent: 'center',
                    opacity: 0,
                    animation: 'fadeInUp 0.6s var(--mb-ease) 0.3s forwards'
                  }}
                >
                  <Link href="/subscriptions" className="btn btn-primary btn-lg">
                    Start 3-day trial
                  </Link>
                  <a 
                    href="https://wa.me/918698292415?text=Hi!%20I%20want%20to%20try%20MorningBasket"
                    target="_blank"
                    rel="noopener"
                    className="btn btn-whatsapp btn-lg"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Order on WhatsApp
                  </a>
                </div>

                <p 
                  style={{ 
                    marginTop: '1.5rem',
                    fontSize: '0.9rem',
                    color: 'var(--mb-text-muted)',
                    opacity: 0,
                    animation: 'fadeInUp 0.6s var(--mb-ease) 0.4s forwards'
                  }}
                >
                  ✓ No commitment &nbsp; ✓ Cancel anytime &nbsp; ✓ Order by 10 PM tonight
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Basket Preview */}
        <section className="section section-cream">
          <div className="container">
            <div className="text-center mb-4">
              <h2 style={{ marginBottom: '0.75rem' }}>Choose your basket</h2>
              <p style={{ maxWidth: '500px', margin: '0 auto' }}>
                Fixed baskets curated for families. No cart hassle.
              </p>
            </div>
            
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
                    opacity: 0,
                    animation: `fadeInUp 0.6s var(--mb-ease) ${0.1 + i * 0.05}s forwards`,
                    overflow: 'hidden'
                  }}
                >
                  {/* Basket Image */}
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
            
            <div className="text-center mt-4">
              <Link href="/subscriptions" className="btn btn-outline">
                View all details →
              </Link>
            </div>
          </div>
        </section>

        {/* How It Works - Photo-Driven Premium Feel */}
        <section className="section" style={{ background: 'var(--mb-cream-50)', padding: '6rem 0', position: 'relative' }}>
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="text-center mb-5" style={{ marginBottom: '4rem' }}>
              <span style={{ display: 'block', color: 'var(--mb-olive-500)', fontSize: '0.9rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}>The Journey</span>
              <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--mb-olive-800)', fontWeight: '800', marginBottom: '1rem', lineHeight: 1.1 }}>How It Works</h2>
              <p style={{ color: 'var(--mb-text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>From local farms to your kitchen table in less than 12 hours.</p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '2rem',
              maxWidth: '1280px',
              margin: '0 auto'
            }}>
              {[
                {
                  step: '01',
                  title: 'Order by 10 PM.',
                  desc: 'Choose your fresh fruits on our website before you go to sleep.',
                  img: '/images/Order%20by%2010%20PM.png'
                },
                {
                  step: '02',
                  title: 'Fresh at 4 AM.',
                  desc: 'We buy directly from local farms before sunrise. Only the best fruit makes the cut.',
                  img: '/images/Fresh%20at%204%20AM.png'
                },
                {
                  step: '03',
                  title: 'Ozone Cleansed.',
                  desc: 'Every piece is 100% hygienically washed in an ozone bath to remove all impurities and packed safely.',
                  img: '/images/Ozone%20Cleansed.png'
                },
                {
                  step: '04',
                  title: 'Home by 8 AM.',
                  desc: 'Your impeccably clean, ready-to-eat fruit basket is waiting at your door before breakfast.',
                  img: '/images/Home%20by%208%20AM.png'
                }
              ].map((item, i) => (
                <div key={i} className="hover-lift" style={{
                  background: 'white',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 40px rgba(45, 97, 78, 0.06)',
                  border: '1px solid var(--mb-cream-200)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.4s ease, box-shadow 0.4s ease'
                }}>
                  {/* Photo Area */}
                  <div style={{ 
                    position: 'relative', 
                    width: '100%', 
                    aspectRatio: '4/3', 
                    overflow: 'hidden' 
                  }}>
                    <img 
                      src={item.img} 
                      alt={item.title}
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        display: 'block'
                      }} 
                    />
                    {/* Dark gradient overlay at bottom of photo for text contrast if needed, or just visual weight */}
                    <div style={{
                      position: 'absolute',
                      bottom: 0, left: 0, right: 0,
                      height: '50%',
                      background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 100%)',
                      pointerEvents: 'none'
                    }} />
                    
                    {/* Step Number Badge overlapping photo */}
                    <div style={{
                      position: 'absolute',
                      bottom: '1.5rem',
                      left: '2rem',
                      background: 'white',
                      color: 'var(--mb-olive-800)',
                      padding: '0.5rem 1rem',
                      borderRadius: '8px',
                      fontWeight: 'bold',
                      fontSize: '1rem',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}>
                      Step {item.step}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div style={{ padding: '2.5rem 2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontSize: '1.75rem', color: 'var(--mb-olive-800)', fontWeight: 'bold', marginBottom: '1rem', lineHeight: 1.2 }}>
                      {item.title}
                    </h3>
                    <p style={{ color: 'var(--mb-text-secondary)', fontSize: '1.1rem', lineHeight: 1.6, margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
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

        {/* Stats */}
        <section 
          className="section"
          style={{
            background: 'linear-gradient(135deg, var(--mb-olive-50) 0%, var(--mb-cream-100) 100%)',
            padding: '3rem 0'
          }}
        >
          <div className="container">
            <div 
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '4rem',
                flexWrap: 'wrap'
              }}
            >
              {[
                { num: "6-8 AM", label: "Delivery slot 1" },
                { num: "8-10 AM", label: "Delivery slot 2" },
                { num: "₹199+", label: "Starting price" },
                { num: "3 Days", label: "Trial" },
                { num: "0", label: "Commitment" }
              ].map((stat, i) => (
                <div key={stat.label} className="text-center">
                  <p style={{ 
                    fontSize: '2rem', 
                    fontWeight: '700',
                    color: 'var(--mb-olive-700)',
                    marginBottom: '0.25rem'
                  }}>
                    {stat.num}
                  </p>
                  <p style={{ 
                    fontSize: '0.9rem',
                    color: 'var(--mb-text-muted)',
                    margin: 0
                  }}>
                    {stat.label}
                  </p>
                </div>
              ))}
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

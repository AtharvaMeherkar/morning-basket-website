/**
 * Individual Fruits Page
 * Mobile-first design for browsing individual fruits
 */

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Individual fruits data
// Note: Images and actual rates will be provided by user
const fruits = [
  {
    id: "apple",
    name: "Apple",
    emoji: "🍎",
    description: "Crisp and sweet apples, freshly sourced",
    rate: "₹140 for 4 pcs",
    image: "/images/Apple.jpeg"
  },
  {
    id: "banana",
    name: "Banana",
    emoji: "🍌",
    description: "Fresh yellow bananas, perfect for snacking",
    rate: "₹36 for 6 pcs",
    image: "/images/Banana.jpeg"
  },
  {
    id: "orange",
    name: "Orange",
    emoji: "🍊",
    description: "Juicy oranges packed with Vitamin C",
    rate: "₹45 for 4 pcs",
    image: "/images/Oranges.jpeg"
  },
  {
    id: "green-grapes",
    name: "Green Grapes",
    emoji: "🍇",
    description: "Sweet and seedless green grapes",
    rate: "₹79 (400-600g)",
    image: "/images/Green-Grapes.jpeg"
  },
  {
    id: "black-grapes",
    name: "Black Grapes",
    emoji: "🍇",
    description: "Sweet and juicy black grapes",
    rate: "₹119 (400-600g)",
    image: "/images/Black-Grapes.jpeg"
  },
  {
    id: "pomegranate",
    name: "Pomegranate",
    emoji: "🍐",
    description: "Ruby red pomegranates",
    rate: "₹220 for 4 pcs",
    image: "/images/Pomogranate.jpeg"
  },
  {
    id: "papaya",
    name: "Papaya",
    emoji: "🍈",
    description: "Ripe and sweet papayas",
    rate: "₹69 for 1 pc",
    image: "/images/Papaya.jpeg"
  },
  {
    id: "dragon-fruit",
    name: "Dragon Fruit",
    emoji: "🐉",
    description: "Exotic dragon fruit",
    rate: "₹105 for 2 pcs",
    image: "/images/Dragon Fruit.jpeg"
  },
  {
    id: "musk-melon",
    name: "Musk Melon",
    emoji: "🍈",
    description: "Sweet and fragrant musk melon",
    rate: "₹45 for 1 pc",
    image: "/images/Musk Melon.jpeg"
  },
  {
    id: "water-melon",
    name: "Water Melon",
    emoji: "🍉",
    description: "Refreshing watermelons",
    rate: "₹89 for 1 pc",
    image: "/images/Water Melon.jpeg"
  },
  {
    id: "kiwi",
    name: "Kiwi",
    emoji: "🥝",
    description: "Fresh tangy kiwis",
    rate: "₹89 for 3 pcs",
    image: "/images/Kiwi.jpeg"
  }
];

export default function FruitsPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '5rem' }}>
        {/* Hero Section */}
        <section 
          className="section"
          style={{
            background: 'linear-gradient(180deg, var(--mb-cream-200) 0%, var(--mb-cream-50) 100%)',
            paddingTop: '4rem',
            paddingBottom: '3rem'
          }}
        >
          <div className="container text-center">
            <div className="badge badge-olive mb-3">Fresh Individual Fruits</div>
            <h1 style={{ marginBottom: '1rem' }}>Buy Fresh Fruits</h1>
            <p style={{ 
              maxWidth: '550px', 
              margin: '0 auto',
              fontSize: '1.1rem'
            }}>
              Handpicked, ozone-cleaned fruits delivered fresh to your door. Order directly on WhatsApp.
            </p>
          </div>
        </section>

        {/* Fruits Grid */}
        <section className="section" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
          <div className="container">
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '0.75rem',
                padding: '0 0.5rem'
              }}
              className="fruits-grid"
            >
              {fruits.map((fruit, i) => (
                <div 
                  key={fruit.id}
                  className="card"
                  style={{
                    overflow: 'hidden',
                    padding: 0,
                    opacity: 0,
                    animation: `fadeInUp 0.6s var(--mb-ease) ${0.1 + i * 0.05}s forwards`
                  }}
                >
                  {/* Fruit Image */}
                  <div 
                    style={{ 
                      aspectRatio: '1/1',
                      background: 'var(--mb-cream-100)',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <Image 
                      src={fruit.image}
                      alt={fruit.name}
                      width={400}
                      height={400}
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
                      Fruits
                    </p>
                    
                    <h3 style={{ 
                      fontSize: '1rem', 
                      marginBottom: '0.5rem',
                      fontWeight: '600'
                    }}>
                      {fruit.name}
                    </h3>
                    
                    <div style={{
                      padding: '0.4rem 0.5rem',
                      background: 'var(--mb-cream-200)',
                      borderRadius: 'var(--mb-radius-sm)',
                      marginBottom: '0.75rem',
                      fontWeight: '600',
                      fontSize: '0.9rem',
                      color: 'var(--mb-olive-600)'
                    }}>
                      {fruit.rate}
                    </div>
                    
                    <a 
                      href={`https://wa.me/918698292415?text=Hi!%20I'd%20like%20to%20order%20${encodeURIComponent(fruit.name)}`}
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

        {/* Info Section */}
        <section className="section section-cream">
          <div className="container text-center">
            <h2 style={{ marginBottom: '1.5rem' }}>Fresh & Clean</h2>
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '2rem',
                maxWidth: '800px',
                margin: '0 auto'
              }}
            >
              <div>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🧼</div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Ozone Cleaned</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--mb-text-muted)' }}>
                  Removes 99% of surface chemicals
                </p>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🌱</div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Fresh Daily</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--mb-text-muted)' }}>
                  Sourced fresh every morning
                </p>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>📱</div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>WhatsApp Orders</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--mb-text-muted)' }}>
                  Simple, quick ordering
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

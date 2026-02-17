/**
 * FAQ Page
 * Frequently Asked Questions
 */

"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const faqs = [
  {
    category: "Ordering & Delivery",
    questions: [
      {
        q: "What time are deliveries made?",
        a: "All deliveries are made between 6:00 AM and 10:00 AM. Your basket will be at your door before you start your day."
      },
      {
        q: "What's the order cutoff time?",
        a: "Orders must be placed by 10:00 PM the night before. After that, your order will be scheduled for the next available delivery."
      },
      {
        q: "Which areas do you deliver to?",
        a: "We currently serve selected residential societies in Pune, Maharashtra. Use our Check Availability page to see if we deliver to your area."
      },
      {
        q: "Can I order on WhatsApp?",
        a: "Yes! You can order directly via WhatsApp at +91 86982 92415. Just say hi and we'll help you get started."
      }
    ]
  },
  {
    category: "Subscription & Payment",
    questions: [
      {
        q: "How does the 3-day trial work?",
        a: "Choose any basket and we'll deliver it for 3 consecutive mornings. After that, you can continue with a subscription or simply stop — no pressure."
      },
      {
        q: "Can I pause or cancel my subscription?",
        a: "Absolutely. You can pause or cancel anytime from your dashboard. There are no lock-in periods or cancellation fees."
      },
      {
        q: "What payment methods do you accept?",
        a: "We currently accept UPI payments. Payment links are sent via WhatsApp after your order is confirmed."
      },
      {
        q: "How does monthly billing work?",
        a: "Monthly subscriptions are billed in advance with a 10% discount. You can also pay daily if you prefer flexibility."
      }
    ]
  },
  {
    category: "Fruits & Quality",
    questions: [
      {
        q: "How are the fruits cleaned?",
        a: "We use ozonated water (O₃) to clean every fruit. This removes pesticides, bacteria, and surface contaminants without leaving any residue — ozone naturally converts back to oxygen."
      },
      {
        q: "Where do you source your fruits?",
        a: "We source directly from trusted farms and markets, prioritizing seasonal and local produce. No cold storage, no preservatives."
      },
      {
        q: "Can I customize my basket?",
        a: "Currently, we offer fixed baskets curated for different family sizes. This helps us maintain quality and keep prices fair. Custom baskets may be available in the future."
      },
      {
        q: "What if I'm not happy with the quality?",
        a: "Just let us know via WhatsApp. We'll either replace the items or adjust your next order. Your satisfaction matters to us."
      }
    ]
  },
  {
    category: "Account & Management",
    questions: [
      {
        q: "How do I skip a delivery?",
        a: "You can skip any delivery from your dashboard before 10 PM the night prior. You won't be charged for skipped days."
      },
      {
        q: "Can I change my basket?",
        a: "Yes, you can change your basket anytime from your dashboard. The change will apply from your next delivery."
      },
      {
        q: "How do I contact support?",
        a: "The fastest way is WhatsApp at +91 86982 92415. We typically respond within a few hours."
      }
    ]
  }
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div 
      style={{
        borderBottom: '1px solid var(--mb-gray-100)',
        padding: '1.25rem 0'
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '1rem',
          background: 'none',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          textAlign: 'left'
        }}
      >
        <span style={{ 
          fontWeight: '500', 
          fontSize: '1.05rem',
          color: 'var(--mb-text-primary)'
        }}>
          {question}
        </span>
        <span style={{ 
          fontSize: '1.25rem',
          color: 'var(--mb-olive-500)',
          flexShrink: 0,
          transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
          transition: 'transform 0.2s var(--mb-ease)'
        }}>
          +
        </span>
      </button>
      <div style={{
        maxHeight: isOpen ? '500px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.3s var(--mb-ease)'
      }}>
        <p style={{ 
          marginTop: '1rem',
          marginBottom: 0,
          color: 'var(--mb-text-secondary)',
          lineHeight: 1.7
        }}>
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQPage() {
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
            <h1 style={{ marginBottom: '1rem' }}>Frequently Asked Questions</h1>
            <p style={{ 
              maxWidth: '550px', 
              margin: '0 auto',
              fontSize: '1.1rem'
            }}>
              Everything you need to know about MorningBasket
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="section" style={{ paddingTop: '2rem' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              {faqs.map((category) => (
                <div key={category.category} style={{ marginBottom: '3rem' }}>
                  <h2 style={{ 
                    fontSize: '1.25rem', 
                    color: 'var(--mb-olive-700)',
                    marginBottom: '1rem',
                    paddingBottom: '0.75rem',
                    borderBottom: '2px solid var(--mb-olive-200)'
                  }}>
                    {category.category}
                  </h2>
                  <div>
                    {category.questions.map((faq) => (
                      <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still have questions */}
        <section className="section section-cream">
          <div className="container text-center">
            <h2 style={{ marginBottom: '1rem' }}>Still have questions?</h2>
            <p style={{ marginBottom: '2rem', color: 'var(--mb-text-secondary)' }}>
              We're happy to help. Reach out on WhatsApp and we'll get back to you quickly.
            </p>
            <a
              href="https://wa.me/918698292415?text=Hi!%20I%20have%20a%20question%20about%20MorningBasket"
              target="_blank"
              rel="noopener"
              className="btn btn-whatsapp btn-lg"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat with Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

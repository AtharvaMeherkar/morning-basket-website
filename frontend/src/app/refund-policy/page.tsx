import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund & Exchange Policy | MorningBasket",
  description: "MorningBasket's strict exchange-only policy for fresh fruit delivery.",
};

export default function RefundPolicyPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '5rem', minHeight: '80vh' }}>
        <section className="section" style={{ padding: '4rem 0' }}>
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ marginBottom: '1.5rem', color: 'var(--mb-olive-700)' }}>Refund & Exchange Policy</h1>
            
            <div style={{
              background: 'var(--mb-cream-100)',
              padding: '2rem',
              borderRadius: 'var(--mb-radius-lg)',
              marginBottom: '2rem',
              border: '1px solid var(--mb-cream-300)'
            }}>
              <p style={{ margin: 0, fontSize: '1.1rem', lineHeight: '1.6' }}>
                <strong>Morning Basket follows a strict exchange-only policy.</strong> Refunds are not provided once an order is placed. This is a standard practice for quick-commerce grocery delivery, with extra protections for food safety and quality.
              </p>
            </div>

            <div style={{ display: 'grid', gap: '2rem' }}>
              <div>
                <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--mb-olive-600)' }}>1. Eligible Exchange Cases</h2>
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', lineHeight: '1.6' }}>
                  <li>Damaged or spoiled items on delivery.</li>
                  <li>Wrong items delivered.</li>
                  <li>Missing items or significant quantity mismatch.</li>
                </ul>
              </div>

              <div>
                <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--mb-olive-600)' }}>2. Reporting Timeline</h2>
                <p style={{ lineHeight: '1.6' }}>
                  Issues must be reported <strong>within 2 hours of delivery</strong>. Requests after this window are not eligible for exchange.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--mb-olive-600)' }}>3. How to Request an Exchange</h2>
                <ul style={{ listStyleType: 'decimal', paddingLeft: '1.5rem', lineHeight: '1.6' }}>
                  <li>WhatsApp our support team at <strong>+91 86982 92415</strong>.</li>
                  <li>Provide your order number, issue details, and clear photos.</li>
                  <li>Clear photographs are <strong>required</strong> for damaged or spoiled items.</li>
                </ul>
              </div>

              <div>
                <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--mb-olive-600)' }}>4. Exchange Fulfillment</h2>
                <p style={{ lineHeight: '1.6' }}>
                  Approved exchanges are delivered in the next available delivery slot, subject to availability. We do not provide cash or bank refunds.
                </p>
              </div>
            </div>
            
            <div style={{ marginTop: '3rem', textAlign: 'center' }}>
              <a 
                href="https://wa.me/918698292415?text=Hi!%20I%20have%20an%20issue%20with%20my%20recent%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                Need help? WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

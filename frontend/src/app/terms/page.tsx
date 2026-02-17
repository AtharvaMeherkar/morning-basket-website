/**
 * Terms of Service Page
 */

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | MorningBasket",
  description: "Terms and conditions for using MorningBasket fruit delivery service in Pune.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '5rem' }}>
        {/* Hero */}
        <section 
          style={{
            background: 'linear-gradient(180deg, var(--mb-cream-200) 0%, var(--mb-cream-50) 100%)',
            padding: '4rem 0 3rem'
          }}
        >
          <div className="container text-center">
            <h1 style={{ marginBottom: '0.5rem' }}>Terms of Service</h1>
            <p style={{ color: 'var(--mb-text-muted)' }}>Last updated: January 2025</p>
          </div>
        </section>

        {/* Content */}
        <section className="section" style={{ paddingTop: '2rem' }}>
          <div className="container">
            <div style={{ maxWidth: '750px', margin: '0 auto' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                
                <section>
                  <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--mb-olive-700)' }}>
                    1. Agreement to Terms
                  </h2>
                  <p style={{ lineHeight: 1.8 }}>
                    By accessing or using MorningBasket's services, you agree to be bound by these Terms of Service. 
                    If you do not agree to these terms, please do not use our services.
                  </p>
                </section>

                <section>
                  <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--mb-olive-700)' }}>
                    2. Service Description
                  </h2>
                  <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
                    MorningBasket provides fresh fruit delivery services to residential addresses in Pune, Maharashtra. 
                    Our services include:
                  </p>
                  <ul style={{ paddingLeft: '1.5rem', lineHeight: 1.8 }}>
                    <li>Daily or alternate-day fruit basket deliveries</li>
                    <li>Subscription-based ordering</li>
                    <li>One-time trial orders for new customers</li>
                  </ul>
                </section>

                <section>
                  <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--mb-olive-700)' }}>
                    3. Delivery Terms
                  </h2>
                  <ul style={{ paddingLeft: '1.5rem', lineHeight: 1.8 }}>
                    <li>Deliveries are made between 6:00 AM and 10:00 AM</li>
                    <li>Orders must be placed by 10:00 PM the previous day</li>
                    <li>We deliver only to serviceable areas in Pune</li>
                    <li>Delivery location changes must be communicated in advance</li>
                  </ul>
                </section>

                <section>
                  <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--mb-olive-700)' }}>
                    4. Pricing & Payment
                  </h2>
                  <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
                    All prices are listed in Indian Rupees (INR) and are inclusive of delivery within our service area.
                  </p>
                  <ul style={{ paddingLeft: '1.5rem', lineHeight: 1.8 }}>
                    <li>Payment is accepted via UPI</li>
                    <li>Monthly subscriptions receive a 10% discount</li>
                    <li>No charges for skipped deliveries (when notified before cutoff)</li>
                  </ul>
                </section>

                <section>
                  <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--mb-olive-700)' }}>
                    5. Subscription Management
                  </h2>
                  <p style={{ lineHeight: 1.8 }}>
                    You may pause, resume, or cancel your subscription at any time through your account dashboard 
                    or by contacting us via WhatsApp. There are no cancellation fees or lock-in periods.
                  </p>
                </section>

                <section>
                  <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--mb-olive-700)' }}>
                    6. Quality & Refunds
                  </h2>
                  <p style={{ lineHeight: 1.8 }}>
                    We stand behind the quality of our fruits. If you're unsatisfied with any delivery, 
                    please contact us within 24 hours. We will either replace the items or credit your account 
                    for the next delivery.
                  </p>
                </section>

                <section>
                  <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--mb-olive-700)' }}>
                    7. User Responsibilities
                  </h2>
                  <ul style={{ paddingLeft: '1.5rem', lineHeight: 1.8 }}>
                    <li>Provide accurate delivery address and contact information</li>
                    <li>Ensure someone is available to receive deliveries, or provide a safe drop location</li>
                    <li>Notify us of any delivery issues promptly</li>
                  </ul>
                </section>

                <section>
                  <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--mb-olive-700)' }}>
                    8. Changes to Terms
                  </h2>
                  <p style={{ lineHeight: 1.8 }}>
                    We reserve the right to modify these terms at any time. Continued use of our services 
                    after changes constitutes acceptance of the new terms.
                  </p>
                </section>

                <section>
                  <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--mb-olive-700)' }}>
                    9. Contact
                  </h2>
                  <p style={{ lineHeight: 1.8 }}>
                    For questions about these terms, contact us:
                  </p>
                  <p style={{ marginTop: '0.5rem' }}>
                    <strong>WhatsApp:</strong> +91 86982 92415<br/>
                    <strong>Location:</strong> Pune, Maharashtra - 411037
                  </p>
                </section>

              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

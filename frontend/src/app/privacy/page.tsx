/**
 * Privacy Policy Page
 */

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | MorningBasket",
  description: "Privacy policy for MorningBasket - how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
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
            <h1 style={{ marginBottom: '0.5rem' }}>Privacy Policy</h1>
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
                    Overview
                  </h2>
                  <p style={{ lineHeight: 1.8 }}>
                    At MorningBasket, we take your privacy seriously. This policy explains what information 
                    we collect, how we use it, and how we protect it. We keep things simple and transparent.
                  </p>
                </section>

                <section>
                  <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--mb-olive-700)' }}>
                    Information We Collect
                  </h2>
                  <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
                    We collect only what we need to deliver your order:
                  </p>
                  <ul style={{ paddingLeft: '1.5rem', lineHeight: 1.8 }}>
                    <li><strong>Contact Information:</strong> Name, phone number</li>
                    <li><strong>Delivery Address:</strong> Society name, flat number, tower/block</li>
                    <li><strong>Order History:</strong> Your basket preferences and delivery records</li>
                    <li><strong>Payment Information:</strong> UPI transaction references (we don't store bank details)</li>
                  </ul>
                </section>

                <section>
                  <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--mb-olive-700)' }}>
                    How We Use Your Information
                  </h2>
                  <ul style={{ paddingLeft: '1.5rem', lineHeight: 1.8 }}>
                    <li>Deliver your fruit baskets to the correct address</li>
                    <li>Send order confirmations and delivery updates via WhatsApp</li>
                    <li>Process payments and manage your subscription</li>
                    <li>Improve our service based on feedback and order patterns</li>
                    <li>Contact you about service updates (rarely)</li>
                  </ul>
                </section>

                <section>
                  <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--mb-olive-700)' }}>
                    What We Don't Do
                  </h2>
                  <ul style={{ paddingLeft: '1.5rem', lineHeight: 1.8 }}>
                    <li>We don't sell your data to third parties</li>
                    <li>We don't send marketing emails or spam</li>
                    <li>We don't share your information with advertisers</li>
                    <li>We don't store sensitive payment information</li>
                  </ul>
                </section>

                <section>
                  <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--mb-olive-700)' }}>
                    Data Security
                  </h2>
                  <p style={{ lineHeight: 1.8 }}>
                    We use industry-standard security measures to protect your information. 
                    Access to customer data is limited to team members who need it to fulfill orders 
                    and provide customer support.
                  </p>
                </section>

                <section>
                  <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--mb-olive-700)' }}>
                    Data Retention
                  </h2>
                  <p style={{ lineHeight: 1.8 }}>
                    We retain your information as long as your account is active or as needed to provide services. 
                    If you cancel your subscription and request data deletion, we will remove your personal 
                    information within 30 days, except where retention is required by law.
                  </p>
                </section>

                <section>
                  <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--mb-olive-700)' }}>
                    Your Rights
                  </h2>
                  <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
                    You have the right to:
                  </p>
                  <ul style={{ paddingLeft: '1.5rem', lineHeight: 1.8 }}>
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your data</li>
                    <li>Withdraw consent for communications</li>
                  </ul>
                </section>

                <section>
                  <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--mb-olive-700)' }}>
                    Cookies
                  </h2>
                  <p style={{ lineHeight: 1.8 }}>
                    We use minimal cookies for essential website functionality. We don't use third-party 
                    tracking cookies or advertising pixels.
                  </p>
                </section>

                <section>
                  <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--mb-olive-700)' }}>
                    Changes to This Policy
                  </h2>
                  <p style={{ lineHeight: 1.8 }}>
                    We may update this policy occasionally. Significant changes will be communicated 
                    via WhatsApp or when you next use our service.
                  </p>
                </section>

                <section>
                  <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--mb-olive-700)' }}>
                    Contact Us
                  </h2>
                  <p style={{ lineHeight: 1.8 }}>
                    Questions about your privacy? Contact us:
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

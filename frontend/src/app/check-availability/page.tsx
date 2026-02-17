/**
 * Premium Check Availability Page
 * PIN code based availability check for Pune
 */

"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CheckAvailabilityPage() {
  const [pinCode, setPinCode] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [notifySuccess, setNotifySuccess] = useState(false);
  const [result, setResult] = useState<{
    available: boolean;
    message: string;
  } | null>(null);

  const handleCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setResult(null);

    // Validate PIN code format
    if (!/^\d{6}$/.test(pinCode)) {
      setResult({
        available: false,
        message: "Please enter a valid 6-digit PIN code"
      });
      setIsLoading(false);
      return;
    }

    await new Promise(resolve => setTimeout(resolve, 600));

    // Only 411037 (Bibewadi, Pune) is serviceable
    if (pinCode === "411037") {
      setResult({
        available: true,
        message: "Great news! We deliver to your area."
      });
    } else {
      setResult({
        available: false,
        message: "Sorry, we don't deliver here yet."
      });
    }

    setIsLoading(false);
  };

  const handleNotify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[6-9]\d{9}$/.test(phone)) return;
    
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    setIsLoading(false);
    setNotifySuccess(true);
  };

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
            <div style={{ maxWidth: '450px', margin: '0 auto' }}>
              {/* Header */}
              <div className="text-center mb-4">
                <div className="badge badge-olive mb-2">📍 Pune Only</div>
                <h1 style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>
                  Check Your Area
                </h1>
                <p style={{ color: 'var(--mb-text-secondary)' }}>
                  Enter your PIN code to check if we deliver there
                </p>
              </div>

              {/* Search Form */}
              <form 
                onSubmit={handleCheck} 
                className="card" 
                style={{ padding: '2rem', marginBottom: '1.5rem' }}
              >
                <div style={{ marginBottom: '1.5rem' }}>
                  <label 
                    htmlFor="pincode"
                    style={{ 
                      display: 'block', 
                      marginBottom: '0.5rem',
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}
                  >
                    PIN Code
                  </label>
                  <input
                    type="text"
                    id="pincode"
                    className="input"
                    placeholder="e.g., 411037"
                    value={pinCode}
                    onChange={(e) => setPinCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    maxLength={6}
                    style={{ 
                      fontSize: '1.25rem',
                      letterSpacing: '0.1em',
                      textAlign: 'center'
                    }}
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  style={{ width: '100%', justifyContent: 'center' }}
                  disabled={isLoading || pinCode.length !== 6}
                >
                  {isLoading ? "Checking..." : "Check Availability"}
                </button>
              </form>

              {/* Result */}
              {result && (
                <div 
                  className="card" 
                  style={{ 
                    padding: '1.5rem',
                    background: result.available ? 'var(--mb-olive-50)' : 'var(--mb-cream-100)',
                    border: result.available ? '1px solid var(--mb-olive-200)' : '1px solid var(--mb-cream-300)',
                    animation: 'fadeInUp 0.4s var(--mb-ease) forwards'
                  }}
                >
                  {result.available ? (
                    <>
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.75rem',
                        marginBottom: '1.5rem'
                      }}>
                        <span style={{ fontSize: '1.5rem' }}>✅</span>
                        <p style={{ 
                          color: 'var(--mb-olive-700)',
                          fontWeight: '600',
                          fontSize: '1.1rem',
                          margin: 0
                        }}>
                          {result.message}
                        </p>
                      </div>

                      <div style={{ 
                        padding: '1rem',
                        background: 'white',
                        borderRadius: 'var(--mb-radius-md)',
                        marginBottom: '1.5rem'
                      }}>
                        <p style={{ fontSize: '0.9rem', color: 'var(--mb-text-muted)', marginBottom: '0.25rem' }}>
                          Serviceable Area
                        </p>
                        <p style={{ fontWeight: '600', margin: 0 }}>
                          📍 Bibewadi, Pune - 411037
                        </p>
                      </div>

                      <Link 
                        href="/subscriptions" 
                        className="btn btn-primary" 
                        style={{ width: '100%', justifyContent: 'center' }}
                      >
                        View Fruit Baskets →
                      </Link>
                    </>
                  ) : (
                    <>
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.75rem',
                        marginBottom: '1rem'
                      }}>
                        <span style={{ fontSize: '1.5rem' }}>😔</span>
                        <p style={{ 
                          color: 'var(--mb-text-primary)',
                          fontWeight: '500',
                          margin: 0
                        }}>
                          {result.message}
                        </p>
                      </div>
                      
                      {!notifySuccess && pinCode.length === 6 ? (
                        <form onSubmit={handleNotify}>
                          <p style={{ 
                            fontSize: '0.9rem',
                            color: 'var(--mb-text-secondary)',
                            marginBottom: '1rem'
                          }}>
                            We'll notify you once we start serving your location!
                          </p>
                          <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <input
                              type="tel"
                              className="input"
                              placeholder="Your phone number"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                              style={{ flex: 1 }}
                            />
                            <button 
                              type="submit"
                              className="btn btn-primary"
                              disabled={isLoading || phone.length !== 10}
                            >
                              Notify Me
                            </button>
                          </div>
                        </form>
                      ) : notifySuccess ? (
                        <div style={{
                          padding: '1rem',
                          background: 'var(--mb-olive-50)',
                          borderRadius: 'var(--mb-radius-sm)',
                          textAlign: 'center'
                        }}>
                          <span style={{ fontSize: '1.5rem' }}>🎉</span>
                          <p style={{ margin: '0.5rem 0 0', color: 'var(--mb-olive-700)' }}>
                            We'll notify you when we're in your area!
                          </p>
                        </div>
                      ) : null}
                    </>
                  )}
                </div>
              )}

              {/* Currently Serving */}
              <div 
                className="card"
                style={{ 
                  marginTop: '2rem', 
                  padding: '1.5rem',
                  textAlign: 'center'
                }}
              >
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--mb-olive-700)' }}>
                  Currently Serving
                </h3>
                <div style={{ 
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.25rem',
                  background: 'var(--mb-olive-50)',
                  borderRadius: 'var(--mb-radius-full)',
                  fontWeight: '600',
                  color: 'var(--mb-olive-700)'
                }}>
                  📍 Bibewadi, Pune - 411037
                </div>
                <p style={{ 
                  fontSize: '0.85rem', 
                  color: 'var(--mb-text-muted)',
                  marginTop: '1rem',
                  margin: '1rem 0 0' 
                }}>
                  More areas coming soon!
                </p>
              </div>

              {/* WhatsApp */}
              <div className="text-center" style={{ marginTop: '2rem' }}>
                <p style={{ color: 'var(--mb-text-muted)', marginBottom: '0.75rem', fontSize: '0.9rem' }}>
                  Not sure? Ask us directly
                </p>
                <a
                  href="https://wa.me/918698292415?text=Hi!%20Do%20you%20deliver%20to%20my%20area?"
                  target="_blank"
                  rel="noopener"
                  className="btn btn-whatsapp"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Ask on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

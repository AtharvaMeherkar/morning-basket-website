/**
 * Premium Admin Panel
 * Dashboard and order management
 */

"use client";

import { useState } from "react";
import Link from "next/link";

// Mock data
const mockStats = {
  todayOrders: 47,
  activeSubscriptions: 156,
  totalCustomers: 203,
  revenue: 46850
};

const mockTomorrowBreakdown = {
  bySociety: [
    { name: "Gera World of Joy", orders: 18 },
    { name: "Pride World City", orders: 14 },
    { name: "Kohinoor Grandeur", orders: 9 },
    { name: "Bramha Skycity", orders: 6 }
  ],
  byBasket: [
    { name: "Family Care", count: 22, color: "var(--mb-olive-600)" },
    { name: "Daily Essentials", count: 15, color: "var(--mb-olive-400)" },
    { name: "Seasonal Select", count: 8, color: "var(--mb-olive-300)" },
    { name: "First Morning", count: 2, color: "var(--mb-papaya)" }
  ]
};

const mockOrders = [
  { id: "ORD001", customer: "Priya Sharma", society: "Gera World of Joy", basket: "Family Care", status: "scheduled" },
  { id: "ORD002", customer: "Amit Patel", society: "Pride World City", basket: "Daily Essentials", status: "scheduled" },
  { id: "ORD003", customer: "Neha Joshi", society: "Kohinoor Grandeur", basket: "Seasonal Select", status: "scheduled" },
  { id: "ORD004", customer: "Raj Kumar", society: "Bramha Skycity", basket: "Family Care", status: "delivered" },
];

const mockCustomers = [
  { id: "CUS001", name: "Priya Sharma", phone: "+91 98765 43210", society: "Gera World of Joy", status: "active" },
  { id: "CUS002", name: "Amit Patel", phone: "+91 87654 32109", society: "Pride World City", status: "active" },
  { id: "CUS003", name: "Neha Joshi", phone: "+91 76543 21098", society: "Kohinoor Grandeur", status: "paused" },
];

export default function AdminPage() {
  const [activeSection, setActiveSection] = useState<"dashboard" | "orders" | "customers" | "settings">("dashboard");
  const [selectedDate, setSelectedDate] = useState("2025-02-01");
  const [orderFilter, setOrderFilter] = useState("all");

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: "📊" },
    { id: "orders", label: "Orders", icon: "📦" },
    { id: "customers", label: "Customers", icon: "👥" },
    { id: "settings", label: "Settings", icon: "⚙️" },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--mb-cream-50)' }}>
      {/* Sidebar */}
      <aside style={{
        width: '240px',
        background: 'var(--mb-olive-800)',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        height: '100vh',
        overflowY: 'auto'
      }}>
        <Link 
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            textDecoration: 'none',
            marginBottom: '2rem',
            paddingBottom: '1.5rem',
            borderBottom: '1px solid rgba(255,255,255,0.1)'
          }}
        >
          <span style={{ fontSize: '1.5rem' }}>🧺</span>
          <div>
            <span style={{
              fontSize: '1.1rem',
              fontWeight: '700',
              color: 'white',
              display: 'block',
              lineHeight: 1.1
            }}>
              MorningBasket
            </span>
            <span style={{
              fontSize: '0.7rem',
              color: 'rgba(255,255,255,0.6)'
            }}>
              Admin Panel
            </span>
          </div>
        </Link>

        <nav style={{ flex: 1 }}>
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id as typeof activeSection)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                width: '100%',
                padding: '0.875rem 1rem',
                background: activeSection === item.id ? 'var(--mb-olive-700)' : 'transparent',
                border: 'none',
                borderRadius: 'var(--mb-radius-md)',
                color: activeSection === item.id ? 'white' : 'rgba(255,255,255,0.7)',
                fontSize: '0.95rem',
                cursor: 'pointer',
                marginBottom: '0.25rem',
                textAlign: 'left',
                transition: 'all 0.2s var(--mb-ease)'
              }}
            >
              <span>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <div style={{
          padding: '1rem',
          background: 'var(--mb-olive-700)',
          borderRadius: 'var(--mb-radius-md)',
          marginTop: '1rem'
        }}>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>
            Order Cutoff
          </p>
          <p style={{ color: 'white', fontWeight: '600', margin: 0 }}>
            10:00 PM Tonight
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ 
        flex: 1, 
        marginLeft: '240px',
        padding: '2rem',
        minHeight: '100vh'
      }}>
        {/* Dashboard */}
        {activeSection === "dashboard" && (
          <div>
            <div style={{ marginBottom: '2rem' }}>
              <h1 style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>Dashboard</h1>
              <p style={{ color: 'var(--mb-text-muted)' }}>Tomorrow's Order Overview — {selectedDate}</p>
            </div>

            {/* Stats Grid */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              {[
                { label: "Tomorrow's Orders", value: mockStats.todayOrders, icon: "📦" },
                { label: "Active Subscriptions", value: mockStats.activeSubscriptions, icon: "🔄" },
                { label: "Total Customers", value: mockStats.totalCustomers, icon: "👥" },
                { label: "Monthly Revenue", value: `₹${mockStats.revenue.toLocaleString()}`, icon: "💰" }
              ].map((stat, i) => (
                <div 
                  key={stat.label}
                  className="card"
                  style={{ padding: '1.25rem' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '1.5rem' }}>{stat.icon}</span>
                  </div>
                  <p style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--mb-olive-700)', marginBottom: '0.125rem' }}>
                    {stat.value}
                  </p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--mb-text-muted)', margin: 0 }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Breakdowns */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {/* By Society */}
              <div className="card" style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>By Society</h3>
                {mockTomorrowBreakdown.bySociety.map((item, i) => (
                  <div 
                    key={item.name}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0.75rem 0',
                      borderBottom: i < mockTomorrowBreakdown.bySociety.length - 1 ? '1px solid var(--mb-gray-100)' : 'none'
                    }}
                  >
                    <span>{item.name}</span>
                    <span className="badge badge-olive">{item.orders}</span>
                  </div>
                ))}
              </div>

              {/* By Basket */}
              <div className="card" style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>By Basket Type</h3>
                {mockTomorrowBreakdown.byBasket.map((item, i) => (
                  <div 
                    key={item.name}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0.75rem 0',
                      borderBottom: i < mockTomorrowBreakdown.byBasket.length - 1 ? '1px solid var(--mb-gray-100)' : 'none'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ 
                        width: '10px', 
                        height: '10px', 
                        borderRadius: '50%',
                        background: item.color
                      }} />
                      <span>{item.name}</span>
                    </div>
                    <span style={{ fontWeight: '600' }}>{item.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card" style={{ marginTop: '1.5rem', padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Quick Actions</h3>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button className="btn btn-primary btn-sm">Export Sourcing List</button>
                <button className="btn btn-primary btn-sm">Export Packing List</button>
                <button className="btn btn-secondary btn-sm">Export to CSV</button>
              </div>
            </div>
          </div>
        )}

        {/* Orders */}
        {activeSection === "orders" && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <div>
                <h1 style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>Orders</h1>
                <p style={{ color: 'var(--mb-text-muted)' }}>Manage daily orders</p>
              </div>
              <button className="btn btn-primary btn-sm">Export All</button>
            </div>

            {/* Filters */}
            <div className="card" style={{ padding: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <input 
                  type="date" 
                  className="input" 
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  style={{ width: 'auto' }}
                />
                <select 
                  className="input" 
                  value={orderFilter}
                  onChange={(e) => setOrderFilter(e.target.value)}
                  style={{ width: 'auto' }}
                >
                  <option value="all">All Status</option>
                  <option value="scheduled">Scheduled</option>
                  <option value="delivered">Delivered</option>
                  <option value="skipped">Skipped</option>
                </select>
              </div>
            </div>

            {/* Orders Table */}
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: 'var(--mb-cream-100)' }}>
                    <th style={{ padding: '1rem 1.5rem', textAlign: 'left', fontSize: '0.85rem', fontWeight: '600', color: 'var(--mb-text-muted)', textTransform: 'uppercase' }}>Order ID</th>
                    <th style={{ padding: '1rem 1.5rem', textAlign: 'left', fontSize: '0.85rem', fontWeight: '600', color: 'var(--mb-text-muted)', textTransform: 'uppercase' }}>Customer</th>
                    <th style={{ padding: '1rem 1.5rem', textAlign: 'left', fontSize: '0.85rem', fontWeight: '600', color: 'var(--mb-text-muted)', textTransform: 'uppercase' }}>Society</th>
                    <th style={{ padding: '1rem 1.5rem', textAlign: 'left', fontSize: '0.85rem', fontWeight: '600', color: 'var(--mb-text-muted)', textTransform: 'uppercase' }}>Basket</th>
                    <th style={{ padding: '1rem 1.5rem', textAlign: 'left', fontSize: '0.85rem', fontWeight: '600', color: 'var(--mb-text-muted)', textTransform: 'uppercase' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {mockOrders.map((order, i) => (
                    <tr key={order.id} style={{ borderBottom: i < mockOrders.length - 1 ? '1px solid var(--mb-gray-100)' : 'none' }}>
                      <td style={{ padding: '1rem 1.5rem' }}><code style={{ background: 'var(--mb-cream-100)', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.85rem' }}>{order.id}</code></td>
                      <td style={{ padding: '1rem 1.5rem' }}>{order.customer}</td>
                      <td style={{ padding: '1rem 1.5rem' }}>{order.society}</td>
                      <td style={{ padding: '1rem 1.5rem' }}>{order.basket}</td>
                      <td style={{ padding: '1rem 1.5rem' }}>
                        <span 
                          className="badge"
                          style={{
                            background: order.status === 'delivered' ? 'var(--mb-olive-100)' : order.status === 'scheduled' ? 'var(--mb-cream-200)' : 'var(--mb-gray-100)',
                            color: order.status === 'delivered' ? 'var(--mb-olive-700)' : 'var(--mb-text-secondary)',
                            textTransform: 'capitalize'
                          }}
                        >
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Customers */}
        {activeSection === "customers" && (
          <div>
            <div style={{ marginBottom: '2rem' }}>
              <h1 style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>Customers</h1>
              <p style={{ color: 'var(--mb-text-muted)' }}>{mockCustomers.length} registered customers</p>
            </div>

            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: 'var(--mb-cream-100)' }}>
                    <th style={{ padding: '1rem 1.5rem', textAlign: 'left', fontSize: '0.85rem', fontWeight: '600', color: 'var(--mb-text-muted)', textTransform: 'uppercase' }}>Customer</th>
                    <th style={{ padding: '1rem 1.5rem', textAlign: 'left', fontSize: '0.85rem', fontWeight: '600', color: 'var(--mb-text-muted)', textTransform: 'uppercase' }}>Phone</th>
                    <th style={{ padding: '1rem 1.5rem', textAlign: 'left', fontSize: '0.85rem', fontWeight: '600', color: 'var(--mb-text-muted)', textTransform: 'uppercase' }}>Society</th>
                    <th style={{ padding: '1rem 1.5rem', textAlign: 'left', fontSize: '0.85rem', fontWeight: '600', color: 'var(--mb-text-muted)', textTransform: 'uppercase' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {mockCustomers.map((customer, i) => (
                    <tr key={customer.id} style={{ borderBottom: i < mockCustomers.length - 1 ? '1px solid var(--mb-gray-100)' : 'none' }}>
                      <td style={{ padding: '1rem 1.5rem', fontWeight: '500' }}>{customer.name}</td>
                      <td style={{ padding: '1rem 1.5rem' }}>{customer.phone}</td>
                      <td style={{ padding: '1rem 1.5rem' }}>{customer.society}</td>
                      <td style={{ padding: '1rem 1.5rem' }}>
                        <span 
                          className="badge"
                          style={{
                            background: customer.status === 'active' ? 'var(--mb-olive-100)' : 'var(--mb-cream-200)',
                            color: customer.status === 'active' ? 'var(--mb-olive-700)' : 'var(--mb-text-muted)',
                            textTransform: 'capitalize'
                          }}
                        >
                          {customer.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Settings */}
        {activeSection === "settings" && (
          <div>
            <div style={{ marginBottom: '2rem' }}>
              <h1 style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>Settings</h1>
              <p style={{ color: 'var(--mb-text-muted)' }}>System configuration</p>
            </div>

            <div style={{ display: 'grid', gap: '1.5rem', maxWidth: '600px' }}>
              <div className="card" style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Delivery Controls</h3>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  padding: '1rem',
                  background: 'var(--mb-olive-50)',
                  borderRadius: 'var(--mb-radius-md)'
                }}>
                  <div>
                    <p style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Tomorrow's Deliveries</p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--mb-text-muted)', margin: 0 }}>Enable or disable all deliveries</p>
                  </div>
                  <span className="badge badge-olive">Active</span>
                </div>
              </div>

              <div className="card" style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Order Cutoff Time</h3>
                <input 
                  type="time" 
                  className="input" 
                  defaultValue="22:00"
                  style={{ maxWidth: '200px' }}
                />
              </div>

              <div className="card" style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Add Holiday</h3>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <input type="date" className="input" style={{ flex: 1 }} />
                  <button className="btn btn-primary btn-sm">Add</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

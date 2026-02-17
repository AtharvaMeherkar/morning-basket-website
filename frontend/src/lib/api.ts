/**
 * API Client
 * Centralized API calls to the backend
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

interface ApiResponse<T> {
  status: 'success' | 'fail' | 'error';
  message?: string;
  data?: T;
}

class ApiClient {
  private token: string | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      this.token = localStorage.getItem('morningbasket_token');
    }
  }

  setToken(token: string) {
    this.token = token;
    if (typeof window !== 'undefined') {
      localStorage.setItem('morningbasket_token', token);
    }
  }

  clearToken() {
    this.token = null;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('morningbasket_token');
    }
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...(this.token ? { Authorization: `Bearer ${this.token}` } : {}),
      ...options.headers,
    };

    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'An error occurred');
    }

    return data;
  }

  // Auth
  async sendOTP(phone: string) {
    return this.request('/auth/send-otp', {
      method: 'POST',
      body: JSON.stringify({ phone }),
    });
  }

  async verifyOTP(phone: string, code: string) {
    return this.request('/auth/verify-otp', {
      method: 'POST',
      body: JSON.stringify({ phone, code }),
    });
  }

  async completeRegistration(data: {
    token: string;
    name: string;
    societyId: string;
    flatNumber: string;
    tower?: string;
  }) {
    return this.request('/auth/complete-registration', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Public
  async getBaskets() {
    return this.request('/public/baskets');
  }

  async getSocieties() {
    return this.request('/public/societies');
  }

  async checkAvailability(societyName?: string, area?: string) {
    return this.request('/public/check-availability', {
      method: 'POST',
      body: JSON.stringify({ societyName, area }),
    });
  }

  // Customer
  async getProfile() {
    return this.request('/customer/profile');
  }

  async getSubscription() {
    return this.request('/customer/subscription');
  }

  async createSubscription(basketId: string, frequency: string) {
    return this.request('/customer/subscription', {
      method: 'POST',
      body: JSON.stringify({ basketId, frequency }),
    });
  }

  async pauseSubscription(pauseUntil?: string) {
    return this.request('/customer/subscription/pause', {
      method: 'POST',
      body: JSON.stringify({ pauseUntil }),
    });
  }

  async resumeSubscription() {
    return this.request('/customer/subscription/resume', {
      method: 'POST',
    });
  }

  async getTomorrowOrder() {
    return this.request('/customer/orders/tomorrow');
  }

  async getOrders(page = 1, limit = 10) {
    return this.request(`/customer/orders?page=${page}&limit=${limit}`);
  }

  async skipOrder(date: string) {
    return this.request('/customer/orders/skip', {
      method: 'POST',
      body: JSON.stringify({ date }),
    });
  }

  // Admin
  async getAdminDashboard() {
    return this.request('/admin/dashboard');
  }

  async getAdminOrders(params: { date?: string; society?: string; page?: number }) {
    const query = new URLSearchParams();
    if (params.date) query.set('date', params.date);
    if (params.society) query.set('society', params.society);
    if (params.page) query.set('page', params.page.toString());
    return this.request(`/admin/orders?${query.toString()}`);
  }

  async updateOrderStatus(orderId: string, status: string) {
    return this.request(`/admin/orders/${orderId}/status`, {
      method: 'PUT',
      body: JSON.stringify({ status }),
    });
  }

  async getSourcingList(date?: string) {
    return this.request(`/admin/sourcing${date ? `?date=${date}` : ''}`);
  }

  async getPackingList(date?: string) {
    return this.request(`/admin/packing${date ? `?date=${date}` : ''}`);
  }

  async toggleBasket(basketId: string) {
    return this.request(`/admin/baskets/${basketId}/toggle`, {
      method: 'PUT',
    });
  }

  async createHoliday(date: string, reason?: string) {
    return this.request('/admin/holidays', {
      method: 'POST',
      body: JSON.stringify({ date, reason }),
    });
  }

  async pauseGlobalDelivery() {
    return this.request('/admin/pause-global', { method: 'POST' });
  }

  async resumeGlobalDelivery() {
    return this.request('/admin/resume-global', { method: 'POST' });
  }
}

export const api = new ApiClient();
export default api;

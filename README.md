# MorningBasket

A hyperlocal, subscription-based fresh fruit delivery service. Fresh fruits, hygienically cleaned with ozonated water, delivered every morning.

## Project Structure

```
Morning Basket Website/
├── frontend/          # Next.js 14+ application
│   ├── src/
│   │   ├── app/       # Pages (App Router)
│   │   ├── components/# Reusable components
│   │   └── lib/       # Utilities and API client
│   └── public/        # Static assets
│
├── backend/           # Node.js REST API
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── routes/
│   │   └── utils/
│   └── prisma/        # Database schema
│
└── README.md
```

## Tech Stack

- **Frontend**: Next.js 14+, Tailwind CSS 4, TypeScript
- **Backend**: Node.js, Express.js, Prisma ORM
- **Database**: PostgreSQL
- **Authentication**: OTP-based phone login (JWT)

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- npm or yarn

### Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Edit .env with your database URL and secrets

# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push

# Start development server
npm run dev
```

### Frontend Setup

```bash
cd frontend

# Install dependencies (already done)
npm install

# Start development server
npm run dev
```

### Environment Variables

**Backend (.env):**
```
DATABASE_URL="postgresql://user:password@localhost:5432/morningbasket"
JWT_SECRET="your-secure-secret-key"
JWT_EXPIRES_IN="7d"
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

**Frontend (.env.local):**
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with brand story |
| `/subscriptions` | Fruit basket options |
| `/login` | OTP-based authentication |
| `/check-availability` | Society availability checker |
| `/dashboard` | Customer dashboard |
| `/admin` | Admin panel |

## API Endpoints

### Authentication
- `POST /api/auth/send-otp` - Send OTP to phone
- `POST /api/auth/verify-otp` - Verify OTP and login
- `POST /api/auth/complete-registration` - Complete profile

### Public
- `GET /api/public/baskets` - Get available baskets
- `GET /api/public/societies` - Get serviceable societies
- `POST /api/public/check-availability` - Check area availability

### Customer (Protected)
- `GET /api/customer/profile` - Get profile
- `GET /api/customer/subscription` - Get subscription
- `POST /api/customer/subscription` - Create subscription
- `POST /api/customer/subscription/pause` - Pause subscription
- `POST /api/customer/subscription/resume` - Resume subscription
- `GET /api/customer/orders/tomorrow` - Get tomorrow's order
- `POST /api/customer/orders/skip` - Skip a delivery

### Admin (Protected)
- `GET /api/admin/dashboard` - Dashboard stats
- `GET /api/admin/orders` - All orders with filters
- `GET /api/admin/orders/export` - Export CSV
- `GET /api/admin/sourcing` - Sourcing list
- `GET /api/admin/packing` - Packing list
- `PUT /api/admin/baskets/:id/toggle` - Toggle basket
- `POST /api/admin/holidays` - Add holiday
- `POST /api/admin/pause-global` - Pause all deliveries

## Design Principles

- **Calm over flashy** - Minimal, clean UI
- **Routine over speed** - Predictable morning delivery
- **Trust over discounts** - Quality and hygiene first
- **Reliability over innovation** - Consistent service

## Phase 1 Scope

- Fresh fruits only (vegetables/flowers coming later)
- Subscription-based ordering
- Pre-order model (order by evening for next morning)
- Manual UPI payments
- Selected residential societies only

## License

Private - MorningBasket © 2026
